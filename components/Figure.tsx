import Image, { StaticImageData } from "next/image";

export interface FigureProps {
  src: string | StaticImageData;
  alt?: string;
  caption: string;
  className?: string;
  imageClassName?: string;
  style?: React.CSSProperties;
}

export default function Figure({
  src,
  alt,
  caption,
  className,
  imageClassName,
  style,
}: FigureProps) {
  return (
    <figure className={className} style={style}>
      <figcaption className=" text-slate-500 mt-2">{caption}</figcaption>
      <Image
        src={src}
        alt={alt || caption}
        className={imageClassName || "aspect-[2/1] object-cover"}
      />
    </figure>
  );
}
