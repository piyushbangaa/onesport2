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

  // Circle text positioning - positioned below the "Book now" text
  const circleTextTop = isFixed
    ? "55vh"
    : `${55 - (scrollY - releaseScroll) * 0.1}vh`;

  // Only reveal the text when circle is large enough
  const textVisibility = Math.min(1, (circleSize - 500) / 500);


  return (
    <div className="relative w-screen min-h-[300vh] bg-black overflow-hidden">
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
        className="fixed top-1/2 left-1/2 bg-pink-300 rounded-full -translate-x-1/2 -translate-y-1/2 z-10"
        style={{
          width: `${circleSize}px`,
          height: `${circleSize}px`,
          transition: "width 0.1s linear, height 0.1s linear",
        }}
      ></div>

      {/* Circle Text (always there but only visible when circle expands) */}
      <div
        className="mt-30 text-6xl font-bold text-black text-center w-full fixed left-0 z-15"
        style={{
          top: circleTextTop,
          opacity: textVisibility,
          visibility: textVisibility === 0 ? "hidden" : "visible", // Use visibility instead of display
          transition: "opacity 0.2s ease, top 0.1s linear",
        }}
      >
        Seamlessly book sports turfs and <br />fields online—play anytime, <br />anywhere, with zero hassle <br />and effort!
      </div>

      {/* Extra space so text remains visible */}
      <div className="h-[200vh]"> </div>
    </div>
  );
};

export default Booking;