'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FaHome, FaDumbbell, FaCalculator, FaCog, FaBars, FaTimes } from 'react-icons/fa';

interface MenuItem {
  href: string;
  icon: React.ComponentType;
  name: string;
}

const Navbar: React.FC = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems: MenuItem[] = [
    { href: '/index.html', icon: FaHome, name: 'Home' },
    { href: '/sections/workoutplan/workout.html', icon: FaDumbbell, name: 'Workouts' },
    { href: '/sections/calculator.html', icon: FaCalculator, name: 'Calculator' },
    { href: '/Loginpage/index.html', icon: FaCog, name: 'Settings' },
  ];

  return (
    <nav className="w-full bg-white text-gray-800 flex items-center justify-between mb-7">
      <div className="flex items-center space-x-2 w-28 h-28">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <img
            src="/compony-logo.png"
            alt="Company Logo"
            className="transition-all duration-300"
          />
        </Link>
      </div>
      
      <div className="hidden md:flex items-center space-x-4">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className={`flex items-center space-x-2 p-2 rounded-md ${router.pathname === item.href ? 'bg-gray-300' : 'hover:bg-gray-300'}`}
          >
            <item.icon className="text-xl" />
            <span className="text-lg">{item.name}</span>
          </Link>
        ))}
      </div>

      <div className="md:hidden flex items-center">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-2xl">
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <div className={`md:hidden fixed top-0 right-0 h-full bg-white text-black flex flex-col items-center p-16 transition-transform duration-300 ${isMenuOpen ? 'w-1/2' : 'w-0'} ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <button onClick={() => setIsMenuOpen(false)} className="absolute top-10 right-2 text-2xl">
          <FaTimes />
        </button>
        <div className="flex flex-col w-full h-full justify-center items-center">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={`flex items-center space-x-2 p-4 rounded-md ${router.pathname === item.href ? 'bg-gray-300' : 'hover:bg-gray-400'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              <item.icon className="text-xl" />
              <span className="text-lg">{item.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
