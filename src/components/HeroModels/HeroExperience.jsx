import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import { useMediaQuery } from 'react-responsive';
import {Room} from './Room'
import HeroLights from './HeroLights';

// This component renders the 3D experience inside the hero section
const HeroExperience = () => {

  // Detect if the screen width is tablet-sized or smaller
  const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });

  // Detect if the screen width is mobile-sized
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  
  return (

    // Canvas creates a 3D scene using Three.js inside React
    <Canvas camera={{position : [0, 0, 5], fov: 45}}>
        {/* ✅ Add these lights */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <pointLight position={[-5, 5, 5]} intensity={0.5} />
        
        {/* 
          OrbitControls allows the user to rotate the camera around the 3D object
          enablePan={false}  → disable dragging the scene left/right
          enableZoom={!isTablet} → disable zooming on tablets
          min/max distance → how close/far the camera can zoom
          min/max polar angle → limits vertical rotation
        */}
        <OrbitControls
          enablePan={false}
          enableZoom={!isTablet}
          maxDistance={20}
          minDistance={12}
          minPolarAngle={Math.PI /5}
          maxPolarAngle={Math.PI /2}
        />

        {/* Custom lighting setup for the 3D scene */}
        <HeroLights />

        {/* 
          group is a 3D container used to transform the model:
          scale → size of the model
          position → move it down on the Y axis
          rotation → rotate it slightly for better view
        */}
        <group
          scale={isMobile ? 0.7 : 1}
          position={[0, -3.5, 0]}
          rotation={[0, -Math.PI /4, 0]}
        >
            {/* The actual 3D room model */}
            <Room /> 
        </group>

    </Canvas>
  )
}

export default HeroExperience
