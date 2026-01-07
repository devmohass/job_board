import React from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import {FaLocationDot, FaPhone} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-white border-t pt-10 text-sm text-gray-700">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Logo + Description */}
        <div>
          <h1 className="text-2xl font-bold mb-2 text-black">
            <span className="text-blue-600">J</span>oblin
          </h1>
          <p>
            Joblin is a smart job search and recruitment platform that connects
            job seekers with employers. With fast search, professional resume
            building, and intelligent matching, Joblin makes hiring and job
            hunting easy and efficient.
          </p>
        </div>

        {/* Our Services */}
        <div>
          <h3 className="font-semibold mb-3 text-black">Our services</h3>
          <ul className="space-y-2">
            <li className="hover:text-blue-400">Find job</li>
            <li className="hover:text-blue-400">Create resume</li>
            <li className="hover:text-blue-400">Search company</li>
            <li className="hover:text-blue-400">Pricing Plan</li>
          </ul>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-semibold mb-3 text-black">Links</h3>
          <ul className="space-y-2">
            <li className="hover:text-blue-400">Blog</li>
            <li className="hover:text-blue-400">Help center</li>
            <li className="hover:text-blue-400">Contact us</li>
            <li className="hover:text-blue-400">Privacy Policy</li>
            <li className="hover:text-blue-400">About us</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-3 text-black">Contact Us</h3>
          <div className="flex gap-3 text-xl mb-3">
            <FaInstagram className="hover:text-blue-400"/>
            <FaFacebookF className="hover:text-blue-400"/>
            <FaWhatsapp className="hover:text-blue-400"/>
            <FaLinkedinIn className="hover:text-blue-400"/>
            <FaXTwitter className="hover:text-blue-400"/>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <FaLocationDot className="hover:text-blue-400"/>
            <span>1500 Marilla St, Dallas, TX 75201</span>
          </div>
          <div className="flex items-center gap-2">
            <FaPhone className="hover:text-blue-400"/>
            <span>1(647)558-5560</span>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-100 mt-8 py-4 px-4 flex flex-col md:flex-row items-center justify-between text-gray-600 text-sm">
        <div className="hover:text-blue-400">Joblin Copyright © 2024</div>
        <div className="flex gap-3 mt-2 md:mt-0">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"
            alt="Visa"
            className="h-5"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
            alt="PayPal"
            className="h-5"
          />

          <img
            src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
            alt="Apple Pay"
            className="h-5"
          />
        </div>
      </div>
    </footer>
  );
}
