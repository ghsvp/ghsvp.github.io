import { AnimatedNumber, Hero } from "@/components";

export default function Home() {
  return (
    <>
      <main className="px-6 md:px-18 max-w-xl md:max-w-5xl xl:max-w-[calc(100%-24rem)] mx-auto space-y-4 md:space-y-8">
        <Hero />
        <section className="p-8 bg-primary-2-50 ">
          <p className="text-sm lg:text-lg leading-7 text-slate-600">
            <span className="text-2xl lg:text-3xl font-bold text-primary-2-500 mr-1">
              {"The Georgia High School Voting Project "}
            </span>
            is a student-led organization that aims to help Georgia high school
            students register to vote. We believe that every voice matters and
            that every vote counts. Our goal is to help young people make their
            voices heard in the political process.
          </p>
        </section>
        <section className="p-8 bg-primary-3-50 flex flex-row gap-4 flex-wrap justify-center">
          <AnimatedNumber title="Students Registered" number={108} />
          <AnimatedNumber title="Registration Rate" number={90} />
        </section>
      </main>
    </>
  );
}
