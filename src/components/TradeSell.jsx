import React from "react";
import { Link } from "react-router-dom";
import pic from "../assets/Rectangle 136.png";
import ms1 from "../assets/ms1.png";
import ms2 from "../assets/ms2.png";
import ms3 from "../assets/ms-3.png";
import Marquee from "react-fast-marquee";
import MyAccordion from "./Accordion";
import Slider from "./Slider";

const TradeSell = () => {
  return (
    <div>
      <div className="md:w-[80%] mx-auto w-full">
        <div className="bg-[#4D0000FD] text-center italic md:text-[56px] sm:text-3xl text-2xl text-white flex justify-center items-center h-[448px]">
          <h2 className="max-w-[541px]">
            Exquisite Craftsmanship, Endless Glamour:
          </h2>
        </div>
        <div>
          <img src={pic} alt="pic" className="w-[1500px]" />
        </div>
        <div className="my-20 lg:flex justify-between relative mx-4 md:mx-0 block">
          <div className="w-full md:w-1/2 relative">
            <img src={ms2} alt="ms2" className="md:w-[400px]" />
            <img
              src={ms1}
              alt="ms1"
              className="absolute md:left-10 left-5 top-10 md:w-[400px]"
            />
          </div>
          <div className="w-full md:w-1/2 mt-20 md:mx-5">
            <h2 className="italic md:text-[36px] text-26px font-bold">TRADE</h2>
            <p className="md:text-[18px] text-[12px] my-3">
              With our incredible collection of inventory, we provide a diverse
              and tantalizing array of trading options. Whether you wish to
              trade up towards your grail watch, incorporate multiple watches
              towards one, or even downsize for a different look plus cash, we
              provide the most flexibility in trading a luxury timepiece.
            </p>
            <Link to="/sellTrade">
              <button className="bg-transparent border-4 border-[#6A708D] py-1 px-3 rounded-sm">
                Get Started
              </button>
            </Link>
          </div>
        </div>
        <div className="my-20 lg:flex justify-between  mx-4 md:mx-0 block">
          <div className="w-full md:w-1/2 mt-20 md:mx-5">
            <h2 className="italic md:text-[36px] text-26px font-bold">SELL</h2>
            <p className="md:text-[18px] text-[12px] my-3">
              Selling your timepiece has never been easier. Fill out our custom
              form with details about the watch you want to sell, what your
              desired price would be, and we will work hard to get you a
              same-day quote. Upon authenticity inspection, we wire your money.
              Whether you have realized the value of your timepiece soared in
              the market or want to upgrade because your taste has evolved, we
              can help.
            </p>
            <Link to="/sellTrade">
              <button className="bg-transparent border-4 border-[#6A708D] py-1 px-3 rounded-sm">
                Get Started
              </button>
            </Link>
          </div>
          <div className="w-full md:w-1/2 my-10">
            <img src={ms3} alt="ms3" className="md:w-full" />
          </div>
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

export default TradeSell;
