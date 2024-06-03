import { Logo } from "@/components";

export default function About() {
  return (
    <main className="px-6 md:px-18 mt-28 space-y-4 md:space-y-8">
      <div className="flex justify-center gap-2 lg:-mb-4">
        <Logo size={4} className="h-32 w-32" />
      </div>
      <p className="p-8 bg-primary-3-50 leading-relaxed font-normal lg:text-lg text-primary-3-700 max-w-2xl mx-auto">
        The Georgia High School Voter Program is a state-wide and student-led
        voter registration initiative with the potential to empower over 40,000
        students a year. Started by students from Gwinnett County, GHSVP focuses
        on hosting local community events in collaboration with non-partisan
        election officials to engage high school seniors. The Project has helped
        dozens of students vote and continues to champion young citizens across
        Georgia.
      </p>
      <section className="p-6 bg-text-primary-2-50">
        <h2 className="text-2xl lg:text-4xl font-bold text-center text-primary-2-500 mb-2">
          Meet the Team
        </h2>
        <ul className="space-y-2 lg:text-lg">
          <li className="flex items-center">
            <span className="font-semibold text-primary-2-500">
              Mehek Saha:
            </span>
            <span className="ml-2 text-gray-700">Student Founder</span>
          </li>
          <li className="flex items-center">
            <span className="font-semibold text-primary-2-500">
              Parv Mahajan:
            </span>
            <span className="ml-2 text-gray-700">Collegiate Head</span>
          </li>
          <li className="flex items-center">
            <span className="font-semibold text-primary-2-500">
              Nicolas Parra:
            </span>
            <span className="ml-2 text-gray-700">Political Head</span>
          </li>
          <li className="flex items-center">
            <span className="font-semibold text-primary-2-500">Yubo Cao:</span>
            <span className="ml-2 text-gray-700">Webmaster</span>
          </li>
        </ul>
      </section>
    </main>
  );
}
