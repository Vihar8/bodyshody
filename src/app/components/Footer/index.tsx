import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-blue-900 py-6 mt-10">
          <div className="container mx-auto text-center">
            <p className="text-white text-sm">
              © {new Date().getFullYear()} Body Shody. All rights reserved.
            </p>
          </div>
        </footer>
      );
      
};

export default Footer;