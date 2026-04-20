// Every Nation Finland — Home Page
// Design: Nordic Modernism + Bold Mission
// Sections: Hero, Stats, About, Cities Grid, Campus, Worship, Contact

import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import {
  ArrowRight,
  MapPin,
  Users,
  BookOpen,
  Heart,
  ChevronDown,
  Play,
  Calendar,
  Mail,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { cities, getFeaturedCities } from "@/lib/cities";

// Intersection Observer hook for scroll animations
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

export default function Home() {
  const featuredCities = getFeaturedCities();
  const statsSection = useInView();
  const aboutSection = useInView();
  const citiesSection = useInView();
  const campusSection = useInView();
  const worshipSection = useInView();
  const contactSection = useInView();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* ─── HERO SECTION ─── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663580653589/Zws7cERX8vc9RxfETZzKLC/en-finland-worship-67eGURyJ9jrJKR5hW6Aa8k.webp"
            alt="Every Nation Finland worship"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/95 via-[#0A1628]/75 to-[#0A1628]/30" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6 animate-fade-up">
              <div className="gold-divider" />
              <span className="text-[#F59E0B] font-body text-sm font-semibold tracking-widest uppercase">
                Every Nation Finland
              </span>
            </div>

            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 animate-fade-up-delay-1">
              One Nation.
              <br />
              <em className="italic text-[#F59E0B]">Every City.</em>
            </h1>

            <p className="text-white/80 font-body text-lg sm:text-xl leading-relaxed mb-10 animate-fade-up-delay-2">
              We are a family of Christ-centered, Spirit-empowered, and socially
              responsible churches across Finland — from Helsinki to Rovaniemi,
              reaching every campus and every city.
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-up-delay-3">
              <a
                href="#cities"
                className="flex items-center gap-2 bg-[#1A56DB] hover:bg-[#1648C0] text-white font-body font-semibold px-7 py-3.5 rounded-full transition-all duration-200 hover:shadow-xl hover:shadow-[#1A56DB]/30"
              >
                Find Your City
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#about"
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/30 font-body font-semibold px-7 py-3.5 rounded-full transition-all duration-200 backdrop-blur-sm"
              >
                <Play className="w-4 h-4" />
                Who We Are
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <a
          href="#stats"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce"
        >
          <ChevronDown className="w-6 h-6" />
        </a>
      </section>

      {/* ─── STATS SECTION ─── */}
      <section id="stats" className="bg-[#0A1628] py-16">
        <div
          ref={statsSection.ref}
          className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
            statsSection.inView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {[
              { number: "12", label: "Cities", icon: MapPin },
              { number: "3,000+", label: "Community Members", icon: Users },
              { number: "15+", label: "University Campuses", icon: BookOpen },
              { number: "Since 2018", label: "Serving Finland", icon: Heart },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <stat.icon className="w-6 h-6 text-[#F59E0B] mx-auto mb-3" />
                <div className="font-display text-4xl lg:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-white/60 font-body text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ABOUT SECTION ─── */}
      <section id="about" className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={aboutSection.ref}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center transition-all duration-700 ${
              aboutSection.inView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            {/* Text */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="gold-divider" />
                <span className="text-[#1A56DB] font-body text-sm font-semibold tracking-widest uppercase">
                  Who We Are
                </span>
              </div>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-[#0A1628] leading-tight mb-6">
                A Church for
                <br />
                <em className="italic text-[#1A56DB]">Every Nation</em>
              </h2>
              <p className="text-gray-600 font-body text-lg leading-relaxed mb-6">
                Since 1994, Every Nation missionaries and church planters have
                answered the call to bring the gospel to campuses and cities
                around the world. In Finland, we are building a family of
                churches that reaches the campus because we believe that if we
                change the campus, we will change the nation.
              </p>
              <p className="text-gray-600 font-body text-lg leading-relaxed mb-8">
                We are Christ-centered, Spirit-empowered, and socially
                responsible — welcoming people from every background, culture,
                and nation into a vibrant community of faith.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[
                  {
                    title: "Christ-Centered",
                    desc: "Jesus is the foundation of everything we do",
                  },
                  {
                    title: "Spirit-Empowered",
                    desc: "We depend on the Holy Spirit for transformation",
                  },
                  {
                    title: "Socially Responsible",
                    desc: "We serve our communities with love and action",
                  },
                ].map((value, i) => (
                  <div key={i} className="border-l-2 border-[#F59E0B] pl-4">
                    <h4 className="font-display font-bold text-[#0A1628] text-base mb-1">
                      {value.title}
                    </h4>
                    <p className="text-gray-500 font-body text-sm">
                      {value.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663580653589/Zws7cERX8vc9RxfETZzKLC/en-finland-about-aVbVLjQSbuY7QEGoz8jJt3.webp"
                  alt="Small group Bible study"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              {/* Floating accent card */}
              <div className="absolute -bottom-6 -left-6 bg-[#0A1628] rounded-xl p-5 shadow-xl">
                <div className="font-display text-3xl font-bold text-white mb-1">
                  12+
                </div>
                <div className="text-[#F59E0B] font-body text-sm font-medium">
                  Cities in Finland
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CITIES SECTION ─── */}
      <section
        id="cities"
        className="py-24 lg:py-32 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={citiesSection.ref}
            className={`transition-all duration-700 ${
              citiesSection.inView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            {/* Section header */}
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="gold-divider" />
                <span className="text-[#1A56DB] font-body text-sm font-semibold tracking-widest uppercase">
                  Our Locations
                </span>
                <div className="gold-divider" />
              </div>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-[#0A1628] mb-4">
                Find Your City
              </h2>
              <p className="text-gray-600 font-body text-lg max-w-2xl mx-auto">
                Every Nation Finland has churches across the country. Find the
                community nearest to you and join us this Sunday.
              </p>
            </div>

            {/* Featured cities grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {featuredCities.map((city, i) => (
                <Link
                  key={city.slug}
                  href={`/city/${city.slug}`}
                  className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="relative h-56">
                    <img
                      src={city.heroImage}
                      alt={`Every Nation ${city.name}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/90 via-[#0A1628]/30 to-transparent" />
                    <div
                      className="absolute top-4 left-4 w-2 h-8 rounded-full"
                      style={{ backgroundColor: city.accentColor }}
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="flex items-center gap-2 mb-1">
                      <MapPin className="w-3.5 h-3.5 text-[#F59E0B]" />
                      <span className="text-white/70 font-body text-xs">
                        {city.region}
                      </span>
                    </div>
                    <h3 className="font-display text-xl font-bold text-white mb-1">
                      Every Nation {city.name}
                    </h3>
                    <p className="text-white/70 font-body text-sm">
                      {city.tagline}
                    </p>
                    <div className="flex items-center gap-1.5 mt-3 text-[#F59E0B] font-body text-sm font-medium group-hover:gap-3 transition-all duration-200">
                      Learn More
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* All cities list */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <h3 className="font-display text-2xl font-bold text-[#0A1628] mb-6">
                All Cities
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {cities.map((city) => (
                  <Link
                    key={city.slug}
                    href={`/city/${city.slug}`}
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors duration-200 group"
                  >
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: city.accentColor + "20" }}
                    >
                      <MapPin
                        className="w-4 h-4"
                        style={{ color: city.accentColor }}
                      />
                    </div>
                    <div>
                      <div className="font-body font-semibold text-[#0A1628] text-sm group-hover:text-[#1A56DB] transition-colors">
                        {city.name}
                      </div>
                      <div className="text-gray-400 font-body text-xs">
                        {city.region}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CAMPUS SECTION ─── */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={campusSection.ref}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center transition-all duration-700 ${
              campusSection.inView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            {/* Image */}
            <div className="relative order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663580653589/Zws7cERX8vc9RxfETZzKLC/en-finland-campus-8dTJHivADeRPxYfwXzUXik.webp"
                  alt="Campus ministry Finland"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div className="absolute -top-6 -right-6 bg-[#F59E0B] rounded-xl p-5 shadow-xl">
                <div className="font-display text-3xl font-bold text-[#0A1628] mb-1">
                  15+
                </div>
                <div className="text-[#0A1628]/70 font-body text-sm font-medium">
                  University Campuses
                </div>
              </div>
            </div>

            {/* Text */}
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="gold-divider" />
                <span className="text-[#1A56DB] font-body text-sm font-semibold tracking-widest uppercase">
                  Campus Ministry
                </span>
              </div>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-[#0A1628] leading-tight mb-6">
                Reaching Every
                <br />
                <em className="italic text-[#1A56DB]">Campus</em>
              </h2>
              <p className="text-gray-600 font-body text-lg leading-relaxed mb-6">
                We firmly believe that if we change the campus, we will
                eventually change the family, the nation, and the world. Our
                campus missionaries are active at universities across Finland,
                evangelizing and discipling the next generation of leaders.
              </p>
              <p className="text-gray-600 font-body text-lg leading-relaxed mb-8">
                From Aalto University in Espoo to the University of Lapland in
                Rovaniemi, Every Nation Finland is present on campuses throughout
                the country.
              </p>
              <a
                href="#cities"
                className="inline-flex items-center gap-2 bg-[#0A1628] hover:bg-[#1A56DB] text-white font-body font-semibold px-7 py-3.5 rounded-full transition-all duration-200"
              >
                Find Campus Near You
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WORSHIP SECTION ─── */}
      <section
        ref={worshipSection.ref}
        className={`relative py-32 overflow-hidden transition-all duration-700 ${
          worshipSection.inView
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
      >
        <div className="absolute inset-0">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663580653589/Zws7cERX8vc9RxfETZzKLC/en-finland-hero-AnH5AVPg8k42m7LzeDKwg9.webp"
            alt="Worship"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0A1628]/80" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="gold-divider" />
            <span className="text-[#F59E0B] font-body text-sm font-semibold tracking-widest uppercase">
              Join Us
            </span>
            <div className="gold-divider" />
          </div>
          <h2 className="font-display text-4xl lg:text-6xl font-bold text-white leading-tight mb-6">
            You Are Welcome
            <br />
            <em className="italic text-[#F59E0B]">Just As You Are</em>
          </h2>
          <p className="text-white/80 font-body text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
            Whether you are a long-time believer or just curious about faith,
            there is a place for you in the Every Nation Finland family. Come
            experience authentic community, powerful worship, and life-changing
            teaching.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#cities"
              className="flex items-center gap-2 bg-[#F59E0B] hover:bg-[#D97706] text-[#0A1628] font-body font-semibold px-8 py-4 rounded-full transition-all duration-200 hover:shadow-xl hover:shadow-[#F59E0B]/30"
            >
              Find a Church
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="https://www.everynation.org"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/30 font-body font-semibold px-8 py-4 rounded-full transition-all duration-200"
            >
              Learn More About EN
            </a>
          </div>
        </div>
      </section>

      {/* ─── EVENTS SECTION ─── */}
      <section id="events" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="gold-divider" />
              <span className="text-[#1A56DB] font-body text-sm font-semibold tracking-widest uppercase">
                Upcoming
              </span>
              <div className="gold-divider" />
            </div>
            <h2 className="font-display text-4xl font-bold text-[#0A1628]">
              Events Across Finland
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                date: "May 4, 2026",
                title: "EN Finland National Conference",
                location: "Helsinki",
                type: "Conference",
                color: "#1A56DB",
              },
              {
                date: "May 18, 2026",
                title: "Campus Outreach Day",
                location: "Tampere University",
                type: "Outreach",
                color: "#DC2626",
              },
              {
                date: "June 1, 2026",
                title: "Summer Worship Night",
                location: "Turku",
                type: "Worship",
                color: "#059669",
              },
            ].map((event, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-200"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span
                    className="text-xs font-body font-semibold px-3 py-1 rounded-full text-white"
                    style={{ backgroundColor: event.color }}
                  >
                    {event.type}
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold text-[#0A1628] mb-3">
                  {event.title}
                </h3>
                <div className="flex items-center gap-2 text-gray-500 font-body text-sm mb-2">
                  <Calendar className="w-4 h-4" />
                  {event.date}
                </div>
                <div className="flex items-center gap-2 text-gray-500 font-body text-sm">
                  <MapPin className="w-4 h-4" />
                  {event.location}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CONTACT / VISIT SECTION ─── */}
      <section
        id="contact"
        className="py-24 lg:py-32 bg-[#0A1628]"
      >
        <div
          ref={contactSection.ref}
          className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
            contactSection.inView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="gold-divider" />
                <span className="text-[#F59E0B] font-body text-sm font-semibold tracking-widest uppercase">
                  Get Connected
                </span>
              </div>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                We'd Love to
                <br />
                <em className="italic text-[#F59E0B]">Hear From You</em>
              </h2>
              <p className="text-white/70 font-body text-lg leading-relaxed mb-8">
                Whether you have questions about our churches, want to get
                involved, or are looking for a community in your city, we are
                here for you. Reach out and let us help you find your place in
                the Every Nation Finland family.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#1A56DB] flex items-center justify-center">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <a
                  href="mailto:info@everynation.fi"
                  className="text-white font-body font-medium hover:text-[#F59E0B] transition-colors"
                >
                  info@everynation.fi
                </a>
              </div>
            </div>

            {/* Contact form */}
            <div
              id="visit"
              className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm"
            >
              <h3 className="font-display text-2xl font-bold text-white mb-6">
                Plan a Visit
              </h3>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert(
                    "Thank you! We will be in touch soon. God bless you!"
                  );
                }}
                className="space-y-4"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/70 font-body text-sm mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder="Mikael"
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 font-body text-sm focus:outline-none focus:border-[#1A56DB] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-white/70 font-body text-sm mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Virtanen"
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 font-body text-sm focus:outline-none focus:border-[#1A56DB] transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-white/70 font-body text-sm mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="mikael@example.com"
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 font-body text-sm focus:outline-none focus:border-[#1A56DB] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-white/70 font-body text-sm mb-2">
                    Your City
                  </label>
                  <select className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white font-body text-sm focus:outline-none focus:border-[#1A56DB] transition-colors">
                    <option value="" className="bg-[#0A1628]">
                      Select a city...
                    </option>
                    {cities.map((city) => (
                      <option
                        key={city.slug}
                        value={city.slug}
                        className="bg-[#0A1628]"
                      >
                        {city.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-white/70 font-body text-sm mb-2">
                    Message (optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us a bit about yourself..."
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 font-body text-sm focus:outline-none focus:border-[#1A56DB] transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#F59E0B] hover:bg-[#D97706] text-[#0A1628] font-body font-semibold py-3.5 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-[#F59E0B]/25"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
