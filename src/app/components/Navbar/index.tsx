// 'use client'; // This is for a client component in Next.js.
// import React, { useState } from 'react';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import { FaHome, FaDumbbell, FaCalculator, FaCog, FaBars, FaTimes, FaAppleAlt } from 'react-icons/fa'; // Import an icon for Diet
// import Image from 'next/image';

// interface MenuItem {
//   href: string;
//   icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
//   name: string;
// }

// const Navbar: React.FC = () => {
//   const pathname = usePathname();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const menuItems: MenuItem[] = [
//     { href: '/', icon: FaHome, name: 'Home' },
//     { href: '/workout', icon: FaDumbbell, name: 'Workouts' },
//     { href: '/calculator', icon: FaCalculator, name: 'Calculator' },
//     { href: '/dietplan', icon: FaAppleAlt, name: 'Diet' }, // Added Diet menu item
//     // { href: '/setting', icon: FaCog, name: 'Settings' },
//   ];

//   return (
//     <nav className="w-full bg-white text-gray-800 flex items-center justify-between mb-10 sticky top-0 z-20 shadow-md">
//       <div className="flex items-center space-x-5 w-28 h-20">
//         <Link href="/" className="flex items-center gap-2" prefetch={false}>
//           <Image
//             src="/compony-logo.png"
//             alt="Company Logo"
//             width={90}
//             height={90}
//             className="transition-all duration-300 m-3"
//           />
//         </Link>
//       </div>
//       <div className="hidden md:flex items-center space-x-2">
//         {menuItems.map((item, index) => (
//           <Link
//             key={index}
//             href={item.href}
//             className={`flex items-center space-x-2 p-2 rounded-md ${pathname === item.href ? 'bg-gray-300' : 'hover:bg-gray-300'}`}
//           >
//             <item.icon className="text-xl" />
//             <span className="text-lg">{item.name}</span>
//           </Link>
//         ))}
//       </div>

//       <div className="md:hidden flex items-center relative">
//         <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-2xl absolute right-7">
//           {isMenuOpen ? <FaTimes /> : <FaBars />}
//         </button>
//       </div>

//       <div className={`md:hidden fixed top-0 right-0 h-full bg-white text-black flex flex-col items-center p-16 transition-transform duration-300 ${isMenuOpen ? 'w-1/2' : 'w-0'} ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
//         <button onClick={() => setIsMenuOpen(false)} className="absolute top-7 right-7 text-2xl">
//           <FaTimes />
//         </button>
//         <div className="flex flex-col w-full h-full justify-center items-center">
//           {menuItems.map((item, index) => (
//             <Link
//               key={index}
//               href={item.href}
//               className={`flex items-center space-x-2 p-4 rounded-md ${pathname === item.href ? 'bg-gray-300' : 'hover:bg-gray-400'}`}
//               onClick={() => setIsMenuOpen(false)}
//             >
//               <item.icon className="text-xl" />
//               <span className="text-lg">{item.name}</span>
//             </Link>
//           ))}
//           <hr />
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaHome, FaDumbbell, FaCalculator, FaAppleAlt, FaBars, FaTimes, FaUser } from 'react-icons/fa';
import Image from 'next/image';

interface MenuItem {
  href: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  name: string;
}

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for shadow only (height remains constant)
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMenuOpen && !target.closest('.mobile-menu') && !target.closest('.menu-button')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const menuItems: MenuItem[] = [
    { href: '/', icon: FaHome, name: 'Home' },
    { href: '/workout', icon: FaDumbbell, name: 'Workouts' },
    { href: '/calculator', icon: FaCalculator, name: 'Calculator' },
    { href: '/dietplan', icon: FaAppleAlt, name: 'Diet' },
  ];

  return (
    <>
      {/* Fixed navbar */}
      <nav 
        className={`w-full bg-white text-gray-800 fixed top-0 left-0 z-30 h-20 transition-shadow duration-300 ${
          scrolled ? 'shadow-lg' : 'shadow-md'
        }`}
        aria-label="Main navigation"
      >
        <div className="container mx-auto px-4 h-full flex items-center justify-between">
          <div className="flex items-center h-full">
            <Link href="/" className="flex items-center gap-2 h-full" prefetch={false} aria-label="Go to homepage">
              <Image
                src="/compony-logo.png"
                alt="Company Logo"
                width={120}
                height={120}
                className="my-2 mt-10"
                priority
              />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 h-full">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={`flex items-center space-x-2 px-4 h-full transition-all duration-200 ${
                  pathname === item.href 
                    ? 'bg-gray-800 text-white font-medium border-b-4 border-green-400' 
                    : 'hover:bg-gray-100'
                }`}
                aria-current={pathname === item.href ? 'page' : undefined}
              >
                <item.icon className="text-xl" aria-hidden="true" />
                <span className="text-lg">{item.name}</span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center h-full">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="menu-button text-2xl p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-400"
              aria-expanded={isMenuOpen}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 z-20 md:hidden" aria-hidden="true" />
        )}

        {/* Mobile Menu Panel */}
        <div 
          className={`mobile-menu md:hidden fixed top-0 right-0 h-full bg-white shadow-xl flex flex-col p-6 transition-transform duration-300 ease-in-out z-40 ${
            isMenuOpen ? 'w-64 translate-x-0' : 'w-64 translate-x-full'
          }`}
          role="dialog"
          aria-modal="true"
          aria-label="Main menu"
        >
          <div className="flex justify-end mb-6">
            <button 
              onClick={() => setIsMenuOpen(false)} 
              className="text-2xl p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-400"
              aria-label="Close menu"
            >
              <FaTimes />
            </button>
          </div>
          
          <div className="flex flex-col space-y-2">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={`flex items-center space-x-4 p-4 rounded-md transition-colors ${
                  pathname === item.href 
                    ? 'bg-gray-800 text-white font-medium border-b-4 border-green-400' 
                    : 'hover:bg-gray-100'
                }`}
                onClick={() => setIsMenuOpen(false)}
                aria-current={pathname === item.href ? 'page' : undefined}
              >
                <item.icon className="text-xl" aria-hidden="true" />
                <span className="text-lg">{item.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Spacer element to prevent content from being hidden behind the navbar */}
      <div className="h-20 w-full mb-10" />
    </>
  );
};

export default Navbar;
