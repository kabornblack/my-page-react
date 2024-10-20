"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type Container,
  type ISourceOptions,
  // MoveDirection,
  // OutMode,
} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim"; // using slim to reduce bundle size

const ParticlesComponent = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      autoPlay: true,
      fullScreen: {
        enable: true,
        zIndex: 0,
      },
      detectRetina: true,
      fpsLimit: 120,
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "bubble",
          },
          resize: {
            enable: true,
          },
        },
      },
      particles: {
        move: {
          direction: "none", // No predefined direction
          enable: true,
          speed: 3, // Adjust speed as needed
          random: true, // Enable random movement
          straight: false, // Disable straight movement
          outModes: {
            default: "out",
          },
          path: {
            enable: true, // Enable path movement for non-linear motion
          },
          center: {
            x: 50,
            y: 50,
            mode: "percent",
            radius: 5,
          },
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 50, // Adjust the number of particles
        },
        size: {
          value: { min: 2, max: 4 },
        },
        opacity: {
          value: { min: 0.3, max: 0.7 },
        },
        color: {
          value: "#DCDCDC", // Change color as desired
        },
      },
      zLayers: 100,
    }),
    []
  );

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
        className="z-50"
      />
    );
  }

  return <></>;
};

export default ParticlesComponent;
