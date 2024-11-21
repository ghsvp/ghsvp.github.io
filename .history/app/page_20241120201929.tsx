import { AnimatedNumber, Hero } from "@/components";

export default function Home() {
  return (
    <>
      <div className="md:px-18 flex flex-col">
        <Hero />
        <div className="bg-primary-1-50">
          <section className="flex flex-col gap-4 p-8 text-center leading-7 text-slate-600">
            <video
              className="mx-auto h-auto w-full max-w-2xl rounded-lg shadow-md"
              controls
              preload="auto"
              poster="/hero-cover.jpg"
            >
              <source src="/hero.mp4" type="video/mp4" />
              <source src="/hero.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </section>
        </div>
        <div className="">
          <section className="mx-auto flex max-w-4xl flex-col gap-2 p-8 leading-7">
            <h2 className="text-center text-2xl font-bold text-primary-1-700">
              Registration & Education
            </h2>
            <ul className="grid grid-flow-dense justify-center gap-2 text-center sm:grid-cols-2 md:grid-cols-3 md:gap-4">
              <li className="align-left items-center text-primary-1-600">
                <p>“How do you register to vote?”</p>
              </li>
              <li className="align-left items-center text-primary-1-600">
                <p>“Where is your polling location?”</p>
              </li>
              <li className="align-left items-center text-primary-1-600">
                <p>“What does a voting ballot look like?”</p>
              </li>
            </ul>
            <p>
              For many high school students, these questions are unanswerable.
              At GHSVP, we believe voting is one of the most fundamental
              processes to supporting democracy, and high schoolers should be
              given adequate guidance to fulfill this basic civic duty.
            </p>
            <p>
              To answer these three questions, GHSVP partners with schools
              across Georgia to host voter registration and education drives.
              Coordinating with school administration and civically-engaged
              students, we facilitate voter drives tailored to each school,
              planning all logistics and running the drives in person. Through
              our work, we make it simple and easy for each GHSVP-partner school
              to register all of their eligible high school voters.
            </p>
          </section>
        </div>
        {/* <section className="flex flex-row flex-wrap justify-center gap-4 p-8">
          <AnimatedNumber title="Students Registered" number={109} />
          <AnimatedNumber title="Registration Rate" number={90} />
        </section> */}
        {/* <section className="aspect-video ">
          <iframe
            src="https://www.youtube.com/embed/UIliH4YSucs"
            title="Gwinnett County Board of Education 5/16/24 - Georgia High School Voter Project"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </section> */}
      </div>
    </>
  );
}
