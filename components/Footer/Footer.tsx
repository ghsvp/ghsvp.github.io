"use client";
import Link from "next/link";
import { Logo } from "..";
import InstagramIcon from "./InstagramIcon";
import { NavbarData } from "@/components/Navbar/Navbar";

function year() {
  return new Date().getFullYear();
}

export default function Footer() {
  return (
    <div>
      <div className="pb-6 sm:mt-12 px-6 md:px-8">
        <div className="flex items-center w-full gap-4">
          <Logo variant="logo-only" />
          <div className="flex flex-col">
            <div className="text-primary-1-500 text-lg font-bold flex flex-row gap-2">
              GHSVP
              <a
                href="https://www.instagram.com/ga.hs.voterproject/"
                target="_blank"
                rel="noreferrer"
              >
                <InstagramIcon />
              </a>
            </div>
            <div className="text-primary-1-500 hidden md:block text-sm">
              Georgia High School Voter Project
            </div>
          </div>
        </div>
      </div>
      <div className="bg-primary-1-200 p-5 px-6 md:px-8">
        <div className="flex flex-col md:flex-row items-start justify-between">
          <div className="text-primary-1-500 text-sm">© {year()} GHSVP</div>
          <div className="flex gap-4">
            {NavbarData.map((item) => (
              <Link
                key={item.href}
                href={`#${item.href}`}
                className="text-primary-1-500 text-sm"
              >
                <span className="hidden md:block">{item.text}</span>
                <div
                  className={`w-8 h-8 flex items-center justify-center material-symbols-rounded transition-all group-hover:material-symbols-filled
                  } md:hidden`}
                >
                  {item.icon}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
