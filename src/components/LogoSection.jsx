import React from 'react'
import { logoIconsList } from '../constants'

// Small reusable component that renders a single logo
const LogoIcon = ({icon}) => {
    return (
        // Container for each logo icon
        <div className="flex-none flex-center marquee-item">
            <img src={icon.imgPath} alt={icon.name} />
        </div>
    )
}

const LogoSection = () => {
  return (
    // Main container for the logo section
    <div className="md:my-20 my-10 relative">

        {/* Gradient overlays on the sides for smooth fading effect */}
        <div className="gradient-edge" />
        <div className="gradient-edge" />

        {/* Marquee container (acts like a window for scrolling content) */}
        <div className="marquee h-52">

            {/* Box that holds and scrolls all logos */}
            <div className="marquee-box md:gap-12 gap-5">

                {/* First set of logos */}
                {logoIconsList.map((icon) => (
                    <LogoIcon key={icon.name} icon={icon} />
                ))}
                
                {/* Second set of logos (duplicate for infinite scrolling effect) */}
                {logoIconsList.map((icon) => (
                    <LogoIcon key={icon.name} icon={icon} />
                ))}

            </div>
        </div>
    </div>
  )
}

export default LogoSection
