"use client";

import { useEffect, useRef, useState } from "react";
import Any from "../../../components/Any";

import Footer from "../../../components/Footer";
import Nav from "../../../components/Nav";
import Side from "../../../components/Side";
import Last from "../../../components/Last";
import SeoContent from "../../../components/SeoContent";
import Reviews from "../../../components/Testimonial";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
    Phone,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

function Rent() {
    const [open, setOpen] = useState(false);

    // Hero refs
    const contentRef = useRef(null);
    const cardRef = useRef(null);
    const badgeRef = useRef(null);
    const pulseRef = useRef(null);

    // Section refs
    const statsRef = useRef(null);
    const missionRef = useRef(null);
  
    const ctaRef = useRef(null);

    // ─── Static data ──────────────────────────────────────────────────────────────

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
            <Nav open={open} setOpen={setOpen} />
            <Side open={open} setOpen={setOpen} />
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
                    <div ref={contentRef} className="opacity-0 w-full mt-10">
                        <div className="inline-flex items-center gap-2 bg-[#F97316]/15 border border-[#F97316]/30 text-[#F97316] px-[50px] py-[6px] rounded-full text-[1rem] font-semibold tracking-[0.5px] uppercase mb-5">
                            <span ref={pulseRef} className="w-[6px] h-[6px] bg-[#F97316] rounded-full" />
                            Rent A Car Now
                        </div>


                        <h1
                            className="font-poppins font-extrabold text-gray-300 leading-[1.15] mb-[18px]"
                            style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
                        >
                            Rent a{" "}
                            <span className="text-[#F97316]">
                                Car in Varanasi
                            </span>
                            <br />
                            Trusted{" "}
                            <span className="text-[#F97316]">
                                Cab Booking Service
                            </span>
                            <br />
                            for Local & Outstation Travel
                        </h1>


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
                        <div className="mt-12 flex flex-col items-start gap-2">
                            <p className="text-white/90 text-sm tracking-[3px] uppercase">
                                Discover Our Premium Fleet
                            </p>

                            <div className="flex items-center gap-3">
                                <span className="text-[#F97316] font-bold">
                                    Scroll for More
                                </span>

                                <i className="fa-solid fa-chevron-down animate-bounce font-bold text-[#F97316]"></i>
                            </div>
                        </div>


                    </div>

                </div>


            </section>

            <Any />

            <SeoContent />

            <Reviews />

            <footer>
                <Footer />
            </footer>

        </>

    )
}
export default Rent;