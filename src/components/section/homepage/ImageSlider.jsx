import React, { useState, useEffect } from 'react';

export default function ImageSlider({ slides, text }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [hovered, setHovered] = useState(false);

    const sliderStyles = {
        height: '100%',
        position: 'relative',
        overflow: 'hidden',
    };

    const slideStyles = {
        width: '100%',
        height: '100%',
        borderRadius: '10px',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundImage: `url(${slides[currentIndex]})`,
        transition: 'background-image 1s ease-in-out',
        opacity: hovered ? 0.5 : 1, // Image opacity changes on hover
    };

    const textOverlayStyles = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: '#fff',  // Ensure the text is white
        fontSize: '2em',
        zIndex: 1,
        opacity: hovered ? 1 : 0,  // Text opacity changes on hover
        transition: 'opacity 0.3s ease',
        textShadow: '2px 2px 10px rgba(0, 0, 0, 0.7)', // Add shadow for better visibility
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    // Automatically change the slide every 3 seconds, but pause on hover
    useEffect(() => {
        if (!hovered) {
            const interval = setInterval(() => {
                goToNext();
            }, 3000);

            return () => clearInterval(interval); // Clean up the interval on hover
        }
    }, [currentIndex, hovered]);

    return (
        <div
            style={sliderStyles}
            onMouseEnter={() => setHovered(true)}   // Set hovered to true when mouse enters
            onMouseLeave={() => setHovered(false)} // Set hovered to false when mouse leaves
        >
            {/* Image slide with text overlay on hover */}
            <div style={slideStyles}>
                <div style={textOverlayStyles}>{text}</div> {/* Dynamic text here */}
            </div>
        </div>
    );
}
