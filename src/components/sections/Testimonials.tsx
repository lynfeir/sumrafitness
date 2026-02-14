"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import ForgeBar from "../shapes/ForgeBar";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Fitness Enthusiast",
    quote:
      "Baasit transformed my fitness journey completely. His expertise in martial arts and strength training is unmatched.",
    rating: 5,
  },
  {
    name: "Mike Chen",
    role: "Professional Athlete",
    quote:
      "The personalized training approach and attention to detail made all the difference in achieving my goals.",
    rating: 5,
  },
  {
    name: "Jessica Williams",
    role: "Yoga Practitioner",
    quote:
      "The combination of yoga and functional training opened up a whole new level of flexibility and strength I never thought possible.",
    rating: 5,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-display text-xs tracking-[0.3em] text-blue-light/80 uppercase mb-3">
            Testimonials
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            What Clients{" "}
            <span className="gradient-text">Say</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-lg mx-auto">
            Real results from real people
          </p>
          <ForgeBar className="mt-6 mx-auto" width="120px" />
        </motion.div>

        {/* Testimonial slider */}
        <div className="max-w-2xl mx-auto">
          <div className="relative min-h-[280px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="text-center"
              >
                {/* Quote icon */}
                <div className="mb-6">
                  <i className="fas fa-quote-left text-blue/20 text-4xl" />
                </div>

                {/* Stars */}
                <div className="flex justify-center gap-1 mb-6">
                  {Array.from({ length: testimonials[current].rating }).map(
                    (_, i) => (
                      <i key={i} className="fas fa-star text-ember text-sm" />
                    )
                  )}
                </div>

                {/* Quote */}
                <p className="text-lg sm:text-xl text-gray-200 leading-relaxed mb-8 italic font-light">
                  &ldquo;{testimonials[current].quote}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center justify-center gap-4">
                  <div className="w-12 h-12 bg-blue/10 rounded-full flex items-center justify-center border border-blue/20">
                    <i className="fas fa-user text-blue-light/60" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-white">
                      {testimonials[current].name}
                    </h4>
                    <p className="text-sm text-gray-400">
                      {testimonials[current].role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-blue/20 flex items-center justify-center text-gray-400 hover:text-white hover:border-blue/40 transition-colors"
              aria-label="Previous testimonial"
            >
              <i className="fas fa-chevron-left text-sm" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === current
                      ? "bg-blue w-6"
                      : "bg-gray-500/40 hover:bg-gray-500/60"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-blue/20 flex items-center justify-center text-gray-400 hover:text-white hover:border-blue/40 transition-colors"
              aria-label="Next testimonial"
            >
              <i className="fas fa-chevron-right text-sm" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
