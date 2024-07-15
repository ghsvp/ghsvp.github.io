import Image, { StaticImageData } from "next/image";

export interface FigureProps {
  src: string | StaticImageData;
  alt?: string;
  caption: string;
  className?: string;
  imageClassName?: string;
  style?: React.CSSProperties;
  width?: number;
  height?: number;
}

export default function Figure({
  src,
  alt,
  caption,
  className,
  imageClassName,
  style,
  width,
  height,
}: FigureProps) {
  return (
    <figure className={className} style={style}>
      <figcaption className="text-slate-500 mb-4">{caption}</figcaption>
      <Image
        src={src}
        alt={alt || caption}
        className={imageClassName || "aspect-[2/1] object-cover"}
        width={width}
        height={height}
      />
    </figure>
  );
}
