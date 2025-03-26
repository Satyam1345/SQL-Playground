import React, { useEffect, useRef } from "react";
import confetti from "canvas-confetti";

const ConfettiBackground = () => {
  const confettiRef = useRef(null);

  useEffect(() => {
    const shoot = () => {
      confetti({
        particleCount: 100,
        spread: 160,
        origin: { y: 0.6 },
      });
    };
    setInterval(shoot, 3000);
  }, []);

  return <canvas ref={confettiRef} style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", zIndex: -1 }} />;
};

export default ConfettiBackground;
