import { Logo, TeamCard } from "@/components";
import mehek from "@/public/team/mehek.jpg";
import sweat from "@/public/team/sweat.jpg";
import parv from "@/public/team/parv.jpg";
import nico from "@/public/team/nico.jpg";
import yubo from "@/public/team/yubo.png";

export default function About() {
  return (
    <main className="px-6 md:px-18 mt-28 space-y-4 md:space-y-8">
      <div className="flex justify-center gap-2 lg:-mb-4">
        <Logo size={4} className="h-32 w-32" />
      </div>
      <p className="p-8 leading-relaxed font-normal  text-primary-3-700 max-w-2xl mx-auto">
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
        <div className="flex flex-wrap justify-center w-full gap-4">
          {/* TODO: To be fixed */}
          <TeamCard
            name="Mehek Saha"
            role="Founder & President"
            img={mehek}
            biography="Mehek Saha is a high school senior at the Gwinnett School of Mathematics, Science, and Technology (GSMST). Mehek founded GHSVP when she recognized the need to amplify the political voice of high schoolers across Georgia. Pursuant to her passion for civic engagement, Mehek serves as her school’s Executive Student Body President, the captain of GSMST’s Mock Trial team, and the Secretary for the Georgia Association of Student Councils."
          />
          <TeamCard
            name="Jennifer Sweat"
            role="Faculty Advisor"
            img={sweat}
            biography="Ms. Sweat is the media clerk and deputy registrar at the Gwinnett School of Mathematics, Science, and Technology (GSMST). For several years, Ms. Sweat has been an active advocate for youth civic engagement through her voter education efforts at GSMST. Now, Ms. Sweat serves as the Faculty Advisor for GHSVP with the goal of expanding these efforts across the state."
          />
          <TeamCard
            name="Parv Mahajan"
            role="Collegiate Head"
            img={parv}
            biography="Parv Mahajan is a college freshman at the Georgia Institute of Technology. Through his work running the largest high-school Model United Nations conference in Georgia, he has seen the need for grassroots youth voter education first-hand. He now coordinates efforts between state resources, college volunteers, and local GHSVP drives to better reach a wide swath of students. 
"
          />
          {/* TODO: Finish Nico */}
          {/* <TeamCard
            name="Nico Parra"
            role="Gwinnett County Elections Office Representative"
            img={nico}
            biography="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          /> */}
          <TeamCard
            name="Yubo Cao"
            role="Webmaster"
            img={yubo}
            biography="Yubo is a senior at the Gwinnett School of Mathematics, Science, and Technology (GSMST). Recognizing the importance of political socialization among high schoolers, he joined GHSVP, where he leveraged his technical expertise to support the organization's mission. In line with his passion for technology, Yubo serves as the president of the CS Club and president of a country-wide CS education program."
          />
        </div>
      </section>
    </main>
  );
}
