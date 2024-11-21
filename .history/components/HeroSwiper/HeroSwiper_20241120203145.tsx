"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function HeroSwiper() {
  return (
    <section className="mx-auto flex max-w-4xl flex-col gap-4 p-8">
      <h2 className="text-center text-2xl font-bold text-primary-1-700">
        GHSVP across Georgia
      </h2>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="mySwiper rounded-lg shadow-md"
      >
        <SwiperSlide>
          <img
            src="/across-ga/wheeler.png"
            alt="Wheeler High School"
            className="h-auto w-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/across-ga/burnswick.png"
            alt="Burnswick High School"
            className="h-auto w-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/across-ga/heritage.png"
            alt="Heritage High School"
            className="h-auto w-full object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}