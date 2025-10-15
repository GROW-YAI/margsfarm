import React, { useEffect } from "react";
import SectionHeading from "../../../components/SectionHeading";
import Margs2 from "../../../assets/images/margs2.jpg";
import K from "../../../constants";
import FertilizerCards from "../../../components/FertilizerCards";
import AOS from "aos"
import "aos/dist/aos.css"


const TypesOfFertilizer = () => {
  
    useEffect(()=>{
      AOS.init({
        duration:1000,
        easing:"ease-in-out",
        once:false,
        mirror:true
      })
    },[])
  return (
    <section className="bg-[#F8F7F0] py-24" id="services">
      <div className="px-7">
        <div className="flex flex-col items-center">
          <SectionHeading heading={"Grow Naturally"} />
          <h2 data-aos="fade-in" className="text-3xl sm:text-[55px]  text-center text-heading-color mt-2 sm:leading-[60px]">
            Choose what's perfect <br /> for your field
          </h2>
        </div>

        <div className="flex flex-col sm:flex sm:flex-row items-center justify-between ">
          <div className="flex items-center justify-center  flex-1 ">
            <div>
              {K.FERTILIZERS.slice(0, 2).map((fertilizer, index) => (
                <div key={index} className="mt-12 py-0 w-[100%] ">
                  <FertilizerCards
                    icon={fertilizer.icon}
                    alt={fertilizer.alt}
                    title={fertilizer.title}
                    description={fertilizer.description}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="px-3 mt-10 flex-1 ">
            <div className="text-center ">
              <img
                src={Margs2}
                alt="types"
                className="max-w-full height-auto"
                loading="lazy"
              />
            </div>
          </div>

          <div className=" flex items-center justify-center  flex-1 ">
            <div>
              {K.FERTILIZERS.slice(2, 4).map((fertilizer, index) => (
                <div key={index} className="mt-12 py-0 w-[100%] ">
                  <FertilizerCards
                    icon={fertilizer.icon}
                    alt={fertilizer.alt}
                    title={fertilizer.title}
                    description={fertilizer.description}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TypesOfFertilizer;
