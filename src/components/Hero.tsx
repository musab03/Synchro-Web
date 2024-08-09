"use client";

import Image from "next/image";
import race1 from "../../public/images/main image.jpg";
import Wordrotate from "./magicui/word-rotate";

const words = [
  "Choice",
  "Work",
  "Technology",
  "Service",
  "Design",
  "Management",
  "Development",
];

const Hero = () => (
  <section className=" md:py-28 lg:py-40 ">
    <div className="container mx-auto p-6 flex flex-col-reverse md:flex-row items-center justify-between text-black">
      <div className="text-center md:text-left mt-8 md:mt-0">
        <div className="flex justify-center md:justify-normal items-center text-4xl md:text-4xl lg:text-6xl xl:text-7xl font-bold mb-4 text-slate-950">
          <span className="">Smart</span>
          <Wordrotate words={words} className="ml-3 text-blue-900" />
        </div>

        <p className="text-base md:text-lg lg:text-xl mb-6 w-full md:w-3/4 font-light md:font-bold mt-4 md:mt-8">
          One platform that lets you sell wherever your customers are — online,
          in-person, and everywhere in between.
        </p>
        <button className="bg-black text-white px-4 py-2 md:px-6 md:py-3 rounded-full">
          Get Started
        </button>
        <p className="mt-4 md:mt-8 text-xs md:text-sm">
          Try us free for 3 days, no credit card required.
        </p>
      </div>

      <div className="relative w-full max-w-lg mt-8 md:mt-0">
        <div className="relative">
          <Image
            src={race1}
            alt="Main Image"
            className="w-full h-auto rounded-lg"
          />
        </div>
        {/* <!-- Smaller Image 1 --> */}
        <div className="absolute bottom-0 left-0 transform translate-y-16 -translate-x-1/4 p-4 rounded-lg z-10">
          {/* <Image src={race} alt="Smaller Image 1" className="w-32 h-32 md:w-48 md:h-40 rounded-lg hidden lg:block" /> */}
        </div>
        {/* <!-- Smaller Image 2 --> */}
        <div className="absolute bottom-0 right-0 transform translate-y-16 translate-x-1/4 p-4 z-10">
          {/* <Image src={race} alt="Smaller Image 2" className="w-32 h-32 md:w-40 md:h-60 rounded-lg hidden lg:block" /> */}
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
