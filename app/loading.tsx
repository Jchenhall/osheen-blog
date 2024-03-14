"use client";
import { motion } from "framer-motion";
export default function Loading() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <motion.img
        src="/transparentloader.png"
        alt="LOADING..."
        className="w-52 h-52"
        initial={{
          scale: 1,
        }}
        animate={{
          scale: 1.1,

          transition: {
            ease: "easeInOut",
            duration: 0.5,
            repeat: Infinity,
          },
        }}
      ></motion.img>
    </div>
  );
}
