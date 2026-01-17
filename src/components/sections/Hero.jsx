// Importing an array of words (used for the sliding text animation)
import { words } from '../../constants'
// Importing a reusable Button component
import Button from '../Button'

// This is a React functional component called "Hero"
const Hero = () => {
  return (
    // Main hero section container
    <section id='hero' className='relative overflow-hidden'>
      
      {/* Background image positioned at the top-left */}
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="background" />
      </div>

      {/* Main layout wrapper */}
      <div className="hero-layout">

        {/* Left side content (text + button) */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">

          <div className="flex flex-col gap-7">

            {/* Main heading text */}
            <div className="hero-text">
              <h1>
                Shaping 

                {/* Animated / sliding word section */}
                <span className='slide'>
                  <span className="wrapper">

                    {/* Loop through the words array and display each word + image */}
                    {words.map((words) => (
                      <span
                        key={words.text} // React requires a unique key for lists
                        className='flex items-center md:gap-3 gap-1 pb-2'
                      >

                        {/* Small icon/image for the word */}
                        <img
                          src={words.imgPath}
                          alt={words.text}
                          className='xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50'
                        />

                        {/* The actual word text */}
                        <span>{words.text}</span>
                      </span>
                    ))}

                  </span>
                </span>
              </h1>

              <h1>Into Real Projects</h1>
              <h1>That Deliver Results</h1>
            </div>

            {/* Short description text */}
            <p className='text-white-50 md:text-xl relative z-10 pointer-events-none'>
              Hi, I'm "Insert Name" with a passion for coding
            </p>

            {/* Custom button component */}
            <Button
              className="md:w-80 md:h-16 w-60 h-12"
              id="button"
              text="see my work"
            />

          </div>
        </header>

        {/* Right side content could go here later */}

      </div>
    </section>
  )
}

// Exporting the component so other files can use it
export default Hero
