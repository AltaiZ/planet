"use client";

import { HorizontalScrollCarousel } from "@/components/ui/horizontal-scroll-carousel";
import { TabsDemo } from "@/components/ui/tabs";
import ScrollProgressBar from "@/components/ui/scroll-progress-bar";

const solarImages: string[] = [
  "/earth.jpg",
  "/mars.jpg",
  "/jupiter.jpg",
  "/saturn.jpg",
  "/neptune.jpg",
];

function SolarSystemDemo() {
  return (
   <div 
      className="relative min-h-[200vh] bg-cover bg-center bg-fixed bg-no-repeat"
      style={{ 
        backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 60%), url('/solarbg.jpg')` 
      }}
    >
      <div className="relative z-[100]">
        <ScrollProgressBar 
          position="top-left" 
          type="circle"
          color="#eab308"
          strokeSize={6}
          showPercentage={true}
        />
      </div>

      <div className="absolute inset-0 bg-black/20 -z-10"></div>

      <div className="bg-black/40 min-h-screen backdrop-blur-sm relative z-10">
        <TabsDemo /> 

        <div className="max-w-6xl mx-auto px-6 py-32 text-center">
          <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 mb-8 tracking-tighter uppercase leading-none">
            Solar System
          </h1>
          <div className="w-20 h-1 bg-yellow-500 mx-auto mb-10 shadow-[0_0_20px_rgba(234,179,8,1)]"></div>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed text-balance">
            Our solar system consists of our star, the Sun, and everything bound to it by gravity — the planets Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune.
          </p>
        </div>

        <div className="py-10">
          <HorizontalScrollCarousel images={solarImages} />
        </div>

        <div className="max-w-6xl mx-auto px-6 py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 border border-white/5 bg-white/[0.03] backdrop-blur-md rounded-2xl transition-all duration-500 hover:border-yellow-500/50 hover:bg-white/[0.07] group">
              <span className="text-yellow-500 font-bold uppercase tracking-widest text-[10px] mb-2 block">Origin</span>
              <h3 className="text-2xl font-bold text-white group-hover:text-yellow-400 transition-colors mb-3">
                4.5 Billion Years Old
              </h3>
              <p className="text-base leading-relaxed text-gray-400 font-light">
                Our solar system formed from a dense cloud of interstellar gas and dust. The cloud collapsed, possibly due to the shockwave of a nearby exploding star, called a supernova.
              </p>
            </div>

            <div className="p-8 border border-white/5 bg-white/[0.03] backdrop-blur-md rounded-2xl transition-all duration-500 hover:border-red-500/50 hover:bg-white/[0.07] group">
              <span className="text-red-500 font-bold uppercase tracking-widest text-[10px] mb-2 block">Classification</span>
              <h3 className="text-2xl font-bold text-white group-hover:text-red-400 transition-colors mb-3">
                Terrestrial & Giants
              </h3>
              <p className="text-base leading-relaxed text-gray-400 font-light">
                The four inner planets are rocky terrestrial worlds. The four outer planets are giants: Jupiter and Saturn are gas giants, while Uranus and Neptune are ice giants.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
    </div>
  );
}

export default SolarSystemDemo;