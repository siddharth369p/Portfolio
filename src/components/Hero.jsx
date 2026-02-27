"use client";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState } from "react";

export default function Hero() {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();

    const x = e.clientX - left;
    const y = e.clientY - top;

    const centerX = width / 2;
    const centerY = height / 2;

    setRotateY((x - centerX) / 20);
    setRotateX(-(y - centerY) / 20);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-10 bg-black text-white overflow-hidden">
      {/* Animated Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-purple-600 blur-[150px] opacity-20 rounded-full animate-pulse top-[-100px] left-[-100px]" />
      <div className="absolute w-[500px] h-[500px] bg-blue-600 blur-[150px] opacity-20 rounded-full animate-pulse bottom-[-100px] right-[-100px]" />

      {/* Floating 3D Card */}
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{ rotateX, rotateY }}
        transition={{ type: "spring", stiffness: 150, damping: 15 }}
        className="relative z-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-16 shadow-[0_40px_100px_rgba(0,0,0,0.7)] transform-style-preserve-3d"
        style={{ perspective: 2000 }}
      >
        {/* Glowing Border Effect */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 opacity-20 blur-xl -z-10"></div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-purple-400 via-blue-400 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_20px_40px_rgba(139,92,246,0.6)]"
        >
          Abhishek Singh
        </motion.h1>

        <p className="mt-6 text-2xl text-gray-300 tracking-wide">
          Founder & CEO — CountryEdu Pvt Ltd
        </p>

        <p className="mt-8 max-w-xl text-gray-400 leading-relaxed">
          Building global education ecosystems across eight countries —
          empowering students beyond borders.
        </p>

        {/* Magnetic 3D Button */}
        <motion.button
          whileHover={{
            scale: 1.1,
            rotateX: 15,
            rotateY: -15,
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="mt-10 px-10 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl shadow-[0_15px_40px_rgba(139,92,246,0.6)] font-semibold tracking-wide"
        >
          Explore Vision
        </motion.button>
      </motion.div>
    </section>
  );
}
