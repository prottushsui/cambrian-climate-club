import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '..',
);
const publicRoot = path.join(projectRoot, 'public');
const sourceRoots = [
  path.join(projectRoot, 'App.tsx'),
  path.join(projectRoot, 'index.tsx'),
  path.join(projectRoot, 'index.html'),
  path.join(projectRoot, 'src'),
];
const sourceExtensions = new Set([
  '.ts',
  '.tsx',
  '.js',
  '.jsx',
  '.html',
  '.css',
]);
const assetReference = /['"`](\/(?:images|Video)\/[^'"`]+)['"`]/g;
const sourceFiles = [];

function collectFiles(entry) {
  if (!existsSync(entry)) return;
  const stat = statSync(entry);
  if (stat.isFile()) {
    if (sourceExtensions.has(path.extname(entry))) sourceFiles.push(entry);
    return;
  }

  for (const child of readdirSync(entry, { withFileTypes: true })) {
    if (
      child.name === 'node_modules' ||
      child.name === 'dist' ||
      child.name === '.git'
    ) {
      continue;
    }
    collectFiles(path.join(entry, child.name));
  }
}

for (const root of sourceRoots) collectFiles(root);

const missing = new Map();

for (const sourceFile of sourceFiles) {
  const source = readFileSync(sourceFile, 'utf8');
  for (const match of source.matchAll(assetReference)) {
    let decodedPath;
    try {
      decodedPath = decodeURIComponent(match[1]).replace(/^\/+/, '');
    } catch {
      decodedPath = match[1].replace(/^\/+/, '');
    }

    const assetPath = path.join(publicRoot, decodedPath);
    if (!existsSync(assetPath)) {
      const relativeSource = path.relative(projectRoot, sourceFile);
      const references = missing.get(decodedPath) ?? [];
      references.push(relativeSource);
      missing.set(decodedPath, references);
    }
  }
}

if (missing.size > 0) {
  console.error('Missing static assets referenced by source files:');
  for (const [asset, sources] of missing) {
    console.error(
      `- /${asset} (referenced in: ${[...new Set(sources)].join(', ')})`,
    );
  }
  process.exitCode = 1;
} else {
  console.log(
    `Checked static asset references in ${sourceFiles.length} source files; all referenced images and videos exist.`,
  );
}
