"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import EmberParticles from "../shapes/EmberParticles";
import ForgeBar from "../shapes/ForgeBar";
import GridOverlay from "../shapes/GridOverlay";

function AnimatedCounter({
  target,
  suffix = "",
  label,
}: {
  target: number;
  suffix?: string;
  label: string;
}) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 2000;
          const stepTime = duration / target;
          let current = 0;
          const timer = setInterval(() => {
            current += 1;
            setCount(current);
            if (current >= target) clearInterval(timer);
          }, stepTime);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, hasAnimated]);

  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-blue-light">
        {count}
        {suffix}
      </div>
      <div className="text-xs sm:text-sm text-gray-400 mt-1 uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background layers */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        {/* Background image with overlay */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80"
            alt=""
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/95 via-navy/85 to-navy" />
        </div>
        <GridOverlay />
        <EmberParticles count={30} />
      </motion.div>

      {/* Diagonal slash accent */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full bg-blue/[0.03] pointer-events-none"
        style={{
          clipPath: "polygon(30% 0, 100% 0, 100% 100%, 0% 100%)",
        }}
      />

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 sm:py-40"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="font-display text-xs sm:text-sm tracking-[0.3em] text-blue-light/80 mb-4 uppercase">
                Professional Fitness & Martial Arts
              </p>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight"
            >
              <span className="block">Transform</span>
              <span className="block">
                Your{" "}
                <span className="gradient-text">Body</span>
              </span>
              <span className="block">
                &{" "}
                <span className="gradient-text">Mind</span>
              </span>
            </motion.h1>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="origin-left my-6"
            >
              <ForgeBar width="200px" animate={false} />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-gray-300 text-base sm:text-lg max-w-lg leading-relaxed font-body"
            >
              Specialized in strength training, martial arts, speed development,
              yoga, and soccer coaching. Muay Thai, Taekwondo, and Jiu Jitsu
              with years of dedicated experience.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap gap-4 mt-8"
            >
              <a
                href="#programs"
                className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue to-blue-dark text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-blue/30 hover:-translate-y-0.5"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-light to-blue opacity-0 group-hover:opacity-100 transition-opacity" />
                <i className="fas fa-fire relative z-10" />
                <span className="relative z-10">Start Training</span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 border border-blue/40 text-blue-light font-semibold rounded-lg transition-all duration-300 hover:bg-blue/10 hover:border-blue/60 hover:-translate-y-0.5"
              >
                <i className="fas fa-phone" />
                Contact Now
              </a>
            </motion.div>
          </div>

          {/* Right: Hero image card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="hidden lg:block relative"
          >
            <div className="relative">
              {/* Glow */}
              <div className="absolute -inset-4 bg-blue/10 rounded-2xl blur-2xl" />
              {/* Image container with angular cut */}
              <div
                className="relative overflow-hidden rounded-2xl border border-blue/20"
                style={{
                  clipPath:
                    "polygon(0 0, calc(100% - 30px) 0, 100% 30px, 100% 100%, 30px 100%, 0 calc(100% - 30px))",
                }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80"
                  alt="Professional martial arts and fitness training"
                  width={600}
                  height={700}
                  className="object-cover w-full h-[500px]"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent" />
                {/* Overlay card */}
                <div className="absolute bottom-6 left-6 right-6 p-5 bg-navy/80 backdrop-blur-md rounded-xl border border-blue/20">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue/20 rounded-lg flex items-center justify-center">
                      <i className="fas fa-fist-raised text-blue-light text-xl" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">
                        Elite Training
                      </h3>
                      <p className="text-sm text-gray-400">
                        Professional martial arts & fitness coaching
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Corner accents */}
              <div className="absolute top-0 right-0 w-8 h-[2px] bg-blue" />
              <div className="absolute top-0 right-0 w-[2px] h-8 bg-blue" />
              <div className="absolute bottom-0 left-0 w-8 h-[2px] bg-blue" />
              <div className="absolute bottom-0 left-0 w-[2px] h-8 bg-blue" />
            </div>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 sm:mt-24"
        >
          <ForgeBar className="mb-8" />
          <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto">
            <AnimatedCounter target={500} suffix="+" label="Clients Trained" />
            <AnimatedCounter target={8} label="Years Experience" />
            <AnimatedCounter target={15} label="Disciplines" />
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-gray-500 uppercase tracking-widest">
            Scroll
          </span>
          <i className="fas fa-chevron-down text-blue/60 text-sm" />
        </motion.div>
      </motion.div>
    </section>
  );
}
