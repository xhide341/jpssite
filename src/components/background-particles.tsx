'use client';

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type Container,
  type ISourceOptions,
} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { useTheme } from "../context/theme-context";

type ParticlesVariant = 'fullscreen' | 'bottom';

interface BackgroundParticlesProps {
  variant?: ParticlesVariant;
  zIndex?: number;
}

export default function BackgroundParticles({ variant = 'fullscreen', zIndex = 0 }: BackgroundParticlesProps) {
  const [init, setInit] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    console.log('Initializing particles:', { variant, theme, init });
    
    initParticlesEngine(async (engine) => {
      console.log('Loading slim engine...');
      await loadSlim(engine);
    }).then(() => {
      console.log('Engine initialized successfully');
      setInit(true);
    }).catch(error => {
      console.error('Failed to initialize particles:', error);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log('Particles loaded:', { container, variant });
  };

  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: {
        enable: false,
        zIndex: zIndex ? zIndex : 0,
      },
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 120,
      particles: {
        color: {
          value: "#ffffff",
        },
        move: {
          direction: "top",
          enable: true,
          outModes: {
            default: "out",
          },
          random: false,
          speed: {
            min: 0.3,
            max: 1
          },
          straight: true,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 88,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 3 },
        },
        twinkle: {
          particles: {
            enable: true,
            frequency: 0.05,
            opacity: 1,
          },
        },
      },
      detectRetina: true,
    }),
    [theme, variant, zIndex],
  );

  if (!init || theme === "light") {
    return null;
  }

  return (
    <div className={`absolute ${variant === 'bottom' ? 'bottom-0 h-[50dvh] w-full' : 'inset-0'}`}>
      <Particles
        id={`tsparticles-${variant}`}
        particlesLoaded={particlesLoaded}
        options={options}
        className="h-full w-full"
      />
    </div>
  );
} 