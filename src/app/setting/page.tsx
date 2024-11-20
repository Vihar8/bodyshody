import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Image from "next/image";

const page = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          This Page is Under Maintenance
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          We are working hard to improve your experience. Please check back later.
        </p>
        <div className="w-96px h-auto">
          {/* Replace the src with the actual path to your "Under Maintenance" image */}
          <Image
            src="/undermaintenance.jpg"
            alt="Under Maintenance"
            width={900}
            height={900}
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
