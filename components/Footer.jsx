import React from "react";
import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";
import Link from "next/link";

//cabservicesvaranasi.com
//cabservicesvaranasi91@gmail.com

const Footer = () => {
  return (
    <footer className="w-full bg-[#0F172A] py-10 flex justify-center">
      {/* Main Footer Wrapper */}
      <div className="relative w-full rounded-none lg:rounded-[40px] overflow-hidden">

        {/* Background Gradient */}
        <div className="absolute inset-0 "></div>

        {/* Glow Effects */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-orange-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-orange-400/10 rounded-full blur-2xl"></div>

        {/* Footer Content */}
        <div className="relative z-10 text-white px-6 md:px-12 lg:px-20 py-14">
          {/* Top Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand */}
            <div>
              <h2 className="text-2xl font-bold">
                <span className="text-[#FF3600]">CAB SERVICES</span> <br /> VARANASI
              </h2>
              <p className="text-gray-400 mt-4">
                Your trusted choice for airport transfers, local sightseeing, and outstation cab services in Varanasi.
              </p>
            </div>

            {/* Legal Policy */}
            <div className=" flex flex-col gap-2">
              <h3 className="text-lg font-semibold mb-4">Links</h3>

              <Link className="text-gray-400 hover:text-[#F97316]/80 transition-all" href="/car-rental-in-varanasi">Car Rental in Varanasi</Link>
              <Link className="text-gray-400 hover:text-[#F97316]/80 transition-all" href="/taxi-service-in-varanasi">Taxi Service</Link>
              <Link className="text-gray-400 hover:text-[#F97316]/80 transition-all" href="/airport-taxi-varanasi">Airport Taxi</Link>

            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className=" cursor-pointer space-y-2 text-gray-400">
                <li><Link className="hover:text-[#F97316]/80 transition-all" href="/">Home</Link></li>
                <li><Link className="hover:text-[#F97316]/80 transition-all" href="/about">About Us</Link></li>
                <li><Link className="hover:text-[#F97316]/80 transition-all" href="/contact">Contact Us</Link></li>
                <li><Link className="hover:text-[#F97316]/80 transition-all" href="/rent">Rent a Car</Link></li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-lg font-semibold mb-4">
                Get Travel Deals & Updates
              </h3>

              <div className="  ">
                {/* Email Input */}
                <p className="text-gray-400 mt-4">Email : <a href="mailto:rajat6427@gmail.com" className="text-[#F97316] hover:underline">

                  cabservicesvaranasi91@gmail.com</a>
                </p>
                <p className="text-gray-400 mt-4">Call Now : <a
              href="tel:+918299529846"
              className=" text-[#F97316] hover:underline  transition-all duration-200 "
            >
              +918299529846
            </a></p>

              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-700 my-10"></div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-gray-400 text-sm">
              © 2026 Cab Services Varanasi. All rights reserved.
            </p>

            <p className="text-gray-400 gap-3 mt-16 flex flex-col">
              Website designed & developed by <br />
              <a
                className="text-orange-500 text-xl transition-all hover:underline active:underline"
                href="https://wa.me/918881509360"
                target="_blank"
                rel="noopener noreferrer"
              >
                
                Kartikey Pathak <i class="fa-brands fa-whatsapp"></i>
              </a>
              <a
                className="text-orange-500 text-xl transition-all hover:underline active:underline"
                href="https://www.linkedin.com/in/kartikey-pathakb580297/"
                target="_blank"
                rel="noopener noreferrer"
              >
                
                Linkedin <i class="fa-brands fa-linkedin"></i>
              </a>
            </p>

            <div className="flex gap-4">
              <SocialIcon link="https://www.youtube.com">
                <FaYoutube />
              </SocialIcon>
              <SocialIcon link="https://www.facebook.com">
                <FaFacebookF />
              </SocialIcon>
              <SocialIcon link="https://www.instagram.com/aaradhyatourandtravels/">
                <FaInstagram />
              </SocialIcon>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

/* Social Media Icon */
const SocialIcon = ({ link, children }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-600
                 hover:border-orange-500 hover:text-orange-500 transition"
    >
      {children}
    </a>
  );
};

export default Footer;