import { AnimatedNumber, Hero } from "@/components";

export default function Home() {
  return (
    <>
      <div className="px-6 md:px-18 max-w-2xl mx-auto md:space-y-8">
        <Hero />
        <section className="p-8 leading-7 text-slate-600 text-center flex flex-col gap-2">
          <p className="text-2xl font-bold text-primary-2-500">
            {"The Georgia High School Voter Project "}
          </p>
          <p>
            is a student-led organization that aims to help Georgia high school
            students register to vote. We believe that every voice matters and
            that every vote counts. Our goal is to help young people make their
            voices heard in the political process.
          </p>
        </section>
        <section className="p-8 leading-7 text-slate-600 flex flex-col gap-2">
          <h2 className="text-2xl font-bold text-primary-1-500 text-center">
            Registration & Education
          </h2>
          <ul className="grid sm:grid-cols-2 md:grid-cols-3 grid-flow-dense justify-center gap-2 md:gap-4 text-center">
            <li className="flex align-middle items-center">
              <p>“How do you register to vote?”</p>
            </li>
            <li className="flex align-middle items-center">
              <p>“Where is your polling location?”</p>
            </li>
            <li className="flex align-middle items-center">
              <p>“What does a voting ballot look like?”</p>
            </li>
          </ul>
          <p>
            For many high school students, these questions are unanswerable. At
            GHSVP, we believe voting is one of the most fundamental processes to
            supporting democracy, and high schoolers should be given adequate
            guidance to fulfill this basic civic duty.
          </p>
          <p>
            To answer these three questions, GHSVP partners with schools across
            Georgia to host voter registration and education drives.
            Coordinating with school administration and civically-engaged
            students, we facilitate voter drives tailored to each school,
            planning all logistics and running the drives in person. Through our
            work, we make it simple and easy for each GHSVP-partner school to
            register all of their eligible high school voters.
          </p>
        </section>
        <section className="p-8 flex flex-row gap-4 flex-wrap justify-center">
          <AnimatedNumber title="Students Registered" number={109} />
          <AnimatedNumber title="Registration Rate" number={90} />
        </section>
        <section className="p-8 aspect-video ">
          <iframe
            src="https://www.youtube.com/embed/UIliH4YSucs"
            title="Gwinnett County Board of Education 5/16/24 - Georgia High School Voter Project"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </section>
      </div>
    </>
  );
}
