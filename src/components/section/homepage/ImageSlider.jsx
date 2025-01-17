import React, { useState, useEffect } from 'react';

export default function ImageSlider({ slides, text }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const sliderStyles = {
        height: '100%',
        position: 'relative',
        overflow: 'hidden',
    };

    const slideStyles = {
        width: '100%',
        height: '80%', // Adjust height to make space for text
        borderRadius: '10px',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundImage: `url(${slides[currentIndex]})`,
        transition: 'background-image 1s ease-in-out',
    };

    const textStyles = {
        marginTop: '10px',
        textAlign: 'center',
        fontSize: '18px',
        fontWeight: 'bold',
        color: '#fff',
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            goToNext();
        }, 3000);

        return () => clearInterval(interval);
    }, [currentIndex]);

    return (
        <div style={sliderStyles}>
            <div style={slideStyles}></div>
            <div style={textStyles}>{text}</div>
        </div>
    );
}
