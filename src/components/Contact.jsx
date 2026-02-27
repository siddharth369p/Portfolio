"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();

    const x = (e.clientX - left - width / 2) / 25;
    const y = (e.clientY - top - height / 2) / 25;

    setRotate({ x: -y, y: x });
  };

  const resetRotation = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <section className="relative py-32 px-6 bg-black text-white overflow-hidden">

      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(139,92,246,0.25),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(59,130,246,0.25),transparent_40%)]"></div>

      <div className="relative z-10 max-w-5xl mx-auto text-center perspective-[1500px]">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-6xl font-extrabold bg-gradient-to-r from-purple-400 via-blue-400 to-purple-500 bg-clip-text text-transparent"
        >
          Connect with the Vision
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-6 text-gray-400 text-lg"
        >
          Let’s build global education pathways together.
        </motion.p>

        {/* 3D Glass Card */}
        <motion.div
          onMouseMove={handleMouseMove}
          onMouseLeave={resetRotation}
          animate={{
            rotateX: rotate.x,
            rotateY: rotate.y,
          }}
          transition={{ type: "spring", stiffness: 150, damping: 15 }}
          className="mt-16 relative p-[2px] rounded-3xl bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600 shadow-[0_0_60px_rgba(139,92,246,0.4)]"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Inner Glass */}
          <div className="p-12 rounded-3xl bg-white/5 backdrop-blur-2xl border border-white/10">

            {/* Floating Effect */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <p className="text-xl text-gray-300">
                📍 Gurugram, Sector 11 · India
              </p>

              <p className="mt-6 text-gray-400 text-lg">
                📧 contact@countryedu.com
              </p>

              <p className="mt-6 text-gray-400 text-lg">
                📞 +91 98765 43210
              </p>

             
              <motion.button
                whileHover={{
                  scale: 1.1,
                  boxShadow:
                    "0px 20px 40px rgba(139,92,246,0.6)",
                }}
                whileTap={{ scale: 0.95 }}
                className="mt-10 px-10 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-lg font-semibold"
              >
                Schedule Consultation
              </motion.button>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}