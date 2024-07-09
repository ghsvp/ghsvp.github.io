import now from "@/public/gsmst-drive/gsmst-drive-1.jpg";
import hero from "@/public/hero-bg.png";
import Image from "next/image";

export default function Hero() {
  const textClass =
    "text-4xl font-extrabold leading-snug lg:leading-tight";

  const image = (
    <div className="w-full p-8 px-4 2xl:w-1/2">
      <h1 className="text-2xl font-bold text-primary-1-700">Happening Now</h1>
      <Image
        src={now}
        alt="Voter Registration"
        className="my-4 object-cover"
        style={{
          aspectRatio: "2/1",
        }}
      />
      <h2 className="mb-2 text-2xl font-bold text-primary-1-700">
        Voter Registration Drive
      </h2>
      <p className="text-sm font-normal leading-7 text-slate-600 lg:leading-relaxed">
        On May 13, 2024, GHSVP hosted a voter registration drive at Gwinnett
        School of Mathematics, Science, and Technology with over 100 students
        registered.
      </p>
    </div>
  );

  const content = (
    <div className="flex w-full flex-grow flex-col items-start justify-between gap-4 p-8 px-4 2xl:w-1/2">
      <div className="text-left">
        <div className={`text-primary-1-500 ${textClass} capitalize`}>
          {"Be Heard. "}
        </div>
        <div className={`text-primary-2-500 ${textClass} capitalize`}>
          {"Be Counted. "}
        </div>
        <div className={`text-primary-3-500 ${textClass} capitalize`}>
          Be Registered.
        </div>
        <p className="mt-2 text-sm font-normal leading-loose text-slate-600 lg:mt-4">
          The Georgia High School Voter Project aims to register every eligible
          high schooler in Georgia to vote. The organization is based in
          Gwinnett County at the Gwinnett School of Mathematics, Science, and
          Technology.
        </p>
      </div>
    </div>
  );

  return (
    <>
      <div className="absolute left-0 right-0 flex h-[100vh] items-center justify-center overflow-clip">
        <Image
          src={hero}
          alt="Vote image from unsplash"
          className="absolute left-0 right-0 -z-10 h-full object-cover brightness-105"
        />
        <div className="flex max-w-2xl flex-col items-center gap-4 px-6 py-6 text-center">
          <h1 className="text-4xl font-bold text-primary-1-600">
            Georgia High School Voter Project
          </h1>
          <p className="max-w-prose text-black">
            a student-led organization that aims to help Georgia high school
            students register to vote. We believe that every voice matters and
            that every vote counts. Our goal is to help young people make their
            voices heard in the political process.
          </p>
        </div>
      </div>
      <div className="h-[100vh]"></div>
      <div className="mt-24 flex flex-col gap-8 md:mt-32 lg:justify-between 2xl:flex-row-reverse 2xl:gap-8">
        {content}
        {image}
      </div>
    </>
  );
}
