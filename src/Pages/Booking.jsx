import React, { useEffect, useState } from "react";

const Booking = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Circle starts expanding after 100px scroll
  const circleStart = Math.max(0, scrollY - 100);
  const circleSize = Math.min(2000, circleStart * 5);

  // Text movement stops when scrollY >= 100px
  const textMove = scrollY < 100 ? `translateX(calc(-10vw - ${scrollY}px))` : `translateX(calc(-10vw - 100px))`;

  // Change text color when inside the circle (fades from black to white)
  const textColor = scrollY > 100 ? "white" : "black";

  return (
    <div className="relative w-screen min-h-[200vh] bg-black">
      {/* Moving Text (Stops at 100px scroll, stays visible) */}
      <div
        className="text-9xl font-bold whitespace-nowrap fixed top-[39vh] left-0 w-full z-20"
        style={{
          transform: textMove,
          color: textColor,
          WebkitTextStroke: "2px white",
          mixBlendMode: "difference", // Keeps contrast inside the circle
        }}
      >
        Book now Book now Book now Book now Book now Book now Book now Book now
      </div>

      {/* Expanding Circle (Above background, below text) */}
      <div
        className="fixed top-1/2 left-1/2 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 z-10"
        style={{
          width: `${circleSize}px`,
          height: `${circleSize}px`,
          transition: "width 0.1s linear, height 0.1s linear",
        }}
      ></div>
    </div>
  );
};

export default Booking;
