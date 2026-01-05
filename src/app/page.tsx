"use client";
import Image from "next/image";
import InteractiveSelector from "@/components/ui/interactive-selector";

const DemoOne = () => {
  return (
    <div className="w-full h-min-screen relative">
      <div className="w-full h-screen absolute top-0">
        <Image
          fill
          alt="galaxy"
          src={
            "/jeremy-thomas-4dpAqfTbvKA-unsplash.jpg"
          }
          quality={100}
        ></Image>
      </div>
      <InteractiveSelector />
    </div>
  );
};

export default DemoOne;
