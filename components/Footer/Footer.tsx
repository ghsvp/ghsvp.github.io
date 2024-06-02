"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo } from "..";
import InstagramIcon from "./InstagramIcon";

function year() {
  return new Date().getFullYear();
}

export default function Footer() {
  const [items, setItems] = useState<
    {
      title: string;
      id: string;
    }[]
  >([]);
  const selector = "a[id][data-title][data-icon]";
  useEffect(() => {
    if (typeof window !== "undefined") {
      setItems(
        [...document.querySelectorAll(selector)].map((element) => ({
          title: element.getAttribute("data-title")!!,
          id: element.id,
        }))
      );
    }
  }, [setItems]);

  return (
    <div>
      <div className="bg-primary-1-500 p-5">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-4">
            <Logo variant="logo-and-text" className="h-16 w-16" />
            <div className="flex flex-col gap-2">
              <div className="text-white text-lg font-bold">GHSVP</div>
              <div className="text-white text-sm">
                Georgia High School Voter Project
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/ghsvp/"
              target="_blank"
              rel="noreferrer"
            >
              <InstagramIcon />
            </a>
          </div>
        </div>
      </div>
      <div className="bg-primary-1-700 p-5">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-white text-sm">© {year()} GHSVP</div>
          <div className="flex gap-4">
            {items.map((item) => (
              <Link
                key={item.id}
                href={`#${item.id}`}
                className="text-white text-sm"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
