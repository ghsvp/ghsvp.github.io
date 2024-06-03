import { Logo } from "@/components";

export default function About() {
  return (
    <main className="px-6 md:px-18 mt-28 space-y-4">
      <div className="flex justify-center gap-2">
        <Logo size={4} className="h-32 w-32" />
      </div>
      <p className="p-8 bg-primary-3-50 leading-relaxed font-normal lg:text-lg text-primary-3-700">
        The Georgia High School Voter Program is a state-wide and student-led
        voter registration initiative with the potential to empower over 40,000
        students a year. Started by students from Gwinnett County, GHSVP focuses
        on hosting local community events in collaboration with non-partisan
        election officials to engage high school seniors. The Project has helped
        dozens of students vote and continues to champion young citizens across
        Georgia.
      </p>
    </main>
  );
}
