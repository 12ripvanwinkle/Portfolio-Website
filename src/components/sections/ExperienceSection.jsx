import React, { useRef } from 'react'
import TitleHeader from '../TitleHeader'
import { expCards } from '../../constants'
import GlowCard from '../GlowCard'

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Enable scroll-based animations in GSAP
gsap.registerPlugin(ScrollTrigger);

const ExperienceSection = () => {
  
  const sectionRef = useRef(null);  // ✅ Add ref for scope
  
  // Setup animations when the component loads
  useGSAP(() => {

    // ✅ Check if elements exist before animating
    const timelineCards = gsap.utils.toArray('.timeline-card');
    const timelineElements = gsap.utils.toArray('.timeline');
    const expTextElements = gsap.utils.toArray('.expText');

    if (timelineCards.length === 0) return;  // Exit if no elements found

    // Animate each timeline card when it scrolls into view
    timelineCards.forEach((card) => {
      gsap.from(card, {
        xPercent: -100,               // start off-screen to the left
        opacity: 0,                  // invisible at start
        transformOrigin: 'left left',
        duration: 1,
        ease: 'power2.inOut',

        // Trigger animation on scroll
        scrollTrigger: {
          trigger: card,
          start: 'top 80%',
        }
      })
    })

    // ✅ Only animate timeline if it exists
    if (timelineElements.length > 0) {
      // Animate the vertical timeline shrinking while scrolling
      gsap.to('.timeline', {
        transformOrigin: 'bottom bottom',
        ease: 'power1.inOut',

        scrollTrigger: {
          trigger: '.timeline',
          start: 'top center',
          end: '70% center',

          // Runs continuously as user scrolls
          onUpdate: (self) => {
            gsap.to('.timeline', {
              scaleY: 1 - self.progress,  // shrink line as scroll progresses
            })
          }
        },
      })
    }

    // Animate experience text blocks
    expTextElements.forEach((text) => {
      gsap.from(text, {
        xPercent: 0,
        opacity: 0,
        duration: 1,
        ease: 'power2.inOut',

        scrollTrigger: {
          trigger: text,
          start: 'top 60%',
        }
      })
    })

  }, { scope: sectionRef });  // ✅ Add scope option

  return (
    <section ref={sectionRef} id='experience' className='flex-center md:mt-40 mt-20 section-padding xl:px-0'>
      <div className="w-full h-full md:px-20 px-5">

        {/* Section header */}
        <TitleHeader title="Professional Work Experience" sub="💼 My Career Overview" />

        <div className="mt-32 relative">
          <div className="relative z-50 xl:space-y-32 space-y-10">

            {/* Loop through each experience card */}
            {expCards.map((card) => (
              <div key={card.title} className="exp-card-wrapper">

                {/* Left side image card */}
                <div className="xl:w-2/6">
                  <GlowCard card={card}>
                    <div>
                      <img src={card.imgPath} alt="exp-img" />
                    </div>
                  </GlowCard>
                </div>
                  
                {/* Right side timeline + content */}
                {/* look for the utitled file in obsidian for the code block */}

              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection