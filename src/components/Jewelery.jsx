import React, { useState } from "react";
import { useParams } from "react-router-dom";
import jewelryBanner from "../assets/jewelery-banner.png";
import rolex from "../assets/Rolex.png";
import audmars from "../assets/audmars piguet.png";
import patekPhilippe from "../assets/patek philippe.png";
import breitling from "../assets/breitling.png";
import { NewProductCard } from "./NewProductCard";
import MyAccordion from "./Accordion";
import Slider from "./Slider";
import { Pagination } from "@mui/material";

const jewelries = [
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

const Jewelery = () => {
  const { type } = useParams();
  const [page, setPage] = useState(1);

  const [filterOptions, setFilterOptions] = useState({
    designersCollections: "",
    materials: "",
    gemstones: "",
    price: "",
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilterOptions({
      ...filterOptions,
      [name]: value,
    });
  };

  const uniqueDesignersCollections = [
    ...new Set(jewelries.map((jewelry) => jewelry.name)),
  ];
  const uniqueMaterials = [
    ...new Set(jewelries.map((jewelry) => jewelry.caseMaterial)),
  ];
  const uniqueGemstones = [
    ...new Set(jewelries.map((jewelry) => jewelry.dialColor)),
  ];

  const handleChange = (e, p) => {
    setPage(p);
  };

  const filteredJewelries = jewelries.filter((jewelry) => {
    return (
      (filterOptions.designersCollections === "" ||
        jewelry.name === filterOptions.designersCollections) &&
      (filterOptions.materials === "" ||
        jewelry.caseMaterial === filterOptions.materials) &&
      (filterOptions.gemstones === "" ||
        jewelry.dialColor === filterOptions.gemstones)
    );
  });

  return (
    <div className="w-[80%] mx-auto">
      <div>
        <div className="flex justify-center">
          <img src={jewelryBanner} alt="home-banner" className="w-[1500px]" />
        </div>
      </div>
      <div className="flex items-center flex-wrap my-4 p-3 bg-[#D9D9D9] min-h-[50px]">
        <p className="mx-3">Filter By:</p>
        <select
          name="designersCollections"
          value={filterOptions.designersCollections}
          onChange={handleFilterChange}
          className="mr-4 my-2 bg-transparent"
        >
          <option value="">Designers & Collections</option>
          {uniqueDesignersCollections.map((collection, index) => (
            <option key={index} value={collection}>
              {collection}
            </option>
          ))}
        </select>
        <select
          name="materials"
          value={filterOptions.materials}
          onChange={handleFilterChange}
          className="mr-4 my-2 bg-transparent"
        >
          <option value="">Materials</option>
          {uniqueMaterials.map((material, index) => (
            <option key={index} value={material}>
              {material}
            </option>
          ))}
        </select>
        <select
          name="gemstones"
          value={filterOptions.gemstones}
          onChange={handleFilterChange}
          className="mr-4 my-2 bg-transparent"
        >
          <option value="">Gemstones</option>
          {uniqueGemstones.map((gemstone, index) => (
            <option key={index} value={gemstone}>
              {gemstone}
            </option>
          ))}
        </select>
      </div>
      <div className="mx-5 flex flex-wrap justify-center">
        {filteredJewelries.map((jewelry, index) => (
          <NewProductCard
            key={jewelry.id}
            path="/jewelery"
            id={jewelry.id}
            desc={jewelry.desc}
            price={jewelry.price}
            type={jewelry.name}
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

export default Jewelery;
