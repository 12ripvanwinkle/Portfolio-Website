import React from 'react'

// Importing the array of words used for the sliding/animated text
import { words } from '../../constants'

// Importing the reusable Button component
import Button from '../Button'
import HeroExperience from '../HeroModels/HeroExperience'

// Import the GSAP React hook (runs animations safely inside React)
import { useGSAP } from '@gsap/react';

// Import the GSAP animation library
import gsap from 'gsap';
// Import your animated counter component
import AnimatedCounter from '../AnimatedCounter';

// Hero component = the top section of the website
const Hero = () => {

  // Run GSAP animations when this component mounts
  useGSAP(() => {
  // Animate all <h1> elements inside an element with class "hero-text"
  gsap.fromTo(
    '.hero-text h1',   // Target elements (CSS selector)
    // START state (before animation)
    {
      y: 50,          // Move down 50px
      opacity: 0      // Fully invisible
    },
    // END state (after animation)
    {
      y: 0,           // Back to normal position
      opacity: 1,     // Fully visible
      stagger: 0.2,   // Delay each <h1> slightly (0.2s apart)
      duration: 1,   // Animation lasts 1 second
      ease: 'power2.inOut', // Smooth easing curve
    }
  );
});

  return (
    // Main container for the hero section
    <section id='hero' className='relative overflow-hidden'>

        {/* Background image container (positioned absolutely) */}
        <div className="absolute top-0 left-0 z-10">
            <img src="/images/bg.png" alt="background" className=''/>
        </div>

        {/* Wrapper for the hero layout (left + right sections) */}
        <div className="hero-layout">

          {/* Left side stuff */}
          <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
            {/* 
              flex flex-col  → stack items vertically
              justify-center → center content vertically
              md:px-20 / px-5 → padding for different screen sizes
            */}

            <div className="flex flex-col gap-7">
              {/* gap-7 adds space between the child elements */}

              {/* Container for the main headline text */}
              <div className="hero-text">

                <h1 className="">
                  Shaping 

                  {/* Sliding / animated word section */}
                  <span className='slide'>
                    <span className="wrapper">

                      {/* Loop through the "words" array and render each word */}
                      {words.map((words) => (
                        <span
                          key={words.text} // Required by React to uniquely identify each item
                          className='flex items-center md:gap-3 gap-1 pb-2'
                        >

                          {/* Icon/image that belongs to the word */}
                          <img
                            src={words.imgPath}
                            alt={words.text}
                            className='xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50'
                          />

                          {/* The word text itself */}
                          <span>{words.text}</span>

                        </span>
                      ))}
                    </span>
                  </span>
                </h1>

                {/* Supporting headline lines */}
                <h1 className="">Into Real Projects</h1>
                <h1 className="">That Deliver Results</h1>

              </div>

              {/* Short description under the headline */}
              <p className='text-white-50 md:text-xl relative z-10 pointer-events-none'>
                  Hi, I'm "Insert Name" with a passion for coding 
              </p>

              {/* Reusable Button component */}
              <Button
                className="md:w-80 md:h-16 w-60 h-12"
                id="button"
                text="see my work"
              />

            </div>
          </header>

          {/* Right side stuff */}
          <figure>
            <div className="hero-3d-layout">
              <HeroExperience />
            </div>
          </figure>
        </div>
        {/* Render the animated counter component in the JSX */}
        <AnimatedCounter />
    </section>
  )
}

export default Hero
