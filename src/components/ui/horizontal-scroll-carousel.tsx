"use client";

import * as React from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import Image from "next/image";

interface HorizontalScrollCarouselProps {
  images: string[];
}

const HorizontalScrollCarousel: React.FC<HorizontalScrollCarouselProps> = ({
  images,
}) => {
  const targetRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end -4.5"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["15%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[400vh] w-full">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {images.map((src) => (
            <Card src={src} key={src} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Card: React.FC<{ src: string }> = ({ src }) => {
  return (
    <div className="group relative h-112.5 w-112.5 overflow-hidden rounded-lg">
      <Image src={src} fill objectFit="cover" alt="carousel image" quality={100} />
    </div>
  );
};

export { HorizontalScrollCarousel };
