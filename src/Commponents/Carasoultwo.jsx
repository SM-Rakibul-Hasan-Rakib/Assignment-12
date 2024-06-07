// import React from 'react';
// import React, { useRef, useState } from "react";
import img1 from "../assets/BannerImg/cara-1.jpg";
import img2 from "../assets/BannerImg/cara-2.jpg";
import img3 from "../assets/BannerImg/cara-10.jpg";
import img4 from "../assets/BannerImg/cara-11.jpg";
import img5 from "../assets/BannerImg/cara-5.jpg";
import img6 from "../assets/BannerImg/cara-6.jpg";
import img7 from "../assets/BannerImg/cara-7.jpg";
import img8 from "../assets/BannerImg/cara-8.jpg";
import img9 from "../assets/BannerImg/cara-9.jpg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import { EffectCoverflow, Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import Subheading from "./Subheading";
const Carasoultwo = () => {
  return (
    <section>
      {" "}
      <div>
        <Subheading heading=""></Subheading>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[Autoplay, EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className=" items-center  justify-center justify-items-center">
            <img className="mx-auto w-96 h-auto" src={img1} />
            <h1 className="">Hello world </h1>
          </SwiperSlide>
          <SwiperSlide>
            <img className="mx-auto w-96 h-auto" src={img2} />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-96 mx-auto h-auto" src={img3} />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-96 mx-auto h-auto" src={img4} />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-96 h-auto mx-auto" src={img5} />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-96 mx-auto h-auto" src={img6} />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-96 mx-auto h-auto" src={img7} />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-96 h-auto mx-auto" src={img8} />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-96 mx-auto h-auto" src={img9} />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Carasoultwo;
