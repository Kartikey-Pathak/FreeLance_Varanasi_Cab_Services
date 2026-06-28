import Any from "../../../components/Any"
import Last from "../../../components/Last";
import Footer from "../../../components/Footer";
import NavContainer from "../../../components/NavContainer";
import CarRentalSeoContent from "../../../components/CarRentalSeoContent";
import Reviews from "../../../components/Testimonial";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Phone,
} from "lucide-react";



export const metadata = {
  title:
    "Car Rental in Varanasi | Taxi & Cab Booking Service | Cab Services Varanasi",

  description:
    "Looking for the best car rental in Varanasi? Cab Services Varanasi offers affordable taxi booking, airport transfers, local sightseeing cabs, and outstation car rental with professional drivers. Book now via WhatsApp or call us.",

  keywords: [
    "car rental in Varanasi",
    "cab service in Varanasi",
    "taxi service in Varanasi",
    "car hire in Varanasi",
    "cab booking in Varanasi",
    "rent a car in Varanasi",
    "airport taxi Varanasi",
    "outstation cab Varanasi",
    "local taxi service Varanasi",
    "airport cab Varanasi",
    "Varanasi car rental",
    "cheap taxi service in Varanasi",
    "best taxi service in Varanasi",
    "Varanasi cab booking",
    "local sightseeing cab Varanasi",
    "cab services Varanasi",
    "outstation taxi Varanasi",
    "chauffeur driven car rental Varanasi",
    "Lal Bahadur Shastri Airport taxi",
    "Aaradhya Tour and Travels"
  ],

  alternates: {
    canonical:
      "https://cabservicesvaranasi.com/car-rental-in-varanasi",
  },

  openGraph: {
    title:
      "Car Rental in Varanasi | Affordable Taxi & Cab Booking",
    description:
      "Book reliable car rental and taxi services in Varanasi for airport transfers, local sightseeing, and outstation travel.",
    url: "https://cabservicesvaranasi.com/car-rental-in-varanasi",
    siteName: "Cab Services Varanasi",
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Car Rental in Varanasi | Cab Services Varanasi",
    description:
      "Affordable car rental, airport taxi, local sightseeing, and outstation cab services in Varanasi.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  metadataBase: new URL("https://cabservicesvaranasi.com"),
};
export default function Page() {


  return (
    <>
      <header>
        <NavContainer />
      </header>
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
          <div className=" w-full mt-10">
            <div className="inline-flex items-center gap-2 bg-[#F97316]/15 border border-[#F97316]/30 text-[#F97316] px-[50px] py-[6px] rounded-full text-[1rem] font-semibold tracking-[0.5px] uppercase mb-5">
              <span className="w-[6px] h-[6px] bg-[#F97316] rounded-full" />
              Best Car Rental Service in Varanasi
            </div>


            <h1
              className="font-poppins font-extrabold text-gray-300 leading-[1.15] mb-[18px]"
              style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
            >
              Rent a{" "}
              <span className="text-[#F97316]">
                Car Rental in Varanasi
              </span>
              <br />
              Trusted{" "}
              <span className="text-[#F97316]">
                Taxi & Cab Booking
              </span>
              <br />
              for Local, Airport & Outstation Travel
            </h1>


            <p className="text-white/70 text-[1.1rem] leading-[1.7] mb-8 max-w-[520px]">
              Looking for reliable car rental in Varanasi? Book affordable taxi and cab
              services for airport transfers, local sightseeing, railway station pickup,
              Kashi Vishwanath Temple visits, and outstation trips with professional
              drivers and well-maintained vehicles.
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
      <main>
        <CarRentalSeoContent />

        <Any />

        <Reviews />
        <Footer />
      </main>
    </>
  );
}