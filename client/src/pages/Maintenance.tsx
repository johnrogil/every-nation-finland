// Every Nation Finland — Under Construction / Maintenance Page
// Design: Nordic Modernism + Bold Mission

import { Mail, Globe, Instagram, Facebook, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function Maintenance() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A1628] via-[#1A2847] to-[#0A1628] flex flex-col items-center justify-center px-4 py-12 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#1A56DB]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#F59E0B]/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl w-full text-center">
        {/* Logo */}
        <div className="mb-12 flex justify-center">
          <div className="w-20 h-20 bg-gradient-to-br from-[#1A56DB] to-[#0A3BA0] rounded-full flex items-center justify-center shadow-2xl">
            <Globe className="w-10 h-10 text-white" />
          </div>
        </div>

        {/* Main heading */}
        <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
          Every Nation Finland
        </h1>

        {/* Subheading */}
        <div className="inline-block mb-8">
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3">
            <div className="w-2 h-2 bg-[#F59E0B] rounded-full animate-pulse" />
            <span className="font-body text-white/80 text-sm font-medium">
              Coming Soon
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="font-body text-xl text-white/70 mb-6 leading-relaxed">
          We're building something amazing for Every Nation Finland. Our new
          website is under construction and will be live very soon. Thank you
          for your patience!
        </p>

        {/* Features list */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          {[
            { icon: "🙏", text: "12 Cities" },
            { icon: "👥", text: "Growing Community" },
            { icon: "🎓", text: "Campus Ministry" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-colors"
            >
              <div className="text-3xl mb-2">{item.icon}</div>
              <p className="font-body text-white/70 text-sm">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Email notification form */}
        <div className="mb-12">
          <p className="font-body text-white/60 text-sm mb-4">
            Get notified when we launch
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 bg-white/10 border border-white/20 rounded-full px-6 py-3 text-white placeholder-white/40 font-body text-sm focus:outline-none focus:border-[#1A56DB] focus:bg-white/15 transition-all"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-[#1A56DB] to-[#1648C0] text-white font-body font-semibold px-8 py-3 rounded-full hover:shadow-lg hover:shadow-[#1A56DB]/50 transition-all flex items-center justify-center gap-2 whitespace-nowrap"
            >
              Notify Me
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
          {submitted && (
            <p className="text-[#F59E0B] font-body text-sm mt-3 animate-fade-up">
              ✓ Thanks! We'll be in touch soon.
            </p>
          )}
        </div>

        {/* Social links */}
        <div className="flex justify-center gap-6 mb-12">
          <a
            href="https://instagram.com/everynationfinland"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-white/10 hover:bg-[#1A56DB] border border-white/20 rounded-full flex items-center justify-center transition-all group"
            title="Instagram"
          >
            <Instagram className="w-5 h-5 text-white/60 group-hover:text-white" />
          </a>
          <a
            href="https://facebook.com/everynationfinland"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-white/10 hover:bg-[#1A56DB] border border-white/20 rounded-full flex items-center justify-center transition-all group"
            title="Facebook"
          >
            <Facebook className="w-5 h-5 text-white/60 group-hover:text-white" />
          </a>
          <a
            href="mailto:info@everynation.fi"
            className="w-12 h-12 bg-white/10 hover:bg-[#1A56DB] border border-white/20 rounded-full flex items-center justify-center transition-all group"
            title="Email"
          >
            <Mail className="w-5 h-5 text-white/60 group-hover:text-white" />
          </a>
        </div>

        {/* Footer text */}
        <p className="font-body text-white/40 text-xs">
          Every Nation Finland • Reaching Every Campus, Every City
        </p>
      </div>

      {/* Decorative bottom line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1A56DB]/50 to-transparent" />
    </div>
  );
}
