"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AngularCutoutProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
}

export default function AngularCutout({
  children,
  className = "",
  glowColor = "rgba(37, 99, 235, 0.3)",
}: AngularCutoutProps) {
  return (
    <motion.div
      className={`relative ${className}`}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Glow backdrop */}
      <div
        className="absolute -inset-1 rounded-lg blur-lg opacity-50"
        style={{ background: glowColor }}
      />
      {/* Angular clip container */}
      <div
        className="relative overflow-hidden rounded-lg bg-navy-light/80 backdrop-blur-sm border border-blue/20"
        style={{
          clipPath:
            "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))",
        }}
      >
        {children}
      </div>
      {/* Corner accents */}
      <div className="absolute top-0 right-0 w-6 h-[2px] bg-blue" />
      <div className="absolute top-0 right-0 w-[2px] h-6 bg-blue" />
      <div className="absolute bottom-0 left-0 w-6 h-[2px] bg-blue" />
      <div className="absolute bottom-0 left-0 w-[2px] h-6 bg-blue" />
    </motion.div>
  );
}
