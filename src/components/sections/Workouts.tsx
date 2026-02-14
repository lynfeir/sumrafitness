"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import ForgeBar from "../shapes/ForgeBar";

const tabs = [
  { id: "strength", label: "Strength", icon: "fas fa-dumbbell" },
  { id: "cardio", label: "Cardio", icon: "fas fa-running" },
  { id: "martial", label: "Martial Arts", icon: "fas fa-fist-raised" },
  { id: "yoga", label: "Yoga", icon: "fas fa-leaf" },
];

const workouts: Record<
  string,
  { name: string; desc: string; duration: string; level: string; image: string }[]
> = {
  strength: [
    {
      name: "Beginner Strength Circuit",
      desc: "Full body workout for beginners",
      duration: "30 min",
      level: "Beginner",
      image:
        "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&q=80",
    },
    {
      name: "Upper Body Power",
      desc: "Intensive upper body strength training",
      duration: "45 min",
      level: "Intermediate",
      image:
        "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&q=80",
    },
  ],
  cardio: [
    {
      name: "HIIT Cardio Blast",
      desc: "High-intensity interval training",
      duration: "25 min",
      level: "All Levels",
      image:
        "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=400&q=80",
    },
  ],
  martial: [
    {
      name: "Muay Thai Fundamentals",
      desc: "Basic techniques and combinations",
      duration: "40 min",
      level: "Beginner",
      image:
        "https://images.unsplash.com/photo-1555597673-b21d5c935865?w=400&q=80",
    },
  ],
  yoga: [
    {
      name: "Morning Flow",
      desc: "Energizing yoga sequence",
      duration: "20 min",
      level: "All Levels",
      image:
        "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&q=80",
    },
  ],
};

export default function Workouts() {
  const [activeTab, setActiveTab] = useState("strength");

  return (
    <section
      id="workouts"
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy-light/20 to-navy" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-display text-xs tracking-[0.3em] text-blue-light/80 uppercase mb-3">
            Free Content
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Free <span className="gradient-text">Workouts</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-lg mx-auto">
            Get started with these complimentary training sessions
          </p>
          <ForgeBar className="mt-6 mx-auto" width="120px" />
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-blue text-white shadow-lg shadow-blue/30"
                  : "bg-navy-light/60 text-gray-400 border border-blue/10 hover:text-white hover:border-blue/25"
              }`}
            >
              <i className={tab.icon} />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Workout list */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="max-w-3xl mx-auto space-y-4"
        >
          {workouts[activeTab].map((workout, i) => (
            <motion.div
              key={workout.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group flex flex-col sm:flex-row items-stretch gap-0 sm:gap-0 rounded-xl overflow-hidden bg-navy-light/40 border border-blue/10 hover:border-blue/25 transition-all"
            >
              {/* Thumbnail */}
              <div className="relative w-full sm:w-48 h-36 sm:h-auto flex-shrink-0">
                <Image
                  src={workout.image}
                  alt={workout.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-navy/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-12 h-12 bg-blue/80 rounded-full flex items-center justify-center">
                    <i className="fas fa-play text-white text-sm ml-0.5" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h4 className="font-semibold text-white mb-1">
                    {workout.name}
                  </h4>
                  <p className="text-sm text-gray-400 mb-3">{workout.desc}</p>
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <span className="flex items-center gap-1.5">
                      <i className="fas fa-clock text-blue/60" />
                      {workout.duration}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <i className="fas fa-signal text-blue/60" />
                      {workout.level}
                    </span>
                  </div>
                </div>
                <button className="flex-shrink-0 px-5 py-2.5 rounded-lg border border-blue/30 text-blue-light text-sm font-medium hover:bg-blue/10 transition-colors">
                  Watch Now
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
