import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 rounded-t-lg  mt-16 mx-7  ">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: Logo and Description */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Shoppire</h2>
            <p className="text-gray-400">
              Crafted with care and dedication. Bringing quality and style right
              to your doorstep. Your satisfaction is our promise!
            </p>
            <p className="text-gray-500 mt-4">
              Copyright 2024 shoppire. All rights reserved.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-teal-400">
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="text-gray-400 hover:text-teal-400"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-teal-400"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-teal-400"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#privacy"
                  className="text-gray-400 hover:text-teal-400"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Us */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-teal-400" />
                <span className="text-gray-400">0314 9657833</span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-teal-400" />
                <span className="text-gray-400">support@shoppire.com</span>
              </li>
              <li className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-teal-400" />
                <span className="text-gray-400">
                  123 Shoppire, Suite 100, New York, NY
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4: Follow Us */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
               href="https://www.linkedin.com/in/nouman-zafar-98013b253"
               className="text-gray-400 hover:text-teal-400"
                target="_blank"
  rel="noopener noreferrer"
               >
                <FaFacebook size={24} />
              </a>
              <a
               href="https://www.linkedin.com/in/nouman-zafar-98013b253"
                target="_blank"
  rel="noopener noreferrer"
               className="text-gray-400 hover:text-teal-400"
               >
                <FaTwitter size={24} />
              </a>
              <a
                 href="https://www.linkedin.com/in/nouman-zafar-98013b253"
                  target="_blank"
  rel="noopener noreferrer"
                className="text-gray-400 hover:text-teal-400"
              >
                <FaInstagram size={24} />
              </a>
              <a
  href="https://www.linkedin.com/in/nouman-zafar-98013b253"
  className="text-gray-400 hover:text-teal-400"
  target="_blank"
  rel="noopener noreferrer"
>
  <FaLinkedin size={24} />
</a>
            </div>
          </div>
        </div>
        <div className="text-center text-gray-500 mt-8">
          Powered by Shoppire Team
        </div>
      </div>
    </footer>
  );
};

export default Footer;
