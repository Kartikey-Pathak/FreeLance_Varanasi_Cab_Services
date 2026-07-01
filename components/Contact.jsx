"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";
import Footer from "./Footer";
import Nav from "./Nav";
import Side from "./Side";

const Contact = () => {
  const [open, setOpen] = useState(false);
  const [car, setCar] = useState(null);

  const searchParams = useSearchParams();

  useEffect(() => {
    setCar(searchParams.get("car"));
  }, [searchParams]);

  return (
    <>
       <Nav open={open} setOpen={setOpen} />
      <Side open={open} setOpen={setOpen} />
     <section
      className="relative min-h-screen  flex-col flex items-center pt-[100px] pb-[60px] px-[5vw] overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, rgba(15,23,42,0.95) 0%, rgba(15,23,42,0.7) 50%, rgba(249,115,22,0.25) 100%), url('https://images.unsplash.com/photo-1561361058-c24cecae35ca?w=1600&q=80') center/cover no-repeat",
      }}
    >

      <div className="min-h-screen w-screen md:w-full md:mt-10  bg-transparent flex items-center justify-center md:px-6 py-12">

        <div className="w-full bg-[#0F172A] rounded-3xl shadow-2xl p-6 md:p-8 grid md:grid-cols-2 gap-10 hover:shadow-[0_0_40px_rgba(249,115,22,0.15)] transition-shadow duration-700">


          <div className="relative bg-[#F97316] text-white rounded-2xl p-8 md:p-10 flex flex-col justify-between overflow-hidden shadow-lg group hover:scale-[1.01] transition-transform duration-500">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Contact Information</h2>
              <p className="text-orange-100 mb-8 text-lg">Say something to start a live chat!</p>

              <div className="space-y-6">
                <InfoItem icon={<FaPhoneAlt />} text={<a href="tel:+918299529846" className="hover:underline">+91 82995 29846</a>} />
                <InfoItem icon={<FaEnvelope />} text={<a href="mailto:rajat6427@gmail.com" className="hover:underline">cabservicesvaranasi91@gmail.com</a>} />
                <InfoItem icon={<FaMapMarkerAlt />} text={<>Varanasi 221005 <br />Uttar Pradesh, India</>} />
              </div>
            </div>

            <div className="flex gap-4 mt-12 relative z-10">
              <SocialIcon link="https://facebook.com"><FaFacebookF /></SocialIcon>
              <SocialIcon link="https://youtube.com"><FaYoutube /></SocialIcon>
              <SocialIcon link="https://instagram.com"><FaInstagram /></SocialIcon>
            </div>


            <div className="absolute -bottom-10 -right-10 w-40 md:w-52 h-40 md:h-52 bg-white/20 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-1000"></div>
            <div className="absolute bottom-20 right-20 w-24 h-24 bg-white/20 rounded-full blur-xl animate-pulse"></div>
          </div>


          <div className="flex flex-col justify-center">
            <form
              className="space-y-6 md:space-y-8 p-2 md:p-6"
              onSubmit={(e) => {
                e.preventDefault();
                const firstName = e.target[0].value.trim();
                const lastName = e.target[1].value.trim();
                const email = e.target[2].value.trim();
                const phone = e.target[3].value.trim();
                const message = e.target[4].value.trim();

                if (!firstName || !lastName) {
                  alert("Please fill in both First Name and Last Name.");
                  return;
                }

                const carText = car ? `Car: ${car}` : "";
                const finalMessage = encodeURIComponent(
                  `Hey, I want to rent a car.\nFirst Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${email}\nPhone: ${phone}\n${carText}\nMessage: ${message}`
                );


                window.open(`https://wa.me/918299529846?text=${finalMessage}`, "_blank");
              }}
            >
              <div className="grid text-white md:grid-cols-2 gap-6">
                <InputField label="First Name" placeholder="Enter Your Name" />
                <InputField label="Last Name" placeholder="Enter Your Name" />
              </div>

              <div className="grid text-white md:grid-cols-2 gap-6">
                <InputField label="Email" placeholder="Enter Your Email" type="email" />
                <InputField label="Phone" placeholder="Enter Your Number" />
              </div>

              <div className="group">
                <label className="block text-sm text-gray-300 font-medium mb-2 group-focus-within:text-[#F97316] transition-colors duration-300">Message</label>
                <textarea
                  rows="4"
                  placeholder="Write Your Message"
                  className="w-full bg-transparent border-b text-white border-gray-600 focus:outline-none focus:border-[#F97316] py-2 resize-none transition-all duration-300 placeholder:text-gray-500"
                />
              </div>

              <div className="pt-2 flex flex-col md:flex-row justify-between items-center gap-4">
                <button
                  type="submit"
                  className="bg-[#F97316] cursor-pointer text-white px-10 py-3.5 rounded-full hover:bg-[#ea580c] hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(249,115,22,0.4)] active:scale-95 transition-all duration-300 font-semibold inline-block w-full md:w-auto"
                >
                  Send Message
                </button>


                <a
                  href="https://www.linkedin.com/in/uttam-verma-03478536a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative text-gray-500 mt-10 text-xs font-medium tracking-wide transition-all duration-300 hover:text-white group inline-block"
                >
                  Component By Uttam Verma
                  <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-gradient-to-r from-transparent via-[#F97316] to-transparent opacity-0 group-hover:opacity-100 scale-x-0 group-hover:scale-x-100 transition-all duration-500"></span>
                </a>
              </div>
            </form>
          </div>

        </div>
      </div>
</section>
      <Footer />
      
    </>
  );
};


const InfoItem = ({ icon, text }) => (
  <div className="flex items-center gap-4 group/item cursor-pointer p-2 -ml-2 rounded-xl hover:bg-white/10 transition-colors duration-300">
    <div className="text-white text-xl group-hover/item:scale-110 group-hover/item:rotate-6 transition-transform duration-300">{icon}</div>
    <div className="text-white text-base group-hover/item:translate-x-1 transition-transform duration-300">{text}</div>
  </div>
);

const InputField = ({ label, placeholder, type = "text" }) => (
  <div className="group">
    <label className="block text-sm font-medium mb-2 text-gray-300 group-focus-within:text-[#F97316] transition-colors duration-300">{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      className="w-full bg-transparent border-b text-white border-gray-600 focus:outline-none focus:border-[#F97316] py-2 transition-all duration-300 placeholder:text-gray-500"
    />
  </div>
);

const SocialIcon = ({ link, children }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white text-white hover:text-[#F97316] hover:-translate-y-2 hover:shadow-[0_10px_15px_rgba(255,255,255,0.25)] hover:scale-110 transition-all duration-300"
  >
    {children}
  </a>
);

export default Contact;