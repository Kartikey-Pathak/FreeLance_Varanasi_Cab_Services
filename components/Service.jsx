"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: "✈️",
    title: "Airport Taxi Service",
    desc:
      "Book reliable airport taxi services in Varanasi for timely pickups and drop-offs to and from Lal Bahadur Shastri International Airport.",
  },

  {
    icon: "🚖",
    title: "Local Cab Service",
    desc:
      "Hire local cabs in Varanasi for city rides, temple visits, shopping, and sightseeing including Kashi Vishwanath Temple and Sarnath.",
  },

  {
    icon: "🛣️",
    title: "Outstation Cab Service",
    desc:
      "Affordable outstation cab services from Varanasi to Ayodhya, Prayagraj, Bodh Gaya, Lucknow, and other nearby destinations.",
  },

  {
    icon: "💼",
    title: "Corporate Cab Service",
    desc:
      "Premium corporate taxi services in Varanasi for business meetings, executive travel, airport transfers, and employee transportation.",
  },
];

export default function Services() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      headerRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: { trigger: headerRef.current, start: "top 85%" },
      }
    );

    const cards = gridRef.current.querySelectorAll(".service-card");
    gsap.fromTo(
      cards,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: "power2.out",
        scrollTrigger: { trigger: gridRef.current, start: "top 80%" },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} id="services" className="py-10 px-[5vw]">
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-[50px] opacity-0">
          <p className="text-[0.78rem] md:text-2xl font-bold tracking-[1.5px] uppercase text-[#F97316] mb-[10px]">
              Our Cab Services in Varanasi
          </p>
          <h2
            className="font-poppins font-extrabold  text-[#0F172A] leading-[1.2] mb-[14px]"
            style={{ fontSize: "clamp(1.7rem, 3vw, 2.4rem)" }}
          >
            Flexible Car Rental Services
            <br />
            For Every Journey
          </h2>
          <p className="text-[#64748B] md:text-xl text-[1rem] leading-[1.7] max-w-[560px] mx-auto">
            From quick city rides to long pilgrimage tours — we have the perfect
            vehicle and service for every trip.
          </p>
        </div>

        {/* Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:gap-6"
        >
          {services.map(({ icon, title, desc }) => (
            <ServiceCard key={title} icon={icon} title={title} desc={desc} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ icon, title, desc }) {
  const cardRef = useRef(null);

  const handleMouseEnter = () => {
    gsap.to(cardRef.current, {
      y: -6,
      boxShadow: "0 20px 40px rgba(249,115,22,0.15)",
      borderColor: "rgba(249,115,22,0.3)",
      duration: 0.25,
      ease: "power2.out",
    });
  };
  const handleMouseLeave = () => {
    gsap.to(cardRef.current, {
      y: 0,
      boxShadow: "none",
      borderColor: "#E2E8F0",
      duration: 0.25,
      ease: "power2.out",
    });
  };

  return (
    <CardContainer className="w-full hover:shadow-[0_0_60px_rgba(249,115,22,0.45)] rounded-[16px] active:shadow-[0_0_60px_rgba(249,115,22,0.45)] cursor-pointer hover:backdrop-blur-3xl transition-all hover:rounded-4xl">
  <Link href="/rent"><CardBody className="bg-white relative rounded-[16px] p-[28px_24px] border-[1.5px] border-[#E2E8F0] w-full h-full">

    <CardItem
      translateZ={50}
      className="w-[56px] h-[56px] md:h-[90px] md:w-[90px]
      bg-[#FFF7ED] rounded-[14px] flex items-center
      justify-center text-[26px] mb-[18px]"
    >
      {icon}
    </CardItem>

    <CardItem
      translateZ={40}
      as="h3"
      className="font-poppins font-bold text-[1.08rem]
      text-[#0F172A] mb-[10px]"
    >
      {title}
    </CardItem>

    <CardItem
      translateZ={30}
      as="p"
      className="text-[0.85rem] text-[#64748B] leading-[1.6]"
    >
      {desc}
    </CardItem>

    <CardItem
      translateZ={20}
      as="span"
      className="inline-flex items-center gap-[6px]
      text-[#F97316] text-[0.82rem] font-semibold mt-4"
    >
      Book Now →
    </CardItem>

  </CardBody></Link>
</CardContainer>
  );
}