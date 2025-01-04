import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

function Footer() {
  return (
    <div
      id="contact"
      className="h-auto px-12 sm:px-20 w-full flex flex-col bg-[#1F1F1F] text-white"
    >
      {/* Top Section */}
      <div className="flex flex-wrap justify-between items-start mt-[70px] sm:gap-40 gap-12 w-full">
        {/* About Section */}
        <div className="flex flex-col">
          <h3 className="text-[#6f6d6d] Medium uppercase mb-3">About Us</h3>
          <p className="text-stone-400 text-sm max-w-[300px]">
            We are a results-driven digital marketing agency focused on
            providing cutting-edge solutions to grow your business and enhance
            your brand visibility.
          </p>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col">
          <h3 className="text-[#6f6d6d] Medium uppercase mb-3">Contact</h3>
          <p>
            Email:{" "}
            <a href="mailto:fida@marketing.agency" className="text-white">
              fida@marketing.agency
            </a>
          </p>
          <p>Phone: +1 (234) 567-8901</p>
          <p>Location: 123 Digital Lane, Marketing City</p>
        </div>

        {/* Social Section */}
        <div className="flex flex-col">
          <h3 className="text-[#6f6d6d] Medium uppercase mb-3">Follow Us</h3>
          <div className="flex gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF
                className="text-stone-400 hover:text-white"
                size={18}
              />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter
                className="text-stone-400 hover:text-white"
                size={18}
              />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn
                className="text-stone-400 hover:text-white"
                size={18}
              />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram
                className="text-stone-400 hover:text-white"
                size={18}
              />
            </a>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="flex flex-col">
          <h3 className="text-[#6f6d6d] Medium uppercase mb-3">Quick Links</h3>
          <ul className="text-stone-400 text-sm space-y-2">
            <li>
              <a href="/faqs" className="hover:text-white">
                FAQ's
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-white">
                Our Services
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white">
                Contact Us
              </a>
            </li>
            <li>
              <a href="/privacy-policy" className="hover:text-white">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full mt-12 py-6 flex flex-col items-center border-t border-stone-700">
        <p className="text-stone-500 text-xs sm:text-sm">
          Copyright © FIDA 2025. All Rights Reserved.
        </p>
        <p className="text-stone-500 text-xs sm:text-sm mt-2">
          Designed with ❤️ by FIDA
        </p>
      </div>
    </div>
  );
}

export default Footer;
