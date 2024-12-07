import React, { useCallback } from 'react';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

function ParticlesBackground() {
  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

  return (
    <div style={{ 
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 0,
      background: 'linear-gradient(135deg, var(--background-start), var(--background-end))'
    }}>
      <Particles
        id="particles-js"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          particles: {
            number: { value: 30, density: { enable: true, value_area: 800 } },
            color: { value: "#ffffff" },
            opacity: { value: 0.3 },
            size: { value: 3 },
            links: { 
              enable: true, 
              distance: 150, 
              color: "#ffffff", 
              opacity: 0.2, 
              width: 1 
            },
            move: { 
              enable: true, 
              speed: 1
            }
          }
        }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1
        }}
      />
    </div>
  );
}

export default ParticlesBackground; 