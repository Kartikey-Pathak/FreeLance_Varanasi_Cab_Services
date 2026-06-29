import Any from "../../../components/Any";
import Footer from "../../../components/Footer";
import AirportSeoContent from "../../../components/AirportSeoContent";
import NavContainer from "../../../components/NavContainer";
import {
  Phone,
} from "lucide-react";
import Reviews from "../../../components/Testimonial";


export const metadata = {
  title:
    "Airport Taxi Varanasi | Varanasi Airport Cab Service | Cab Services Varanasi",

  description:
    "Book airport taxi in Varanasi with Cab Services Varanasi. Reliable airport cab service for Lal Bahadur Shastri International Airport (VNS). 24/7 airport pickup and drop with professional drivers.",

  keywords: [
    "airport taxi Varanasi",
    "Varanasi airport taxi",
    "airport cab Varanasi",
    "Varanasi airport cab service",
    "Lal Bahadur Shastri Airport taxi",
    "VNS airport taxi",
    "airport transfer Varanasi",
    "airport pickup Varanasi",
    "airport drop Varanasi",
    "cab from Varanasi airport",
    "taxi from Varanasi airport",
    "airport cab booking Varanasi",
    "24/7 airport taxi Varanasi",
    "airport taxi service in Varanasi",
    "cheap airport taxi Varanasi",
    "cab service from airport Varanasi",
    "airport transfer service Varanasi",
    "best airport taxi in Varanasi",
    "cab services Varanasi",
    "cabservicesvaranasi.com"
  ],

  metadataBase: new URL("https://cabservicesvaranasi.com"),

  alternates: {
    canonical:
      "https://cabservicesvaranasi.com/airport-taxi-varanasi",
  },

  openGraph: {
    title:
      "Airport Taxi Varanasi | 24/7 Airport Cab Service",

    description:
      "Book affordable airport taxi in Varanasi for airport pickup and drop. Reliable airport cab service available 24/7.",

    url:
      "https://cabservicesvaranasi.com/airport-taxi-varanasi",

    siteName: "Cab Services Varanasi",

    locale: "en_IN",

    type: "website",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Airport Taxi Varanasi",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Airport Taxi Varanasi | Airport Cab Service",

    description:
      "24/7 airport taxi service in Varanasi for airport pickup and drop bookings.",

    images: ["/og-image.jpg"],
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
              Best Airport Taxi Service in Varanasi
            </div>

            <h1
              className="font-poppins font-extrabold text-gray-300 leading-[1.15] mb-[18px]"
              style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
            >
              Reliable{" "}
              <span className="text-[#F97316]">
                Airport Taxi in Varanasi
              </span>
              <br />
              Fast & Affordable{" "}
              <span className="text-[#F97316]">
                Airport Cab Service
              </span>
              <br />
              for Pickup & Drop Transfers
            </h1>

            <p className="text-white/70 text-[1.1rem] leading-[1.7] mb-8 max-w-[520px]">
              Book affordable airport taxi service in Varanasi for hassle-free pickup
              and drop to Lal Bahadur Shastri International Airport. Cab Services
              Varanasi offers reliable airport transfers, professional drivers, and
              comfortable cabs for timely arrivals and departures, available 24/7.
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
        <AirportSeoContent />

        <Any />

        <Reviews/>
        <Footer />
      </main>
    </>
  );
}