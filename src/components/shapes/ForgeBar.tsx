"use client";

import { motion } from "framer-motion";

interface ForgeBarProps {
  className?: string;
  animate?: boolean;
  width?: string;
}

export default function ForgeBar({
  className = "",
  animate = true,
  width = "100%",
}: ForgeBarProps) {
  return (
    <motion.div
      className={`relative ${className}`}
      style={{ width }}
      initial={animate ? { scaleX: 0 } : undefined}
      whileInView={animate ? { scaleX: 1 } : undefined}
      viewport={{ once: true }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      <div className="h-[2px] bg-gradient-to-r from-transparent via-blue to-transparent" />
      <div className="absolute -top-1 left-0 right-0 h-[10px] bg-gradient-to-r from-transparent via-blue/30 to-transparent blur-sm" />
      <div className="absolute -top-2 left-1/4 right-1/4 h-[6px] bg-gradient-to-r from-transparent via-blue-light/20 to-transparent blur-md" />
    </motion.div>
  );
}
