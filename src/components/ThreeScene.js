// src/components/ThreeScene.js
import React, { useRef } from 'react';
import { useLoader } from '@react-three/fiber';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import { TextureLoader } from 'three';

const RotatingBall = () => {
  const mesh = useRef();
//   const texture = useLoader(TextureLoader, 'path/to/your/texture.jpg');
  useFrame(() => {
    mesh.current.rotation.y += 0.01;
    mesh.current.rotation.x += 0.01;
  });

  return (
    <mesh ref={mesh}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color={'orange'} />
    </mesh>
  );
};

const ThreeScene = () => {
  return (
    <Canvas style={{ height: '100vh' }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <RotatingBall />
    </Canvas>
  );
};

export default ThreeScene;
