'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ShaderBackgroundProps {
  animate?: boolean;
  bgColor1?: string;
  bgColor2?: string;
  brightness?: number;
  cAzimuthAngle?: number;
  cDistance?: number;
  cPolarAngle?: number;
  cameraZoom?: number;
  color1?: string;
  color2?: string;
  color3?: string;
  envPreset?: string;
  fov?: number;
  frameRate?: number;
  grain?: string;
  lightType?: string;
  pixelDensity?: number;
  positionX?: number;
  positionY?: number;
  positionZ?: number;
  reflection?: number;
  rotationX?: number;
  rotationY?: number;
  rotationZ?: number;
  shader?: string;
  type?: string;
  uAmplitude?: number;
  uDensity?: number;
  uFrequency?: number;
  uSpeed?: number;
  uStrength?: number;
  uTime?: number;
  wireframe?: boolean;
}

const ShaderBackground: React.FC<ShaderBackgroundProps> = ({
  animate = true,
  bgColor1 = '#000000',
  bgColor2 = '#000000',
  brightness = 1.2,
  cAzimuthAngle = 180,
  cDistance = 2.9,
  cPolarAngle = 120,
  cameraZoom = 1,
  color1 = '#ebedff',
  color2 = '#f3f2f8',
  color3 = '#dbf8ff',
  envPreset = 'city',
  fov = 45,
  frameRate = 10,
  grain = 'off',
  lightType = '3d',
  pixelDensity = 1,
  positionX = 0,
  positionY = 1.8,
  positionZ = 0,
  reflection = 0.1,
  rotationX = 0,
  rotationY = 0,
  rotationZ = -90,
  shader = 'defaults',
  type = 'waterPlane',
  uAmplitude = 0,
  uDensity = 1,
  uFrequency = 5.5,
  uSpeed = 0.3,
  uStrength = 3,
  uTime = 0.2,
  wireframe = false,
}) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(fov, window.innerWidth / window.innerHeight, 0.1, 1000);
    
    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, pixelDensity));
    renderer.setClearColor(new THREE.Color(bgColor1));
    
    mountRef.current.appendChild(renderer.domElement);

    // Set camera position based on props
    camera.position.z = cDistance * Math.sin(THREE.MathUtils.degToRad(cPolarAngle));
    camera.position.y = cDistance * Math.cos(THREE.MathUtils.degToRad(cPolarAngle));
    camera.position.x = cDistance * Math.sin(THREE.MathUtils.degToRad(cAzimuthAngle)) * Math.cos(THREE.MathUtils.degToRad(cPolarAngle));
    camera.zoom = cameraZoom;
    camera.updateProjectionMatrix();

    // Create geometry based on type
    let geometry: THREE.BufferGeometry;
    switch (type) {
      case 'waterPlane':
        geometry = new THREE.PlaneGeometry(10, 10, 64, 64);
        break;
      case 'sphere':
        geometry = new THREE.SphereGeometry(5, 64, 64);
        break;
      case 'torus':
        geometry = new THREE.TorusGeometry(5, 1.5, 16, 100);
        break;
      default:
        geometry = new THREE.PlaneGeometry(10, 10, 64, 64);
    }

    // Create custom shader material
    const material = new THREE.ShaderMaterial({
      uniforms: {
        u_time: { value: 0.0 },
        u_resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
        u_color1: { value: new THREE.Color(color1) },
        u_color2: { value: new THREE.Color(color2) },
        u_color3: { value: new THREE.Color(color3) },
        u_brightness: { value: brightness },
        u_amplitude: { value: uAmplitude },
        u_density: { value: uDensity },
        u_frequency: { value: uFrequency },
        u_speed: { value: uSpeed },
        u_strength: { value: uStrength },
        u_reflection: { value: reflection },
      },
      vertexShader: `
        varying vec2 vUv;
        varying vec3 vPosition;
        
        void main() {
          vUv = uv;
          vPosition = position;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float u_time;
        uniform vec2 u_resolution;
        uniform vec3 u_color1;
        uniform vec3 u_color2;
        uniform vec3 u_color3;
        uniform float u_brightness;
        uniform float u_amplitude;
        uniform float u_density;
        uniform float u_frequency;
        uniform float u_speed;
        uniform float u_strength;
        uniform float u_reflection;
        varying vec2 vUv;
        varying vec3 vPosition;
        
        // Classic Perlin 3D Noise 
        vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
        vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}
        float snoise(vec3 v){
          const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
          const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);
          
          vec3 i  = floor(v + dot(v, C.yyy) );
          vec3 x0 = v - i + dot(i, C.xxx) ;
          
          vec3 g = step(x0.yzx, x0.xyz);
          vec3 l = 1.0 - g;
          vec3 i1 = min( g.xyz, l.zxy );
          vec3 i2 = max( g.xyz, l.zxy );
          
          vec3 x1 = x0 - i1 + C.xxx;
          vec3 x2 = x0 - i2 + C.yyy;
          vec3 x3 = x0 - D.yyy;
          
          i = mod(i, 289.0 );
          vec4 p = permute( permute( permute( 
                     i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
                   + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) 
                   + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));
         
          float n_ = 0.142857142857;
          vec3  ns = n_ * D.wyz - D.xzx;
          
          vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
          
          vec4 x_ = floor(j * ns.z);
          vec4 y_ = floor(j - 7.0 * x_ );
          
          vec4 x = x_ *ns.x + ns.yyyy;
          vec4 y = y_ *ns.x + ns.yyyy;
          vec4 h = 1.0 - abs(x) - abs(y);
          
          vec4 b0 = vec4( x.xy, y.xy );
          vec4 b1 = vec4( x.zw, y.zw );
          
          vec4 s0 = floor(b0)*2.0 + 1.0;
          vec4 s1 = floor(b1)*2.0 + 1.0;
          vec4 sh = -step(h, vec4(0.0));
          
          vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
          vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;
          
          vec3 p0 = vec3(a0.xy,h.x);
          vec3 p1 = vec3(a0.zw,h.y);
          vec3 p2 = vec3(a1.xy,h.z);
          vec3 p3 = vec3(a1.zw,h.w);
          
          vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
          p0 *= norm.x;
          p1 *= norm.y;
          p2 *= norm.z;
          p3 *= norm.w;
          
          vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
          m = m * m;
          return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), 
                                        dot(p2,x2), dot(p3,x3) ) );
        }
        
        void main() {
          vec2 uv = vUv;
          vec3 pos = vPosition;
          
          // Apply noise distortion
          float noise = snoise(vec3(uv * u_density * 2.0, u_time * u_speed * 0.1));
          uv += noise * u_amplitude * 0.1;
          
          // Create gradient based on shader type
          float gradient = 0.0;
          if ("${shader}" == "defaults") {
            // Water plane effect
            float wave = sin(uv.x * u_frequency + u_time * u_speed) * sin(uv.y * u_frequency * 0.7 + u_time * u_speed * 0.8) * u_strength;
            gradient = mix(
              mix(u_color1, u_color2, uv.x),
              mix(u_color2, u_color3, uv.y),
              0.5 + wave * 0.1
            );
            
            // Add additional noise movement
            float noise2 = snoise(vec3(uv * u_density * 5.0, u_time * u_speed * 0.5));
            gradient = mix(gradient, u_color3, abs(noise2) * 0.2);
          }
          
          // Apply brightness
          vec3 color = mix(u_color1, u_color2, uv.x) * u_brightness;
          
          // Blend colors based on position and noise
          color = mix(color, u_color2, uv.y * 0.7);
          color = mix(color, u_color3, abs(noise) * 0.3);
          
          // Apply wireframe if enabled
          if (${wireframe ? 1 : 0} == 1) {
            float lines = abs(sin(pos.x * 10.0)) * abs(sin(pos.y * 10.0)) * abs(sin(pos.z * 10.0));
            color = mix(color, vec3(1.0), pow(lines, 2.0));
          }
          
          gl_FragColor = vec4(color, 1.0);
        }
      `,
      wireframe: wireframe,
      transparent: true,
    });

    const mesh = new THREE.Mesh(geometry, material);
    mesh.rotation.x = THREE.MathUtils.degToRad(rotationX);
    mesh.rotation.y = THREE.MathUtils.degToRad(rotationY);
    mesh.rotation.z = THREE.MathUtils.degToRad(rotationZ);
    mesh.position.x = positionX;
    mesh.position.y = positionY;
    mesh.position.z = positionZ;
    scene.add(mesh);

    // Add ambient and directional lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6 * brightness);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.4 * brightness);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Animation loop
    let frameId: number;
    const animateFn = () => {
      if (animate) {
        const time = Date.now() * 0.001;
        material.uniforms.u_time.value = time;
        
        // Animate the mesh based on properties
        if (type === 'waterPlane') {
          // Add subtle wave motion
          mesh.rotation.z = THREE.MathUtils.degToRad(rotationZ) + Math.sin(time * uSpeed * 0.5) * 0.01;
        }
      }
      
      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animateFn);
    };

    frameId = requestAnimationFrame(animateFn);

    // Cleanup
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', handleResize);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      className="absolute inset-0 w-full h-full"
      style={{ zIndex: -1 }}
    />
  );
};

export default ShaderBackground;