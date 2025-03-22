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

  // Stop text movement when scrollY >= 100px
  const textMove =
    scrollY < 100
      ? `translateX(calc(-10vw - ${scrollY}px))`
      : `translateX(calc(-10vw - 100px))`;

  // When to release the text into normal scrolling
  const releaseScroll = 450;
  const isFixed = scrollY < releaseScroll;

  // 🔥 Fix: Move text **UP** instead of **down**
  const smoothTop = isFixed
    ? "39vh"
    : `${39 - (scrollY - releaseScroll) * 0.1}vh`; // Decreasing value makes it move up

  return (
    <div className="relative w-screen min-h-[300vh] bg-black">
      {/* Moving Text (Stops moving at 100px, smoothly transitions to scroll UP) */}
      <div
        className="text-9xl font-bold whitespace-nowrap w-full z-20 fixed left-0"
        style={{
          top: smoothTop, // 🔥 Now moves UP smoothly
          transform: textMove,
          WebkitTextStroke: "2px white",
          color: "transparent",
          mixBlendMode: "difference",
          transition: isFixed ? "none" : "top 0.1s linear",
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

      {/* Extra space so text remains visible */}
      <div className="h-[200vh]"></div>
    </div>
  );
};

export default Booking;
