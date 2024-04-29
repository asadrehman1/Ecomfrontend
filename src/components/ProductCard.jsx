import React from "react";
import productImg from "../assets/product-img.png";
import arrowBtn from "../assets/right-arrow.png";

const ProductCard = () => {
  return (
    <div className="lg:w-[320px] sm:w-[450px] w-[300px] h-[330px] rounded-tl-[30px] flex items-center justify-between bg-[#D9D9D9] m-[10px] md:m-[20px]">
      <div className="w-[500px]">
        <img src={productImg} alt="product-img" />
      </div>
      <div className="text-[#000000] mt-4">
        <h2 className="text-2xl leading-8 my-3 font-bold font-price">
          Patek Philippe Nautilus
        </h2>
        <p className="text-[10px] leading-5 w-[100px]">
          5726/1A, Moonphase, Steel, Blue Index Dial, 40 mm
        </p>
        <h2 className="text-2xl leading-10 font-bold font-price my-3">
          $137,899
        </h2>
        <div className="bg-[#4D0000FD] py-3 px-4 rounded-tl-[30px] flex justify-center items-center">
          <img src={arrowBtn} alt="product-btn" />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
