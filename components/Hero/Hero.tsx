import now from "@/public/gsmst-drive/gsmst-drive-1.jpg";
import Image from "next/image";

export default function Hero() {
  const textClass =
    "text-5xl md:text-4xl font-extrabold leading-snug lg:leading-tight";

  const image = (
    <div className="p-8 px-4 w-full 2xl:w-1/2">
      <h1 className="text-2xl font-bold text-primary-1-700">Happening Now</h1>
      <Image
        src={now}
        alt="Voter Registration"
        className="object-cover my-4"
        style={{
          aspectRatio: "2/1",
        }}
      />
      <h2 className="text-2xl font-bold text-primary-1-700 mb-2">
        Voter Registration Drive
      </h2>
      <p className="text-slate-600 text-sm  font-normal leading-7 lg:leading-relaxed">
        On May 13, 2024, GHSVP hosted a voter registration drive at Gwinnett
        School of Mathematics, Science, and Technology with over 100 students
        registered.
      </p>
    </div>
  );

  const content = (
    <div className="w-full flex flex-col justify-between items-start gap-4 2xl:w-1/2 flex-grow p-8 px-4">
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
        <p className="text-slate-600 text-sm  font-normal leading-loose mt-2 lg:mt-4">
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
      <div className="flex flex-col 2xl:flex-row-reverse gap-8 lg:justify-between mt-24 md:mt-32 2xl:gap-8">
        {content}
        {image}
      </div>
    </>
  );
}
