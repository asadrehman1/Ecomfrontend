import React from "react";
import productImg from "../assets/product-img.png";
import jewelImg from "../assets/jewel1.png";
import { Link } from "react-router-dom";

export const NewProductCard = (props) => {
  return (
    <div className="relative w-[352px] h-[352px] text-center m-5">
      <div className="w-[352px] h-[352px] bg-[#D9D9D9] relative flex justify-center items-center rounded-md">
        <img
          src={props.brand ? productImg : jewelImg}
          alt={props.brand ? "product-img" : "jewel-img"}
        />

        <div className="absolute bottom-0 left-0 right-0">
          <div className="flex justify-between">
            <Link
              to={`${props.path}/${props.brand ? props.brand : props.type}/${
                props.id
              }`}
            >
              <div className="bg-[#4D0000FD] py-2 px-4 rounded-tr-[30px] flex justify-center items-center">
                <p className="text-xl text-white font-bold font-price">
                  BUY NOW
                </p>
              </div>
            </Link>

            <div className="bg-[#4D0000FD] py-2 px-4 rounded-tl-[30px] flex justify-center items-center">
              <p className="text-xl text-white font-bold font-price">
                ${props.price}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-2">
        <h2 className="my-1 text-xl font-bold">
          {props.brand ? props.brand : props.type}
        </h2>
        <p className="text-[12px] sm:w-[277px] ms-10">{props.desc}</p>
      </div>
    </div>
  );
};
