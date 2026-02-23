import * as THREE from "three"
import { useEffect, useRef } from "react"
import CLOUDS from "vanta/dist/vanta.clouds.min"
import WA_background from "../images/WA_background.webp"

const AnimatedBackground = ({ children }) => {
  const vantaRef = useRef(null)

  useEffect(() => {
    const isMobile = window.innerWidth < 768

    if (isMobile || !vantaRef.current) return

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
    })

    return () => {
      if (effect) effect.destroy()
    }
  }, [])

   const isMobile = window.innerWidth < 768

  return (
    <div
      ref={vantaRef}
      className="min-h-screen w-full"
      style={
        isMobile
          ? {
              backgroundImage: `url(${WA_background})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }
          : {}
      }
    >
      {children}
    </div>
  )
}

export default AnimatedBackground