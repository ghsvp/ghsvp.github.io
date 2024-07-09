"use client";

import Figure from "@/components/Figure";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

import image1 from "@/public/gsmst-drive/gsmst-drive-1.jpg";
import image2 from "@/public/gsmst-drive/gsmst-drive-2.jpg";

export default function Actions() {
  return (
    <main className="mx-auto max-w-2xl p-8">
      <section className="spac-y-2 p-8 leading-relaxed">
        <h1 className="text-primary-2-500">Speech at Board of Education</h1>
        <h2 className="mb-2 text-sm text-slate-500">
          Gwinnett County Board of Education (Lawrenceville, GA)
        </h2>
        <p className="text-base leading-loose">
          On May 16, GHSVP spoke at the Gwinnett County Board of Education.
          Mehek Saha, the founder of GHSVP, shared the organization’s vision and
          urged Gwinnett to serve as the blueprint for youth civic engagement.
        </p>
        <blockquote className="relative bg-primary-2-50 p-2 lg:p-4">
          <svg
            className="absolute -start-6 top-0 size-16 text-primary-2-200"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z"
              fill="currentColor"
            ></path>
          </svg>
          <div className="relative z-10">
            We come here today in hopes that the Board of Education shares our
            vision to register and educate new voters… We know that a registered
            graduate is a graduate more engaged with their values, their
            community, and their country.
            <p className="text-right">
              —Mehek Saha (GHSVP Founder and President)
            </p>
          </div>
        </blockquote>
        <div className="my-2 aspect-video lg:my-4">
          <iframe
            src="https://www.youtube.com/embed/UIliH4YSucs"
            title="Gwinnett County Board of Education 5/16/24 - Georgia High School Voter Project"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="h-full w-full"
          ></iframe>
        </div>
        <p className="text-base leading-loose">
          The Board Vice Chair, Karen Mulzac Watkins, used her commentary time
          to recognize the importance of this student initiative:
        </p>
        <blockquote className="border-l-4 border-primary-2-500 pl-2 leading-loose lg:pl-4">
          “Exercising your right to vote–exercising your voice—is so important,
          and the fact that I’m seeing students trying to champion this in their
          high school melts my heart.”
          <p className="text-right">
            —Karen Mulzac Watkins (Gwinnett County Board of Education Vice
            Chair)
          </p>
        </blockquote>
      </section>
      <section className="spac-y-2 p-8 leading-relaxed">
        <h1 className="text-primary-1-500">Most Recent Drive</h1>
        <h2 className="mb-2 text-sm text-slate-500">
          The Gwinnett School of Mathematics, Science, and Technology
          (Lawrenceville, GA)
        </h2>
        <p className="text-base leading-loose">
          With the help of the Gwinnett County Election Office, GHSVP helped{" "}
          <span className="font-bold">109 seniors</span> at the Gwinnett School
          of Mathematics Science and Technology register to vote for the first
          time, bringing their registration rate to{" "}
          <span className="font-bold">over 90%.</span>
        </p>

        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          className="relative mt-2 lg:mt-4"
          modules={[Pagination]}
          pagination={{
            clickable: true,
            renderBullet: (idx, className) =>
              `<span class="${className}"></span>`,
          }}
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
