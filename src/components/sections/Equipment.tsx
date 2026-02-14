"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ForgeBar from "../shapes/ForgeBar";

const equipment = [
  {
    icon: "fas fa-dumbbell",
    name: "Free Weights",
    desc: "Complete dumbbell and barbell sets for strength training",
    image:
      "https://images.unsplash.com/photo-1534368959876-26bf04f2c947?w=500&q=80",
  },
  {
    icon: "fas fa-running",
    name: "Cardio Equipment",
    desc: "Treadmills, bikes, and rowing machines for conditioning",
    image:
      "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=500&q=80",
  },
  {
    icon: "fas fa-weight-hanging",
    name: "Functional Training",
    desc: "Kettlebells, resistance bands, and functional trainers",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500&q=80",
  },
  {
    icon: "fas fa-fist-raised",
    name: "Martial Arts Gear",
    desc: "Heavy bags, pads, and protective equipment",
    image:
      "https://images.unsplash.com/photo-1615117950532-6b207f05e3fe?w=500&q=80",
  },
  {
    icon: "fas fa-leaf",
    name: "Yoga & Flexibility",
    desc: "Mats, blocks, and props for yoga and stretching",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&q=80",
  },
  {
    icon: "fas fa-futbol",
    name: "Sports Equipment",
    desc: "Soccer balls, cones, and agility training tools",
    image:
      "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=500&q=80",
  },
];

export default function Equipment() {
  return (
    <section
      id="equipment"
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-display text-xs tracking-[0.3em] text-blue-light/80 uppercase mb-3">
            Equipment
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Training{" "}
            <span className="gradient-text">Equipment</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-lg mx-auto">
            Professional-grade equipment for optimal training results
          </p>
          <ForgeBar className="mt-6 mx-auto" width="120px" />
        </motion.div>

        {/* Equipment grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {equipment.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              className="group relative rounded-xl overflow-hidden bg-navy-light/40 border border-blue/10 hover:border-blue/25 transition-all"
            >
              {/* Image */}
              <div className="relative h-40 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-light via-navy-light/60 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative p-5 -mt-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-blue/10 rounded-lg flex items-center justify-center border border-blue/15 group-hover:bg-blue/20 transition-colors">
                    <i
                      className={`${item.icon} text-blue-light/80 group-hover:text-blue-light transition-colors`}
                    />
                  </div>
                  <h3 className="font-semibold text-lg">{item.name}</h3>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
