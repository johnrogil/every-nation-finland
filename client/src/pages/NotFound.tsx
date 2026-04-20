// Every Nation Finland — 404 Not Found Page
// Design: Nordic Modernism + Bold Mission

import { Link } from "wouter";
import { ArrowLeft, Globe } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-center justify-center py-24">
        <div className="text-center px-4 max-w-lg">
          <div className="w-20 h-20 rounded-full bg-[#1A56DB]/10 flex items-center justify-center mx-auto mb-8">
            <Globe className="w-10 h-10 text-[#1A56DB]" />
          </div>
          <div className="font-display text-8xl font-bold text-[#0A1628]/10 mb-4">
            404
          </div>
          <h1 className="font-display text-3xl font-bold text-[#0A1628] mb-4">
            Page Not Found
          </h1>
          <p className="text-gray-600 font-body text-lg leading-relaxed mb-8">
            The page you are looking for does not exist. Perhaps you were
            looking for one of our city churches?
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-[#1A56DB] text-white font-body font-semibold px-6 py-3 rounded-full hover:bg-[#1648C0] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            <Link
              href="/#cities"
              className="inline-flex items-center gap-2 bg-gray-100 text-[#0A1628] font-body font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition-colors"
            >
              Find a City
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
