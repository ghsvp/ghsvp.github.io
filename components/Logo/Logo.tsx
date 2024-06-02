import React from "react";
import image from "@/public/logo.png";
import Image from "next/image";

export type LogoProps = {
  className?: string;
  variant?: "logo-only" | "logo-and-text";
  props?: React.HTMLProps<HTMLDivElement>;
};

const assertVariant = (variant: string): void => {
  if (variant !== "logo-only" && variant !== "logo-and-text") {
    throw new Error(
      `Invalid variant '${variant}' passed to Logo component. Valid variants are 'logo-only' and 'logo-and-text'.`
    );
  }
};

export default function Logo({
  className,
  variant = "logo-only",
  ...props
}: LogoProps) {
  assertVariant(variant);
  const logo = (
    <div
      className={`flex items-center justify-center h-16 w-16 rounded-full bg-white ${
        variant === "logo-only" && className
      } overflow-clip bg-white`}
    >
      <Image
        src={image}
        alt="Georgia High School Voter Project Logo"
        width={53.87}
        height={43.51}
      />
    </div>
  );
  if (variant === "logo-only") {
    return logo;
  }
  const text = (
    <div className="flex-col justify-center items-start inline-flex">
      <div className="text-lg mdtext-xl font-black leading-tight text-primary-1-500">
        GHSVP
      </div>
    </div>
  );
  return (
    <div
      className="flex items-center justify-center gap-2.5 mdgap-1.5 cursor-pointer"
      onClick={() => window.open("/", "_self")}
      {...props}
    >
      {logo}
      {text}
    </div>
  );
}
