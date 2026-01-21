import { navLinks } from '../constants'
import { useEffect, useState } from 'react'

const Navbar = () => {

    // State to track whether the user has scrolled down
    const [scrolled, setScrolled] = useState(false);

    // Runs once when the component loads
    useEffect(() => {

        // Function that runs whenever the user scrolls
        const handleScroll = () => {

            // Check if the user scrolled more than 10px
            const isScrolled = window.scrollY > 10;

            // Update the state (currently always sets to true after scrolling)
            setScrolled(true);
        }

        // Start listening for scroll events
        window.addEventListener('scroll', handleScroll);

        // Cleanup: remove listener when component unmounts
        return () => window.removeEventListener('scroll', handleScroll);

    }, [])

  return (
    // Navbar changes class depending on scroll state
    <header className={`navbar ${scrolled ? 'scrolled': 'not-scrolled'}`}>

        <div className="inner">

            {/* Logo that scrolls back to the hero section */}
            <a href="#hero" className="logo">Nitesh Leyow</a>

            {/* Desktop navigation menu */}
            <nav className='desktop'>
                <ul>

                    {/* Generate nav links from navLinks array */}
                    {navLinks.map(({link, name}) => (
                        <li key={name} className='group'>
                            <a href={link}>
                                <span>{name}</span>
                                <span className="underline" />
                            </a>
                        </li>
                    ))}

                </ul>
            </nav>

            {/* Contact button */}
            <a href="#contact" className='contact-btn group'>
                <div className="inner">
                    <span>Contact</span>
                </div>
            </a>

        </div>
    </header>
  )
}

export default Navbar
