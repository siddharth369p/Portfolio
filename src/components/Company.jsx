"use client";
import { motion } from "framer-motion";

const values = [
  {
    title: "Global Access",
    desc: "Creating seamless international education pathways across multiple countries.",
  },
  {
    title: "Student-First Approach",
    desc: "Every decision is made to maximize student success and long-term outcomes.",
  },
  {
    title: "Trusted Partnerships",
    desc: "Strong collaborations with universities, institutions, and global stakeholders.",
  },
  {
    title: "Transparency",
    desc: "Clear and honest guidance throughout the entire study abroad journey.",
  },
  {
    title: "Innovation",
    desc: "Leveraging modern technology and global networks to simplify international education.",
  },
  {
    title: "Integrity",
    desc: "Operating with strong ethics, accountability, and commitment to student outcomes.",
  },
];

const stats = [
  { number: "5000+", label: "Students Guided" },
  { number: "120+", label: "Global Universities" },
  { number: "15+", label: "Countries" },
  { number: "10+", label: "Years Experience" },
];

export default function Company() {
  return (
    <section className="relative py-32 px-6 bg-black text-white overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-purple-600/10 blur-3xl rounded-full"></div>

      <div className="relative max-w-6xl mx-auto">

        {/* Company Intro */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            CountryEdu Pvt Ltd
          </h2>

          <p className="mt-6 text-gray-400 text-lg leading-relaxed">
            CountryEdu is a global education consultancy built to remove
            geographical barriers and empower students with access to world-class
            academic opportunities across continents.
          </p>

          <p className="mt-4 text-gray-500 leading-relaxed">
            Our mission is to guide aspiring students through every stage of
            their international education journey — from university selection,
            application strategy, visa support, and career planning.
          </p>
        </motion.div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-8 mt-20 text-center">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8"
            >
              <h3 className="text-3xl font-bold text-purple-400">
                {stat.number}
              </h3>
              <p className="mt-2 text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-10 mt-24">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 hover:border-purple-500/40 transition duration-300"
          >
            <h3 className="text-2xl font-semibold">Mission</h3>

            <p className="mt-4 text-gray-400 leading-relaxed">
              To guide students with transparency, expertise, and personalized
              mentorship, enabling them to confidently pursue global education
              and build successful international careers.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 hover:border-purple-500/40 transition duration-300"
          >
            <h3 className="text-2xl font-semibold">Vision</h3>

            <p className="mt-4 text-gray-400 leading-relaxed">
              To become the world's most trusted international education
              ecosystem connecting students, universities, and opportunities
              across borders.
            </p>
          </motion.div>

        </div>

        {/* Founder Message */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-28 bg-white/5 border border-white/10 rounded-3xl p-12 text-center"
        >
          <h3 className="text-3xl font-semibold">Founder’s Message</h3>

          <p className="mt-6 text-gray-400 leading-relaxed max-w-3xl mx-auto">
            "Education has the power to transform lives. At CountryEdu, we are
            committed to helping students unlock global opportunities through
            trusted guidance, ethical counseling, and strong university
            partnerships."
          </p>
        </motion.div>

        {/* Core Values */}
        <div className="mt-28">

          <h3 className="text-3xl md:text-4xl font-semibold text-center">
            Core Values
          </h3>

          <div className="grid md:grid-cols-3 gap-8 mt-12">

            {values.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-purple-500/40 transition duration-300"
              >
                <h4 className="text-xl font-semibold">{item.title}</h4>

                <p className="mt-4 text-gray-400 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}