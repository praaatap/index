"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sphere, MeshDistortMaterial, Environment } from "@react-three/drei";
import { Suspense, useRef, useMemo } from "react";
import * as THREE from "three";

function AnimatedSphere() {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
            meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
        }
    });

    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
            <Sphere ref={meshRef} args={[1, 100, 200]} scale={2.5}>
                <MeshDistortMaterial
                    color="#4f46e5"
                    attach="material"
                    distort={0.4}
                    speed={2}
                    roughness={0.2}
                    metalness={0.8}
                />
            </Sphere>
        </Float>
    );
}

function Particles({ count = 500 }) {
    const points = useRef<THREE.Points>(null);

    const particlesPosition = useMemo(() => {
        const positions = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 10;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
        }
        return positions;
    }, [count]);

    useFrame((state) => {
        if (points.current) {
            points.current.rotation.y = state.clock.getElapsedTime() * 0.05;
            points.current.rotation.x = state.clock.getElapsedTime() * 0.03;
        }
    });

    return (
        <points ref={points}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    args={[particlesPosition, 3]}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.015}
                color="#6366f1"
                sizeAttenuation
                transparent
                opacity={0.8}
            />
        </points>
    );
}

function Scene() {
    return (
        <>
            <ambientLight intensity={0.3} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <pointLight position={[-10, -10, -5]} intensity={0.5} color="#7c3aed" />
            <AnimatedSphere />
            <Particles count={800} />
            <Environment preset="night" />
        </>
    );
}

export default function ThreeBackground() {
    return (
        <div className="absolute inset-0 -z-10">
            <Canvas
                camera={{ position: [0, 0, 5], fov: 75 }}
                gl={{ antialias: true, alpha: true }}
                style={{ background: "transparent" }}
            >
                <Suspense fallback={null}>
                    <Scene />
                </Suspense>
            </Canvas>
        </div>
    );
}
