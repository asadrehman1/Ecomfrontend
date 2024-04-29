import React from "react";
import rec162 from "../assets/Rectangle 162.png";
import mg7 from "../assets/mg7.png";
import mg8 from "../assets/mg8.png";
import mg9 from "../assets/mg9.png";
import mg10 from "../assets/mg10.png";
import Marquee from "react-fast-marquee";
import MyAccordion from "./Accordion";
import Slider from "./Slider";

const Services = () => {
  return (
    <div>
      <div className="w-full md:w-[80%] m-auto px-2 relative">
        <div className="min-h-[633px] bg-[#4D0000FD] flex justify-evenly items-center flex-wrap relative">
          <div className="mb-20">
            <h2 className="lg:text-[56px] text-center text-[48px] text-white leading-normal italic">
              Elevate Your <br className="md:block hidden" /> Style Expert{" "}
              <br /> Jewelry
            </h2>
          </div>
          <div className="lg:block hidden">
            <img src={rec162} alt="rec162" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 transform translate-y-1/2 lg:translate-y-0 lg:-translate-y-1/4">
            <img
              src={rec162}
              alt="rec162"
              className="lg:hidden block mx-auto"
            />
          </div>
        </div>
        <div class="mt-[240px] lg:mt-[-5%] mb-20 md:flex justify-between relative md:mx-auto sm:mx-3 block lg:w-[80%] w-full p-3">
          <div class="w-1/2 relative md:block hidden">
            <img
              src={mg7}
              alt="mg7"
              className="absolute md:left-[-10%] left-5 top-[-7%] md:w-[400px]"
            />
          </div>
          <div class="w-1/2 relative md:hidden block mx-auto">
            <img src={mg7} alt="mg7" />
          </div>

          <div class="w-full md:w-1/2 lg:mt-40 md:mx-5 md:text-start">
            <h2 class="italic md:text-[36px] text-[26px] font-bold mb-10 text-[#4D0000FD] underline text-center md:text-start">
              JEWELRY DESIGN
            </h2>
            <p class="md:text-[18px] text-[12px] my-3 md:w-[400px] lg:w-full text-center md:text-start">
              Discover the allure of our jewelry, blending timeless elegance
              with contemporary flair. Our global presence ensures you can
              experience luxury and sophistication wherever you are, leaving a
              lasting impression that resonates with your unique sense of style.
            </p>
            <div class="flex justify-center">
              <button class="bg-transparent border-4 border-[#4D0000FD] text-[#4D0000FD] py-1 px-3 rounded-sm">
                Contact Us
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between md:w-[80%] mx-auto w-full my-20">
          <div className="my-20">
            <div className="mb-4 text-center">
              {" "}
              <span class="italic md:text-[36px] text-[26px] font-bold mb-5 text-[#4D0000FD] underline text-center md:text-start">
                JEWELRY REPAIRING
              </span>
            </div>
            <p class="md:text-[18px] text-[12px] my-3 md:w-[400px] lg:w-full md:max-w-[500px] text-center">
              Discover the allure of our jewelry, blending timeless elegance
              with contemporary flair. Our global presence ensures you can
              experience luxury and sophistication wherever you are, leaving a
              lasting impression that resonates with your unique sense of style.
            </p>
          </div>
          <div class="md:block hidden">
            <img src={mg8} alt="mg8" className="md:w-[400px]" />
          </div>
          <div class="w-1/2 md:hidden block mx-auto">
            <img src={mg8} alt="mg8" />
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row justify-between md:w-[80%] mx-auto w-full my-20">
          <div class="md:block hidden">
            <img src={mg9} alt="mg9" className="md:w-[400px]" />
          </div>
          <div class="w-1/2 md:hidden block mx-auto">
            <img src={mg9} alt="mg9" />
          </div>
          <div className="my-20">
            <div className="mb-4 text-center">
              {" "}
              <span class="italic md:text-[36px] text-[26px] font-bold mb-5 text-[#4D0000FD] underline text-center md:text-start">
                APPRAISLAS
              </span>
            </div>
            <p class="md:text-[18px] text-[12px] my-3 md:w-[400px] lg:w-full md:max-w-[500px] text-center">
              Discover the allure of our jewelry, blending timeless elegance
              with contemporary flair. Our global presence ensures you can
              experience luxury and sophistication wherever you are, leaving a
              lasting impression that resonates with your unique sense of style.
            </p>
          </div>
        </div>
        <div>
          <img src={mg10} alt="mg-10" className="mx-auto" />
        </div>
      </div>
      <div className="h-[56px] bg-[#4D0000FD] my-20">
        <Marquee speed={100}>
          <h3 className="font-bold text-white text-3xl font-marquee leading-[40px] mx-10">
            House of Gold & Diamond
          </h3>
          <h3 className="font-bold text-white text-3xl font-marquee leading-[40px] mx-10">
            House of Gold & Diamond
          </h3>
          <h3 className="font-bold text-white text-3xl font-marquee leading-[40px] mx-10">
            House of Gold & Diamond
          </h3>
          <h3 className="font-bold text-white text-3xl font-marquee leading-[40px] mx-10">
            House of Gold & Diamond
          </h3>
          <h3 className="font-bold text-white text-3xl font-marquee leading-[40px] mx-10">
            House of Gold & Diamond
          </h3>
        </Marquee>
      </div>
      <div className="bg-[#D7D9E4] pt-4 shadow-md rounded-md my-20 w-[80%] mx-auto">
        <h2 className="text-center font-bold underline md:text-3xl text-xl text-[#4D0000FD] my-3">
          FREQUENTY ASKED QUESTIONS
        </h2>
        <MyAccordion />
      </div>
      <div className="text-center my-20 underline">
        <h2 className="md:text-4xl text-xl italic font-bold">
          Some Kind Words From Clients
        </h2>
        <div className="p-2 my-5">
          <Slider />
        </div>
      </div>
    </div>
  );
};

export default Services;
