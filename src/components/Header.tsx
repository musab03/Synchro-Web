'use client'

// src/components/Header.tsx
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/images/logo1.png'; 

const Header = () => 
  
    <header style={{
      background: 'linear-gradient(to right, #6dd5ed, #faa3f2)',
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', // example shadow, adjust as needed
    }}>
      <div className="container mx-auto flex items-center justify-between p-6">
        {/* <div className="text-2xl font-bold text-blue-900">Synchro-9</div> */}
        <div className="flex items-center space-x-2"> 
          <Image src={logo} alt="Logo" width={100} height={100} />   </div>
        <nav className="flex items-center space-x-4">
          <Link href="/solutions">Solutions</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/resources">Resources</Link>
          <Link href="/login">Log in</Link>
          <button className="hidden md:block bg-black text-white px-4 py-2 rounded ">Start free trial</button>
        </nav>
      </div>
    </header>



export default Header;

