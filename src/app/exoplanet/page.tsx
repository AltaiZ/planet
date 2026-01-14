"use client";

import { HorizontalScrollCarousel } from "@/components/ui/horizontal-scroll-carousel";
import { div } from "framer-motion/m";
import Image from "next/image";

const images: string[] = [
  "/exoplanet7.jpg",
  "/exoplanets2.avif",
  "/exoplanets1.webp",
  "/exoplanets4.png",
  "/exoplanets5.png",
];

function HorizontalScrollCarouselDemo() { 
  return (
     <div 
      className="min-h-fit bg-cover bg-center bg-fixed bg-no-repeat relative"
      style={{ 
        backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 60%), url('/1352911.png')` 
      }}
    >
      <div className="absolute inset-0 bg-black/20 -z-10"></div>

      <div className="relative z-10">
          <div className="max-w-5xl mx-auto px-6 py-32 text-center">
          <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 mb-8 tracking-tighter uppercase leading-none">
            Exoplanets
          </h1>
          <div className="w-20 h-1 bg-green-500 mx-auto mb-10 shadow-[0_0_20px_rgba(34,197,94,1)]"></div>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light max-w-3xl mx-auto">
            An exoplanet is any planet beyond our solar system. Most of them orbit
            other stars, but some free-floating exoplanets, called rogue planets,
            are untethered to any star.
            </p>
          </div>

          <div className="py-10">
            <HorizontalScrollCarousel images={images} />
          </div>
        <div className="max-w-6xl mx-auto px-6 py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 border border-white/5 bg-white/[0.03] backdrop-blur-md rounded-2xl transition-all duration-500 hover:border-green-500/50 hover:bg-white/[0.07] group">
                <span className="text-green-500 font-bold uppercase tracking-widest text-[10px] mb-2 block">Discovery</span>
                <h3 className="text-2xl font-bold text-white group-hover:text-green-400 transition-colors mb-3">
                  Galactic Reach
                </h3>
                <p className="text-base leading-relaxed text-gray-400 font-light">
                  Most discovered exoplanets are in a small region of the Milky Way. 
                  Even the closest, Proxima Centauri b, is 4 light-years away. We've 
                  confirmed more than 6,000 exoplanets out of billions.
              </p>
            </div>

            <div className="p-8 border border-white/5 bg-white/[0.03] backdrop-blur-md rounded-2xl transition-all duration-500 hover:border-blue-500/50 hover:bg-white/[0.07] group">
              <span className="text-blue-500 font-bold uppercase tracking-widest text-[10px] mb-2 block">Composition</span>
              <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors mb-3">
                Diverse Worlds
              </h3>
              <p className="text-base leading-relaxed text-gray-400 font-light">
                Compositions range from rocky (Earth-like) to gas-rich (Jupiter-like). 
                We’ve identified lava worlds, puffy planets the density of Styrofoam, 
                and planets dominated by water or ice.
                  </p>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
    </div>
  );
}



export default HorizontalScrollCarouselDemo;