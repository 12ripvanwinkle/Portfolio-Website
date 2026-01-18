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
      onClick={(e) => {

        // Prevent default button behavior (like jumping or form submit)
        e.preventDefault();

        // Find the element with id="counter"
        const target = document.getElementById('counter');

        // Only run if the element exists and the component has an id prop
        if (target && id) {

          // Create a small spacing from the top of the screen (15% of screen height)
          const offset = window.innerHeight * 0.15;

          // Calculate the exact position to scroll to
          const top =
            target.getBoundingClientRect().top + // distance from viewport
            window.scrollY -                     // current scroll position
            offset;                              // spacing from top

          // Smoothly scroll to the calculated position
          window.scrollTo({
            top,
            behavior: 'smooth'
          });
        }

      }}
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
