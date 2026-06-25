"use client";

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Card from "./Card";
import { carsInfo } from "../src/utils/CarInfo.js";

gsap.registerPlugin(ScrollTrigger);

export default function Any() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);

  // const [packages, setPackages] = useState([]);

  // ✅ Fetch cars from /api/cars
  // useEffect(() => {
  //   async function fetchPackages() {
  //     try {
  //       const res = await fetch("/api/cars");
  //       const data = await res.json();
  //        console.log("Cars from DB:", data);
  //       setPackages(data); // no filtering
  //     } catch (error) {
  //       console.error("Error fetching cars:", error);
  //     }
  //   }
  //   fetchPackages();
  // }, []);

  // ✅ GSAP animations
  useGSAP(() => {
    const fadeIn = gsap.to(sectionRef.current, {
      opacity: 1,
      duration: 0.8,
      ease: "power1.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
        toggleActions: "play none none reverse",
      },
    });

    const slideInText = gsap.fromTo(
      headingRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => {
      fadeIn.scrollTrigger?.kill();
      fadeIn.kill();
      slideInText.scrollTrigger?.kill();
      slideInText.kill();
    };
  }, []);

  return (
    <section id="domestic" className="flex flex-col items-center justify-center bg-white py-20">
      <div className="lg:w-[95%] w-full px-2 md:px-10 flex items-center py-20 md:py-30 flex-col bg-[#F8FAFC] rounded-[3rem]">
   <p className="text-[0.78rem] md:text-2xl font-bold tracking-[1.5px] uppercase text-[#F97316] mb-[10px]">
              Our Fleets
          </p>
        <h1 style={{ fontSize: "clamp(1.7rem, 3vw, 2.4rem)" }} ref={headingRef} className="text-center text-black font-bold mb-10">
           Premium Cars for Local, <br></br> Airport & Outstation Travel in Varanasi
        </h1>

        <div ref={sectionRef} className="opacity-0 w-full flex justify-center">
          <div className="w-full  md:w-[90%] grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 place-items-center">
            {carsInfo.length > 0 ? (
              carsInfo.map((pkg) => (
                <Card
                  key={pkg.id}
                  img={pkg.image}
                  name={pkg.name}
                  location={pkg.location}
                  tag={pkg.tag}
                  rates={pkg.rates}
                />
              ))
            ) : (
              <div className="flex items-center justify-center min-h-[50vh] col-span-full">
                <p className="text-gray-500 text-5xl font-semibold">Loading...</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

