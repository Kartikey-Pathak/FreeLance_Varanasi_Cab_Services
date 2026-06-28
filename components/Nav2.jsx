"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";


gsap.registerPlugin(ScrollTrigger);

export default function Nav2({ open, setOpen }) {
  const [windowWidth, setWindowWidth] = useState(0);
  const navRef = useRef(null);
    const pathname = usePathname();
  

  // ✅ Safe window width detection
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize(); // Initialize once mounted
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ GSAP animation
  useEffect(() => {
    if (!navRef.current) return;

    const tl = gsap.to(navRef.current, {
      opacity: 1,
      ease: "power1.inOut",
      duration: 1.5,
      scrollTrigger: {
        trigger: navRef.current,
        start: "top -15%",
        end: "top -25%",
        scrub: true,
      },
    });

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  const isDesktop = windowWidth > 700;

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      ref={navRef}
      className="opacity-0 fixed top-0 z-40 w-full flex items-center justify-between h-18 backdrop-blur-sm transition-all"
    >
      {isDesktop ? (
        <div className="navbar w-full flex justify-between items-center px-10">
          {/* Logo
          <div className="flex items-center justify-center cursor-pointer h-[40%] w-24">
            <a href="/"><img
              src="/logo.png"
              className="h-full w-full object-contain"
              alt="Logo"
            />
            </a>
          </div> */}

          {/* Menu */}
          <ul className="flex gap-10 w-full justify-center items-center">
            <li>
              <Link href="/" className={`  font-semibold text-xl shrink-0 hover:text-[#FF3600]/80  transition-all ${
                  pathname === "/" ? "text-[#FF3600] underline" : "text-[#F97316]"
                }`}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className={` font-semibold shrink-0 text-xl hover:text-[#FF3600]/80  transition-all ${
                  pathname === "/about" ? "text-[#FF3600] underline" : "text-[#F97316]"
                }`}>
                About
              </Link>
            </li>
             <li>
              <Link
                href="/rent"
                className={` shrink-0  font-semibold text-xl hover:text-[#FF3600]/80  transition-all ${
                  pathname === "/rent" ? "text-[#FF3600] underline" : "text-[#F97316]"
                }`}
              >
                Rent a Car
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={` shrink-0  font-semibold text-xl hover:text-[#FF3600]/80  transition-all ${
                  pathname === "/contact" ? "text-[#FF3600] underline" : "text-[#F97316]"
                }`}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        
        </div>
      ) : (
        // ✅ Mobile Navbar
        <div className="flex justify-between items-center w-full h-16 px-5">
          <div className="flex items-center h-full w-[5rem]">
            <a href="/"><img
              src="/logo.png"
              className="h-full w-auto object-contain"
              alt="Logo"
            /></a>
          </div>

          <div className="flex items-center gap-5">
       

            {/* Dropdown */}
          
              <summary onClick={() => setOpen(true)} className="btn bg-transparent border-none shadow-none">
                <i className="fa-solid fa-bars text-black text-2xl"></i>
              </summary>
            
         
          </div>
        </div>
      )}
    </nav>
  );
}
