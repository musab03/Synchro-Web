"use client";

import Image from "next/image";
import WebDev from "../../public/images/wedev.jpg";
import FeatureCard from "./CardsData/FeatureCardData";
import AiImage from "../../public/images/Ai.jpg"
import Cloud from '../../public/images/cloud.jpg'

// src/components/FeatureSection.tsx
const FeatureSection = () => {
  return (
    <section className=" bg-white py-10 sm:py-8 md:py-12 lg:py-16  ">
      <div className="flex items-center justify-center text-center mb-8">
        <hr className="flex-grow hidden lg:block lg:ml-custom-left border-t-2 border-blue-300" />
        <span className="mx-4 text-xl md:text-2xl lg:text-3xl font-semibold">
          Our services
        </span>
        <hr className="flex-grow hidden lg:block lg:mr-custom-right border-t-2 border-cyan-300" />
      </div>

      <div className="container mx-auto text-center px-4 sm:px-6 md:px-8 lg:px-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 md:mb-10 lg:mb-12 mx-auto w-full md:w-3/4 lg:w-1/2">
          We Provide All-In-One Solution For Every IT Job
        </h2>
       <div className="flex flex-wrap justify-center gap-4">
            <FeatureCard 
            imageSrc={WebDev}
            title="Web Development"  
            description ="We bring together creative thinkers and tech experts to build beautiful and functional websites. No matter what you need, we’ll custom-design a website that perfectly fits your goals. Let us help you create a strong online presence that makes a lasting impression."/>
   
            <FeatureCard 
            imageSrc={AiImage}
            title="Artificial Intelligence" 
            description="We bring together creative thinkers and tech experts to build beautiful and functional websites. No matter what you need, we’ll custom-design a website that perfectly fits your goals. Let us help you create a strong online presence that makes a lasting impression."/>

            <FeatureCard 
            imageSrc={Cloud}
            title="Cloud Computing" 
            description="We bring together creative thinkers and tech experts to build beautiful and functional websites. No matter what you need, we’ll custom-design a website that perfectly fits your goals. Let us help you create a strong online presence that makes a lasting impression."/>
       </div>
      </div>
    </section>
  );
};

export default FeatureSection;
