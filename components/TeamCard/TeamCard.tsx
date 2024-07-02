import Image, { StaticImageData } from "next/image";

export interface TeamCardProps {
  name: string;
  role: string;
  img: string | StaticImageData;
  biography: string;
}

export default function TeamCard({
  name,
  role,
  img,
  biography,
}: TeamCardProps) {
  return (
    <div className="flex flex-col items-center p-6 bg-primary-3-50 max-w-xl md:p-0 md:flex-row md:h-80">
      <Image src={img} alt={name} className="w-24 h-24 rounded-full object-cover md:h-full md:rounded-none md:w-40" />
      <div className="flex flex-col mt-2 md:mt-0 md:p-6">
        <h3 className="text-xl font-bold text-slate-700">{name}</h3>
        <p className="font-bold text-slate-300 mb-1">{role}</p>
        <p className="text-loose text-primary-3-700">{biography}</p>
      </div>
    </div>
  );
}
