// Every Nation Finland — Navbar Component
// Design: Nordic Modernism + Bold Mission
// Sticky top nav with EN branding, city dropdown, and CTA

import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import { cities } from "@/lib/cities";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [citiesOpen, setCitiesOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setCitiesOpen(false);
  }, [location]);

  const isHome = location === "/";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || !isHome || mobileOpen
          ? "bg-[#0A1628] shadow-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-full bg-[#1A56DB] flex items-center justify-center flex-shrink-0 group-hover:bg-[#F59E0B] transition-colors duration-300">
              <Globe className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display text-white font-bold text-lg leading-tight">
                Every Nation
              </span>
              <span className="text-[#F59E0B] text-xs font-body font-medium tracking-widest uppercase">
                Finland
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            <Link
              href="/"
              className="text-white/80 hover:text-white font-body text-sm font-medium transition-colors duration-200"
            >
              Home
            </Link>
            <a
              href="/#about"
              className="text-white/80 hover:text-white font-body text-sm font-medium transition-colors duration-200"
            >
              About
            </a>

            {/* Cities Dropdown */}
            <div className="relative">
              <button
                onClick={() => setCitiesOpen(!citiesOpen)}
                className="flex items-center gap-1.5 text-white/80 hover:text-white font-body text-sm font-medium transition-colors duration-200"
              >
                Our Cities
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${citiesOpen ? "rotate-180" : ""}`}
                />
              </button>
              {citiesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72 bg-[#0A1628] border border-white/10 rounded-xl shadow-2xl overflow-hidden">
                  <div className="p-2 grid grid-cols-2 gap-1 max-h-80 overflow-y-auto">
                    {cities.map((city) => (
                      <Link
                        key={city.slug}
                        href={`/city/${city.slug}`}
                        className="flex items-center gap-2 px-3 py-2.5 rounded-lg hover:bg-white/10 transition-colors duration-200 group"
                      >
                        <div
                          className="w-2 h-2 rounded-full flex-shrink-0"
                          style={{ backgroundColor: city.accentColor }}
                        />
                        <span className="text-white/80 group-hover:text-white text-sm font-body transition-colors">
                          {city.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <a
              href="/#events"
              className="text-white/80 hover:text-white font-body text-sm font-medium transition-colors duration-200"
            >
              Events
            </a>
            <a
              href="/#contact"
              className="text-white/80 hover:text-white font-body text-sm font-medium transition-colors duration-200"
            >
              Contact
            </a>
            <a
              href="/#visit"
              className="bg-[#F59E0B] hover:bg-[#D97706] text-[#0A1628] font-body text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-[#F59E0B]/25"
            >
              Plan a Visit
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#0A1628] border-t border-white/10 px-4 py-6 space-y-4">
          <Link
            href="/"
            className="block text-white/80 hover:text-white font-body font-medium py-2"
          >
            Home
          </Link>
          <a
            href="/#about"
            className="block text-white/80 hover:text-white font-body font-medium py-2"
          >
            About
          </a>
          <div>
            <button
              onClick={() => setCitiesOpen(!citiesOpen)}
              className="flex items-center gap-2 text-white/80 hover:text-white font-body font-medium py-2 w-full"
            >
              Our Cities
              <ChevronDown
                className={`w-4 h-4 transition-transform ${citiesOpen ? "rotate-180" : ""}`}
              />
            </button>
            {citiesOpen && (
              <div className="mt-2 grid grid-cols-2 gap-1 pl-4">
                {cities.map((city) => (
                  <Link
                    key={city.slug}
                    href={`/city/${city.slug}`}
                    className="flex items-center gap-2 py-2 text-white/60 hover:text-white text-sm font-body"
                  >
                    <div
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: city.accentColor }}
                    />
                    {city.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <a
            href="/#events"
            className="block text-white/80 hover:text-white font-body font-medium py-2"
          >
            Events
          </a>
          <a
            href="/#contact"
            className="block text-white/80 hover:text-white font-body font-medium py-2"
          >
            Contact
          </a>
          <a
            href="/#visit"
            className="block bg-[#F59E0B] text-[#0A1628] font-body font-semibold px-5 py-3 rounded-full text-center mt-4"
          >
            Plan a Visit
          </a>
        </div>
      )}
    </nav>
  );
}
