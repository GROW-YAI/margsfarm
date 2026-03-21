import { useEffect } from "react";
import DotSVG from "../assets/svg/dot.svg";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import K from "../constants";
import AOS from "aos"
import "aos/dist/aos.css"

interface NavLink {
  name: string;
  id: string;
}

const FooterNav = () => {
  
    useEffect(()=>{
      AOS.init({
        duration:1000,
        easing:"ease-in-out",
        once:false,
        mirror:true
      })
    },[])
  return (
    <nav className="pt-20  sm:pt-28">
      <div className="flex flex-col sm:flex-row sm:justify-between bg-[#EDDD5E] sm:py-9 py-5 sm:px-8 gap-5">
        <div className="flex   justify-start gap-5 flex-wrap mx-auto sm:mx-0 sm:justify-center">
          {K.NAVLINKS.map((link: NavLink, index: number) => {
            return (
              <div data-aos="fade-right"  key={index}>
                <h5 className="font-normal text-green-950 text-[16px] sm:text-[13px] flex items-center gap-2">
                  <img
                    src={DotSVG}
                    alt=""
                    className="sm:inline mr-5 hidden"
                    loading="lazy"
                  />
                  <a href={link.id}>{link.name}</a>
                </h5>
              </div>
            );
          })}
        </div>

        <div
          className="flex flex-col  mx-5 sm:flex-row items-start sm:items-center gap-3  sm:gap-5"
          id="contact"
          data-aos="fade-in"
          data-aos-delay="300"
        >
          <div className="flex items-center gap-3">
            <div className="bg-white rounded-full p-3">
              <AiOutlinePhone size={20} className="text-green-950"/>
            </div>

            <p className=" text-green-950 ">+233 54 175 0015</p>
          </div>
          <div className={"flex items-center gap-3 "}>
            <div className="bg-white rounded-full p-3">
              <AiOutlineMail size={20} className="text-green-950"/>
            </div>

            <p className="text-green-950">maggiepapabi24@mail.com</p>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default FooterNav;