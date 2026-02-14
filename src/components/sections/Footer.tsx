"use client";

import ForgeBar from "../shapes/ForgeBar";

const quickLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#programs", label: "Programs" },
  { href: "#contact", label: "Contact" },
];

const services = [
  "Strength Training",
  "Martial Arts",
  "Yoga & Flexibility",
  "Soccer Training",
];

export default function Footer() {
  return (
    <footer className="relative pt-16 pb-8 bg-navy-light/30">
      <ForgeBar className="absolute top-0 left-0 right-0" animate={false} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <i className="fas fa-dumbbell text-blue text-xl" />
              <span className="font-display text-sm font-bold tracking-wider">
                BAASIT SUMRA FITNESS
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Transform your body and mind with professional training in
              multiple disciplines.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-xs tracking-wider text-blue-light/80 uppercase mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-blue-light transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-xs tracking-wider text-blue-light/80 uppercase mb-4">
              Services
            </h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service} className="text-sm text-gray-400">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-xs tracking-wider text-blue-light/80 uppercase mb-4">
              Contact Info
            </h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p className="flex items-center gap-2">
                <i className="fas fa-phone text-blue/60 w-4" />
                (786) 825-0810
              </p>
              <p className="flex items-center gap-2">
                <i className="fas fa-envelope text-blue/60 w-4" />
                baasitsumra@gmail.com
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-blue/10 pt-6">
          <p className="text-center text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Baasit Sumra Fitness. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
