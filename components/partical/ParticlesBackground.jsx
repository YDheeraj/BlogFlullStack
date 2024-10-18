"use client";

import React, { useEffect } from 'react';
import 'particles.js';

const ParticlesBackground = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.particlesJS("particles-js", {
        particles: {
          number: {
            value: 50,
            density: {
              enable: true,
              value_area: 800
            }
          },
          color: {
            value: "#ffffff"
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0,
              color: "#000000"
            },
            polygon: {
              nb_sides: 5
            }
          },
          opacity: {
            value: 0.5
          },
          size: {
            value: 3,
            random: true
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 3
          }
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: { enable: true, mode: "grab" },
            onclick: { enable: true, mode: "push" },
            resize: true
          },
        },
        retina_detect: true
      });
    }
  }, []);

  return (
    <div id="particles-js" style={{ position: 'absolute', width: '100%', height: '100%' }}></div>
  );
};

export default ParticlesBackground;
