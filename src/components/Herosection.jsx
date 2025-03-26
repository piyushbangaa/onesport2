import React from "react";
import { motion } from "framer-motion";

const Herosection = () => {
  return (
    <div className="min-h-[645px] pt-48 px-4 sm:px-0">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="text-4xl sm:text-6xl ml-[10%] sm:ml-42 sm:mr-14"
      >
        We make bookings easy, so you play more.
        No hassle, just the game you love. <br />
        From turfs to courts, we’ve got you covered.
      </motion.div>

      <motion.a
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.4 }}
        className="mt-6 sm:mt-10 ml-[25%] sm:ml-230 border border-white rounded-[6px] py-3 px-6 inline-block"
        href="/booking"
      >
        Book Now
      </motion.a>
    </div>
  );
};

export default Herosection;
