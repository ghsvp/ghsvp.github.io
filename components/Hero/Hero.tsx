"use client";

import Link from "next/link";
import { Button } from "..";
import Image from "next/image";
import now from "./voter.jpeg";

export default function Hero() {
  const textClass =
    "text-4xl lg:text-5xl font-extrabold leading-snug lg:leading-tight";

  const image = (
    <div className="bg-primary-1-50 p-8 w-full 2xl:w-1/2">
      <h1 className="text-lg font-bold text-primary-1-700 lg:text-3xl">
        Happening Now
      </h1>
      <Image
        src={now}
        alt="Voter Registration"
        className="object-cover my-4"
        style={{
          aspectRatio: "2/1",
        }}
      />
      <h2 className="text-lg font-bold text-primary-1-700 lg:text-3xl mb-2">
        Voter registration drive
      </h2>
      <p className="text-slate-600 text-sm lg:text-lg font-normal leading-7 lg:leading-relaxed">
        On May 13, 2024, GHSVP hosted a voter registration drive at Gwinnett
        School of Mathematics, Science, and Technology with over 100 students
        registered.
      </p>
    </div>
  );

  const content = (
    <div className="w-full flex flex-col justify-between items-start gap-4 2xl:w-1/2 flex-grow bg-primary-1-50 p-8">
      <div className="text-left">
        <span className={`text-primary-1-500 ${textClass} capitalize`}>
          Encouraging high school civic engagement
          <br />
        </span>
        <span className={`text-primary-2-500 ${textClass} capitalize`}>
          Making voter registration easy & accessible
        </span>
        <div className="text-slate-600 text-sm lg:text-lg font-normal leading-7 lg:leading-relaxed mt-8">
          <p>
            The Georgia High School Voting Project is a student-led organization
            that aims to help high school students register to vote.
          </p>
          <p>
            We believe that every voice matters, and that every vote counts. Our
            goal is to help young people make their voices heard in the
            political process.
          </p>
        </div>
      </div>

      <div className="flex flex-row justify-start items-start gap-2">
        <Link
          href="https://www.instagram.com/ga.hs.voterproject/"
          className="bg-primary-2-500 px-4 py-2.5 text-white"
        >
          Instagram
        </Link>
        <Button
          variant="secondary"
          className="space-x-2"
          onClick={() => {
            document
              .querySelector("section:nth-of-type(1)")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <span>Learn More</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 animate-bounce"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
            />
          </svg>
        </Button>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col 2xl:flex-row-reverse gap-8 lg:justify-between mt-24 md:mt-32 2xl:gap-8">
      {content}
      {image}
    </div>
  );
}
