import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="bg-[url(/westerlund.jpg)] h-screen w-full relative">
        <div className="absolute bg-black/10 h-screen w-full"></div>
        <span className="text-white text-6xl flex justify-center items-center"> Welcome to the Universe</span>
        <span className="text-white">Discover the universe: Learn about the history of the cosmos, what it's made of, and so much more.</span>
      </div>
    </div>
  );
};

export default page;
