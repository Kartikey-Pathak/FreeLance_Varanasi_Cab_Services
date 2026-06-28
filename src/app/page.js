
import Footer from "../../components/Footer";
import Form from "../../components/Form";
import Any from "../../components/Any";
import Hero2 from "../../components/Hero2";
import Hero from "../../components/Hero";
import Last from "../../components/Last";
import Nav from "../../components/Nav";
import Nav2 from "../../components/Nav2";
import Review from "../../components/Review";
import Service from "../../components/Service";
import Side from "../../components/Side";
import Testimonial from "../../components/Testimonial";

import Section from "../../components/Section";
import PolicyAccordion from "../../components/PolicyAccordion";
import PolicyMain from "../../components/PolicyMain";
import HomeSeoContent from "../../components/HomeSeoContent";
import NavContainer from "../../components/NavContainer";

export const metadata = {
  title:
    "Cab Services Varanasi | Best Taxi Service & Car Rental in Varanasi",

  description:
    "Book affordable taxi service and car rental in Varanasi with Cab Services Varanasi. Airport transfers, local sightseeing, outstation cabs, corporate rides, and 24/7 cab booking.",

  keywords: [
    "cab services varanasi",
    "taxi service in varanasi",
    "car rental in varanasi",
    "cab booking varanasi",
    "airport taxi varanasi",
    "outstation cab varanasi",
    "cab service near me",
    "best cab service in varanasi",
    "tempo traveller in varanasi",
    "local sightseeing taxi varanasi",
    "varanasi airport taxi",
    "cabservicesvaranasi.com"
  ],

  metadataBase: new URL("https://cabservicesvaranasi.com"),

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title:
      "Cab Services Varanasi | Best Taxi Service & Car Rental in Varanasi",

    description:
      "Reliable taxi service, airport taxi, local sightseeing and outstation cab booking in Varanasi.",

    url: "https://cabservicesvaranasi.com",

    siteName: "Cab Services Varanasi",

    locale: "en_IN",

    type: "website",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Cab Services Varanasi",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Cab Services Varanasi | Best Taxi Service & Car Rental in Varanasi",
    description:
      "Affordable taxi service, airport cab and car rental in Varanasi.",
    images: ["/og-image.jpg"],
  },
};

export default function Home() {




  return (
    <section className=" w-full">

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TaxiService",
            "@id": "https://cabservicesvaranasi.com/#business",
            name: "Cab Services Varanasi",
            url: "https://cabservicesvaranasi.com",
            logo: "https://cabservicesvaranasi.com/logo.png",
            image: "https://cabservicesvaranasi.com/logo.png",

            description:
              "Cab Services Varanasi offers taxi service, airport transfers, local sightseeing, car rental, and outstation cab booking in Varanasi.",

            telephone: "+91-8299529846",

            email: "cabservicesvaranasi91@gmail.com",

            priceRange: "₹₹",

            address: {
              "@type": "PostalAddress",
              addressLocality: "Varanasi",
              addressRegion: "Uttar Pradesh",
              postalCode: "221001",
              addressCountry: "IN"
            },

            areaServed: [
              "Varanasi",
              "Sarnath",
              "Prayagraj",
              "Ayodhya",
              "Bodh Gaya"
            ],

            openingHours: "Mo-Su 00:00-23:59",

            serviceType: [
              "Taxi Service in Varanasi",
              "Car Rental in Varanasi",
              "Airport Taxi Service",
              "Outstation Cab Service",
              "Local Sightseeing Taxi",
              "Corporate Cab Service"
            ]
          }),
        }}
      />



      <header>
        <NavContainer />
      </header>

      <main>
        <Hero />

        <Service />




        <Any />

        <Section />


        <HomeSeoContent />


        <Testimonial />



      </main>
      <footer>
        <Footer />
      </footer>



    </section>
  );
}