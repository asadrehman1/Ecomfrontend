import React, { useState } from "react";
import { useParams } from "react-router-dom";
import watchBannerWeb from "../assets/watch-page-banner.png";
import watchBannerMobile from "../assets/watch-page-mobile.png";
import rolex from "../assets/Rolex.png";
import audmars from "../assets/audmars piguet.png";
import patekPhilippe from "../assets/patek philippe.png";
import breitling from "../assets/breitling.png";
import { NewProductCard } from "./NewProductCard";
import MyAccordion from "./Accordion";
import Slider from "./Slider";
import { Pagination } from "@mui/material";

const watches = [
  {
    id: 1,
    name: "Audemars Piguet Royal Oak",
    price: 12000,
    desc: "15416CE, Double Balance Wheel, Ceramic, Open worked Dial, 41 mm",
    dialColor: "green",
    condition: "new",
    model: 2017,
    caseMaterial: "ceramic",
    caseSize: 20,
    movement: 1,
  },
  {
    id: 2,
    name: "Patek Philips",
    price: 15000,
    desc: "15416CE, Double Balance Wheel, Ceramic, Open worked Dial, 41 mm",
    dialColor: "silver",
    condition: "new",
    model: 2018,
    caseMaterial: "metal",
    caseSize: 22,
    movement: 2,
  },
  {
    id: 3,
    name: "Seiko",
    price: 11000,
    desc: "15416CE, Double Balance Wheel, Ceramic, Open worked Dial, 41 mm",
    dialColor: "black",
    condition: "used",
    model: 2019,
    caseMaterial: "polymer",
    caseSize: 26,
    movement: 3,
  },
  {
    id: 4,
    name: "Seiko",
    price: 11000,
    desc: "15416CE, Double Balance Wheel, Ceramic, Open worked Dial, 41 mm",
    dialColor: "black",
    condition: "used",
    model: 2019,
    caseMaterial: "polymer",
    caseSize: 26,
    movement: 3,
  },
  {
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
  },
  {
    id: 6,
    name: "Seiko",
    price: 11000,
    desc: "15416CE, Double Balance Wheel, Ceramic, Open worked Dial, 41 mm",
    dialColor: "black",
    condition: "used",
    model: 2019,
    caseMaterial: "polymer",
    caseSize: 26,
    movement: 3,
  },
];

const Watches = () => {
  const { brand } = useParams();
  const [page, setPage] = useState(1);

  const [filterOptions, setFilterOptions] = useState({
    dialColor: "",
    watchCondition: "",
    model: "",
    caseMaterial: "",
    caseSize: "",
    movement: "",
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilterOptions({
      ...filterOptions,
      [name]: value,
    });
  };

  const uniqueDialColors = [
    ...new Set(watches.map((watch) => watch.dialColor)),
  ];
  const uniqueWatchConditions = [
    ...new Set(watches.map((watch) => watch.condition)),
  ];
  const uniqueModels = [...new Set(watches.map((watch) => watch.model))];
  const uniqueCaseMaterials = [
    ...new Set(watches.map((watch) => watch.caseMaterial)),
  ];
  const uniqueCaseSizes = [...new Set(watches.map((watch) => watch.caseSize))];
  const uniqueMovements = [...new Set(watches.map((watch) => watch.movement))];

  const handleChange = (e, p) => {
    setPage(p);
  };

  const filteredWatches = watches.filter((watch) => {
    return (
      (filterOptions.dialColor === "" ||
        watch.dialColor === filterOptions.dialColor) &&
      (filterOptions.watchCondition === "" ||
        watch.condition === filterOptions.watchCondition) &&
      (filterOptions.model === "" ||
        watch.model === parseInt(filterOptions.model)) &&
      (filterOptions.caseMaterial === "" ||
        watch.caseMaterial === filterOptions.caseMaterial) &&
      (filterOptions.caseSize === "" ||
        watch.caseSize === parseInt(filterOptions.caseSize)) &&
      (filterOptions.movement === "" ||
        watch.movement === parseInt(filterOptions.movement))
    );
  });

  return (
    <div className="w-[80%] mx-auto">
      <div>
        <div className="flex justify-center">
          <img
            src={watchBannerWeb}
            alt="home-banner"
            className="sm:block hidden w-[1500px]"
          />
          <img
            src={watchBannerMobile}
            alt="home-banner"
            className="w-[500px] block sm:hidden"
          />
        </div>
      </div>
      <div className="flex items-center flex-wrap my-4 p-3 bg-[#D9D9D9] min-h-[50px]">
        <p className="mx-3">Filter By:</p>
        <select
          name="dialColor"
          value={filterOptions.dialColor}
          onChange={handleFilterChange}
          className="mr-4 my-2 bg-transparent"
        >
          <option value="">Dial Color</option>
          {uniqueDialColors.map((color, index) => (
            <option key={index} value={color}>
              {color}
            </option>
          ))}
        </select>
        <select
          name="watchCondition"
          value={filterOptions.watchCondition}
          onChange={handleFilterChange}
          className="mr-4 my-2 bg-transparent"
        >
          <option value="">Watch Condition</option>
          {uniqueWatchConditions.map((condition, index) => (
            <option key={index} value={condition}>
              {condition}
            </option>
          ))}
        </select>
        <select
          name="model"
          value={filterOptions.model}
          onChange={handleFilterChange}
          className="mr-4 my-2 bg-transparent"
        >
          <option value="">Model</option>
          {uniqueModels.map((model, index) => (
            <option key={index} value={model}>
              {model}
            </option>
          ))}
        </select>
        <select
          name="caseMaterial"
          value={filterOptions.caseMaterial}
          onChange={handleFilterChange}
          className="mr-4 my-2 bg-transparent"
        >
          <option value="">Case Material</option>
          {uniqueCaseMaterials.map((material, index) => (
            <option key={index} value={material}>
              {material}
            </option>
          ))}
        </select>
        <select
          name="caseSize"
          value={filterOptions.caseSize}
          onChange={handleFilterChange}
          className="mr-4 my-2 bg-transparent"
        >
          <option value="">Case Size</option>
          {uniqueCaseSizes.map((size, index) => (
            <option key={index} value={size}>
              {size}
            </option>
          ))}
        </select>
        <select
          name="movement"
          value={filterOptions.movement}
          onChange={handleFilterChange}
          className="mr-4 my-2 bg-transparent"
        >
          <option value="">Movement</option>
          {uniqueMovements.map((movement, index) => (
            <option key={index} value={movement}>
              {movement}
            </option>
          ))}
        </select>
      </div>
      <div className="mx-5 flex flex-wrap justify-center">
        {filteredWatches.map((watch, index) => (
          <NewProductCard
            key={watch.id}
            path="/watches"
            id={watch.id}
            desc={watch.desc}
            price={watch.price}
            brand={watch.name}
          />
        ))}
      </div>
      <div className="my-20 flex justify-center items-center">
        <Pagination
          count={10}
          variant="outlined"
          shape="rounded"
          onChange={handleChange}
        />
      </div>
      <div className="my-20">
        <div className="flex justify-center items-center flex-wrap">
          <img src={rolex} alt="rolex-pic" />
          <img src={audmars} alt="audmats-pic" className="mt-1 ml-5" />
        </div>
        <div className="flex justify-center flex-wrap">
          <img src={patekPhilippe} alt="patekPhilippe-pic" />
          <img src={breitling} alt="breitling-pic" />
        </div>
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

export default Watches;
