import Script from "next/script";
import "./globals.css";
import { Open_Sans } from "next/font/google";
import Cursor from "../../components/Cursor";
import SmoothScroll from "../../components/SmoothScroll";
import Whatsapp from "../../components/Whatsapp";
import Call from "../../components/Call";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-open-sans",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://cabservicesvaranasi.com"),

  title: {
    default:
      "Cab Services in Varanasi | Airport Taxi & Outstation Cabs",
    template: "%s | Cab Services Varanasi",
  },

  description:
    "Book trusted cab services in Varanasi for airport transfers, local sightseeing, outstation trips, corporate travel, and one-way taxi bookings at affordable prices.",

  keywords: [
    "cab services in varanasi",
    "cab service varanasi",
    "taxi service in varanasi",
    "car rental in varanasi",
    "airport taxi varanasi",
    "airport cab varanasi",
    "outstation cab varanasi",
    "local cab service varanasi",
    "one way taxi varanasi",
    "corporate cab service varanasi",
    "tempo traveller varanasi",
    "cab booking varanasi",
    "varanasi taxi service",
    "chauffeur driven car rental varanasi",
    "local sightseeing cab varanasi",
  ],

  alternates: {
    canonical: "/",
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

  openGraph: {
    title:
      "Cab Services in Varanasi | Airport Taxi & Outstation Cabs",

    description:
      "Book reliable cab services in Varanasi for airport transfers, local sightseeing, outstation travel, corporate rides and one-way taxi bookings.",

    url: "https://cabservicesvaranasi.com",

    siteName: "Cab Services Varanasi",

    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Cab Services in Varanasi",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Cab Services in Varanasi | Airport Taxi & Outstation Cabs",

    description:
      "Book reliable cab services in Varanasi for airport transfers, local sightseeing and outstation travel.",

    images: ["/logo.png"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" sizes="any" />
        <link rel="apple-touch-icon" href="/logo.png" />

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-SBQTX18BJ9"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-SBQTX18BJ9');
  `}
        </Script>

      </head>

      <body
        className={`bg-white ${openSans.variable} scroll-smooth font-opensans`}
      >
        {children}
        <Cursor />
        <SmoothScroll />
        <Whatsapp />
        <Call />

        {/* ✅ JS version of Font Awesome (always works) */}
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/js/all.min.js"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </body>
    </html>
  );
}