import React from "react";
import { motion } from "framer-motion";

const Title = () => {
  return (
    <div className="title">
      <motion.h1 initial={{ y: "-100vh" }} animate={{ y: 0 }}>
        FireGram
      </motion.h1>
      <motion.h2 whileHover={{scale: 1.2 }}>Your Pictures</motion.h2>
      <p>Better Way To Upload Images With Framer Motion.</p>
    </div>
  );
};

export default Title;
