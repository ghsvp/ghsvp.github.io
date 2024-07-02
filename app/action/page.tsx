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
      <section className="spac-y-2 leading-relaxed p-8">
        <h1 className="text-primary-2-500">Speech at Board of Education</h1>
        <h2 className="text-slate-500 text-sm mb-2">
          Gwinnett County Board of Education (Lawrenceville, GA)
        </h2>
        <p className="leading-loose text-base">
          On May 16, GHSVP spoke at the Gwinnett County Board of Education.
          Mehek Saha, the founder of GHSVP, shared the organization’s vision and
          urged Gwinnett to serve as the blueprint for youth civic engagement.
        </p>
        <div className="aspect-video my-2 lg:my-4">
          <iframe
            src="https://www.youtube.com/embed/UIliH4YSucs"
            title="Gwinnett County Board of Education 5/16/24 - Georgia High School Voter Project"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
        <p className="leading-loose text-base">
          The Board Vice Chair, Karen Mulzac Watkins, used her commentary time
          to recognize the importance of this student initiative:
        </p>
        <blockquote className="leading-loose border-l-4 border-primary-2-500 pl-2 lg:pl-4">
          “Exercising your right to vote–exercising your voice—is so important,
          and the fact that I’m seeing students trying to champion this in their
          high school melts my heart.”
          <p className="text-right">
            —Karen Mulzac Watkins (Gwinnett County Board of Education Vice
            Chair)
          </p>
        </blockquote>
      </section>
      <section className="spac-y-2 leading-relaxed p-8">
        <h1 className="text-primary-1-500">Most Recent Drive</h1>
        <h2 className="text-slate-500 text-sm mb-2">
          The Gwinnett School of Mathematics, Science, and Technology
          (Lawrenceville, GA)
        </h2>
        <p className="leading-loose text-base ">
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
