"use client";

import { HorizontalScrollCarousel } from "@/components/ui/horizontal-scroll-carousel";
import { TabsDemo } from "@/components/ui/tabs";
import ScrollProgressBar from "@/components/ui/scroll-progress-bar";

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
      className="relative min-h-[200vh] bg-cover bg-center bg-fixed bg-no-repeat"
      style={{ backgroundImage: "url('/1352911.png')" }}
    >
      <div className="relative z-[100]">
        <ScrollProgressBar 
          position="top-left" 
          type="circle"
          color="#60a5fa" 
          strokeSize={6}
          showPercentage={true}
        />
      </div>

      <div className="bg-black/70 min-h-screen backdrop-blur-sm">
        <TabsDemo />
        <h1 className="py-10 text-center text-4xl font-bold text-white">
          Exoplanets
        </h1>
        <h2 className="px-20 text-center text-2xl text-gray-200">
          An exoplanet is any planet beyond our solar system. Most of them orbit
          other stars, but some free-floating exoplanets, called rogue planets,
          are untethered to any star. We’ve confirmed more than 6,000
          exoplanets, out of the billions that we believe exist.
        </h2>

        <HorizontalScrollCarousel images={images} />

        <h2 className="pb-20 px-20 text-center text-2xl text-gray-200">
          Overview Most of the exoplanets discovered so far are in a relatively
          small region of our galaxy, the Milky Way. (“Small” meaning within
          thousands of light-years of our solar system; one light-year equals
          5.88 trillion miles, or 9.46 trillion kilometers.) Even the closest
          known exoplanet to Earth, Proxima Centauri b, is still about 4
          light-years away. We know there are more planets than stars in the
          galaxy.
        </h2>
      </div>
    </div>
  );
}

export default HorizontalScrollCarouselDemo;