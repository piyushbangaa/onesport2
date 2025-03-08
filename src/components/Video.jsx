import React from "react";
import { motion } from "framer-motion";

const Video = () => {
  return (
    <div className="relative w-screen h-screen bg-black p-[35px] box-border overflow-hidden">
      {/* Video Background */}
      <div className="w-full h-full overflow-hidden">
        <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
          <source src="src/assets/Screen Recording 2025-03-08 at 1.35.24 AM.mov" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Animated Text */}
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center text-white text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <motion.h1
          className="text-6xl md:text-8xl font-extrabold drop-shadow-lg"
          initial={{ scale: 0.8 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          One Sport
        </motion.h1>
        <motion.h2
          className="text-lg md:text-2xl font-semibold mt-2 drop-shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Your One Solution to Excellence!
        </motion.h2>
      </motion.div>
    </div>
  );
};

export default Video;
