"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useMotionTemplate,
} from "motion/react";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

// ─── Data ─────────────────────────────────────────────────────────────────────

const reviews = [
  {
    initials: "RS",
    name: "Ramesh Sharma",
    location: "Jaipur, Rajasthan",
    stars: 5,
    tag: "Pilgrimage Trip",
    text: "Booked for our family Kashi Yatra. Driver was punctual, knowledgeable, and the Innova was spotless. Made our pilgrimage so much more peaceful. Will definitely use again on our next visit to Varanasi.",
  },
  {
    initials: "PN",
    name: "Priya Nair",
    location: "Bihar, Gaya",
    stars: 5,
    tag: "Airport Transfer",
    text: "Airport pickup at 4 AM — driver was already waiting! The car was clean and AC was perfect. Fair price with no extra charges. Aaradhya is my go-to for every Varanasi trip now.",
  },
  {
    initials: "AM",
    name: "Anil Mehta",
    location: "Uttar Pradesh, Varanasi",
    stars: 5,
    tag: "Corporate Group",
    text: "Used Tempo Traveller for our team offsite to Sarnath and BHU. Comfortable, on time, and the driver doubled as our city guide. Corporate billing was smooth. Highly recommend for groups.",
  },
  {
    initials: "SK",
    name: "Sunita Kapoor",
    location: "Delhi, NCR",
    stars: 5,
    tag: "Outstation Cab",
    text: "Booked a cab from Varanasi to Ayodhya for Ram Mandir darshan. The driver was very respectful, stopped wherever we asked, and the fare was exactly what was quoted. No surprises at all.",
  },
  {
    initials: "VT",
    name: "Vijay Tiwari",
    location: "Kolkata, West Bengal",
    stars: 5,
    tag: "Local Sightseeing",
    text: "Explored all the major ghats and temples in one day. Driver knew every shortcut and the best times to visit each spot. An absolute gem of a service for first-time Varanasi visitors.",
  },
  {
    initials: "DG",
    name: "Deepa Gupta",
    location: "Pune, Maharashtra",
    stars: 5,
    tag: "Wedding Travel",
    text: "Hired 3 vehicles for our family wedding. All arrived on time, drivers were well-dressed and courteous. The Urbania for the baraat was a highlight. Seamless coordination from the team.",
  },
];

// ─── CometCard ────────────────────────────────────────────────────────────────

const CometCard = ({
  rotateDepth = 17.5,
  translateDepth = 20,
  className,
  children,
}) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    [`-${rotateDepth}deg`, `${rotateDepth}deg`]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    [`${rotateDepth}deg`, `-${rotateDepth}deg`]
  );
  const translateX = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    [`-${translateDepth}px`, `${translateDepth}px`]
  );
  const translateY = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    [`${translateDepth}px`, `-${translateDepth}px`]
  );

  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], [0, 100]);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], [0, 100]);
  const glareBackground = useMotionTemplate`radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.9) 10%, rgba(255,255,255,0.75) 20%, rgba(255,255,255,0) 80%)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className={cn("perspective-distant transform-3d h-full", className)}>
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          translateX,
          translateY,
          boxShadow:
            "rgba(0,0,0,0.01) 0px 520px 146px 0px, rgba(0,0,0,0.04) 0px 333px 133px 0px, rgba(0,0,0,0.26) 0px 83px 83px 0px, rgba(0,0,0,0.29) 0px 21px 46px 0px",
        }}
        initial={{ scale: 1, z: 0 }}
        whileHover={{ scale: 1.05, z: 50, transition: { duration: 0.2 } }}
        className="relative h-full rounded-[18px]"
      >
        {children}

        {/* Glare overlay */}
        <motion.div
          className="pointer-events-none absolute inset-0 z-50 h-full w-full rounded-[18px] mix-blend-overlay"
          style={{ background: glareBackground, opacity: 0.1 }}
        />
      </motion.div>
    </div>
  );
};

// ─── Section ──────────────────────────────────────────────────────────────────

export default function Reviews() {
  const headerRef = useRef(null);
  const gridRef   = useRef(null);

  useGSAP(() => {
    // Header fade-up
    gsap.fromTo(
      headerRef.current,
      { opacity: 0, y: 36 },
      {
        opacity: 1,
        y: 0,
        duration: 0.75,
        ease: "power3.out",
        scrollTrigger: { trigger: headerRef.current, start: "top 85%" },
      }
    );

    // Cards stagger in
    const cards = gridRef.current.querySelectorAll(".review-wrap");
    gsap.fromTo(
      cards,
      { opacity: 0, y: 56 },
      {
        opacity: 1,
        y: 0,
        duration: 0.65,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: gridRef.current, start: "top 80%" },
      }
    );
  }, []);

  return (
    <section
      id="reviews"
      className="py-20 px-[5vw] mt-20 bg-[#0F172A] overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto">

        {/* ── Header ── */}
        <div ref={headerRef} className="text-center mb-14 opacity-0">
          <h2 className="text-[0.78rem] md:text-2xl font-bold tracking-[1.5px] uppercase text-[#F97316] mb-5">
            Customer Reviews
          </h2>
          <h2
            className="font-poppins font-extrabold text-white leading-[1.2] mb-4"
            style={{ fontSize: "clamp(1.7rem,3vw,2.4rem)" }}
          >
            What Our Passengers Say
          </h2>
          <p className="text-white/55 text-[1rem] leading-[1.7] max-w-[500px] mx-auto mb-6">
            Real stories from real travelers who chose Aaradhya for their
            Varanasi journey.
          </p>

          {/* Aggregate rating */}
          <div className="flex items-center justify-center gap-3">
            <div className="flex gap-[3px]">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-[#F97316] text-[1.2rem]">★</span>
              ))}
            </div>
            <span className="text-white font-poppins font-bold text-[1.1rem]">4.9</span>
            <span className="text-white/40 text-[0.85rem]">· 347 verified reviews</span>
          </div>
        </div>

        {/* ── Grid ── */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {reviews.map((r) => (
            <div key={r.name} className="review-wrap opacity-0 h-full">
              <CometCard>
                <ReviewCardInner {...r} />
              </CometCard>
            </div>
          ))}
        </div>

       

      </div>
    </section>
  );
}

// ─── Card inner content ───────────────────────────────────────────────────────

function ReviewCardInner({ initials, name, location, stars, tag, text }) {
  return (
    <div
      className="h-full flex flex-col gap-4 rounded-[18px] p-6 border border-white/[0.08]"
      style={{
     
        backdropFilter: "blur(20px)",
      }}
    >
      {/* Stars + tag */}
      <div className="flex items-center justify-between">
        <div className="flex gap-[2px]">
          {[...Array(stars)].map((_, i) => (
            <span key={i} className="text-[#F97316] text-[0.95rem] leading-none">
              ★
            </span>
          ))}
        </div>
        <span className="text-[0.7rem] font-semibold text-[#F97316] bg-[#F97316]/10 border border-[#F97316]/20 px-[10px] py-[3px] rounded-full">
          {tag}
        </span>
      </div>

      {/* Review text */}
      <p className="text-white/75 text-[0.88rem] leading-[1.75] italic flex-1">
        &ldquo;{text}&rdquo;
      </p>

      {/* Divider */}
      <div className="h-[1px] bg-white/[0.07]" />

      {/* Author row */}
      <div className="flex items-center gap-3">
        {/* Avatar */}
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#F97316] to-[#EA580C] flex items-center justify-center text-white font-poppins font-bold text-[0.85rem] flex-shrink-0 shadow-[0_4px_12px_rgba(249,115,22,0.3)]">
          {initials}
        </div>
        <div>
          <p className="text-white font-semibold text-[0.9rem] leading-tight">{name}</p>
          <p className="text-white/40 text-[0.75rem] mt-[2px]">📍 {location}</p>
        </div>
        {/* Faint Google mark */}
        <div className="ml-auto text-[0.7rem] font-bold tracking-tight opacity-30 select-none">
          <span className="text-[#4285F4]">G</span>
          <span className="text-[#EA4335]">o</span>
          <span className="text-[#FBBC04]">o</span>
          <span className="text-[#4285F4]">g</span>
          <span className="text-[#34A853]">l</span>
          <span className="text-[#EA4335]">e</span>
        </div>
      </div>
    </div>
  );
}