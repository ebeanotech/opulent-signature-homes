import React, { useEffect, useState } from "react";

const ConfettiEffect = () => {
  const [confetti, setConfetti] = useState([]);
  const [isConfettiShown, setIsConfettiShown] = useState(false);

  useEffect(() => {
    // Generate confetti particles
    const newConfetti = Array.from({ length: 100 }, (_, i) => ({
      id: i,
      style: {
        left: i % 2 === 0 ? `-${Math.random() * 10}vw` : `100vw`,
        top: `${Math.random() * 100}vh`,
        animationDelay: `${Math.random() * 2}s`,
        backgroundColor: `hsl(${Math.random() * 360}, 100%, 50%)`, // random colors
      },
      className: i % 2 === 0 ? "left-confetti" : "right-confetti",
    }));
    setConfetti(newConfetti);
  }, []);

  setTimeout(() => {
    setIsConfettiShown(true);
  }, 5000);

  return (
    <div className="flex items-center justify-center h-screen w-screen absolute bg-transparent overflow-hidden">
      {!isConfettiShown ? (
        confetti.map((piece) => (
          <div
            key={piece.id}
            className={`confetti-piece absolute w-2 h-8 ${piece.className}`}
            style={piece.style}
          ></div>
        ))
      ) : (
        <span></span>
      )}
    </div>
  );
};

export default ConfettiEffect;
