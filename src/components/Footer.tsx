import { useEffect } from "react";
import Logo from "../assets/logo/logo1.svg";
import FooterNav from "./FooterNav.tsx";
import AOS from "aos"
import "aos/dist/aos.css"


const Footer = () => {
  
    useEffect(()=>{
      AOS.init({
        duration:1000,
        easing:"ease-in-out",
        once:false,
        mirror:true
      })
    },[])
  return (
    <footer>
      <FooterNav />
      <div>
        <div className="pt-16 sm:pt-24">
          <div className="px-8 max-w-[1424px] mx-auto">
            <div className="grid sm:grid-cols-3 gap-8 items-center justify-center">
              <div>
                <img
                  src={Logo}
                  alt="logo"
                  className="max-h-14"
                  loading="lazy"
                />
              </div>

              <div className="sm:col-span-2">
                <h3 data-aos="fade-in" data-aos-delay="200" className="text-lg sm:text-3xl leading-6 sm:leading-[42px] text-center sm:text-left">
                  Margi Papabi Agro Products
                  <br />
                  <span   className="block">Liquified Organic Products</span>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-6">
        <div className="px-8 max-w-[1424px] mx-auto">
          <div className="grid sm:grid-cols-3 gap-8">
            <div className="sm:col-span-1">
              <aside className="pt-11 pb-10">
                <p data-aos="fade-in" data-aos-delay="200" className="-mt-8 sm:mt-0 text-md sm:text-base leading-6 text-left">
                  Providing sustainable, organic solutions to boost farm
                  productivity and soil health.
                </p>
              </aside>
            </div>

            {/* WORKING HOURS AND ADDRESS SECTION */}
            <div data-aos="fade-in" data-aos-delay="300" className="-mt-14 sm:mt-0">
              <div className="text-left pt-8 sm:pt-11 pb-11">
                <h5 className=" text-xl">Working Time</h5>
                <ul>
                  <li>Mon - Fri: 9.00am - 5.00pm</li>
                  <li>Saturday: 10.00am - 6.00pm</li>
                  <li>Sunday Closed</li>
                </ul>
              </div>
            </div>

            <div data-aos="fade-in" data-aos-delay="400" className="-mt-14 sm:mt-0">
              <div className="text-left pt-8 sm:pt-11 pb-11">
                <h5 className="text-xl">Our Address</h5>
                <address>
                  Anibreko, near Ghana <br />
                  Holy Healing Church - Drobonso
                </address>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="mx-auto w-[80%] mb-4 -mt-10 sm:mt-0" />
      <div className="mb-4">
        <p className="text-center">
          Copyright &copy; 2024 Agrimo. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;