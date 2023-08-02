import React from 'react';
import Particles from 'react-tsparticles';

const Banner = () => {
  const particlesOptions = {
    // Add your particles configuration here (refer to the react-tsparticles documentation)
    background: {
      color: {
        value: '#f0f0f0',
      },
    },
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      size: {
        value: 3,
      },
      color: {
        value: '#000000',
      },
      line_linked: {
        enable: true,
        color: '#000000',
      },
      move: {
        speed: 1,
      },
    },
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: '400px' }}>
      <Particles options={particlesOptions} />
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
        <h1 style={{ color: '#ffffff' }}>Your Banner Text</h1>
      </div>
    </div>
  );
};

export default Banner;