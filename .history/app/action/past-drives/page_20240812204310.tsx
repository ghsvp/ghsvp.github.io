"use client";

import Figure from "@/components/Figure";
import "swiper/css/pagination";
import "swiper/swiper-bundle.css";

export default function Actions() {
  return (
    <main className="mx-auto max-w-4xl md:p-8">
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

        <Figure
          src={"/gsmst-drive/gsmst-drive-1.jpg"}
          caption={
            "Students learn about becoming a poll worker and the voting process in Georgia."
          }
          width={5184}
          height={3456}
          className="my-8"
        />
        <hr />
        <Figure
          src={"/gsmst-drive/gsmst-drive-2.jpg"}
          caption={
            "Nico Parra, a poll manager, explains the administration of elections in Gwinnett County."
          }
          width={5184}
          height={3456}
          className="my-8"
        />
        {/* <hr /> */}
        {/* TODO: Add a collage */}
      </section>
    </main>
  );
}
