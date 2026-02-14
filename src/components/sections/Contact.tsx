"use client";

import { motion } from "framer-motion";
import { useState, FormEvent } from "react";
import Image from "next/image";
import ForgeBar from "../shapes/ForgeBar";
import EmberParticles from "../shapes/EmberParticles";

const contactInfo = [
  {
    icon: "fas fa-phone",
    title: "Phone & SMS",
    value: "(786) 825-0810",
    sub: "Available for calls and text messages",
  },
  {
    icon: "fas fa-envelope",
    title: "Email",
    value: "baasitsumra@gmail.com",
    sub: "Get in touch via email",
  },
  {
    icon: "fas fa-map-marker-alt",
    title: "Location",
    value: "Professional Training Facility",
    sub: "In-person and virtual sessions available",
  },
];

const socialLinks = [
  { icon: "fab fa-instagram", href: "#", label: "Instagram" },
  { icon: "fab fa-facebook", href: "#", label: "Facebook" },
  { icon: "fab fa-youtube", href: "#", label: "YouTube" },
  { icon: "fab fa-tiktok", href: "#", label: "TikTok" },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=60"
          alt=""
          fill
          className="object-cover opacity-5"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy/95 to-navy" />
      </div>
      <EmberParticles count={15} className="opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-display text-xs tracking-[0.3em] text-blue-light/80 uppercase mb-3">
            Contact
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Get In{" "}
            <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-lg mx-auto">
            Ready to start your fitness journey? Contact me today!
          </p>
          <ForgeBar className="mt-6 mx-auto" width="120px" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {contactInfo.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4 p-5 rounded-xl bg-navy-light/40 border border-blue/10 hover:border-blue/25 transition-colors"
              >
                <div className="w-12 h-12 bg-blue/10 rounded-lg flex items-center justify-center flex-shrink-0 border border-blue/15">
                  <i className={`${item.icon} text-blue-light`} />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-0.5">
                    {item.title}
                  </h4>
                  <p className="text-gray-300">{item.value}</p>
                  <p className="text-sm text-gray-500 mt-1">{item.sub}</p>
                </div>
              </motion.div>
            ))}

            {/* Social links */}
            <div className="pt-4">
              <h4 className="font-display text-xs tracking-wider text-blue-light/80 uppercase mb-4">
                Follow Me
              </h4>
              <div className="flex gap-3">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="w-11 h-11 bg-navy-light/60 border border-blue/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-blue-light hover:border-blue/30 hover:bg-blue/10 transition-all"
                  >
                    <i className={s.icon} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form
              onSubmit={handleSubmit}
              className="space-y-5 p-6 sm:p-8 rounded-2xl bg-navy-light/30 border border-blue/10 backdrop-blur-sm"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm text-gray-400 mb-1.5"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-xl bg-navy/60 border border-blue/15 text-white placeholder-gray-500 focus:border-blue/50 focus:ring-1 focus:ring-blue/30 outline-none transition-colors text-sm"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm text-gray-400 mb-1.5"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="Your Email"
                    className="w-full px-4 py-3 rounded-xl bg-navy/60 border border-blue/15 text-white placeholder-gray-500 focus:border-blue/50 focus:ring-1 focus:ring-blue/30 outline-none transition-colors text-sm"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm text-gray-400 mb-1.5"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Your Phone Number"
                    className="w-full px-4 py-3 rounded-xl bg-navy/60 border border-blue/15 text-white placeholder-gray-500 focus:border-blue/50 focus:ring-1 focus:ring-blue/30 outline-none transition-colors text-sm"
                  />
                </div>
                <div>
                  <label
                    htmlFor="interest"
                    className="block text-sm text-gray-400 mb-1.5"
                  >
                    Interest
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-navy/60 border border-blue/15 text-white focus:border-blue/50 focus:ring-1 focus:ring-blue/30 outline-none transition-colors text-sm appearance-none"
                  >
                    <option value="">Select Your Interest</option>
                    <option value="strength">Strength Training</option>
                    <option value="martial">Martial Arts</option>
                    <option value="yoga">Yoga</option>
                    <option value="soccer">Soccer Training</option>
                    <option value="complete">Complete Program</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm text-gray-400 mb-1.5"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Your Message"
                  className="w-full px-4 py-3 rounded-xl bg-navy/60 border border-blue/15 text-white placeholder-gray-500 focus:border-blue/50 focus:ring-1 focus:ring-blue/30 outline-none transition-colors text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-blue to-blue-dark text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue/30 transition-all duration-300"
              >
                {submitted ? (
                  <>
                    <i className="fas fa-check" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <i className="fas fa-paper-plane" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
