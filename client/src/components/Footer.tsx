// Every Nation Finland — Footer Component
// Design: Nordic Modernism + Bold Mission
// Dark navy footer with city links and social media

import { Link } from "wouter";
import { Globe, Mail, Phone, Instagram, Facebook, Youtube } from "lucide-react";
import { cities } from "@/lib/cities";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0A1628] text-white">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-[#1A56DB] flex items-center justify-center">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display text-white font-bold text-xl">
                  Every Nation
                </span>
                <span className="text-[#F59E0B] text-xs font-body font-medium tracking-widest uppercase">
                  Finland
                </span>
              </div>
            </Link>
            <p className="text-white/60 font-body text-sm leading-relaxed mb-6">
              Christ-centered, Spirit-empowered, and socially responsible
              churches across Finland. We exist to honor God by establishing
              campus-reaching churches in every city.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com/everynationfinland"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#1A56DB] flex items-center justify-center transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com/everynationfinland"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#1A56DB] flex items-center justify-center transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com/everynationfinland"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#1A56DB] flex items-center justify-center transition-colors duration-200"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Cities column 1 */}
          <div>
            <h4 className="font-display text-white font-bold text-lg mb-6">
              Our Cities
            </h4>
            <ul className="space-y-3">
              {cities.slice(0, 6).map((city) => (
                <li key={city.slug}>
                  <Link
                    href={`/city/${city.slug}`}
                    className="flex items-center gap-2 text-white/60 hover:text-white font-body text-sm transition-colors duration-200 group"
                  >
                    <div
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0 opacity-60 group-hover:opacity-100 transition-opacity"
                      style={{ backgroundColor: city.accentColor }}
                    />
                    Every Nation {city.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Cities column 2 */}
          <div>
            <h4 className="font-display text-white font-bold text-lg mb-6">
              More Cities
            </h4>
            <ul className="space-y-3">
              {cities.slice(6).map((city) => (
                <li key={city.slug}>
                  <Link
                    href={`/city/${city.slug}`}
                    className="flex items-center gap-2 text-white/60 hover:text-white font-body text-sm transition-colors duration-200 group"
                  >
                    <div
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0 opacity-60 group-hover:opacity-100 transition-opacity"
                      style={{ backgroundColor: city.accentColor }}
                    />
                    Every Nation {city.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h4 className="font-display text-white font-bold text-lg mb-6">
              Get in Touch
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#F59E0B] mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:info@everynation.fi"
                  className="text-white/60 hover:text-white font-body text-sm transition-colors duration-200"
                >
                  info@everynation.fi
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#F59E0B] mt-0.5 flex-shrink-0" />
                <a
                  href="tel:+358401234567"
                  className="text-white/60 hover:text-white font-body text-sm transition-colors duration-200"
                >
                  +358 40 123 4567
                </a>
              </li>
            </ul>

            <div className="mt-8 pt-6 border-t border-white/10">
              <h5 className="text-white/80 font-body text-sm font-semibold mb-3 uppercase tracking-wider">
                Part of
              </h5>
              <a
                href="https://www.everynation.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1A56DB] hover:text-[#F59E0B] font-body text-sm font-medium transition-colors duration-200"
              >
                Every Nation Global →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 font-body text-xs">
            © {year} Every Nation Finland. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-white/40 hover:text-white/60 font-body text-xs transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-white/40 hover:text-white/60 font-body text-xs transition-colors"
            >
              Terms of Use
            </a>
            <a
              href="https://www.everynation.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white/60 font-body text-xs transition-colors"
            >
              everynation.org
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
