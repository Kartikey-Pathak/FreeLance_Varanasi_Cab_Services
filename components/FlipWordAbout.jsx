import React from "react";
import { FlipWords } from "../src/components/ui/flip-words";

export function FlipWordAbout() {
  const words = [
        "Corporate Travel Solutions",
    "Comfortable Outstation Trips",
    "Local Sightseeing Tours",
    "Reliable Corporate Rides",
  ];

  return (
    <div className=" flex items-center justify-center flex-col">
    <h1
      className="font-poppins font-extrabold text-gray-300 leading-[1.15] mb-[18px]"
      style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
    >
      About{" "}
      <span className="text-[#F97316]">Cab Services Varanasi</span>
      <br />
      Providing{" "}
      <span className="text-[#F97316] inline-block">
        <FlipWords duration={1500} words={words} />
      </span>
      <br />
      Across Varanasi & Beyond
    </h1>
    </div>
  );
}