import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Workflow = () => {
  const { scrollYProgress } = useScroll(); 


  const xRight = useTransform(scrollYProgress, [0, 1], [-300, 300]); 
  const xLeft = useTransform(scrollYProgress, [0, 1], [300, -300]); 

  return (
    <div className="overflow-hidden flex flex-col items-center font-semibold">
      <motion.h1
        className="text-[180px] leading-none"
        style={{ x: xRight }} 
      >
        How One
      </motion.h1>

      <motion.h1
        className="text-[180px] leading-none mt-[-20px]"
        style={{ x: xLeft }} 
      >
        Sport Works?
      </motion.h1>
    </div>
  );
};

export default Workflow;
