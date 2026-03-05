"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-300, 300], [15, -15]), {
    stiffness: 120,
    damping: 20,
  });

  const rotateY = useSpring(useTransform(x, [-300, 300], [-15, 15]), {
    stiffness: 120,
    damping: 20,
  });

  const glowX = useTransform(x, [-300, 300], ["0%", "100%"]);
  const glowY = useTransform(y, [-300, 300], ["0%", "100%"]);

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

      {/* animated background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.15),transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(59,130,246,0.15),transparent_60%)]"></div>

      {/* floating blobs */}
      <div className="absolute w-[500px] h-[500px] bg-purple-600 blur-[180px] opacity-20 rounded-full top-[-150px] left-[-150px] animate-pulse"></div>
      <div className="absolute w-[500px] h-[500px] bg-blue-600 blur-[180px] opacity-20 rounded-full bottom-[-150px] right-[-150px] animate-pulse"></div>

      {/* floating particles */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(20)].map((_, i) => (
          <motion.span
            key={i}
            animate={{
              y: [0, -30, 0],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
            }}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* hero card */}
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative z-10 w-full max-w-4xl p-[1px] rounded-3xl bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 animate-[spin_12s_linear_infinite]"
      >
        {/* inner card */}
        <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-16 shadow-[0_60px_150px_rgba(0,0,0,0.9)] overflow-hidden">

          {/* moving glow */}
          <motion.div
            style={{
              left: glowX,
              top: glowY,
            }}
            className="absolute w-64 h-64 bg-purple-500/20 blur-[120px] rounded-full pointer-events-none"
          />

          {/* light sweep */}
          <motion.div
            animate={{ x: ["-120%", "120%"] }}
            transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
            className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-25deg]"
          />

          {/* heading */}
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            style={{ transform: "translateZ(80px)" }}
            className="text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-purple-400 via-blue-400 to-purple-500 bg-clip-text text-transparent"
          >
            Siddharth Pathak
          </motion.h1>

          {/* subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            style={{ transform: "translateZ(60px)" }}
            className="mt-6 text-2xl text-gray-300 tracking-wide"
          >
            Founder & CEO — CountryEdu Pvt Ltd
          </motion.p>

          {/* description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            style={{ transform: "translateZ(40px)" }}
            className="mt-8 max-w-2xl text-gray-400 leading-relaxed"
          >
            Building global education ecosystems across eight countries —
            empowering students beyond borders and redefining international
            learning pathways.
          </motion.p>

          {/* CTA */}
          <motion.button
            whileHover={{
              scale: 1.08,
              boxShadow: "0px 0px 40px rgba(139,92,246,0.8)",
            }}
            whileTap={{ scale: 0.95 }}
            style={{ transform: "translateZ(70px)" }}
            className="relative mt-12 px-10 py-4 rounded-2xl font-semibold tracking-wide overflow-hidden bg-gradient-to-r from-purple-600 to-blue-600"
          >
            Explore Vision

            <span className="absolute inset-0 bg-white/20 opacity-0 hover:opacity-100 transition-opacity duration-500"></span>
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}