'use client';

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type Container,
  type ISourceOptions,
} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { useTheme } from "../context/ThemeContext";

type ParticlesVariant = 'fullscreen' | 'bottom';

interface BackgroundParticlesProps {
  variant?: ParticlesVariant;
}

export default function BackgroundParticles({ variant = 'fullscreen' }: BackgroundParticlesProps) {
  const [init, setInit] = useState(false);
  const { theme } = useTheme();

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
      fullScreen: {
        enable: false,
        zIndex: 0,
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
          direction: variant === 'bottom' ? "top" : "none",
          enable: true,
          outModes: {
            default: "out",
          },
          random: true,
          speed: variant === 'bottom' ? 0.5 : 0.3,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: variant === 'bottom' ? 800 : 800,
          },
          value: variant === 'bottom' ? 88 : 88,
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
    [theme, variant],
  );

  if (!init || theme === "light") {
    return null;
  }

  return (
    <div className={`absolute ${variant === 'bottom' ? 'bottom-0 h-[20vh] w-full' : 'inset-0'}`}>
      <Particles
        id={`tsparticles-${variant}`}
        particlesLoaded={particlesLoaded}
        options={options}
        className="h-full w-full"
      />
    </div>
  );
} 