"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Stars } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

const AnimatedSphere = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={[0, 0, -2]}>
        <icosahedronGeometry args={[2, 4]} />
        <MeshDistortMaterial
          color="#4f46e5"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
};

export default function Hero3D() {
  return (
    <div className="relative w-full h-screen flex flex-col justify-center items-center overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          <AnimatedSphere />
        </Canvas>
      </div>

      <div className="z-10 text-center pointer-events-none mt-20">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 text-white drop-shadow-lg">
          Hello, I&apos;m a <span className="text-indigo-400">Software Engineer</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto drop-shadow-md">
          Crafting modern, unique, and immersive web experiences.
        </p>
      </div>
    </div>
  );
}