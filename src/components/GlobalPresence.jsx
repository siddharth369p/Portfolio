"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const flagMap = {
  India: "🇮🇳",
  Canada: "🇨🇦",
  USA: "🇺🇸",
  Australia: "🇦🇺",
  UK: "🇬🇧",
  Germany: "🇩🇪",
  France: "🇫🇷",
  Dubai: "🇦🇪",
};

export default function GlobalPresence() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/countries")
      .then((res) => setCountries(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="relative py-28 px-6 bg-black text-white overflow-hidden">

    
      <div className="absolute top-20 left-10 w-96 h-96 bg-purple-600 blur-3xl opacity-20 rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600 blur-3xl opacity-20 rounded-full"></div>

      <div className="relative z-10 max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-5xl font-extrabold bg-gradient-to-r from-purple-400 via-blue-400 to-purple-500 bg-clip-text text-transparent"
        >
          Global Presence
        </motion.h2>

        <div className="grid md:grid-cols-4 gap-8 mt-16">

          {countries.map((c, index) => (
            <motion.div
              key={c._id}
              initial={{ opacity: 0, y: 40, rotateX: 20 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.08,
                rotateX: 8,
                rotateY: -8,
              }}
              className="p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl text-center transition duration-300"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Flag */}
              <div className="text-6xl">
                {flagMap[c.name] || "🌍"}
              </div>

          
              <h3 className="mt-6 text-2xl font-bold">
                {c.name}
              </h3>

             
              <p className="mt-3 text-gray-400">
                {c.studentsPlaced}+ Students Placed
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}