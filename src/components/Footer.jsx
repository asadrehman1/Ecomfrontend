import React from "react";
import fb from "../assets/fb.png";
import insta from "../assets/insta.png";
import youtube from "../assets/youtube.png";

const Footer = () => {
  return (
    <div className="min-h-[299px] bg-[#4D0000FD] text-white p-2 lg:flex justify-evenly block mt-10">
      <div className="lg:w-1/2 w-full p-4">
        <div className="flex flex-wrap">
          <div className="mx-5">
            <h2 className="text-2xl mb-2">Shop</h2>
            <p className="text-[12px]">Watches</p>
            <p className="text-[12px]">Jewelery</p>
          </div>
          <div className="mx-5">
            <h2 className="text-2xl mb-2">Company</h2>
            <p className="text-[12px]">About Us</p>
            <p className="text-[12px]">Customer Reviews</p>
            <p className="text-[12px]"> FAQS</p>
          </div>
          <div className="mx-5">
            <h2 className="text-2xl mb-2">Services</h2>
            <p className="text-[12px]">Trade & Sell</p>
            <p className="text-[12px]">Book Appointment</p>
            <p className="text-[12px]">Warranty</p>
            <p className="text-[12px]">Return & Refund</p>
          </div>
        </div>
        <div className="ms-10 my-5">
          <h2 className="text-2xl mb-2">About Us</h2>
          <p className="text-[12px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. 
          </p>
        </div>
      </div>
      <div className="p-4 ms-10">
        <div className="my-2">
          <h2 className="text-2xl mb-2">Location</h2>
          <p className="text-[12px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div className="my-3">
          <h2 className="text-2xl mb-2">Sign up for our newsletter</h2>
          <p className="text-[12px] my-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <div className="flex my-2">
            <div className="mx-2">
              <img src={fb} alt="fb-icon" />
            </div>
            <div className="mx-2">
              <img src={insta} alt="insta-icon" />
            </div>
            <div className="mx-2">
              <img src={youtube} alt="yt-icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
