"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useState } from "react";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { FlipWord } from "./FlipWord";


const trustBadges = [
  { icon: "✓", label: "24/7 Service" },
  { icon: "✓", label: "Verified Drivers" },
  { icon: "✓", label: "No Hidden Charges" },
  { icon: "✓", label: "Instant Booking" },
];



export default function Hero() {
  const contentRef = useRef(null);
  const cardRef = useRef(null);
  const badgeRef = useRef(null);
  const pulseRef = useRef(null);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    pickupDate: "",
  });

  const [errors, setErrors] = useState({});
   const words = ["better", "cute", "beautiful", "modern"];


  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error while typing
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleSubmit = () => {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Please enter your name";
    }

    if (!form.phone.trim()) {
      newErrors.phone = "Please enter mobile number";
    } else if (!/^[6-9]\d{9}$/.test(form.phone)) {
      newErrors.phone = "Enter a valid 10-digit number";
    }

    setErrors(newErrors);

    // Stop if validation fails
    if (Object.keys(newErrors).length > 0) return;

    // Create WhatsApp message
    const message = `
   *New Cab Booking Request*
   *Name:* ${form.name}
   *Mobile:* ${form.phone}
   *Pickup Date:* ${form.pickupDate || "Not specified"
      }
  `;

    // Replace with your WhatsApp number (country code without +)
    const whatsappNumber = "918881509360";

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank");
  };


  useEffect(() => {
    // Staggered entrance
    gsap.fromTo(
      contentRef.current,
      { opacity: 0, x: -60 },
      { opacity: 1, x: 0, duration: 1.1, ease: "power2.out", delay: 0.2 }
    );
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, x: 60 },
      { opacity: 1, x: 0, duration: 1.1, ease: "power2.out", delay: 0.35 }
    );
    gsap.fromTo(
      badgeRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", delay: 0.8 }
    );

    // Pulsing dot
    gsap.to(pulseRef.current, {
      scale: 1.4,
      opacity: 0.4,
      duration: 1.2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center pt-[100px] pb-[60px] px-[5vw] overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, rgba(15,23,42,0.95) 0%, rgba(15,23,42,0.7) 50%, rgba(249,115,22,0.25) 100%), url('https://images.unsplash.com/photo-1561361058-c24cecae35ca?w=1600&q=80') center/cover no-repeat",
      }}
    >
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-[120px] bg-gradient-to-t from-white to-transparent pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-10 lg:gap-[60px] items-center">

        {/* ── Left Content ── */}
        <div ref={contentRef} className="opacity-0">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 bg-[#F97316]/15 border border-[#F97316]/30 text-[#F97316] px-[14px] py-[6px] rounded-full text-[0.78rem] font-semibold tracking-[0.5px] uppercase mb-5">
            <span
              ref={pulseRef}
              className="w-[6px] h-[6px] bg-[#F97316] rounded-full"
            />
            Varanasi's Trusted Cab Service
          </div>

          {/* Headline */}
          <FlipWord/>

          {/* Sub-headline */}
          <p className="text-white/70 text-[1.1rem] leading-[1.7] mb-8 max-w-[520px]">
            Book trusted cabs for local sightseeing, airport transfers &amp;
            outstation travel. Explore the spiritual heart of India with comfort
            and safety.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-[14px] mb-10">
            <a
              href="tel:+919999999999"
              className="inline-flex items-center gap-2 bg-[#F97316] text-white px-[30px] py-[14px] rounded-[10px] font-bold text-[1rem] no-underline hover:bg-[#ea6c0a] hover:-translate-y-[2px] transition-all duration-200 shadow-[0_4px_20px_rgba(249,115,22,0.4)] hover:shadow-[0_8px_28px_rgba(249,115,22,0.5)]"
            >
              Call Now
            </a>
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 text-white px-[30px] py-[14px] rounded-[10px] font-semibold text-[1rem] no-underline border border-white/30 backdrop-blur-md hover:bg-green-500 active:bg-green-500 hover:-translate-y-[2px] transition-all duration-200"
            >
              💬 WhatsApp Us
            </a>
          </div>

          {/* Trust badges */}
          <div ref={badgeRef} className="flex flex-wrap gap-3 opacity-0">
            {trustBadges.map(({ icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-[6px] text-white/80 text-[0.8rem] font-medium"
              >
                <span className="w-[18px] h-[18px] bg-[#16A34A] rounded-full flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0">
                  {icon}
                </span>
                {label}
              </div>
            ))}
          </div>
        </div>

        {/* ── Booking Card ── */}
        <div
          ref={cardRef}
          className="opacity-0 bg-white rounded-[16px] p-[32px_28px] shadow-[0_20px_60px_rgba(0,0,0,0.25)] border border-white/10"
        >
          <h3 className="font-poppins font-bold text-[1.2rem] text-[#0F172A] mb-[6px]">
            🗓️ Quick Booking
          </h3>

          <p className="text-[0.82rem] text-[#64748B] mb-[22px]">
            Fill the form and we&apos;ll call you back within 2 minutes
          </p>

          <div className="space-y-4">
            {/* Full Name */}
            <div>
              <label className="block text-[0.8rem] font-semibold text-[#1E293B] mb-[6px]">
                Full Name *
              </label>

              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className={`w-full px-[14px] py-[11px] border-[1.5px] rounded-[10px] text-[0.9rem] text-[#1E293B] bg-[#F8FAFC] outline-none transition-all focus:border-[#F97316] focus:shadow-[0_0_0_3px_rgba(249,115,22,0.12)]
        ${errors.name ? "border-red-500" : "border-[#E2E8F0]"}`}
              />

              {errors.name && (
                <p className="text-red-500 text-[12px] mt-1">
                  {errors.name}
                </p>
              )}
            </div>

            {/* Mobile Number */}
            <div>
              <label className="block text-[0.8rem] font-semibold text-[#1E293B] mb-[6px]">
                Mobile Number *
              </label>

              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                maxLength={10}
                placeholder="9876543210"
                className={`w-full px-[14px] py-[11px] border-[1.5px] rounded-[10px] text-[0.9rem] text-[#1E293B] bg-[#F8FAFC] outline-none transition-all focus:border-[#F97316] focus:shadow-[0_0_0_3px_rgba(249,115,22,0.12)]
        ${errors.phone ? "border-red-500" : "border-[#E2E8F0]"}`}
              />

              {errors.phone && (
                <p className="text-red-500 text-[12px] mt-1">
                  {errors.phone}
                </p>
              )}
            </div>

            {/* Pickup Date */}
            <div>
              <label className="block text-[0.8rem] font-semibold text-[#1E293B] mb-[6px]">
                Pickup Date
              </label>

              <input
                type="date"
                name="pickupDate"
                value={form.pickupDate}
                onChange={handleChange}
                onClick={(e) => e.target.showPicker?.()}
                onFocus={(e) => e.target.showPicker?.()}
                className="w-full px-[14px] py-[11px] border-[1.5px] border-[#E2E8F0] rounded-[10px] text-[0.9rem] text-[#1E293B] bg-[#F8FAFC] outline-none focus:border-[#F97316] focus:shadow-[0_0_0_3px_rgba(249,115,22,0.12)] transition-all"
              />
            </div>
          </div>
          
          <MagneticButton>
          <button
            onClick={handleSubmit}
            className="w-full mt-4 bg-[#F97316] text-white py-[13px] rounded-[10px] text-[1rem] font-bold font-poppins cursor-pointer hover:bg-[#ea6c0a] active:bg-[#ea6c0a] hover:-translate-y-[1px] transition-all duration-200 border-none"
          >
            Book My Cab Now
          </button>
          </MagneticButton>

          <p className="text-center text-[0.75rem] text-[#64748B] mt-[10px]">
            🔒 100% safe &amp; private · Free cancellation
          </p>
        </div>
      </div>
    </section>
  );
}

// Reusable form group
function FormGroup({ label, children }) {
  return (
    <div>
      <label className="block text-[0.8rem] font-semibold text-[#1E293B] mb-[6px]">
        {label}
      </label>
      {children}
    </div>
  );
}