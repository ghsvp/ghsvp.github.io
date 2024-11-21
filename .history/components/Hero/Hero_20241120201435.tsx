import now from "@/public/gsmst-drive/gsmst-drive-1.jpg";
import hero from "@/public/hero-bg.png";
import hero_phone from "@/public/hero-phone.png";
import Image from "next/image";

export default function Hero() {
  const textClass = "text-4xl font-extrabold leading-snug lg:leading-tight";

  const image = (
    <div className="w-full p-8 px-4 mx-auto max-w-4xl">
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
    <div className="flex w-full flex-grow flex-col items-start justify-between gap-4 bg-primary-1-50 p-8 px-8 max-w-4xl mx-auto">
      <div className="text-left">
        <div className={`text-primary-1-500 ${textClass} inline capitalize`}>
          {"Be Heard. "}
        </div>
        <div className={`text-primary-2-500 ${textClass} inline capitalize`}>
          {"Be Counted. "}
        </div>
        <div className={`text-primary-3-500 ${textClass} inline capitalize`}>
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
          className="absolute left-0 right-0 -z-10 hidden h-full object-cover brightness-105 sm:block"
        />
        <Image
          src={hero_phone}
          alt="Vote image from unsplash"
          className="absolute left-0 right-0 -z-10 h-full object-cover brightness-105 sm:hidden"
        />
        <div className="flex max-w-2xl flex-col items-center gap-4 px-6 py-6 text-center">
          <h1 className="text-4xl font-bold text-primary-1-600">
            Georgia High School Voter Project
          </h1>
          <p className="text-black max-w-prose">
            a student-led organization that aims to help Georgia high school
            students register to vote. We believe that every voice matters and
            that every vote counts. Our goal is to help young people make their
            voices heard in the political process.
          </p>
        </div>
      </div>
      <section className="flex flex-col gap-4 p-8 text-center leading-7 text-slate-600">
          <video
            className="mx-auto max-w-full h-auto rounded-lg shadow-md"
            controls
            preload="auto"
            poster="/hero-poster.jpg"
          >
            <source src="/hero.mp4" type="video/mp4" />
            <source src="/hero.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </section>
      <div className="h-[100vh]"></div>
      <div className="mx-auto flex flex-col lg:justify-between">
        <div className="bg-primary-1-50 w-[100vw]">{content}</div>
        {image}
      </div>
    </>
  );
}
