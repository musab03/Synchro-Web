import React from "react";
import RotatingCloud from "@/components/CardsData/RotatingCloud";

const ServiceSection = () => {
  return (
    <div className="min-h-screen py-16">
    {/* <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 min-h-screen py-16"> */}
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between text-white">
        <div className="w-full rounded-xl py-16 flex flex-col-reverse md:flex-row items-center justify-between text-white">
          <div className="relative w-full max-w-lg mt-8 md:mt-0">
            <RotatingCloud
              iconSlugs={[
                "typescript",
                "javascript",
                "dart",
                "java",
                "react",
                "flutter",
                "android",
                "html5",
                "css3",
                "nodedotjs",
                "express",
                "nextdotjs",
                "prisma",
                "amazonaws",
                "postgresql",
                "firebase",
                "nginx",
                "vercel",
                "testinglibrary",
                "jest",
                "cypress",
                "docker",
                "git",
                "jira",
                "github",
                "gitlab",
                "visualstudiocode",
                "androidstudio",
                "sonarqube",
                "figma",
              ]}
            />
          </div>
          <div className="w-full md:w-1/2 bg-gray-700 bg-opacity-75 p-8 rounded-lg shadow-lg">
            <h2 className="ml-4 text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              We’re Building Innovative Solutions For <span className="text-yellow-300">Modern Businesses</span>
            </h2>
            <p className="text-white text-base md:text-lg lg:text-xl ml-4 leading-relaxed mb-4">
              We are a forward-thinking software development company dedicated to staying ahead of emerging technologies and industry trends. Our expertise includes web development, mobile development, E-Commerce, CRM Systems, Digital Marketing, and artificial intelligence. By continuously evolving and adapting, we provide innovative and competitive solutions that drive success for our clients.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;





