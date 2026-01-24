import React from 'react'

// Reusable component for section titles and subtitles
const TitleHeader = ({ title, sub }) => {
  return (
    // Main container: vertical layout, centered
    <div className="flex flex-col items-center gap-5">

        {/* Small badge / subtitle */}
        <div className="hero-badge">
            <p>{sub}</p>
        </div>

        {/* Main section title */}
        <div className="font-semibold md:text-5xl text-3xl text-center">
            {title}
        </div>

    </div>
  )
}

export default TitleHeader
