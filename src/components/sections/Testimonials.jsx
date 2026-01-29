import React from 'react'
import TitleHeader from '../TitleHeader'
import { testimonials } from '../../constants'
import GlowCard from '../GlowCard'

const Testimonials = () => {
  return (
    // Main section container
    <section id='testimonials' className='flex-center section-padding'>
        <div className="w-full h-full md:px-10 px-5">

            {/* Section title and subtitle */}
            <TitleHeader 
                title="What People Say About Me" 
                sub="Client Feedback Highlights" 
            />

            {/* Responsive multi-column layout */}
            <div className="lg:columns-3 md:columns-2 columns-1 mt-16">

                {/* Loop through all testimonials */}
                {testimonials.map(({imgPath, name, mentions, review}) => (
                    
                    // Each testimonial uses a GlowCard for interactive glow effect
                    <GlowCard card={{review}} key={name}>
                        <div className="flex items-center gap-3">
                            
                            {/* Client image */}
                            <div>
                                <img src={imgPath} alt={name} />
                            </div>

                            {/* Client name and mentions */}
                            <div>
                                <p className="font-bold">{name}</p>
                                <p className="text-white-50">{mentions}</p>
                            </div>
                        </div>
                    </GlowCard>
                    
                ))}

            </div>
        </div>
    </section>
  )
}

export default Testimonials
