"use client";

import { HorizontalScrollCarousel } from "@/components/ui/horizontal-scroll-carousel";
import { TabsDemo } from "@/components/ui/tabs"; 
import ScrollProgressBar from "@/components/ui/scroll-progress-bar";

const starImages: string[] = [
  "/stars1.webp", 
  "/stars2.jpeg", 
  "/sun.jpg", 
  "/stars4.jpeg", 
  "/stars5.webp", 
];

function StarsCarouselDemo() {
  return (
    <div 
      className="relative min-h-[200vh] bg-cover bg-center bg-fixed bg-no-repeat"
      style={{ 
        backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 60%), url('/starsbg.jpeg')` 
      }}
    >
      <div className="relative z-[100]">
        <ScrollProgressBar 
          position="top-left" 
          type="circle"
          color="#3b82f6" 
          strokeSize={6}
          showPercentage={true}
        />
      </div>

      <div className="absolute inset-0 bg-black/20 -z-10"></div>

      <div className="bg-black/40 min-h-screen backdrop-blur-sm relative z-10">
        <TabsDemo /> 

        <div className="max-w-6xl mx-auto px-6 py-32 text-center">
          <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 mb-8 tracking-tighter uppercase leading-none">
            STARS
          </h1>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-10 shadow-[0_0_20px_rgba(59,130,246,1)]"></div>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed text-balance">
            A star is a luminous sphere of plasma held together by its own gravity. 
            The nearest star to Earth is the Sun, appearing as a multitude of fixed 
            luminous points in the sky.
          </p>
        </div>

        <div className="py-10">
          <HorizontalScrollCarousel images={starImages} />
        </div>

        <div className="max-w-6xl mx-auto px-6 py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-10 border border-white/10 bg-black/40 backdrop-blur-xl rounded-3xl space-y-4 hover:border-blue-500/40 transition-all duration-500 group">
              <span className="text-blue-400 font-bold uppercase tracking-widest text-xs">Evolution</span>
              <h4 className="text-3xl font-bold text-white group-hover:text-blue-400 transition-colors">Life Cycle of Stars</h4>
              <p className="text-lg leading-relaxed text-gray-400 font-light">
                Stars are born within the clouds of dust. Turbulence deep within these 
                clouds gives rise to knots with sufficient mass that the gas and dust 
                can begin to collapse under its own gravity.
              </p>
            </div>

            <div className="p-10 border border-white/10 bg-black/40 backdrop-blur-xl rounded-3xl space-y-4 hover:border-yellow-500/40 transition-all duration-500 group">
              <span className="text-yellow-400 font-bold uppercase tracking-widest text-xs">Spectral Type</span>
              <h4 className="text-3xl font-bold text-white group-hover:text-yellow-400 transition-colors">Classification</h4>
              <p className="text-lg leading-relaxed text-gray-400 font-light">
                Astronomers classify stars using the Morgan-Keenan (MK) system, 
                using letters O, B, A, F, G, K, and M—a sequence from the hottest (O) 
                to the coolest (M).
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
    </div>
  );
}

export default StarsCarouselDemo;