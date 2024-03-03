import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type Container, type ISourceOptions } from "@tsparticles/engine";
import { loadFull } from "tsparticles";
import particleStyles from "styles/particles.module.css";

const Background = () => {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: "#000000",
        },
      },
      fpsLimit: 60,
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          repulse: {
            distance: 30,
            duration: 0.8,
          },
        },
      },
      particles: {
        color: {
          value: "#fff",
        },
        move: {
          direction: "bottom-right",
          enable: true,
          outModes: "out",
          random: true,
          speed: 12,
          straight: true,
        },
        number: {
          density: {
            enable: true,
            value_area: 1000,
          },
          value: 30,
        },
        shape: {
          type: ["circle", "star"],
        },

        opacity: {
          value: {
            min: 0,
            max: 0.3,
          },
          animation: {
            random: true,
            enable: true,
            speed: 0.5,
            sync: false,
            startValue: "random",
          },
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  if (init) {
    return (
      <Particles
        className={particleStyles.particles}
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />
    );
  }

  return <></>;
};

export { Background };
