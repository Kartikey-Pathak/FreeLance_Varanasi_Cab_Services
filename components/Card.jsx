"use client";

import { useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";

export default function Card({
  img,
  name,
  tag,
  rates,
}) {
  const cardRef = useRef(null);
  const glowRef = useRef(null);

  const waLink = `https://wa.me/918299529846?text=${encodeURIComponent(
    `Hi, I want to book ${name}`
  )}`;

  const onEnter = () => {
    gsap.to(glowRef.current, {
      opacity: 1,
      duration: 0.3,
    });
    console.log(window.cursor);
    window.cursor?.enter();
  };

  const onLeave = () => {
    gsap.to(glowRef.current, {
      opacity: 0,
      duration: 0.3,
    });

    window.cursor?.leave();

  };

  return (
    <CardContainer className="w-full rounded-[20px] transition-all
    
duration-300
hover:shadow-[0_0_40px_rgba(249,115,22,0.3)] inter-var"
      onMouseEnter={() => window.cursor?.enter()}
      onMouseLeave={() => window.cursor?.leave()}>
      <CardBody

        ref={cardRef}
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        className="group/card relative bg-white rounded-[20px]
        overflow-hidden border border-[#E2E8F0]
        w-full h-full"
        style={{
          boxShadow: "0 4px 24px rgba(15,23,42,0.07)",
        }}
      >
        {/* IMAGE */}
        <div className="relative h-[220px] bg-[#F8FAFC] overflow-hidden">

          <div
            ref={glowRef}
            className="absolute inset-0 opacity-0 z-10 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(249,115,22,.15), transparent 70%)",
            }}
          />

          {tag && (
            <CardItem
              translateZ={60}
              className="absolute top-3 left-3 z-20
              bg-[#F97316] text-white text-[0.68rem]
              font-bold px-[10px] py-[4px] rounded-full"
            >
              {tag}
            </CardItem>
          )}

          <CardItem
            translateZ={100}
            className="relative w-full h-full"
          >
            <Image
              src={img || "/no.jpg"}
              alt={`${name} car rental in Varanasi`}
              fill
              className="object-contain p-4
              group-hover/card:scale-105
              transition-all duration-300"
            />
          </CardItem>
        </div>

        {/* BODY */}
        <div className="p-5">

          <CardItem
            as="h3"
            translateZ={60}
            className="font-poppins font-bold
            text-[1.15rem] text-[#0F172A]"
          >
            {name}
          </CardItem>

          <CardItem
            as="p"
            translateZ={40}
            className="text-[0.82rem]
            text-[#64748B] mt-2 mb-4"
          >
            Comfortable AC {name} available for
            local, airport and outstation travel
            in Varanasi.
          </CardItem>

          <div className="grid grid-cols-2 gap-2 mb-5">
            {(rates || []).map((item, index) => (
              <CardItem
                key={index}
                translateZ={30}
                className="bg-[#F8FAFC]
                border border-[#E2E8F0]
                rounded-[10px] px-3 py-2"
              >
                <p className="text-[0.68rem] text-[#94A3B8]">
                  {item.label}
                </p>

                <p className="font-bold text-[#0F172A]">
                  {item.price}
                </p>
              </CardItem>
            ))}
          </div>

          <CardItem
            translateZ={80}
            as="a"
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center
            justify-center gap-2 py-3 rounded-[10px]
            bg-[#25D366] text-white font-bold
            hover:bg-[#1ebe5b] active:bg-[#1ebe5b] transition-colors"
          >
            Book on WhatsApp
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}