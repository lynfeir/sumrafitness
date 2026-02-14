"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ForgeBar from "../shapes/ForgeBar";

const programs = [
  {
    icon: "fas fa-dumbbell",
    name: "Strength Elite",
    price: "$129",
    period: "/month",
    features: [
      "Personalized strength training",
      "Progressive overload system",
      "Nutrition guidance",
      "Weekly assessments",
    ],
    featured: false,
    image:
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&q=80",
  },
  {
    icon: "fas fa-fire",
    name: "Complete Transformation",
    price: "$219",
    period: "/month",
    features: [
      "All training disciplines",
      "Personal coaching sessions",
      "Custom meal plans",
      "24/7 support",
      "Progress tracking",
    ],
    featured: true,
    image:
      "https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=600&q=80",
  },
  {
    icon: "fas fa-fist-raised",
    name: "Martial Arts Mastery",
    price: "$149",
    period: "/month",
    features: [
      "Muay Thai training",
      "Taekwondo techniques",
      "Jiu Jitsu fundamentals",
      "Combat conditioning",
    ],
    featured: false,
    image:
      "https://images.unsplash.com/photo-1555597673-b21d5c935865?w=600&q=80",
  },
];

export default function Programs() {
  return (
    <section id="programs" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy-light/30 to-navy" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-display text-xs tracking-[0.3em] text-blue-light/80 uppercase mb-3">
            Programs
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Paid Workout{" "}
            <span className="gradient-text">Programs</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-lg mx-auto">
            Structured training programs designed for maximum results
          </p>
          <ForgeBar className="mt-6 mx-auto" width="120px" />
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {programs.map((program, i) => (
            <motion.div
              key={program.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={`relative group rounded-2xl overflow-hidden ${
                program.featured ? "md:-mt-4 md:mb-4" : ""
              }`}
            >
              {/* Featured badge */}
              {program.featured && (
                <div className="absolute top-4 right-4 z-20 bg-blue px-3 py-1 rounded-full text-xs font-semibold">
                  Most Popular
                </div>
              )}

              {/* Card glow on featured */}
              {program.featured && (
                <div className="absolute -inset-[1px] bg-gradient-to-b from-blue/40 via-blue/20 to-blue/40 rounded-2xl" />
              )}

              <div
                className={`relative h-full flex flex-col bg-navy-light/60 backdrop-blur-sm border rounded-2xl overflow-hidden ${
                  program.featured
                    ? "border-blue/30"
                    : "border-blue/10 hover:border-blue/25"
                } transition-colors`}
              >
                {/* Card image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={program.image}
                    alt={program.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-light via-navy-light/50 to-transparent" />
                  <div className="absolute bottom-4 left-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue/20 backdrop-blur-sm rounded-lg flex items-center justify-center border border-blue/20">
                        <i className={`${program.icon} text-blue-light`} />
                      </div>
                      <h3 className="text-lg font-bold">{program.name}</h3>
                    </div>
                  </div>
                </div>

                {/* Price */}
                <div className="px-5 pt-5">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold gradient-text">
                      {program.price}
                    </span>
                    <span className="text-gray-400 text-sm">
                      {program.period}
                    </span>
                  </div>
                </div>

                {/* Features */}
                <div className="px-5 py-5 flex-1">
                  <ul className="space-y-3">
                    {program.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm text-gray-300"
                      >
                        <i className="fas fa-check text-blue-light text-xs mt-1.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="px-5 pb-5">
                  <button
                    className={`w-full py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                      program.featured
                        ? "bg-gradient-to-r from-blue to-blue-dark text-white hover:shadow-lg hover:shadow-blue/30"
                        : "bg-blue/10 text-blue-light border border-blue/20 hover:bg-blue/20"
                    }`}
                  >
                    Choose Plan
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
