import React from "react";
import { Instagram, Linkedin, Facebook, Mail, Phone, MapPin } from "lucide-react";

const ContactUs = () => {
  return (
    <div id='CONTACT' className=" bg-black text-white py-12 px-6 md:px-20 lg:px-32 relative overflow-hidden">
      {/* Header */}
      <div className="relative mb-10 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-lime-300 to-green-500 bg-clip-text text-transparent inline-block">
          REACH OUT TO US
        </h1>
        <span className="absolute left-1/2 -bottom-2 transform -translate-x-1/2 w-40 h-[3px] bg-gradient-to-r from-lime-300 to-green-500 rounded-full"></span>
      </div>

      {/* Contact Info & Socials */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 md:gap-0 text-lg">
        {/* Contact Details */}
        <div className="space-y-3">
          <p className="flex gap-2 hover:text-lime-300 transition-all duration-300 cursor-pointer">
            <Mail/>
            crosslinks.nsut@gmail.com
          </p>
          <p className="flex gap-2 hover:text-lime-300 transition-all duration-300 cursor-pointer">
            <Phone/>
            +91 8888604009
          </p>
          <p className="flex gap-2 text-gray-400 max-w-[300px]">
            <MapPin/>Sector 3, Dwarka, Delhi, 110078
          </p>
        </div>

        {/* Social Links */}
        <div className="flex flex-col md:items-end space-y-3">
          <a
            href="https://www.instagram.com/crosslinks.nsut/"
            target="blank"
            className="flex items-center gap-2 hover:text-lime-300 transition-all duration-300"
          >
            Instagram
            <Instagram size={20} /> 
          </a>
          <a
            href="https://www.linkedin.com/company/crosslinks-nsut/"
            target="blank"
            className="flex items-center gap-2 hover:text-lime-300 transition-all duration-300"
          >
            LinkedIn
            <Linkedin size={20} /> 
          </a>
          <a
            href="https://www.facebook.com/crosslinks.nsut/"
            target="blank"
            className="flex items-center gap-2 hover:text-lime-300 transition-all duration-300"
          >
            Facebook
            <Facebook size={20} /> 
          </a>
        </div>
      </div>

      {/* Footer */}
      <div className="text-gray-500 text-sm text-center mt-12 border-t border-gray-800 pt-4">
        <p>© 2025 Crosslinks NSUT — All Rights Reserved • Privacy Policy</p>
        <p className="text-gray-400 mt-1">
          Developed with 💚 by <span className="text-lime-400">Yash Panchal</span>
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
