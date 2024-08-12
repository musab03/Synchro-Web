'use client'
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter, FaTiktok } from 'react-icons/fa';
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-white/[0.5]  py-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Company Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Company</h3>
            <ul>
              <li><Link href="#">The Linktree Blog</Link></li>
              <li><Link href="#">Engineering Blog</Link></li>
              <li><Link href="#">Marketplace</Link></li>
              <li><Link href="#">What’s New</Link></li>
              <li><Link href="#">About</Link></li>
              <li><Link href="#">Press</Link></li>
              <li><Link href="#">Careers</Link></li>
              <li><Link href="#">Social Good</Link></li>
              <li><Link href="#">Contact</Link></li>
            </ul>
          </div>

          {/* Community Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Community</h3>
            <ul>
              <li><Link href="#">Linktree Creator Services Program</Link></li>
              <li><Link href="#">Linktree for Enterprise</Link></li>
              <li><Link href="#">2022 Creator Report</Link></li>
              <li><Link href="#">Charities</Link></li>
              <li><Link href="#">Creator Profile Directory</Link></li>
              <li><Link href="#">Explore Templates</Link></li>
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Support</h3>
            <ul>
              <li><Link href="#">Help Topics</Link></li>
              <li><Link href="#">Getting Started</Link></li>
              <li><Link href="#">Linktree Pro</Link></li>
              <li><Link href="#">Features & How-Tos</Link></li>
              <li><Link href="#">FAQs</Link></li>
              <li><Link href="#">Report a Violation</Link></li>
            </ul>
          </div>

          {/* Trust & Legal Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Trust & Legal</h3>
            <ul>
              <li><Link href="#">Terms & Conditions</Link></li>
              <li><Link href="#">Privacy Notice</Link></li>
              <li><Link href="#">Cookie Notice</Link></li>
              <li><Link href="#">Trust Center</Link></li>
              <li><Link href="#">Cookie Preferences</Link></li>
            </ul>
          </div>
        </div>

        {/* Buttons and App Links */}
        <div className="flex flex-col sm:flex-row items-center justify-between mt-8">
          <div className="flex space-x-4 mb-4 sm:mb-0">
            <button className="bg-black text-white py-2 px-4 rounded">Log in</button>
            <button className="bg-lime-500 text-black py-2 px-4 rounded">Get started for free</button>
          </div>
          <div className="flex space-x-4">
            {/* <Link href="#"><img src="/images/app-store.png" alt="App Store" className="h-10" /></Link>
            <Link href="#"><img src="/images/google-play.png" alt="Google Play" className="h-10" /></Link> */}
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-4 mt-8">
        <Link href="#"><FaFacebook className="h-8 w-8" /></Link>
          <Link href="#"><FaInstagram className="h-8 w-8" /></Link>
          <Link href="#"><FaTwitter className="h-8 w-8" /></Link>
          <Link href="#"><FaTiktok className="h-8 w-8" /></Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
