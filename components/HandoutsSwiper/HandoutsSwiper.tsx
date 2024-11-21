"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Download } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const handouts = [
  {
    title: "How to Vote in Person",
    description: "A comprehensive guide for in-person voting",
    path: "/handouts/How to Vote in Person - GHSVP.pdf",
    thumbnail: "/handouts/thumbnails/vote-in-person.png",
  },
  {
    title: "Registration 5 Step Guide",
    description: "Simple steps to register as a voter",
    path: "/handouts/Registration 5 Step Guide - GHSVP.pdf",
    thumbnail: "/handouts/thumbnails/registration-guide.png",
  },
  {
    title: "What to do After Registering",
    description: "Next steps after completing your registration",
    path: "/handouts/What to do After Registering Flyer - GHSVP.pdf",
    thumbnail: "/handouts/thumbnails/after-registering.png",
  },
];

export default function HandoutsSwiper() {
  return (
    <section className="mx-auto flex max-w-4xl flex-col gap-6 p-8">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-primary-1-700">
          Voter Education Handouts
        </h2>
        <p className="mt-2 text-gray-600">
          Download our helpful guides for voting information
        </p>
      </div>

      <div className="relative h-80 w-full">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          className="h-full w-full"
        >
          {handouts.map((handout, index) => (
            <SwiperSlide key={index} className="flex h-full flex-col">
              <div className="group relative flex h-full flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md transition-all hover:shadow-lg">
                {/* Thumbnail Container */}
                <div className="relative h-48 w-full bg-gray-100">
                  <Image
                    src={handout.thumbnail}
                    alt={handout.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 transition-all group-hover:bg-opacity-30">
                    <a
                      href={handout.path}
                      download
                      className="transform rounded-full bg-white p-3 opacity-0 shadow-lg transition-all group-hover:scale-110 group-hover:opacity-100"
                    >
                      <Download className="h-6 w-6 text-primary-1-600" />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-4">
                  <h3 className="mb-2 text-lg font-semibold text-gray-900">
                    {handout.title}
                  </h3>
                  <p className="text-sm text-gray-600">{handout.description}</p>
                  
                  {/* Download Link */}
                  <div className="mt-auto pt-4">
                    <a
                      href={handout.path}
                      download
                      className="inline-flex items-center text-sm font-medium text-primary-1-600 hover:text-primary-1-700"
                    >
                      <Download className="mr-1 h-4 w-4" />
                      Download PDF
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}