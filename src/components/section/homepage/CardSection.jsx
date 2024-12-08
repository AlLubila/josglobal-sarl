import React from 'react';
import ImageSlider from './ImageSlider';

export default function CardSection() {
  const slides1 = ['/car/car.jpg', '/car/car2.jpg', '/car/car3.jpg', '/car/car4.jpg', '/car/car5.jpg'];
  const slides2 = ['/clothe/clothe.jpg', '/clothe/clothe2.jpg', '/clothe/clothe3.jpg', '/clothe/clothe4.jpg', '/clothe/clothe5.jpg'];
  const slides3 = ['/construction/construction.jpg', '/construction/construction2.jpg', '/construction/construction3.jpg', '/construction/construction4.jpg', '/construction/construction5.jpg']; 
  const slides4 = ['/device/device.jpg', '/device/device2.jpg', '/device/device3.jpg','/device/device4.jpg', '/device/device5.jpg'];
  const slides5 = ['/agriculture/agriculture.jpg', '/agriculture/agriculture2.jpg', '/agriculture/agriculture3.jpg', '/agriculture/agriculture4.jpg', '/agriculture/agriculture5.jpg'];

  const parentStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px', 
    justifyContent: 'center', 
    padding: '20px', 
  };

  const containerStyles = {
    width: '100%', 
    height: '280px',
  };

  return (
    <>
      <h2 style={{fontSize:"2.5em", marginBottom:"40px",marginTop:"50px", textAlign:"center"}}>Offres de services</h2>
      <div style={parentStyles}>
        <div style={containerStyles}>
          <ImageSlider slides={slides1} text="Car Services" />
        </div>
        <div style={containerStyles}>
          <ImageSlider slides={slides2} text="Clothing Deals" />
        </div>
        <div style={containerStyles}>
          <ImageSlider slides={slides3} text="Construction Materials" />
        </div>
        <div style={containerStyles}>
          <ImageSlider slides={slides4} text="Tech Gadgets" />
        </div>
        <div style={containerStyles}>
          <ImageSlider slides={slides5} text="Agricultural Equipment" />
        </div>
      </div>
    </>
  );
}
