import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Quiz & Leaderboard System',
  description: 'Interactive quiz platform with real-time leaderboard',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-blue-600 text-white p-4 shadow-md">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold">Quiz Platform</h1>
            <nav>
              <ul className="flex space-x-4">
                <li>
                  <a href="/" className="hover:text-blue-200 transition-colors">Home</a>
                </li>
                <li>
                  <a href="/leaderboard" className="hover:text-blue-200 transition-colors">Leaderboard</a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <main className="container mx-auto py-8">
          {children}
        </main>
        <footer className="bg-gray-800 text-white p-4 mt-12">
          <div className="container mx-auto text-center">
            <p>© {new Date().getFullYear()} Quiz Platform. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}