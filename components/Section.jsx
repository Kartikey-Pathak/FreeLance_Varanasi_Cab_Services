"use client";

import React from "react";
import { InfiniteMovingCards } from "../src/components/ui/infinite-moving-cards";

export default function Section() {
  return (
    <div className="h-[50rem] mb-60 mt-10 rounded-md flex flex-col antialiased bg-white items-center justify-center relative overflow-hidden">
      <h3 className="text-[0.78rem] md:text-2xl font-bold tracking-[1.5px] uppercase text-[#F97316] mb-5">
        Popular Tourist Destinations
      </h3>

      <h2
        className="font-poppins font-extrabold text-center text-[#0F172A] leading-[1.2] mb-[14px]"
        style={{ fontSize: "clamp(1.7rem, 3vw, 2.4rem)" }}
      >
        Taxi Service for Varanasi Sightseeing
        <br />
        & Outstation Tours
      </h2>

      <p className="max-w-3xl text-[#64748B] md:text-xl text-[1rem] leading-[1.7] text-center mb-10 px-4">
        Explore famous places to visit in Varanasi with our reliable taxi service.
        Book local sightseeing tours, airport transfers, and outstation cab
        services to destinations like Sarnath, Ayodhya, Prayagraj, and Bodh Gaya.
      </p>
      <InfiniteMovingCards items={destinations} direction="right" speed="slow" />
    </div>
  );
}

const destinations = [
  {
    name: "Kashi Vishwanath Temple",
    description:
      "Visit the sacred temple dedicated to Lord Shiva in the heart of Varanasi.",
    image: "/Kashi.jpg",
  },
  {
    name: "Sarnath",
    description:
      "A peaceful Buddhist site where Lord Buddha gave his first sermon.",
    image: "/Sarnath.jpg",
  },
  {
    name: "Varanasi Airport",
    description:
      "Reliable taxi transfers to and from Lal Bahadur Shastri Airport.",
    image: "/Airport.jpg",
  },
  {
    name: "Assi Ghat",
    description:
      "Famous for sunrise rituals, Ganga aarti, and boat rides.",
    image: "/Ghat.jpg",
  },
  {
    name: "Ramnagar Fort",
    description:
      "A historic 17th-century fort and museum along the Ganges.",
    image: "/Fort.jpg",
  },
  {
    name: "Banaras Hindu University",
    description:
      "A vast historic campus with temples and peaceful surroundings.",
    image: "/BHU.jpg",
  },
  {
    name: "Ayodhya Ram Mandir",
    description:
      "The sacred birthplace of Lord Rama and a major pilgrimage site.",
    image: "/Ayodhya.jpg",
  },
  {
    name: "Triveni Sangam, Prayagraj",
    description:
      "The holy confluence of the Ganga, Yamuna, and Saraswati rivers.",
    image: "/Prayag.jpg",
  },
  {
    name: "Bodh Gaya",
    description:
      "Home to the Mahabodhi Temple where Buddha attained enlightenment.",
    image: "/Bodh.jpg",
  },
];
