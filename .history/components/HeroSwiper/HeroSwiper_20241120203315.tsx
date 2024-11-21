"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const images = [
  {
    src: "/across-ga/wheeler.png",
    alt: "Wheeler High School",
  },
  {
    src: "/across-ga/burnswick.png",
    alt: "Burnswick High School",
  },
  {
    src: "/across-ga/heritage.png",
    alt: "Heritage High School",
  },
];

export default function HeroSwiper() {
  return (
    <section className="mx-auto flex max-w-4xl flex-col gap-4 p-8">
      <h2 className="text-center text-2xl font-bold text-primary-1-700">
        GHSVP across Georgia
      </h2>
      <div className="relative h-80 w-full lg:h-96">
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
          className="h-full w-full rounded-lg shadow-md"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} className="relative h-full w-full">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1400px"
                priority={index === 0}
                className="object-cover object-center"
                quality={100}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
