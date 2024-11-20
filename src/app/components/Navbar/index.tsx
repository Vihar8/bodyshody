// 'use client';
// import React, { useState } from 'react';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import { FaHome, FaDumbbell, FaCalculator, FaCog, FaBars, FaTimes } from 'react-icons/fa';
// import Image from 'next/image';

// interface MenuItem {
//   href: string;
//   icon: React.ComponentType<React.SVGProps<SVGSVGElement>>; // Updated type
//   name: string;
// }

// const Navbar: React.FC = () => {
//   const pathname = usePathname();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const menuItems: MenuItem[] = [
//     { href: '/', icon: FaHome, name: 'Home' },
//     { href: '/workout', icon: FaDumbbell, name: 'Workouts' },
//     { href: '/calculator', icon: FaCalculator, name: 'Calculator' },
//     { href: '/loginpage', icon: FaCog, name: 'Settings' },
//   ];

//   return (
//     <nav className="w-full bg-white text-gray-800 flex items-center justify-between mb-10 sticky top-0 z-20 shadow-md">

// <div className="flex items-center space-x-5 w-28 h-20">
//   <Link href="/" className="flex items-center gap-2" prefetch={false}>
//     <Image
//       src="/compony-logo.png"
//       alt="Company Logo"
//       width={90}  // Set the width (w-28)
//       height={90} // Set the height (h-28)
//       className="transition-all duration-300 m-3"
//     />
//   </Link>
// </div>
//       <div className="hidden md:flex items-center space-x-2">
//         {menuItems.map((item, index) => (
//           <Link
//             key={index}
//             href={item.href}
//             className={`flex items-center space-x-2 p-2 rounded-md ${pathname === item.href ? 'bg-gray-300' : 'hover:bg-gray-300'}`}
//           >
//             <item.icon className="text-xl" /> {/* No type error now */}
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
//         <button onClick={() => setIsMenuOpen(false)} className="absolute top-12 right-7 text-2xl">
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
//       <hr/>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;




'use client'; // This is for a client component in Next.js.
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaHome, FaDumbbell, FaCalculator, FaCog, FaBars, FaTimes, FaAppleAlt } from 'react-icons/fa'; // Import an icon for Diet
import Image from 'next/image';

interface MenuItem {
  href: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  name: string;
}

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems: MenuItem[] = [
    { href: '/', icon: FaHome, name: 'Home' },
    { href: '/workout', icon: FaDumbbell, name: 'Workouts' },
    { href: '/calculator', icon: FaCalculator, name: 'Calculator' },
    { href: '/dietplan', icon: FaAppleAlt, name: 'Diet' }, // Added Diet menu item
    { href: '/setting', icon: FaCog, name: 'Settings' },
  ];

  return (
    <nav className="w-full bg-white text-gray-800 flex items-center justify-between mb-10 sticky top-0 z-20 shadow-md">
      <div className="flex items-center space-x-5 w-28 h-20">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <Image
            src="/compony-logo.png"
            alt="Company Logo"
            width={90}
            height={90}
            className="transition-all duration-300 m-3"
          />
        </Link>
      </div>
      <div className="hidden md:flex items-center space-x-2">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className={`flex items-center space-x-2 p-2 rounded-md ${pathname === item.href ? 'bg-gray-300' : 'hover:bg-gray-300'}`}
          >
            <item.icon className="text-xl" />
            <span className="text-lg">{item.name}</span>
          </Link>
        ))}
      </div>

      <div className="md:hidden flex items-center relative">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-2xl absolute right-7">
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <div className={`md:hidden fixed top-0 right-0 h-full bg-white text-black flex flex-col items-center p-16 transition-transform duration-300 ${isMenuOpen ? 'w-1/2' : 'w-0'} ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <button onClick={() => setIsMenuOpen(false)} className="absolute top-7 right-7 text-2xl">
          <FaTimes />
        </button>
        <div className="flex flex-col w-full h-full justify-center items-center">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={`flex items-center space-x-2 p-4 rounded-md ${pathname === item.href ? 'bg-gray-300' : 'hover:bg-gray-400'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              <item.icon className="text-xl" />
              <span className="text-lg">{item.name}</span>
            </Link>
          ))}
          <hr />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;