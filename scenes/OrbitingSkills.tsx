'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Float } from '@react-three/drei';
import * as THREE from 'three';

const skills = [
  { name: 'React', color: '#61DAFB', radius: 3 },
  { name: 'Next.js', color: '#000000', radius: 2.5 },
  { name: 'TypeScript', color: '#3178C6', radius: 2.8 },
  { name: 'Node.js', color: '#339933', radius: 3.2 },
  { name: 'Python', color: '#3776AB', radius: 2.6 },
  { name: 'MongoDB', color: '#47A248', radius: 2.9 },
];

function SkillOrb({ skill, index }: { skill: typeof skills[0]; index: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const textRef = useRef<any>(null);

  useFrame((state) => {
    if (meshRef.current && textRef.current) {
      const time = state.clock.elapsedTime;
      const angle = (time * 0.5) + (index * Math.PI * 2) / skills.length;
      
      meshRef.current.position.x = Math.cos(angle) * skill.radius;
      meshRef.current.position.z = Math.sin(angle) * skill.radius;
      meshRef.current.position.y = Math.sin(time * 0.3 + index) * 0.5;
      
      textRef.current.position.x = Math.cos(angle) * skill.radius;
      textRef.current.position.z = Math.sin(angle) * skill.radius;
      textRef.current.position.y = Math.sin(time * 0.3 + index) * 0.5 + 0.5;
      
      // Make text always face the camera
      textRef.current.lookAt(state.camera.position);
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.2}>
      <mesh ref={meshRef}>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshStandardMaterial
          color={skill.color}
          transparent
          opacity={0.8}
          emissive={skill.color}
          emissiveIntensity={0.2}
        />
      </mesh>
      <Text
        ref={textRef}
        fontSize={0.2}
        color="white"
        anchorX="center"
        anchorY="middle"
        font="/fonts/inter-bold.woff"
      >
        {skill.name}
      </Text>
    </Float>
  );
}

function CentralOrb() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial
        color="#8B5CF6"
        transparent
        opacity={0.9}
        emissive="#8B5CF6"
        emissiveIntensity={0.3}
      />
    </mesh>
  );
}

export function OrbitingSkills() {
  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />
      
      <CentralOrb />
      
      {skills.map((skill, index) => (
        <SkillOrb key={skill.name} skill={skill} index={index} />
      ))}
    </Canvas>
  );
}