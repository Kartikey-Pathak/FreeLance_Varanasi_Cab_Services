"use client";

import { useState } from "react";
import Any from "../../../components/Any";

import Footer from "../../../components/Footer";
import Nav from "../../../components/Nav";
import Side from "../../../components/Side";
import Last from "../../../components/Last";
import SeoContent from "../../../components/SeoContent";
import Reviews from "../../../components/Testimonial";

function Rent() {
      const [open, setOpen] = useState(false);
    return (

        <section className=" w-full">
            <Nav open={open} setOpen={setOpen} />
            <Side open={open} setOpen={setOpen} />

            <Any />

            <SeoContent/>
            
            <Reviews/>

            <footer>
                <Footer />
            </footer>

        </section>

    )
}
export default Rent;