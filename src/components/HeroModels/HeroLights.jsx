import React from 'react'
import * as Three from 'three';

// This component defines all the lights used in the 3D hero scene
const HeroLights = () => {
  return (
    <>
        {/* 
          Spotlight = focused light like a stage light
          position → where the light is placed in 3D space
          angle → width of the light cone
          intensity → brightness
          penumbra → softness of the light edge
          color → light color
        */}
        <spotLight position={[2, 5, 6]} angle={0.15} intensity={100} penumbra={0.2} color="white"/>

        {/* Blue spotlight for accent lighting */}
        <spotLight position={[4,5,4]} angle={0.3} intensity={40} penumbra={0.5} color="#4cc9f0"/>

        {/* Purple spotlight for mood lighting */}
        <spotLight position={[-3, 5, 5]} angle={0.4} intensity={60} penumbra={1} color="#9d4edd"/>

        {/*
          RectAreaLight = soft rectangular panel light (like studio lighting)
          We use <primitive> because this is a raw Three.js object
        */}
        <primitive
          object={new Three.RectAreaLight('#A259FF', 8, 3, 2)}
          position={[1, 3, 4]}
          intensity={15}
          rotation={[-Math.PI / 4, Math.PI / 4, 0]}
        />

        {/* Point lights = light bulbs that shine in all directions */}
        <pointLight position={[0, 1, 0]} intensity={10} color="#7209b7" />
        <pointLight position={[1, 2, -2]} intensity={10} color="#0d00a4" />
    </>
  )
}

export default HeroLights
