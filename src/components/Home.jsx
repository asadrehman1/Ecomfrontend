import React from "react";
import Banner from "../assets/watch-banner-website 1.png";
import Marquee from "react-fast-marquee";
import watch from "../assets/Group 41.png";
import jewelery from "../assets/Group 42.png";
import rolex from "../assets/Rolex.png";
import audmars from "../assets/audmars piguet.png";
import patekPhilippe from "../assets/patek philippe.png";
import breitling from "../assets/breitling.png";
import wacthMobileBanner from "../assets/watch-banner 1.png";
import sellTradeImg from "../assets/Rectangle 48.png";
import watchIcon from "../assets/watch-icon.png";
import Slider from "./Slider";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import ProductCard from "./ProductCard";
import HomePageCard from "./HomePageCards";

const Home = () => {
  // var settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 2,
  //   slidesToScroll: 1,
  // };

  return (
    <>
      <div className="bg-[#4D0000FD]">
        <div className="flex justify-center">
          <img
            src={Banner}
            alt="home-banner"
            className="sm:block hidden w-[1500px]"
          />
          <img
            src={wacthMobileBanner}
            alt="home-banner"
            className="mt-[113px] w-[500px] block sm:hidden"
          />
        </div>
      </div>
      <div className="h-[56px] bg-[#D9D9D9]">
        <Marquee speed={100}>
          <h3 className="font-bold text-[#4D0000FD] text-3xl font-marquee leading-[40px] mx-10">
            House of Gold & Diamond
          </h3>
          <h3 className="font-bold text-[#4D0000FD] text-3xl font-marquee leading-[40px] mx-10">
            House of Gold & Diamond
          </h3>
          <h3 className="font-bold text-[#4D0000FD] text-3xl font-marquee leading-[40px] mx-10">
            House of Gold & Diamond
          </h3>
          <h3 className="font-bold text-[#4D0000FD] text-3xl font-marquee leading-[40px] mx-10">
            House of Gold & Diamond
          </h3>
          <h3 className="font-bold text-[#4D0000FD] text-3xl font-marquee leading-[40px] mx-10">
            House of Gold & Diamond
          </h3>
        </Marquee>
      </div>
      <div className="bg-[#4D0000FD] p-2">
        <div className="flex justify-center items-center flex-wrap p-2">
          <img src={watch} alt="watch-img" className="mx-2 mb-[0.7rem]" />
          <img src={jewelery} alt="jewelery-img" className="mx-2 mb-[0.7rem]" />
        </div>
        <h1 className="text-white font-marquee text-3xl leading-[45px] font-bold text-center my-4 underline">
          Top Brands
        </h1>
        <div className="flex justify-center items-center flex-wrap">
          <img src={rolex} alt="rolex-pic" />
          <img src={audmars} alt="audmats-pic" className="mt-1 ml-5" />
        </div>
        <div className="flex justify-center flex-wrap">
          <img src={patekPhilippe} alt="patekPhilippe-pic" />
          <img src={breitling} alt="breitling-pic" />
        </div>
      </div>
      <div className="md:w-[80%] w-full my-[50px] md:mx-auto">
        <div className="flex justify-center flex-wrap">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
        <div className="lg:w-[928px] mx-auto my-[100px] relative">
          <div className="lg:flex lg:flex-row flex-col justify-between items-center p-4 border-4 border-[#D7D9E4]">
            <div className="mb-4 lg:mb-0 lg:w-1/2">
              <img src={sellTradeImg} alt="sell-trade-img" className="w-full" />
            </div>

            <div className="lg:w-1/2 flex flex-col justify-evenly p-3 lg:ml-10">
              <h2 className="italic lg:text-[36px] text-[18px] text-[#4D0000FD] font-bold my-3">
                Buy, Sell, and Trade Luxury Watches Now!
              </h2>
              <p className="lg:w-[402px] lg:text-[18px] text-[12px] my-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
            </div>
          </div>
          <div className="lg:px-4 px-3 py-2 bottom-[-2.7%] absolute sm:bottom-[-2.7%] lg:bottom-[-5%] md:bottom-[-2.5%] left-0 right-0 text-center bg-white]">
            <button className="lg:w-auto border-4 border-[#ccc] bg-white text-[#336E6A] font-bold text-lg leading-8 rounded-lg py-2 px-6">
              BUY & TRADE
            </button>
          </div>
        </div>

        <div className="flex justify-center my-[100px] p-2 flex-wrap">
          <HomePageCard
            icon={watchIcon}
            title="Authenticity"
            desc="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book "
          />
          <HomePageCard
            icon={watchIcon}
            title="Authenticity"
            desc="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book "
          />
          <HomePageCard
            icon={watchIcon}
            title="Authenticity"
            desc="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book "
          />
          <HomePageCard
            icon={watchIcon}
            title="Authenticity"
            desc="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book "
          />
        </div>
        <div className="text-center">
          <h2 className="md:text-4xl text-2xl italic font-bold">
            Some Kind Words From Clients
          </h2>
          <div className="p-2 my-5">
            <Slider />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
