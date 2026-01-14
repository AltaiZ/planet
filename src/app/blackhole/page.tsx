"use client";

import { HorizontalScrollCarousel } from "@/components/ui/horizontal-scroll-carousel";

const blackHoleImages: string[] = [
  "/blackhole1.webp",
  "/blackhole2.jpg", 
  "/blackhole3.png",
  "/blackhole4.jpg", 
  "/blackhole5.jpg",
];

function BlackHoleCarouselDemo() {
  return (
    <div 
      className="min-h-fit bg-cover bg-center bg-fixed bg-no-repeat relative"
      style={{ 
        backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 60%), url('/blackholebg.png')` 
      }}
    >
      <div className="absolute inset-0 bg-black/20 -z-10"></div>

      <div className="relative z-10">
        <div className="max-w-6xl mx-auto px-6 py-32 text-center">
          <h1 className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tighter uppercase italic">
            Black <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-white to-blue-500">Holes</span>
          </h1>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-10 shadow-[0_0_20px_rgba(249,115,22,1)]"></div>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
            A black hole is a region of spacetime where gravity is so strong that 
            nothing—no particles or even electromagnetic radiation such as light—can escape from it.
          </p>
        </div>

        <div className="py-10">
          <HorizontalScrollCarousel images={blackHoleImages} />
        </div>

        <div className="max-w-6xl mx-auto px-6 py-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 border border-white/10 bg-black/40 backdrop-blur-xl rounded-2xl transition-all hover:border-orange-500/50 group">
              <h3 className="text-orange-500 font-bold mb-4 uppercase tracking-widest text-sm">The Boundary</h3>
              <h4 className="text-2xl text-white mb-3 font-semibold group-hover:text-orange-400 transition-colors">Event Horizon</h4>
              <p className="text-gray-400 leading-relaxed">
                The "point of no return." Beyond this boundary, the escape velocity 
                exceeds the speed of light.
              </p>
            </div>

            <div className="p-8 border border-white/10 bg-black/40 backdrop-blur-xl rounded-2xl transition-all hover:border-blue-500/50 group">
              <h3 className="text-blue-500 font-bold mb-4 uppercase tracking-widest text-sm">The Core</h3>
              <h4 className="text-2xl text-white mb-3 font-semibold group-hover:text-blue-400 transition-colors">Singularity</h4>
              <p className="text-gray-400 leading-relaxed">
                At the center of a black hole, matter is crushed into a region of 
                infinite density and zero volume.
              </p>
            </div>

            <div className="p-8 border border-white/10 bg-black/40 backdrop-blur-xl rounded-2xl transition-all hover:border-purple-500/50 group">
              <h3 className="text-purple-500 font-bold mb-4 uppercase tracking-widest text-sm">Light Trap</h3>
              <h4 className="text-2xl text-white mb-3 font-semibold group-hover:text-purple-400 transition-colors">Accretion Disk</h4>
              <p className="text-gray-400 leading-relaxed">
                A rotating disk of matter formed by accretion around a central 
                massive body, emitting intense radiation.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
    </div>
  );
}

export default BlackHoleCarouselDemo;
