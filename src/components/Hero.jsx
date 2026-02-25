"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-10 bg-black text-white overflow-hidden">

     
      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>

     
      <div className="relative z-10 perspective-1000">
        <motion.div
          initial={{ rotateX: 20, opacity: 0, y: 80 }}
          animate={{ rotateX: 0, opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="transform-style-preserve-3d"
        >
          <h1 className="text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-purple-400 via-blue-400 to-purple-500 bg-clip-text text-transparent drop-shadow-2xl">
            Abhishek Singh
          </h1>

          <p className="mt-6 text-2xl text-gray-300 tracking-wide">
            Founder & CEO — CountryEdu Pvt Ltd
          </p>

          <p className="mt-8 max-w-xl text-gray-400 leading-relaxed">
            Building global education ecosystems across eight countries —
            empowering students beyond borders.
          </p>

          {/* 3D Button */}
          <motion.button
            whileHover={{ scale: 1.1, rotateX: 10, rotateY: -10 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="mt-10 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl shadow-2xl"
          >
            Explore Vision
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}