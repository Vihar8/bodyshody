import Link from "next/link";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { SiGoogleplay } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {/* Useful Links */}
        <div>
          <h2 className="text-lg font-bold mb-4 text-white">Useful Links</h2>
          <ul className="space-y-2 text-sm text-white">
            <li><Link href="/" className="hover:underline">Exercise Updates</Link></li>
            <li><Link href="/" className="hover:underline">Privacy Policy</Link></li>
            <li><Link href="/" className="hover:underline">Terms and Conditions</Link></li>
            <li><Link href="/" className="hover:underline">Contact Us</Link></li>
          </ul>
        </div>

        {/* Description */}
        <div>
          <h2 className="text-lg font-bold mb-4 text-white">What We Do</h2>
          <p className="text-sm text-white leading-relaxed mb-2">
            At <span className="font-semibold text-yellow-400">Body Shody</span>, we simplify fitness for everyone.
            Whether you're a beginner or a seasoned athlete, our platform helps you train smarter with:
          </p>
          <ul className="list-disc list-inside space-y-1 text-sm text-white pl-2">
            <li>A fully interactive muscle map to explore exercises by body part</li>
            <li>Step-by-step guides with visual demonstrations</li>
            <li>Customized workouts based on your goals, time, and equipment</li>
            <li>Tools to calculate your calories, macros, and track your progress</li>
          </ul>
          <p className="text-sm text-white mt-3">
            No confusion, no fluff — just clear, science-backed fitness guidance tailored to you.
          </p>
        </div>


        {/* Social & Play Store */}
        <div>
          <h2 className="text-lg font-bold mb-4 text-white">Connect With Us</h2>
          <div className="flex items-center space-x-4 text-2xl mb-4">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-700 pt-4 flex justify-center items-center">
      <p className="text-sm text-white">
          Copyright © {new Date().getFullYear()} BodyShody. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
