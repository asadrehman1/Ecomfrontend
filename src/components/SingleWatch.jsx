import React, { useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/cartContext";
import productImg from "../assets/product-img.png";
import cartArrow from "../assets/cart-arrow.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MyAccordion from "./Accordion";
import sellTradeImg from "../assets/rectangle-mobile.png";
import sellTradeLg from "../assets/rec-large.png";
import SwiperSlider from "./Slider";
const SingleWatch = () => {
  const { brand, id } = useParams();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const watchDetails = {
    id: 5,
    name: "Seiko",
    price: 11000,
    desc: "15416CE, Double Balance Wheel, Ceramic, Open worked Dial, 41 mm",
    dialColor: "black",
    condition: "used",
    model: 2019,
    caseMaterial: "polymer",
    caseSize: 26,
    movement: 3,
  };

  const handleAddToCart = () => {
    addToCart(watchDetails, quantity);
    alert("Item added to cart!");
  };

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  let sliderRef = useRef(null);

  const play = () => {
    sliderRef.slickPlay();
  };
  const pause = () => {
    sliderRef.slickPause();
  };

  return (
    <div className="md:w-[80%] mx-auto my-20 p-3">
      <div className="md:flex block justify-evenly items-center relative flex-wrap">
        <div className="max-w-[700px]  bg-[#D9D9D9] rounded-sm shadow-md m-3">
          <Slider ref={(slider) => (sliderRef = slider)} {...settings}>
            <div className="flex justify-center">
              <img
                src={productImg}
                alt="product-img"
                className="w-[500px] m-auto"
              />
            </div>
            <div className="flex justify-center">
              <img
                src={productImg}
                alt="product-img"
                className="w-[500px] m-auto"
              />
            </div>
            <div className="flex justify-center">
              <img
                src={productImg}
                alt="product-img"
                className="w-[500px] m-auto"
              />
            </div>
          </Slider>
        </div>
        <div className="max-w-[470px] min-h-[370px] bg-[#F5F6F8] z-50 top-10 right-0 p-5 m-3 my-5">
          <h2 className="italic md:text-2xl text-xl font-bold my-3">
            Audemars Piguet Royal Oak
          </h2>
          <p className="text-[12px] my-3">
            15416CE, Double Balance Wheel, Ceramic, Open worked Dial, 41 mm
          </p>
          <p className="my-2">Colors:- Black & Silver</p>
          <div className="flex items-center">
            <button
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-l-md hover:bg-gray-300 focus:outline-none"
              onClick={decreaseQuantity}
            >
              -
            </button>
            <span className="px-4 py-2 bg-gray-100 text-gray-700">
              {quantity}
            </span>
            <button
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-r-md hover:bg-gray-300 focus:outline-none"
              onClick={increaseQuantity}
            >
              +
            </button>
          </div>

          <h2 className="my-3 text-[#4D0000FD] font-bold text-2xl">$ 10,000</h2>
          <div
            onClick={handleAddToCart}
            className="flex justify-between max-w-[27bpx] bg-[#D9D9D9] p-2 rounded-sm transition-transform transform hover:scale-110"
          >
            <p className="text-[#4D0000FD] text-xl cursor-pointer transition-all duration-300 hover:text-red-500">
              ADD TO CART
            </p>
            <img
              src={cartArrow}
              alt="cart-arrow"
              className="cursor-pointer transition-all duration-300 hover:opacity-80"
            />
          </div>
        </div>
      </div>
      <div className="my-20">
        <p className="max-w-[1120px] m-auto md:text-[18px] text-[15px]">
          The Audemars Piguet Royal Oak, model number 15416CE.OO.1225CE.01,
          stands as a masterpiece of horological innovation and design.
          Featuring a Double Balance Wheel mechanism, this timepiece exemplifies
          precision engineering and accuracy. Crafted from ceramic, the 41mm
          case exudes durability and modern elegance. The Openworked Dial offers
          a mesmerizing view into the intricate inner workings of the watch,
          showcasing its skeletonized design with exquisite detail.
        </p>
      </div>
      <div className="bg-[#D7D9E4] pt-4 shadow-md rounded-md max-w-[1120px] m-auto">
        <h2 className="text-center font-bold underline md:text-3xl text-xl text-[#4D0000FD] my-3">
          Product Details
        </h2>
        <MyAccordion />
      </div>
      <div className="flex flex-col items-center">
        <div className="flex justify-evenly flex-wrap my-20">
          <div className="relative flex flex-col items-center p-5 max-w-[541px] h-auto border-4 border-[#D7D9E4] m-5">
            <div className="lg:px-4 px-3 py-2 top-[-6%] absolute sm:top-[-2.7%] lg:top-[-5%] md:top-[-2.5%] left-0 right-0 text-center bg-white]">
              <button className="lg:w-auto border-4 italic border-[#ccc] bg-white text-[#4D0000FD] font-bold md:text-[24px] text-[12px] leading-8 rounded-lg py-2 px-6">
                100% Authenticc
              </button>
            </div>
            <img src={sellTradeImg} alt="sell-trade-img" />
            <p className="md:text-[16px] text-[10px] text-center my-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
          <div className="relative flex flex-col items-center p-5 max-w-[541px] h-auto border-4 border-[#D7D9E4] m-5">
            <div className="lg:px-4 px-3 py-2 top-[-6%] absolute sm:top-[-2.7%] lg:top-[-5%] md:top-[-2.5%] left-0 right-0 text-center bg-white]">
              <button className="lg:w-auto border-4 italic border-[#ccc] bg-white text-[#4D0000FD] font-bold md:text-[24px] text-[14px] leading-8 rounded-lg py-2 px-6">
                2-YEAR WARRANTY
              </button>
            </div>
            <img src={sellTradeImg} alt="sell-trade-img" />
            <p className="md:text-[16px] text-[10px] text-center my-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
        <div className="relative flex flex-col items-center p-5 max-w-[927px] h-auto border-4 border-[#D7D9E4] m-5">
          <div className="lg:px-4 px-3 py-1 top-[-8%] absolute sm:top-[-2.1%] lg:top-[-6%] md:top-[-2.5%] left-0 right-0 text-center bg-white]">
            <button className="lg:w-auto border-4 italic border-[#ccc] bg-white text-[#4D0000FD] font-bold md:text-[24px] text-[14px] leading-8 rounded-lg py-2 px-6">
              CUSTOMER SATISFACTION
            </button>
          </div>
          <img src={sellTradeLg} alt="sell-trade-img" />
          <p className="md:text-[16px] text-[10px] text-center my-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
      <div className="bg-[#D7D9E4] pt-4 shadow-md rounded-md my-20">
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
          <SwiperSlider />
        </div>
      </div>
    </div>
  );
};

export default SingleWatch;
