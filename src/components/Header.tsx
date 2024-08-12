"use client";

// src/components/Header.tsx
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/images/ai.svg";
import ShinyButton from "@/components/magicui/shiny-button";

const Header = () => (
  <header className="">
    {/* this is for sticky/fixed navbar */}
{/* <header className="bg-gradient-to-r from-blue-200 to-cyan-200 sticky top-0 z-50">   */}
    <div className="container mx-auto flex items-center justify-between p-4 ">
      {/* <div className="text-2xl font-bold text-blue-900">Synchro-9</div> */}
      <div className="flex items-center justify-center w-full md:w-auto ">
        <Image src={logo} alt="Logo" className="md:w-3/4 w-48" />
      </div>
      <nav className="flex items-center space-x-4 /*text-black*/">
        <Link href="/solutions" className="hidden md:block">
          Solutions
        </Link>
        <Link href="/pricing" className="hidden md:block">
          Pricing
        </Link>
        <Link href="/resources" className="hidden md:block">
          Resources
        </Link>
        <Link href="/login" className="hidden md:block">
          Log in
        </Link>

        <ShinyButton text="CONTACT US" className="hidden md:block rounded " />
      </nav>
    </div>
  </header>
);

export default Header;
