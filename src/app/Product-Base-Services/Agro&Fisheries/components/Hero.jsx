// ./components/Hero.jsx
"use client";
import React from "react";

export default function Hero({ data }) {
  return (
    <section
      className="relative w-full bg-cover bg-center min-h-[60vh] md:min-h-[72vh] lg:min-h-[80vh] flex items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(2,6,23,0.45), rgba(2,6,23,0.25)), url(${data.heroImage})`,
      }}
      aria-label={`${data.name} hero`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 w-full">
        <div className="max-w-3xl text-white">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white">
              {/* simple logo placeholder */}
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-white">
                <path d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2 2 6.477 2 12z" fill="currentColor" opacity="0.15"/>
                <path d="M8 12a4 4 0 018 0" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h4 className="text-lg md:text-xl font-semibold">{data.name}</h4>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Sustainable Farming & Responsible Fisheries
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-white/90 mb-6">
            ১১টি পুকুর, প্রায় {data.pondArea} পুকুরের আয়তন, এবং প্রায় {data.agriLand} কৃষিজমি — আমরা প্রযুক্তিভিত্তিক, পরিবেশ-বন্ধু পদ্ধতিতে উৎপাদন করি।
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#facilities"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm md:text-base shadow"
            >
              Explore Facilities
            </a>
            <a
              href="#gallery"
              className="inline-flex items-center gap-2 border border-white/40 text-white px-4 py-2 rounded-md text-sm md:text-base hover:bg-white/10"
            >
              View Gallery
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}