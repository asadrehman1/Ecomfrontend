import React from "react";
import aboutBanner from "../assets/about-banner.png";
import ms4 from "../assets/ms4.png";
import ms5 from "../assets/ms5.png";
import ms6 from "../assets/ms6.png";
import sellTradeLg from "../assets/rec-large.png";
import MyAccordion from "./Accordion";
import Slider from "./Slider";

const AboutUs = () => {
  return (
    <div className="md:w-[80%] mx-auto w-full px-2">
      <div>
        <img src={aboutBanner} alt="about-banner" className="w-full" />
      </div>
      <div className="mt-[-5%] mb-20 md:flex justify-between relative md:mx-auto sm:mx-3 block lg:w-[80%] w-full p-3">
        <div className="w-full md:w-1/2 relative md:block hidden">
          <img src={ms5} alt="ms5" className="md:w-[400px]" />
          <img
            src={ms4}
            alt="ms4"
            className="absolute md:left-[-10%] left-5 top-[-7%] md:w-[400px]"
          />
        </div>
        <div className="w-full md:w-1/2 relative md:hidden block">
          <img
            src={ms6}
            alt="ms6"
            className="absolute left-0 right-0 mx-auto my-[-30px]"
          />
        </div>

        <div className="w-full md:w-1/2 mt-40 md:mx-5 md:text-start">
          <h2 className="italic md:text-[36px] text-[26px] font-bold mb-10 text-[#4D0000FD] underline text-center md:text-start">
            WHY US
          </h2>
          <p className="md:text-[18px] text-[12px] my-3 md:w-[400px] lg:w-full text-center md:text-start">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages.
          </p>
        </div>
      </div>
      <div className="flex lg:justify-between justify-center flex-wrap md:w-[80%] mx-auto w-full my-20">
        <div>
          <p className="md:text-3xl sm:text-2xl font-semibold italic max-w-[344px] mt-20 text-center md:text-start">
            Shine Bright with <br></br>Exquisite Diamond and <br></br> Gold
            Jewelry
          </p>
        </div>
        <div className="w-[545px] min-h-[383px] bg-[#D7D9E4] m-10">video</div>
      </div>
      <div className="relative flex flex-col mx-auto items-center p-5 max-w-[927px] h-auto border-4 border-[#D7D9E4] m-5">
        <div className="lg:px-4 px-3 py-1 top-[-8%] absolute sm:top-[-2.1%] lg:top-[-6%] md:top-[-2.5%] left-0 right-0 text-center bg-white]">
          <button className="lg:w-auto border-4 italic border-[#ccc] bg-white text-[#4D0000FD] font-bold md:text-[24px] text-[14px] leading-8 rounded-lg py-2 px-6">
            TERMS AND CONDITIONS
          </button>
        </div>
        <img src={sellTradeLg} alt="sell-trade-img" className="md:w-full" />
        <p className="md:text-[16px] text-[10px] text-center my-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <p className="md:text-[16px] text-[10px] text-center my-2">
          It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.
        </p>
      </div>
      <div className="bg-[#D7D9E4] pt-4 shadow-md rounded-md">
        <h2 className="text-center font-bold underline md:text-3xl text-xl text-[#4D0000FD] my-3">
          FREQUENTY ASKED QUESTIONS
        </h2>
        <MyAccordion />
      </div>
      <div className="text-center my-20 underline">
        <h2 className="md:text-4xl text-2xl italic font-bold">
          Some Kind Words From Clients
        </h2>
        <div className="p-2 my-5">
          <Slider />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
