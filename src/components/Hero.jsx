"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef(null);

  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-300, 300], [15, -15]), {
    stiffness: 150,
    damping: 20,
  });

  const rotateY = useSpring(useTransform(x, [-300, 300], [-15, 15]), {
    stiffness: 150,
    damping: 20,
  });

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 bg-black text-white overflow-hidden">

    
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.15),transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(59,130,246,0.15),transparent_60%)]"></div>

      
      <div className="absolute w-[400px] h-[400px] bg-purple-600 blur-[160px] opacity-20 rounded-full top-[-100px] left-[-100px] animate-pulse"></div>
      <div className="absolute w-[400px] h-[400px] bg-blue-600 blur-[160px] opacity-20 rounded-full bottom-[-100px] right-[-100px] animate-pulse"></div>

      
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative z-10 w-full max-w-4xl bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-16 shadow-[0_50px_120px_rgba(0,0,0,0.8)]"
      >
        
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 opacity-20 blur-2xl -z-10"></div>

        
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-purple-400 via-blue-400 to-purple-500 bg-clip-text text-transparent"
          style={{ transform: "translateZ(60px)" }}
        >
          Siddharth Pathak
        </motion.h1>

        
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mt-6 text-2xl text-gray-300 tracking-wide"
          style={{ transform: "translateZ(40px)" }}
        >
          Founder & CEO — CountryEdu Pvt Ltd
        </motion.p>

        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-8 max-w-2xl text-gray-400 leading-relaxed"
          style={{ transform: "translateZ(30px)" }}
        >
          Building global education ecosystems across eight countries —
          empowering students beyond borders and redefining international
          learning pathways.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="relative mt-12 px-10 py-4 rounded-2xl font-semibold tracking-wide overflow-hidden bg-gradient-to-r from-purple-600 to-blue-600 shadow-[0_20px_50px_rgba(139,92,246,0.6)]"
          style={{ transform: "translateZ(50px)" }}
        >
          <span className="relative z-10">Explore Vision</span>

         
          <span className="absolute inset-0 bg-white/20 opacity-0 hover:opacity-100 transition-opacity duration-500"></span>
        </motion.button>
      </motion.div>
    </section>
  );
}