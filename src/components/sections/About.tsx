"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ForgeBar from "../shapes/ForgeBar";

const specialties = [
  { icon: "fas fa-dumbbell", name: "Strength Training" },
  { icon: "fas fa-running", name: "Speed Development" },
  { icon: "fas fa-leaf", name: "Yoga & Flexibility" },
  { icon: "fas fa-futbol", name: "Soccer Training" },
  { icon: "fas fa-fist-raised", name: "Muay Thai" },
  { icon: "fas fa-hand-rock", name: "Taekwondo" },
  { icon: "fas fa-shield-alt", name: "Jiu Jitsu" },
];

const credentials = [
  {
    icon: "fas fa-certificate",
    title: "Certified Personal Trainer",
    desc: "Professional fitness certification",
  },
  {
    icon: "fas fa-trophy",
    title: "Martial Arts Expert",
    desc: "Multiple discipline mastery",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-blue/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-display text-xs tracking-[0.3em] text-blue-light/80 uppercase mb-3">
            About
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            About <span className="gradient-text">Baasit Sumra</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-lg mx-auto">
            Professional trainer with expertise in multiple disciplines
          </p>
          <ForgeBar className="mt-6 mx-auto" width="120px" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              {/* Background glow */}
              <div className="absolute -inset-6 bg-blue/5 rounded-3xl blur-2xl" />

              {/* Main image */}
              <div className="relative overflow-hidden rounded-2xl border border-blue/15">
                <Image
                  src="/sumra.jpeg"
                  alt="Baasit Sumra - Professional Fitness Trainer"
                  width={600}
                  height={700}
                  className="object-cover w-full h-[400px] sm:h-[500px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
              </div>

              {/* Floating badges */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute -right-4 top-8 sm:right-4 bg-navy/90 backdrop-blur-md px-4 py-3 rounded-xl border border-blue/20 shadow-xl"
              >
                <div className="flex items-center gap-2">
                  <i className="fas fa-medal text-ember text-lg" />
                  <span className="text-sm font-semibold">Certified</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: -20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="absolute -left-4 bottom-8 sm:left-4 bg-navy/90 backdrop-blur-md px-4 py-3 rounded-xl border border-blue/20 shadow-xl"
              >
                <div className="flex items-center gap-2">
                  <i className="fas fa-star text-ember text-lg" />
                  <span className="text-sm font-semibold">Expert</span>
                </div>
              </motion.div>

              {/* Accent photo */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-6 -right-6 w-36 h-36 sm:w-44 sm:h-44 rounded-xl overflow-hidden border-4 border-navy shadow-2xl hidden sm:block"
              >
                <Image
                  src="https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=400&q=80"
                  alt="Martial arts training"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Text content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              Your Fitness Journey{" "}
              <span className="gradient-text">Starts Here</span>
            </h3>
            <p className="text-gray-300 leading-relaxed font-body mb-8">
              With years of experience in strength training, speed development,
              and yoga practice, I bring a comprehensive approach to fitness that
              transforms both body and mind. My training philosophy combines
              traditional martial arts discipline with modern fitness science.
            </p>

            {/* Specialties */}
            <div className="mb-8">
              <h4 className="text-sm font-display tracking-wider text-blue-light uppercase mb-4">
                Specializations
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {specialties.map((s, i) => (
                  <motion.div
                    key={s.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg bg-navy-light/60 border border-blue/10 hover:border-blue/30 transition-colors group"
                  >
                    <i
                      className={`${s.icon} text-blue/70 group-hover:text-blue-light transition-colors text-sm`}
                    />
                    <span className="text-sm text-gray-300">{s.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Credentials */}
            <div className="space-y-4">
              {credentials.map((c, i) => (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-navy-light/40 border border-blue/10"
                >
                  <div className="w-10 h-10 flex-shrink-0 bg-blue/10 rounded-lg flex items-center justify-center">
                    <i className={`${c.icon} text-blue-light`} />
                  </div>
                  <div>
                    <h5 className="font-semibold text-white">{c.title}</h5>
                    <p className="text-sm text-gray-400">{c.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
