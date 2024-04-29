import { useState } from "react";
import {
  EffectCoverflow,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/modules";
import { Swiper as SwiperCarousel, SwiperSlide } from "swiper/react";
import coma from "../assets/coma.png";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

const ClientCard = () => {
  return (
    <div className="md:p-2 border-4 border-[#ccc] text-start w-auto">
      <div>
        <img src={coma} alt="coma-img" className="ms-auto my-5" />
      </div>

      <p className="lg:text-[12px] text-[10px] my-5">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged.
      </p>
      <h2 className="text-xl">James</h2>
    </div>
  );
};

export default () => {
  return (
    <SwiperCarousel
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      loop={true}
      spaceBetween={50}
      initialSlide={3}
      modules={[EffectCoverflow, Navigation, Pagination, Scrollbar, A11y]}
      slidesPerView={1}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
        slideShadows: true,
      }}
      navigation
      pagination
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      style={{ maxWidth: "1200px", height: "auto" }}
      breakpoints={{
        720: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 4,
        },
      }}
    >
      <SwiperSlide style={{ overflow: "hidden" }}>
        <ClientCard />
      </SwiperSlide>
      <SwiperSlide>
        <ClientCard />
      </SwiperSlide>
      <SwiperSlide>
        <ClientCard />
      </SwiperSlide>
      <SwiperSlide>
        <ClientCard />
      </SwiperSlide>
      <SwiperSlide>
        <ClientCard />
      </SwiperSlide>
    </SwiperCarousel>
  );
};
