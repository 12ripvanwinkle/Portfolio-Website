import React from 'react'

// Button is a reusable component that accepts props
// text = what the button displays
// className = extra CSS classes for size/styling
// id = optional HTML id (not used yet in this code)
const Button = ({ text, className, id }) => {
  return (
    // Anchor tag used to make the button clickable like a link
    <a 
      href="" 
      // Combine passed className + default "cta-wrapper" class
      className={`${className ?? ''} cta-wrapper`}
    >
      
      {/* Main button container */}
      <div className="cta-button group">

        {/* Decorative background circle (styled with CSS) */}
        <div className="bg-circle" />

        {/* The text shown on the button */}
        <p className="text">{text}</p>

        {/* Wrapper for the arrow icon */}
        <div className="arrow-wrapper">
          <img src="/images/arrow-down.svg" alt="arrow" />
        </div>

      </div>
    </a>
  )
}

// Exporting so other components (like Hero) can use it
export default Button
