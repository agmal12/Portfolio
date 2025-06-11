import React from 'react';
import { motion } from 'framer-motion'; // Correct import path

const Card = ({ style, text, image, containerRef }) => {
  return image && !text ? (
    <motion.img
      src={image}
      alt="card visual"
      className="absolute w-[60px] cursor-grab"
      style={style}
      whileHover={{ scale: 1.05 }}
      drag
      dragConstraints={containerRef}
      dragElastic={0.2}
    />
  ) : (
    <motion.div
      className="absolute px-4 py-2 text-xl text-center rounded-full ring ring-gray-700 font-extralight bg-storm w-[12rem] cursor-grab"
      style={style}
      whileHover={{ scale: 1.05 }}
      drag
      dragConstraints={containerRef}
      dragElastic={0.2}
    >
      {text}
    </motion.div>
  );
};

export default Card;
