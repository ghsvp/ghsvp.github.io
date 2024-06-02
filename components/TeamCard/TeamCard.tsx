"use client";
import Image from "next/image";
import { useCallback, useState } from "react";

export type TeamCardProps = {
  name: string;
  position: string;
  description: string;
  image: string;
  className?: string;
};

const TARGET = 100;

function sentenceTokenizer(str: string) {
  let index = 0;
  let start = 0;
  let result = [];

  let brackets = [];
  let quotes = [];

  while (index < str.length) {
    if (/[.!?]/.test(str[index])) {
      if (index + 1 < str.length && /[a-zA-Z]/.test(str[index + 1])) {
        index++;
        continue;
      }
      if (brackets.length || quotes.length) {
        index++;
        continue;
      }
      result.push(str.slice(start, index + 1));
      start = index + 1;
    }

    if (str[index] === '"') {
      if (quotes.length && quotes[quotes.length - 1] === '"') {
        quotes.pop();
      } else {
        quotes.push('"');
      }
    }
    if (str[index] === "(") {
      brackets.push("(");
    }
    if (str[index] === ")") {
      brackets.pop();
    }
    if (str[index] === "[") {
      brackets.push("[");
    }
    if (str[index] === "]") {
      brackets.pop();
    }
    if (str[index] === "{") {
      brackets.push("{");
    }
    if (str[index] === "}") {
      brackets.pop();
    }

    index++;
  }

  return result;
}

function shortDescription(str: string) {
  const sentences = sentenceTokenizer(str);
  let result = "";
  while (result.length < TARGET && sentences.length) {
    let sentence = sentences.shift();
    if (sentence && sentence.length + result.length < TARGET) {
      result += sentence;
    }
  }
  if (result.length < TARGET - 50) {
    result = str.slice(0, TARGET) + "...";
  }
  return result;
}

export default function TeamCard({
  name,
  position,
  description,
  image,
  className,
}: TeamCardProps) {
  const [expanded, setExpanded] = useState(false);

  const toggle = useCallback(
    () => setExpanded(!expanded),
    [expanded, setExpanded]
  );
  const f = useCallback(
    (expandedValue: any, collapsedValue: any) =>
      expanded ? expandedValue : collapsedValue,
    [expanded]
  );

  return (
    <>
      <div
        className={`bg-slate-950 ${f(
          "bg-opacity-50 z-50 fixed top-0 left-0 right-0 bottom-0",
          "-z-10 bg-opacity-0 fixed w-full h-full"
        )} backdrop-blur-sm  transition-all duration-200 ease-in-out`}
        onClick={toggle}
      ></div>
      <div
        className={`flex flex-shrink-0 space-y-2 border border-slate-200 bg-white shadow-sm rounded-lg cursor-pointer justify-start items-start transition-all ease-in-out duration-200 snap-centder ${f(
          "fixed gap-8 flex-col items-center lg:flex-row top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[60] max-sm:w-[75vw] px-8 py-8",
          "flex-col w-64 h-196 px-6 p-4"
        )} ${className}`}
        onClick={toggle}
      >
        <Image
          src={image}
          width={196}
          height={196}
          alt={`Headshot of ${name}`}
          className={`${f(
            "w-64 h-64 object-cover object-top bg-slate-50 rounded-lg",
            "bg-slate-50 rounded-full mx-auto h-40 w-40 object-cover object-center"
          )} transition-all ease-in-out duration-200`}
        />
        <div>
          <h3 className="text-xl font-bold text-primary-4-800">{name}</h3>
          <h4 className="text-md font-semibold text-slate-400">{position}</h4>
          <p className="text-md">
            {f(description, shortDescription(description))}
          </p>
        </div>
      </div>
    </>
  );
}
