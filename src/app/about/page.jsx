"use client";

import {
  Car,
  ShieldCheck,
  Phone,
  Star,
  Users,
  Award,
  Heart,
  Zap,
} from "lucide-react";
import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Nav from "../../../components/Nav";
import Side from "../../../components/Side";
import Footer from "../../../components/Footer";
import PolicyAccordion from "../../../components/PolicyAccordion";
import Last from "../../../components/Last";
import AboutSeoContent from "../../../components/AboutSeoContent";
import { FlipWord } from "../../../components/FlipWord";
import { FlipWordAbout } from "../../../components/FlipWordAbout";

gsap.registerPlugin(ScrollTrigger);

// ─── Static data ──────────────────────────────────────────────────────────────

const trustBadges = [
  { icon: "✓", label: "24/7 Service" },
  { icon: "✓", label: "Verified Drivers" },
  { icon: "✓", label: "No Hidden Charges" },
  { icon: "✓", label: "Instant Booking" },
];

const stats = [
  { num: "5000+", label: "Happy Customers", icon: <Users size={22} /> },
  { num: "8+", label: "Years in Varanasi", icon: <Award size={22} /> },
  { num: "50+", label: "Verified Drivers", icon: <ShieldCheck size={22} /> },
  { num: "15+", label: "Vehicle Options", icon: <Car size={22} /> },
];

const values = [
  {
    icon: <Heart size={26} className="text-[#F97316]" />,
    title: "Born in Kashi",
    desc: "We are not outsiders — Varanasi is our home. Every lane, every ghat, every shortcut is in our blood. That local knowledge is your advantage.",
  },
  {
    icon: <ShieldCheck size={26} className="text-[#F97316]" />,
    title: "Safety First",
    desc: "All vehicles are GPS-tracked, fully insured, and sanitised before every trip. Our drivers are police-verified and trained in safe driving.",
  },
  {
    icon: <Zap size={26} className="text-[#F97316]" />,
    title: "Always On Time",
    desc: "We know a missed flight or a late arrival at a sacred aarti can ruin a journey. Punctuality is non-negotiable — always 10 minutes early.",
  },
  {
    icon: <Star size={26} className="text-[#F97316]" />,
    title: "Zero Hidden Charges",
    desc: "The price we quote is the price you pay. No toll surprises, no night charges by default. Complete transparency, every single time.",
  },
];

const timeline = [
  { year: "2016", event: "Founded in Varanasi with 2 vehicles and a promise of honest service." },
  { year: "2018", event: "Expanded fleet to 10 vehicles. Launched dedicated airport transfer service." },
  { year: "2020", event: "Survived the pandemic by focusing on medical and essential travel." },
  { year: "2022", event: "Crossed 2,000 happy customers. Added Tempo Traveller for group tours." },
  { year: "2024", event: "5,000+ rides completed. Launched Urbania luxury service & corporate accounts." },
];


// ─── Structured data for SEO ──────────────────────────────────────────────────

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",

  name: "Cab Services Varanasi",

  alternateName:
    "Cab Services Varanasi - Taxi Service in Varanasi",

  description:
    "Cab Services Varanasi provides reliable and affordable taxi services in Varanasi including local sightseeing, airport transfers, outstation cabs, tempo traveller rentals, and pilgrimage tour packages. Available 24/7 with professional drivers and transparent pricing.",

  url: "https://cabservicesvaranasi.com/about",

  logo: "https://cabservicesvaranasi.com/logo.png",

  image: [
    "https://cabservicesvaranasi.com/og-image.jpg",
  ],

  telephone: "+918299529846",

  email: "cabservicesvaranasi91@gmail.com",

  foundingDate: "2016",

  priceRange: "₹₹",

  currenciesAccepted: "INR",

  paymentAccepted: [
    "Cash",
    "UPI",
    "Google Pay",
    "PhonePe",
    "Paytm",
    "Bank Transfer",
  ],

  address: {
    "@type": "PostalAddress",
    addressLocality: "Varanasi",
    addressRegion: "Uttar Pradesh",
    postalCode: "221001",
    addressCountry: "IN",
  },

  geo: {
    "@type": "GeoCoordinates",
    latitude: "25.3176",
    longitude: "82.9739",
  },

  areaServed: [
    {
      "@type": "City",
      name: "Varanasi",
    },
    {
      "@type": "City",
      name: "Prayagraj",
    },
    {
      "@type": "City",
      name: "Ayodhya",
    },
    {
      "@type": "City",
      name: "Bodh Gaya",
    },
    {
      "@type": "City",
      name: "Sarnath",
    },
  ],

  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },

  sameAs: [
    "https://www.facebook.com/cabservicesvaranasi",
    "https://www.instagram.com/cabservicesvaranasi",
  ],

  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Taxi Services in Varanasi",

    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Local Taxi Service in Varanasi",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Airport Taxi Service in Varanasi",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Outstation Cab Service from Varanasi",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Tempo Traveller Rental in Varanasi",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Kashi Vishwanath Temple Tour",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Ayodhya Tour Package",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Prayagraj Tour Package",
        },
      },
    ],
  },

  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "347",
    bestRating: "5",
    worstRating: "1",
  },

  keywords: [
    "Taxi Service in Varanasi",
    "Cab Service Varanasi",
    "Best Cab Service in Varanasi",
    "Airport Taxi Varanasi",
    "Car Rental Varanasi",
    "Tempo Traveller Varanasi",
    "Outstation Cab Varanasi",
    "Varanasi Taxi Booking",
    "Kashi Vishwanath Taxi",
    "Ayodhya Tour from Varanasi",
  ],
};

// ─── Page component ────────────────────────────────────────────────────────────

export default function AboutPage() {
  const [open, setOpen] = useState(false);

  // Hero refs
  const contentRef = useRef(null);
  const cardRef = useRef(null);
  const badgeRef = useRef(null);
  const pulseRef = useRef(null);

  // Section refs
  const statsRef = useRef(null);
  const missionRef = useRef(null);
  const timelineRef = useRef(null);
  const valuesRef = useRef(null);
  const teamRef = useRef(null);
  const ctaRef = useRef(null);

  /* ── Hero entrance ── */
  useEffect(() => {
    gsap.fromTo(contentRef.current,
      { opacity: 0, x: -60 },
      { opacity: 1, x: 0, duration: 1.1, ease: "power2.out", delay: 0.2 }
    );
    gsap.fromTo(cardRef.current,
      { opacity: 0, x: 60 },
      { opacity: 1, x: 0, duration: 1.1, ease: "power2.out", delay: 0.35 }
    );
    gsap.fromTo(badgeRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", delay: 0.8 }
    );
    gsap.to(pulseRef.current, {
      scale: 1.4, opacity: 0.4, duration: 1.2,
      repeat: -1, yoyo: true, ease: "power1.inOut",
    });
  }, []);

  /* ── Scroll-triggered sections ── */
  useGSAP(() => {
    // Stats counter
    const statEls = statsRef.current?.querySelectorAll(".stat-item");
    if (statEls) {
      gsap.fromTo(statEls,
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.6, stagger: 0.12, ease: "power3.out",
          scrollTrigger: { trigger: statsRef.current, start: "top 82%" }
        }
      );
    }

    // Mission split
    gsap.fromTo(missionRef.current?.querySelectorAll(".mission-item"),
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: "power3.out",
        scrollTrigger: { trigger: missionRef.current, start: "top 80%" }
      }
    );

    // Timeline
    gsap.fromTo(timelineRef.current?.querySelectorAll(".tl-item"),
      { opacity: 0, x: -30 },
      {
        opacity: 1, x: 0, duration: 0.6, stagger: 0.15, ease: "power3.out",
        scrollTrigger: { trigger: timelineRef.current, start: "top 78%" }
      }
    );

    // Values cards
    gsap.fromTo(valuesRef.current?.querySelectorAll(".value-card"),
      { opacity: 0, scale: 0.93 },
      {
        opacity: 1, scale: 1, duration: 0.55, stagger: 0.1, ease: "back.out(1.4)",
        scrollTrigger: { trigger: valuesRef.current, start: "top 80%" }
      }
    );

    // Team
    gsap.fromTo(teamRef.current?.querySelectorAll(".team-card"),
      { opacity: 0, y: 30 },
      {
        opacity: 1, y: 0, duration: 0.6, stagger: 0.12, ease: "power3.out",
        scrollTrigger: { trigger: teamRef.current, start: "top 82%" }
      }
    );

    // CTA
    gsap.fromTo(ctaRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0, duration: 0.7, ease: "power3.out",
        scrollTrigger: { trigger: ctaRef.current, start: "top 85%" }
      }
    );
  }, []);

  return (
    <>
      {/* ── JSON-LD Structured Data ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />

      <Nav open={open} setOpen={setOpen} />
      <Side open={open} setOpen={setOpen} />

      {/* ════════════════════════════════════════
          HERO
      ════════════════════════════════════════ */}
      <section
        aria-label="About Aaradhya Tour and Travels"
        className="relative min-h-screen flex justify-center w-full items-center pt-[100px] pb-[60px] px-[5vw] overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg,rgba(15,23,42,0.95) 0%,rgba(15,23,42,0.7) 50%,rgba(249,115,22,0.25) 100%), url('https://images.unsplash.com/photo-1561361058-c24cecae35ca?w=1600&q=80') center/cover no-repeat",
        }}
      >

        <div className="absolute bottom-0 flex items-center justify-center w-full mx-auto left-0 right-0 h-[120px] bg-gradient-to-t from-white to-transparent pointer-events-none" />

        <div className="relative z-10 w-full  justify-center flex  mx-auto grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-10 lg:gap-[60px] items-center">

          {/* Left */}
          <div ref={contentRef} className="opacity-0 w-full">
            <div className="inline-flex items-center gap-2 bg-[#F97316]/15 border border-[#F97316]/30 text-[#F97316] px-[50px] py-[6px] rounded-full text-[1rem] font-semibold tracking-[0.5px] uppercase mb-5">
              <span ref={pulseRef} className="w-[6px] h-[6px] bg-[#F97316] rounded-full" />
              About Us
            </div>


            <FlipWordAbout />



            <p className="text-white/70 text-[1.1rem] leading-[1.7] mb-8 max-w-[520px]">
              Book trusted cabs for local sightseeing, airport transfers &
              outstation travel. Explore the spiritual heart of India with
              comfort and safety.
            </p>

            <div className="flex flex-wrap gap-[14px] mb-10">
              <a
                href="tel:+918299529846"
                aria-label="Call Cab Services Varanasi"
                className="inline-flex items-center gap-2 bg-[#F97316] text-white px-[30px] py-[14px] rounded-[10px] font-bold text-[1rem] no-underline hover:bg-[#ea6c0a] hover:-translate-y-[2px] transition-all duration-200 shadow-[0_4px_20px_rgba(249,115,22,0.4)]"
              >
                <Phone size={16} /> Call Now
              </a>
              <a
                href="https://wa.me/918299529846"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Cab Services Varanasi"
                className="inline-flex items-center gap-2 bg-white/10 text-white px-[30px] py-[14px] rounded-[10px] font-semibold text-[1rem] no-underline border border-white/30 backdrop-blur-md hover:bg-green-500 hover:-translate-y-[2px] transition-all duration-200"
              >
                💬 WhatsApp Us
              </a>
            </div>

            <div ref={badgeRef} className="flex flex-wrap gap-3 opacity-0">
              {trustBadges.map(({ icon, label }) => (
                <div key={label} className="flex items-center gap-[6px] text-white/80 text-[0.8rem] font-medium">
                  <span className="w-[18px] h-[18px] bg-[#16A34A] rounded-full flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0">
                    {icon}
                  </span>
                  {label}
                </div>
              ))}
            </div>
          </div>

        </div>


      </section>

      {/* ════════════════════════════════════════
          STATS BAR
      ════════════════════════════════════════ */}
      <div ref={statsRef} className="bg-[#F97316] py-6 px-[5vw]">
        <div className="max-w-[1280px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map(({ num, label, icon }) => (
            <div key={label} className="stat-item text-white opacity-0">
              <div className="flex items-center justify-center gap-2 mb-1 opacity-80">
                {icon}
              </div>
              <span className="font-poppins text-[2rem] font-extrabold block leading-none">
                {num}
              </span>
              <span className="text-[0.82rem] opacity-85 mt-1 block">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ════════════════════════════════════════
          MISSION / WHO WE ARE
      ════════════════════════════════════════ */}
      <section
        aria-label="About our company"
        className="py-20 px-[5vw] bg-white"
      >
        <div className="max-w-[1280px] mx-auto">
          <div ref={missionRef} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Image side */}
            <div className="mission-item opacity-0 relative">
              <div className="w-full h-[420px] rounded-[24px] overflow-hidden bg-gradient-to-br from-[#0F172A] to-[#1E293B] flex items-center justify-center text-[110px]">
                🕌
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-5 -right-0 md:-right-5 bg-[#F97316] text-white rounded-[16px] px-5 py-4 shadow-[0_8px_32px_rgba(249,115,22,0.35)]">
                <span className="font-poppins text-[2.2rem] font-extrabold block leading-none">8+</span>
                <span className="text-[0.78rem] opacity-90 font-medium">Years Serving Kashi</span>
              </div>
            </div>

            {/* Text side */}
            <div className="mission-item opacity-0">
              <p className="text-[0.75rem] font-bold tracking-[2px] uppercase text-[#F97316] mb-3">
                Who We Are
              </p>
              <h2
                className="font-poppins font-extrabold text-[#0F172A] leading-[1.2] mb-5"
                style={{ fontSize: "clamp(1.6rem,2.8vw,2.2rem)" }}
              >
                Varanasi& Most Trusted
                <br />
                <span className="text-[#F97316]">Car Rental &amp; Taxi Service</span>
              </h2>
              <p className="text-[#475569] leading-[1.85] mb-4 text-[0.97rem]">
                At Cab Services Varanasi, we believe every journey should be safe,
                comfortable, and memorable. We are committed to offering dependable
                taxi services in Varanasi for pilgrims, tourists, families, and
                corporate travelers visiting the spiritual capital of India.
              </p>

              <p className="text-[#475569] leading-[1.85] mb-6 text-[0.97rem]">
                From seamless airport transfers and local sightseeing to outstation
                cab bookings and corporate rides, we strive to deliver exceptional
                service with professional drivers, clean vehicles, and 24/7 customer
                support. Your comfort and trust drive us every mile.
              </p>

              <ul className="grid grid-cols-2 gap-3 list-none mb-8">
                {["Local Taxi Varanasi", "Airport Transfers", "Outstation Cabs", "Pilgrimage Tours", "Corporate Travel", "Group Bookings"].map((item) => (
                  <li key={item} className="flex items-center gap-[9px] text-[0.88rem] text-[#1E293B] font-medium">
                    <span className="w-[20px] h-[20px] bg-[#F97316] rounded-full flex items-center justify-center text-white text-[11px] font-bold flex-shrink-0">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>


            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          OUR VALUES
      ════════════════════════════════════════ */}
      <section
        aria-label="Our values and commitments"
        className="py-20 px-[5vw] bg-[#F8FAFC]"
      >
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-12">
            <p className="text-[0.75rem] font-bold tracking-[2px] uppercase text-[#F97316] mb-2">
              Our Promise
            </p>
            <h2
              className="font-poppins font-extrabold text-[#0F172A] leading-[1.2]"
              style={{ fontSize: "clamp(1.6rem,2.8vw,2.2rem)" }}
            >
              What Makes Us Different
            </h2>
          </div>

          <div
            ref={valuesRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {values.map(({ icon, title, desc }) => (
              <ValueCard key={title} icon={icon} title={title} desc={desc} />
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          TIMELINE
      ════════════════════════════════════════ */}
      <section
        aria-label="Company history timeline"
        className="py-20 px-[5vw] bg-[#0F172A]"
      >
        <div className="max-w-[760px] mx-auto">
          <div className="text-center mb-12">
            <p className="text-[0.75rem] font-bold tracking-[2px] uppercase text-[#F97316] mb-2">
              Our Journey
            </p>
            <h2
              className="font-poppins font-extrabold text-white leading-[1.2]"
              style={{ fontSize: "clamp(1.6rem,2.8vw,2.2rem)" }}
            >
              8 Years of Trusted Miles
            </h2>
          </div>

          <div ref={timelineRef} className="relative">
            {/* Vertical line */}
            <div className="absolute left-[20px] top-0 bottom-0 w-[2px] bg-[#F97316]/25" />

            <div className="space-y-8 pl-12">
              {timeline.map(({ year, event }) => (
                <div key={year} className="tl-item relative opacity-0">
                  {/* Dot */}
                  <div className="absolute -left-[30px] top-[6px] w-4 h-4 bg-[#F97316] rounded-full border-2 border-[#0F172A] shadow-[0_0_0_3px_rgba(249,115,22,0.3)]" />
                  <span className="font-poppins font-extrabold text-[#F97316] text-[1.1rem] block mb-1">
                    {year}
                  </span>
                  <p className="text-white/70 text-[0.92rem] leading-[1.7]">{event}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      
      {/* ════════════════════════════════════════
          EXISTING COMPONENTS
      ════════════════════════════════════════ */}
      
      <AboutSeoContent />
      
      

      <footer>
        <Footer />
      </footer>
    </>
  );
}

// ─── Value card with GSAP hover ───────────────────────────────────────────────
function ValueCard({ icon, title, desc }) {
  const cardRef = useRef(null);

  const onEnter = () =>
    gsap.to(cardRef.current, {
      y: -6,
      boxShadow: "0 16px 40px rgba(249,115,22,0.13)",
      borderColor: "rgba(249,115,22,0.35)",
      duration: 0.25,
      ease: "power2.out",
    });
  const onLeave = () =>
    gsap.to(cardRef.current, {
      y: 0,
      boxShadow: "none",
      borderColor: "#E2E8F0",
      duration: 0.25,
      ease: "power2.out",
    });

  return (
    <div
      ref={cardRef}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className="value-card opacity-0 bg-white rounded-[18px] p-6 border-[1.5px] border-[#E2E8F0]"
    >
      <div className="w-12 h-12 bg-[#FFF7ED] rounded-[12px] flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="font-poppins font-bold text-[#0F172A] text-[0.95rem] mb-2">{title}</h3>
      <p className="text-[#64748B] text-[0.83rem] leading-[1.65]">{desc}</p>
    </div>
  );
}