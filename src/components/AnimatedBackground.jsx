import * as THREE from "three"
import { useEffect, useRef } from "react";
import CLOUDS from "vanta/dist/vanta.clouds.min";

const AnimatedBackground = ({ children }) => {
    const vantaRef = useRef(null);

 //VANTA EFFECT
  useEffect(() => {
    const effect = CLOUDS({
      el: vantaRef.current,
      THREE: THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      skyColor: 0x066d99,
      cloudColor: 0xffffff,
      backgroundColor: 0x4dacd4,
      speed: 0.5,
        });

        return () => {
            if (effect) effect.destroy();
        };
    }, []);

  return (
    <div ref={vantaRef} className="min-h-screen w-full">
        {children}
    </div>
  );
};

export default AnimatedBackground;