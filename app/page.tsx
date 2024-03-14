"use client";

import { ImagesSlider } from "@/components/ui/images-slider";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  const images = ["/images/home1.jpeg", "/images/dog1.jpg", "/images/uni1.jpg"];
  return (
    <main className="w-dvw h-screen ">
      <ImagesSlider className="h-full" images={images}>
        <motion.div
          initial={{
            opacity: 0,
            y: -80,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="z-50 flex flex-col justify-center items-center"
        >
          <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
            Osheen’s blog <br /> Come and join the journey
          </motion.p>
          <Link href="/blog">
            <button className="px-4 py-2 backdrop-blur-sm border bg-purple-300/10 border-purple-500/20 text-white mx-auto text-center rounded-full relative mt-4 z-40">
              <span>See what I’m writing about →</span>
              <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-orange-500 to-transparent" />
            </button>
          </Link>
        </motion.div>
      </ImagesSlider>
    </main>
  );
}
