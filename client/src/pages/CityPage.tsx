// Every Nation Finland — City Page (Sub-site)
// Design: Nordic Modernism + Bold Mission
// Each city has its own branded sub-site with unique accent color

import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "wouter";
import {
  ArrowLeft,
  MapPin,
  Clock,
  Mail,
  Phone,
  Instagram,
  Facebook,
  Calendar,
  Users,
  BookOpen,
  ArrowRight,
  Globe,
  Heart,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getCityBySlug, cities } from "@/lib/cities";

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

export default function CityPage() {
  const params = useParams<{ citySlug: string }>();
  const city = getCityBySlug(params.citySlug || "");

  const aboutSection = useInView();
  const infoSection = useInView();
  const otherCitiesSection = useInView();

  // Scroll to top on city change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [params.citySlug]);

  if (!city) {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="font-display text-4xl font-bold text-[#0A1628] mb-4">
              City Not Found
            </h1>
            <p className="text-gray-600 font-body mb-8">
              We couldn't find a church in that city yet.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-[#1A56DB] text-white font-body font-semibold px-6 py-3 rounded-full"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Every Nation Finland
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const otherCities = cities.filter((c) => c.slug !== city.slug).slice(0, 4);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* ─── CITY HERO ─── */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src={city.heroImage}
            alt={`Every Nation ${city.name}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-[#0A1628]/60 to-[#0A1628]/20" />
        </div>

        {/* Accent color bar */}
        <div
          className="absolute top-0 left-0 right-0 h-1"
          style={{ backgroundColor: city.accentColor }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-32 w-full">
          {/* Breadcrumb */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white font-body text-sm mb-8 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Every Nation Finland
          </Link>

          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4 animate-fade-up">
              <div
                className="w-3 h-8 rounded-full"
                style={{ backgroundColor: city.accentColor }}
              />
              <span
                className="font-body text-sm font-semibold tracking-widest uppercase"
                style={{ color: city.accentColor }}
              >
                Every Nation
              </span>
            </div>

            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4 animate-fade-up-delay-1">
              {city.name}
            </h1>

            <p className="text-white/80 font-body text-xl leading-relaxed mb-8 animate-fade-up-delay-2">
              {city.tagline}
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-up-delay-3">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
                <Clock className="w-4 h-4 text-white/70" />
                <span className="text-white font-body text-sm">
                  {city.serviceTime}
                </span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
                <MapPin className="w-4 h-4 text-white/70" />
                <span className="text-white font-body text-sm">
                  {city.serviceLocation}
                </span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
                <Globe className="w-4 h-4 text-white/70" />
                <span className="text-white font-body text-sm">
                  Est. {city.established}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── QUICK ACTIONS ─── */}
      <section
        className="py-8 border-b border-gray-100"
        style={{ backgroundColor: city.accentColor }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center sm:justify-between items-center">
            <div className="flex items-center gap-2 text-white font-body font-semibold text-sm">
              <Clock className="w-4 h-4" />
              Services: {city.serviceTime}
            </div>
            <div className="flex items-center gap-2 text-white font-body font-semibold text-sm">
              <MapPin className="w-4 h-4" />
              {city.address}
            </div>
            <a
              href={`mailto:${city.email}`}
              className="bg-white text-[#0A1628] font-body font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-white/90 transition-colors"
            >
              Get Directions
            </a>
          </div>
        </div>
      </section>

      {/* ─── ABOUT CITY CHURCH ─── */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={aboutSection.ref}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-start transition-all duration-700 ${
              aboutSection.inView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            {/* Text */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-12 h-0.5 rounded-full"
                  style={{ backgroundColor: city.accentColor }}
                />
                <span
                  className="font-body text-sm font-semibold tracking-widest uppercase"
                  style={{ color: city.accentColor }}
                >
                  About Us
                </span>
              </div>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-[#0A1628] leading-tight mb-6">
                Every Nation
                <br />
                <em
                  className="italic"
                  style={{ color: city.accentColor }}
                >
                  {city.name}
                </em>
              </h2>
              <p className="text-gray-600 font-body text-lg leading-relaxed mb-8">
                {city.description}
              </p>

              {/* Values */}
              <div className="space-y-4">
                {[
                  {
                    icon: Heart,
                    title: "Christ-Centered",
                    desc: "Jesus is the foundation of everything we do in " + city.name,
                  },
                  {
                    icon: Users,
                    title: "Community",
                    desc: "A welcoming family for everyone in " + city.region,
                  },
                  {
                    icon: BookOpen,
                    title: "Campus Reaching",
                    desc: "Active at " + city.university,
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: city.accentColor + "15" }}
                    >
                      <item.icon
                        className="w-5 h-5"
                        style={{ color: city.accentColor }}
                      />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-[#0A1628] text-base mb-1">
                        {item.title}
                      </h4>
                      <p className="text-gray-500 font-body text-sm">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Info cards */}
            <div
              ref={infoSection.ref}
              className={`space-y-6 transition-all duration-700 delay-200 ${
                infoSection.inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              {/* Service info */}
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h3 className="font-display text-xl font-bold text-[#0A1628] mb-5">
                  Service Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Clock
                      className="w-5 h-5 mt-0.5 flex-shrink-0"
                      style={{ color: city.accentColor }}
                    />
                    <div>
                      <div className="font-body font-semibold text-[#0A1628] text-sm">
                        Service Time
                      </div>
                      <div className="text-gray-600 font-body text-sm">
                        {city.serviceTime}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin
                      className="w-5 h-5 mt-0.5 flex-shrink-0"
                      style={{ color: city.accentColor }}
                    />
                    <div>
                      <div className="font-body font-semibold text-[#0A1628] text-sm">
                        Location
                      </div>
                      <div className="text-gray-600 font-body text-sm">
                        {city.address}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users
                      className="w-5 h-5 mt-0.5 flex-shrink-0"
                      style={{ color: city.accentColor }}
                    />
                    <div>
                      <div className="font-body font-semibold text-[#0A1628] text-sm">
                        Lead Pastor
                      </div>
                      <div className="text-gray-600 font-body text-sm">
                        {city.pastor}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <BookOpen
                      className="w-5 h-5 mt-0.5 flex-shrink-0"
                      style={{ color: city.accentColor }}
                    />
                    <div>
                      <div className="font-body font-semibold text-[#0A1628] text-sm">
                        Campus Ministry
                      </div>
                      <div className="text-gray-600 font-body text-sm">
                        {city.university}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact info */}
              <div
                className="rounded-2xl p-6 text-white"
                style={{ backgroundColor: city.accentColor }}
              >
                <h3 className="font-display text-xl font-bold mb-5">
                  Contact Us
                </h3>
                <div className="space-y-4">
                  <a
                    href={`mailto:${city.email}`}
                    className="flex items-center gap-3 hover:opacity-80 transition-opacity"
                  >
                    <Mail className="w-5 h-5 flex-shrink-0" />
                    <span className="font-body text-sm">{city.email}</span>
                  </a>
                  <a
                    href={`tel:${city.phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-3 hover:opacity-80 transition-opacity"
                  >
                    <Phone className="w-5 h-5 flex-shrink-0" />
                    <span className="font-body text-sm">{city.phone}</span>
                  </a>
                  <a
                    href={`https://instagram.com/${city.instagram.replace("@", "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 hover:opacity-80 transition-opacity"
                  >
                    <Instagram className="w-5 h-5 flex-shrink-0" />
                    <span className="font-body text-sm">{city.instagram}</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-3 hover:opacity-80 transition-opacity"
                  >
                    <Facebook className="w-5 h-5 flex-shrink-0" />
                    <span className="font-body text-sm">{city.facebook}</span>
                  </a>
                </div>
              </div>

              {/* Plan a visit CTA */}
              <div className="bg-[#0A1628] rounded-2xl p-6 text-white">
                <h3 className="font-display text-xl font-bold mb-3">
                  Plan Your First Visit
                </h3>
                <p className="text-white/70 font-body text-sm mb-5">
                  We'd love to welcome you to Every Nation {city.name}. Fill out
                  the form and we'll be in touch!
                </p>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert(
                      `Thank you! We'll be in touch about your visit to Every Nation ${city.name}. God bless you!`
                    );
                  }}
                  className="space-y-3"
                >
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 font-body text-sm focus:outline-none focus:border-white/50 transition-colors"
                  />
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 font-body text-sm focus:outline-none focus:border-white/50 transition-colors"
                  />
                  <button
                    type="submit"
                    className="w-full font-body font-semibold py-3 rounded-xl transition-all duration-200 text-[#0A1628]"
                    style={{ backgroundColor: city.accentColor === "#0A1628" ? "#F59E0B" : city.accentColor }}
                  >
                    I'm Coming!
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CITY IMAGE BANNER ─── */}
      <section className="relative h-72 overflow-hidden">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663580653589/Zws7cERX8vc9RxfETZzKLC/en-finland-city-2nGJjRCjGA67MbwdE9A6gE.webp"
          alt="Finland city"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0A1628]/70 flex items-center justify-center">
          <div className="text-center">
            <p className="text-white/70 font-body text-sm uppercase tracking-widest mb-2">
              Part of
            </p>
            <h3 className="font-display text-3xl lg:text-4xl font-bold text-white">
              Every Nation Finland
            </h3>
            <p className="text-white/70 font-body text-sm mt-2">
              {cities.length} churches across the country
            </p>
          </div>
        </div>
      </section>

      {/* ─── UPCOMING EVENTS ─── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-10">
            <div
              className="w-12 h-0.5 rounded-full"
              style={{ backgroundColor: city.accentColor }}
            />
            <h2 className="font-display text-3xl font-bold text-[#0A1628]">
              Upcoming in {city.name}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: `Sunday Service`,
                desc: `Join us for worship, prayer, and the Word at Every Nation ${city.name}.`,
                date: "Every Sunday",
                icon: Heart,
              },
              {
                title: "Small Groups",
                desc: `Connect with others in a small group setting throughout ${city.name}.`,
                date: "Weekdays",
                icon: Users,
              },
              {
                title: "Campus Outreach",
                desc: `We're active on campus at ${city.university.split(",")[0]}.`,
                date: "Weekly",
                icon: BookOpen,
              },
            ].map((event, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: city.accentColor + "15" }}
                >
                  <event.icon
                    className="w-5 h-5"
                    style={{ color: city.accentColor }}
                  />
                </div>
                <h3 className="font-display text-xl font-bold text-[#0A1628] mb-2">
                  {event.title}
                </h3>
                <p className="text-gray-600 font-body text-sm mb-4">
                  {event.desc}
                </p>
                <div className="flex items-center gap-2 text-gray-400 font-body text-xs">
                  <Calendar className="w-3.5 h-3.5" />
                  {event.date}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── OTHER CITIES ─── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={otherCitiesSection.ref}
            className={`transition-all duration-700 ${
              otherCitiesSection.inView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex items-center justify-between mb-10">
              <div className="flex items-center gap-3">
                <div className="gold-divider" />
                <h2 className="font-display text-3xl font-bold text-[#0A1628]">
                  Other Cities
                </h2>
              </div>
              <Link
                href="/"
                className="flex items-center gap-2 text-[#1A56DB] hover:text-[#0A1628] font-body text-sm font-medium transition-colors"
              >
                View All
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {otherCities.map((otherCity) => (
                <Link
                  key={otherCity.slug}
                  href={`/city/${otherCity.slug}`}
                  className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative h-40">
                    <img
                      src={otherCity.heroImage}
                      alt={`Every Nation ${otherCity.name}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/80 to-transparent" />
                    <div
                      className="absolute top-3 left-3 w-1.5 h-6 rounded-full"
                      style={{ backgroundColor: otherCity.accentColor }}
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="font-display text-base font-bold text-white">
                      {otherCity.name}
                    </h3>
                    <p className="text-white/60 font-body text-xs">
                      {otherCity.region}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
