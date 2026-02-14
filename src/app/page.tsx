"use client";

import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Programs from "@/components/sections/Programs";
import Equipment from "@/components/sections/Equipment";
import Workouts from "@/components/sections/Workouts";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Programs />
        <Equipment />
        <Workouts />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
