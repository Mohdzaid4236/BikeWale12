import React from 'react';
import "tailwindcss";
function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto text-center">
        <p>&copy; 2023 Bikewale. All rights reserved.</p>
        <div className="mt-4 space-x-4">
          <a href="/privacy" className="hover:text-blue-400">Privacy Policy</a>
          <a href="/terms" className="hover:text-blue-400">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;