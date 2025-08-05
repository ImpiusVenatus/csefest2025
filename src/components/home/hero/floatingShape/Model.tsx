'use client';

import { useFrame } from '@react-three/fiber';
import { useEffect, useState, useRef } from 'react';
import { useGLTF, Float } from '@react-three/drei';
import { MotionValue } from 'framer-motion';
import * as THREE from 'three';

interface ModelProps {
  mouse: {
    x: MotionValue<number>;
    y: MotionValue<number>;
  };
}

interface MeshProps {
  node: {
    geometry: THREE.BufferGeometry;
    material: THREE.Material | THREE.Material[];
    position: THREE.Vector3;
    rotation: THREE.Euler;
    scale: THREE.Vector3;
  };
  multiplier: number;
  mouse: {
    x: MotionValue<number>;
    y: MotionValue<number>;
  };
  isActive: boolean;
  delay: number;
}

export default function Model({ mouse }: ModelProps) {
  const [activeShape, setActiveShape] = useState(1);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setActiveShape(prev => (prev === 11 ? 1 : prev + 1));
    }, 2000);

    return () => clearTimeout(timeout);
  }, [activeShape]);

  const { nodes } = useGLTF('/medias/floating_shapes4.glb') as any;

  return (
    <group>
      <Mesh node={nodes.Sphere001} multiplier={2.4} mouse={mouse} isActive={activeShape === 1} delay={0} />
      <Mesh node={nodes.Sphere002} multiplier={2.4} mouse={mouse} isActive={activeShape === 2} delay={0.1} />
      <Mesh node={nodes.Cylinder002} multiplier={1.2} mouse={mouse} isActive={activeShape === 3} delay={0.2} />
      <Mesh node={nodes.Sphere003} multiplier={1} mouse={mouse} isActive={activeShape === 4} delay={0.3} />
      <Mesh node={nodes.Cylinder003} multiplier={1.8} mouse={mouse} isActive={activeShape === 5} delay={0.4} />
      <Mesh node={nodes.Cylinder005} multiplier={1.8} mouse={mouse} isActive={activeShape === 6} delay={0.5} />
      <Mesh node={nodes.Cube002} multiplier={2} mouse={mouse} isActive={activeShape === 7} delay={0.6} />
      <Mesh node={nodes.Cylinder006} multiplier={1.2} mouse={mouse} isActive={activeShape === 8} delay={0.7} />
      <Mesh node={nodes.Cylinder007} multiplier={1.6} mouse={mouse} isActive={activeShape === 9} delay={0.8} />
      <Mesh node={nodes.Cylinder009} multiplier={1.8} mouse={mouse} isActive={activeShape === 10} delay={0.9} />
      <Mesh node={nodes.Sphere} multiplier={1.5} mouse={mouse} isActive={activeShape === 11} delay={1.0} />
    </group>
  );
}

useGLTF.preload('/medias/floating_shapes4.glb');
function Mesh({ node, multiplier, mouse, isActive, delay }: MeshProps) {
  const meshRef = useRef<THREE.Mesh>(null!);

  const { geometry, position, scale, rotation } = node;

  const colors = [
    '#2196f3',
    '#03a9f4',
    '#00bcd4',
    '#26c6da',
    '#81d4fa',
    '#4fc3f7',
    '#29b6f6',
    '#00acc1',
    '#40c4ff',
    '#0097a7',
    '#0288d1'
  ];

  const color = colors[Math.floor(Math.random() * colors.length)];

  // Animate scale and opacity manually
  const animProgress = useRef(0); // from 0 to 1
  const elapsedTime = useRef(0);
  const maxOpacity = 0.85;

  useFrame((_, delta) => {
    if (!meshRef.current) return;

    const mesh = meshRef.current;

    // === Mouse-follow behavior ===
    const xOffset = (mouse.x.get() - 0.5) * multiplier * 4;
    const yOffset = (mouse.y.get() - 0.5) * multiplier * 4;

    mesh.position.x = position.x + xOffset;
    mesh.position.y = position.y - yOffset;
    mesh.rotation.x = rotation.x + (mouse.y.get() - 0.5) * multiplier;
    mesh.rotation.y = rotation.y + (mouse.x.get() - 0.5) * multiplier;

    if (isActive) {
      mesh.rotation.z += 0.01;
    }

    // === Entry animation with delay ===
    if (animProgress.current < 1) {
      elapsedTime.current += delta;

      if (elapsedTime.current >= delay) {
        const progressDelta = delta * 1.5;
        animProgress.current += progressDelta;
        const t = Math.min(animProgress.current, 1);
        const eased = t * t * (3 - 2 * t);

        mesh.scale.set(
          scale.x * (0.7 + 0.3 * eased),
          scale.y * (0.7 + 0.3 * eased),
          scale.z * (0.7 + 0.3 * eased)
        );

        const mat = mesh.material as THREE.MeshStandardMaterial;
        mat.opacity = eased * maxOpacity;
      }
    }
  });

  return (
    <Float>
      <mesh
        ref={meshRef}
        castShadow
        receiveShadow
        geometry={geometry}
        position={[position.x, position.y, position.z]}
        rotation={[rotation.x, rotation.y, rotation.z]}
        scale={[scale.x * 0.7, scale.y * 0.7, scale.z * 0.7]}
      >
        <meshStandardMaterial
          color={color}
          metalness={0.4}
          roughness={0.2}
          transparent
          opacity={0}
        />
      </mesh>
    </Float>
  );
}
