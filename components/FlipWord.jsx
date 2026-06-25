import React from "react";
import { FlipWords } from "../src/components/ui/flip-words";

export function FlipWord() {
const words = [
  "Airport Transfers",
  "Outstation Trips",
  "Local Sightseeing",
  "Corporate Rides",
];


  return (
       <h1
      className="font-poppins font-extrabold text-white leading-[1.15] mb-[18px]"
      style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
    >
      Affordable{" "}
      <span className="text-[#F97316] inline-block">
        <FlipWords duration={1500} words={words} />
      </span>
      <br />
      Cab Services in{" "}
      <span className="text-[#F97316]">Varanasi</span>
    </h1>
  );
}
