import React, { useEffect } from "react";
import AboutText from "../../../components/AboutText";
import Margs4 from "../../../assets/images/margs4.jpg";
import "../../../App.css";
import AboutStats from "../../../components/AboutStats";
import AOS from "aos"
import "aos/dist/aos.css"
const About = () => {
  useEffect(()=>{
    AOS.init({
      duration:1000,
      easing:"ease-in-out",
      once:false,
      mirror:true
    })
  },[])
  return (
    <section className="px-8 flex flex-wrap flex-row pt-8 sm:pt-28 " id="about">
      <p
        className={
          "sm:hidden w-full text-center mb-6 text-4xl font-normal text-heading-color"
        }
        data-aos="zoom-in"
      >
        About Us
      </p>
      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center relative overflow-hidden rounded-[30px] min-h-[400px]">

        <img
          src={Margs4}
          alt="About us"
          className="w-full h-full object-cover rounded-[30px] "
          loading="lazy"
        />
        <AboutStats />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <AboutText />
      </div>
    </section>
  );
};

export default About;
