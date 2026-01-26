declare module 'three' {
  // Basic Three.js types for our shader implementation
  
  export class Scene {
    constructor();
    add(...objects: Object3D[]): void;
  }

  export class PerspectiveCamera {
    constructor(fov: number, aspect: number, near: number, far: number);
    position: Vector3;
    zoom: number;
    updateProjectionMatrix(): void;
  }

  export class WebGLRenderer {
    constructor(options?: { antialias?: boolean; alpha?: boolean });
    setSize(width: number, height: number): void;
    setPixelRatio(ratio: number): void;
    setClearColor(color: Color): void;
    render(scene: Scene, camera: Camera): void;
    domElement: HTMLCanvasElement;
    dispose(): void;
  }

  export class BufferGeometry {
    dispose(): void;
  }

  export class PlaneGeometry extends BufferGeometry {
    constructor(width?: number, height?: number, widthSegments?: number, heightSegments?: number);
  }

  export class SphereGeometry extends BufferGeometry {
    constructor(radius?: number, widthSegments?: number, heightSegments?: number, phiStart?: number, phiLength?: number, thetaStart?: number, thetaLength?: number);
  }

  export class TorusGeometry extends BufferGeometry {
    constructor(radius?: number, tube?: number, radialSegments?: number, tubularSegments?: number, arc?: number);
  }

  export class ShaderMaterial {
    constructor(parameters?: any);
    uniforms: any;
    wireframe: boolean;
    transparent: boolean;
    dispose(): void;
  }

  export class Mesh {
    constructor(geometry?: BufferGeometry, material?: Material);
    rotation: Euler;
    position: Vector3;
  }

  export class AmbientLight {
    constructor(color?: ColorRepresentation, intensity?: number);
    add(target: Object3D): void;
  }

  export class DirectionalLight {
    constructor(color?: ColorRepresentation, intensity?: number);
    position: Vector3;
    add(target: Object3D): void;
  }

  export class Color {
    constructor(color?: ColorRepresentation);
  }

  export class Vector2 {
    constructor(x?: number, y?: number);
  }

  export class Vector3 {
    constructor(x?: number, y?: number, z?: number);
    set(x: number, y: number, z: number): Vector3;
  }

  export class Euler {
    set(x: number, y: number, z: number, order?: string): Euler;
  }

  export namespace MathUtils {
    function degToRad(degrees: number): number;
  }

  export type ColorRepresentation = number | string | Color;
  export type Camera = PerspectiveCamera;
  export type Material = ShaderMaterial;
  export type Object3D = Mesh | AmbientLight | DirectionalLight;
}