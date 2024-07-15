"use client";

import Figure from "@/components/Figure";
import Image from "next/image";
import { ReactPhotoCollage } from "react-photo-collage";
import "swiper/css/pagination";
import "swiper/swiper-bundle.css";

export default function Actions() {
  return (
    <main className="mx-auto max-w-4xl md:p-8">
      <section className="spac-y-2 p-8 leading-relaxed">
        <h1 className="text-primary-2-500">
          Senator Ossoff&apos;s Welcome to Washington Event
        </h1>
        <h2 className="mb-2 text-sm text-slate-500">
          Russell Senate Building, Washington D.C.
        </h2>
        <p className="mb-8 text-base leading-loose">
          On June 12, GHSVP attended Senator Ossoff’s Welcome to Washington
          event at the Russell US Senate Building. Among many other federal and
          Georgia organizations, GHSVP was able to speak to Senator Ossoff about
          the importance of youth civic engagement and share about its work to
          empower Georgia high schoolers.
        </p>
        <Figure
          src={"/washington-visit/image1.png"}
          width={2400}
          height={2400}
          caption={
            "GHSVP representatives with Senator Ossoff’s Welcome to Washington event at the Russell US Senate Building."
          }
          imageClassName="object-cover aspect-square md:aspect-[4/3]"
          className="my-8"
        />
      </section>
      <section className="spac-y-2 p-8 leading-relaxed">
        <h1 className="text-primary-1-500">Invitation to Capital Hill</h1>
        <h2 className="mb-2 text-sm text-slate-500">
          Rayburn US House of Representatives Building, Washington D.C.
        </h2>
        <Figure
          src={"/washington-visit/image2.png"}
          width={2400}
          height={2400}
          caption={
            "GHSVP with Congressman Loudermilk (GA-11) on Capitol Hill discussing the importance of political empowerment of the youth."
          }
          imageClassName="object-cover aspect-square md:aspect-[4/3]"
          className="my-8"
        />
        <hr />
        <Figure
          src={"/washington-visit/image3.png"}
          width={2400}
          height={2400}
          caption={
            "Thank you to Jake Silverman, head of Congresswoman Nikema William's voting rights team, for giving GHSVP a private tour of the Capitol. GHSVP was fortunate to receive an exclusive visit to the Speaker of the House balcony–overlooking the President’s Inauguration Balcony."
          }
          imageClassName="object-cover aspect-square md:aspect-[4/3]"
          className="my-8"
        />
        <Image
          src={"/washington-visit/image4.png"}
          width={2400}
          height={2400}
          className="my-8 aspect-square object-cover md:aspect-[4/3]"
          alt="Thank you to Jake Silverman, head of Congresswoman Nikema William's voting rights team, for giving GHSVP a private tour of the Capitol. GHSVP was fortunate to receive an exclusive visit to the Speaker of the House balcony–overlooking the President’s Inauguration Balcony."
        />
        <hr />
        <div className="mt-8 flex aspect-square w-full">
          <ReactPhotoCollage
            width="100%"
            height={["50%", "50%"]}
            layout={[2, 2]}
            photos={[
              { source: "/washington-visit/collage/ga-14.webp" },
              { source: "/washington-visit/collage/ga-03.webp" },
              { source: "/washington-visit/collage/ga-04.webp" },
              // { source: "/washington-visit/collage/ga-04-plaque.webp" },
              { source: "/washington-visit/collage/ga-07.webp" },
              // { source: "/washington-visit/collage/ga-07-plaque.webp" },
              { source: "/washington-visit/collage/ga-08.webp" },
              { source: "/washington-visit/collage/ga-11.webp" },
            ]}
            showNumOfRemainingPhotos={true}
          />
        </div>
      </section>
      <section className="spac-y-2 p-8 leading-relaxed">
        <h1 className="text-primary-2-500">Speech at Board of Education</h1>
        <h2 className="mb-2 text-sm text-slate-500">
          Gwinnett County Board of Education (Lawrenceville, GA)
        </h2>
        <p className="text-base leading-loose">
          On May 16, GHSVP spoke at the Gwinnett County Board of Education.
          Mehek Saha shared the organization’s vision and urged Gwinnett to
          serve as the blueprint for youth civic engagement.
        </p>
        <blockquote className="relative bg-primary-2-50 p-2 lg:p-4">
          <svg
            className="absolute -start-8 top-0 size-16 text-primary-2-200"
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
          <div className="relative z-10 pl-4">
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
          Karen Mulzac Watkins, the Board Vice Chair, used her commentary time
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
