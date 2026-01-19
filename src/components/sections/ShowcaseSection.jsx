import { useRef } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

// Register the ScrollTrigger plugin so GSAP can use scroll-based animations
gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {

    // References to DOM elements so GSAP can animate them
    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);

    // Run GSAP animations when the component mounts
    useGSAP(() => {

        // Store all project card elements in an array
        const projects = [project1Ref.current, project2Ref.current, project3Ref.current];
        
        // Loop through each project card
        projects.forEach((card, index) => {

            // Animate each card from hidden + lower position to visible + normal position
            gsap.fromTo(
                card,
                {
                    y: 50,          // start 50px lower
                    opacity: 0,     // start invisible
                },
                {
                    y: 0,           // move to original position
                    opacity: 1,     // fully visible
                    duration: 1,    // animation lasts 1 second

                    // Delay increases for each card (nice stagger effect)
                    delay: 0.3 * (index + 1),

                    // Trigger animation when card scrolls into view
                    scrollTrigger: {
                        trigger: card,
                        start: 'top bottom-=100', // start when card is near viewport
                    }
                }
            );
        });

        // Fade in the entire section
        gsap.fromTo(
            sectionRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 1.5 }
        );

    }, []);

  return (
    // Main section wrapper (used for fading animation)
    <section id='work' ref={sectionRef} className='app-showcase'>
        <div className="w-full">
            <div className="showcaselayout">

                {/* Left Side */}
                <div className="first-project-wrapper" ref={project1Ref}>
                    <div className="image-wrapper">
                        <img src="/images/project1.png" alt="Ryde" />
                    </div>

                    <div className="text-content">
                        <h2>Not my actual project just a place holder</h2>
                        <p className='text-white-50 md:text-xl'>
                            A brief description about the project goes here.
                        </p>
                    </div>
                </div>

                {/* Right Side */}
                <div className="project-list-wrapper overflow-hidden">

                    <div className="project" ref={project2Ref}>
                        <div className="image-wrapper bg-[#ffefdb]">
                            <img src="/images/project2.png" alt="library management platform" />
                        </div>
                        <h2>Not my actual project just a place holder</h2>
                    </div>

                    <div className="project" ref={project3Ref}>
                        <div className="image-wrapper bg-[#ffe7eb]">
                            <img src="/images/project3.png" alt="YC Directory" />
                        </div>
                        <h2>Not my actual project just a place holder</h2>
                    </div>

                </div>
            </div>
        </div>
    </section>
  )
}

export default ShowcaseSection