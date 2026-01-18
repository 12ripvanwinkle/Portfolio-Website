import React from 'react'
import { counterItems } from '../constants';
import CountUp from 'react-countup';

const AnimatedCounter = () => {
  return (
    // Main container for the counter section
    // id="counter" is used for scrolling from the button
    <div id="counter" className="padding-x-lg xl:mt-0 mt-32">

        {/* Grid container that holds all counter cards */}
        <div className="mx-auto grid-4-cols">

            {/* Loop through each item in counterItems array */}
            {counterItems.map((item) => (

                // One counter card
                <div className="bg-zinc-900 rounded-lg p-10 flex flex-col justify-center">

                    {/* Animated number */}
                    <div
                      key={counterItems.label}   // ⚠️ Should be item.label (small bug)
                      className="counter-number text-white text-5xl font-bold mb-2"
                    >
                        {/* CountUp animates from 0 to item.value */}
                        <CountUp suffix={item.suffix} end={item.value} />
                    </div>

                    {/* Label under the number (e.g. Projects, Clients, etc.) */}
                    <div className="text-white-50 text-lg">
                      {item.label}
                    </div>

                </div>
                
            ))}
        </div>

    </div>
  )
}

export default AnimatedCounter
