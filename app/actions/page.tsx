"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css/pagination";
import Figure from "@/components/Figure";

import image1 from "@/public/gsmst-drive/gsmst-drive-1.jpg";
import image2 from "@/public/gsmst-drive/gsmst-drive-2.jpg";

export default function Actions() {
  return (
    <main className="p-8 max-w-2xl mx-auto">
      <section className="spac-y-2 leading-relaxed bg-primary-1-50 p-8">
        <h1 className="text-primary-1-500">Most Recent Drive</h1>
        <h2 className="text-slate-500 text-sm mb-2">
          The Gwinnett School of Mathematics, Science, and Technology
          (Lawrenceville, GA)
        </h2>
        <p className="leading-loose text-base lg:text-lg">
          With the help of the Gwinnett County Election Office, GHSVP helped{" "}
          <span className="font-bold">109 seniors</span> at the Gwinnett School
          of Mathematics Science and Technology register to vote for the first
          time, bringing their registration rate to{" "}
          <span className="font-bold">over 90%.</span>
        </p>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          className="mt-2 lg:mt-4"
        >
          <SwiperSlide>
            <Figure
              src={image1}
              caption={
                "Students learn about becoming a poll worker and the voting process in Georgia."
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <Figure
              src={image2}
              caption={
                "Nico Parra, a poll manager, explains the administration of elections in Gwinnett County."
              }
            />
          </SwiperSlide>
        </Swiper>
      </section>
    </main>
  );
}
