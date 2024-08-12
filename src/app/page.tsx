import Explore from "@/components/Explore";
import FeatureSection from "@/components/FeatureSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Test from "@/components/ServiceSection";


export default function Home() {
  return (
    <>
    {/* bg-gradient-to-r from-[#7dddf3] to-[#fbc0f5] */}
    <main className="min-h-screen bg-gradient-to-r from-blue-200 to-cyan-200 antialiased bg-grid-white/[0.02]">
    {/* <main className="min-h-screen bg-[#F8F7F2] antialiased bg-grid-white/[0.02]"> */}

   
    <Header/>
    <Hero/>
    <FeatureSection/>
    <Explore/>
    <Test/>
    <Footer/>
    
    </main>
    </>
  );
}
