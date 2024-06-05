"use client";

import { Ref, useEffect, useState } from "react";
import { useIntersectionObserver } from "usehooks-ts";

export interface AnimatedNumberProps {
  title: string;
  number: number;
  start?: number;
  duration?: number;
  className?: string;
}

export default function AnimatedNumber({
  title,
  number,
  start = 0,
  duration = 2000,
  className,
}: AnimatedNumberProps) {
  const { isIntersecting, ref } = useIntersectionObserver() as {
    isIntersecting: boolean;
    ref: Ref<HTMLDivElement>;
  };
  const [count, setCount] = useState(start);
  const [placeHolderDigits, setPlaceHolderDigits] = useState("0");

  const targetDigits = number.toString().length;

  useEffect(() => {
    if (!isIntersecting || count === number) return;
    const end = number;
    const range = end - start;
    const increment = end > start ? 1 : -1;
    const stepTime = Math.abs(Math.floor(duration / range));
    const timer = setTimeout(() => {
      setCount(count + increment);
      setPlaceHolderDigits("0".repeat(targetDigits - count.toString().length));
    }, stepTime);
    return () => clearTimeout(timer);
  }, [
    isIntersecting,
    start,
    number,
    duration,
    ref,
    count,
    setCount,
    targetDigits,
    setPlaceHolderDigits,
  ]);

  return (
    <div className={className || "flex flex-col w-48 gap-2"}>
      <h2 className="text-center text-slate-700">{title}</h2>
      <div className="h-0.5 bg-primary-1-500" />
      <p
        ref={ref}
        className="text-8xl font-bold text-primary-1-500 text-center"
        data-number={number}
        style={{
          fontFamily: "Courier New, monospace",
        }}
      >
        <span className="text-8xl text-opacity-0 text-white">
          {isIntersecting ? placeHolderDigits : ""}
        </span>
        {isIntersecting ? count : 0}
      </p>
    </div>
  );
}
