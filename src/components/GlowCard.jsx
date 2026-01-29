import React, { useRef } from 'react'

const GlowCard = ({ card, children, index }) => {

    // Store DOM references for all cards
    const cardRefs = useRef([]);

    // Returns a mouse move handler for a specific card index
    const handleMouseMove = (index) => (e) => {
        const card = cardRefs.current[index];
        if (!card) return;

        // Get card position and size
        const rect = card.getBoundingClientRect();

        // Mouse position relative to card center
        const mouseX = e.clientX - rect.left - rect.width / 2;
        const mouseY = e.clientY - rect.top - rect.height / 2;

        // Calculate angle from center to mouse position
        let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);

        // Normalize angle to 0–360 degrees
        angle = (angle + 360) % 360;

        // Update CSS variable used for glow rotation
        card.style.setProperty('--start', angle + 60);
    }

    return (
        <div
            // Store reference to this card DOM node
            ref={(el) => (cardRefs.current[index] = el)}

            // Track mouse movement
            onMouseMove={handleMouseMove(index)}

            className="card card-border timeline-card rounded-xl p-10 mb-5 break-inside-avoid-column"
        >
            {/* Glow overlay element (styled via CSS) */}
            <div className="glow" />

            {/* Star rating */}
            <div className="flex items-center gap-1 mb-5">
                {Array.from({ length: 5 }, (_, i) => (
                    <img
                        src="/images/star.png"
                        key={i}
                        alt="star"
                        className="size-5"
                    />
                ))}
            </div>

            {/* Review text */}
            <div className="mb-5">
                <p className="text-white-50 text-lg">{card.review}</p>
            </div>

            {/* Additional content passed from parent */}
            {children}
        </div>
    )
}

export default GlowCard
