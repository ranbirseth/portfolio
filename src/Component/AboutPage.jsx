import React from 'react';
import BackgroundAnimation from 'react-background-animation';

const AnimatedBackground = () => {
  return (
    <div style={{ height: '100vh', position: 'relative' }}>
      <BackgroundAnimation
        color="rgba(255, 105, 180, 0.7)" 
        style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
        shape="circle"
        speed={2}
      />
      <h1 style={{ color: 'white', textAlign: 'center', paddingTop: '20%' }}>
        Welcome to My React Site with Animated Background!
      </h1>
    </div>
  );
};

export default AnimatedBackground;
