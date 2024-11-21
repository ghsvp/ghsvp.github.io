"use client";

import Figure from "@/components/Figure";
import "swiper/css/pagination";
import "swiper/swiper-bundle.css";

export default function Actions() {
  return (
    <main className="mx-auto max-w-4xl md:p-8">
      {/* C:\Users\kitten\Documents\project\ghsvp.github.io\public\heritage-drive\IMG_7564.heic
C:\Users\kitten\Documents\project\ghsvp.github.io\public\heritage-drive\IMG_7565.heic
C:\Users\kitten\Documents\project\ghsvp.github.io\public\heritage-drive\IMG_7567.heic
C:\Users\kitten\Documents\project\ghsvp.github.io\public\heritage-drive\IMG_7568.heic
C:\Users\kitten\Documents\project\ghsvp.github.io\public\heritage-drive\IMG_7569.heic
C:\Users\kitten\Documents\project\ghsvp.github.io\public\heritage-drive\IMG_7570.heic */}
      <section className="spac-y-2 p-8 leading-relaxed">
        <h1 className="text-primary-1-500">April 26, 2024</h1>
        <h2 className="mb-2 text-sm text-slate-500">
          Heritage High School (Conyers, GA)
        </h2>
        <p className="text-base leading-loose">
          GHSVP conducted a voter registration drive at Heritage High School,
          helping eligible students register to vote and learn about the
          importance of civic engagement.
        </p>

        <Figure
          src={"/heritage-drive/IMG_7564.heic"}
          caption={
            "Students participating in the voter registration drive at Heritage High School."
          }
          width={4032}
          height={3024}
          className="my-8"
        />
        <hr />
        <Figure
          src={"/heritage-drive/IMG_7565.heic"}
          caption={
            "GHSVP volunteers assisting students with voter registration forms."
          }
          width={4032}
          height={3024}
          className="my-8"
        />
      </section>
      <section className="spac-y-2 p-8 leading-relaxed">
        <h1 className="text-primary-1-500">May 13, 2024</h1>
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
