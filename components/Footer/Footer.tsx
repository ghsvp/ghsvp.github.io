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
      <div className="px-6 pb-6 sm:mt-12 md:px-8">
        <div className="flex w-full items-center gap-4">
          <Logo variant="logo-only" />
          <div className="flex flex-col">
            <div className="flex flex-row gap-2 text-lg font-bold text-primary-1-500">
              GHSVP
              <a
                href="https://www.instagram.com/ga.hs.voterproject/"
                target="_blank"
                rel="noreferrer"
              >
                <InstagramIcon />
              </a>
            </div>
            <div className="hidden text-sm text-primary-1-500 md:block">
              Georgia High School Voter Project
            </div>
          </div>
        </div>
      </div>
      <div className="bg-primary-1-200 p-5 px-6 md:px-8">
        <div className="flex flex-col items-start justify-between md:flex-row">
          <div className="text-sm text-primary-1-500">© {year()} GHSVP</div>
          <div className="flex gap-4">
            {NavbarData.map(
              (item) =>
                "href" in item && (
                  <Link
                    key={item.href}
                    href={`#${item.href}`}
                    className="text-sm text-primary-1-500"
                  >
                    <span className="hidden md:block">{item.text}</span>
                    <div
                      className={`material-symbols-rounded group-hover:material-symbols-filled } flex h-8 w-8 items-center justify-center transition-all md:hidden`}
                    >
                      {item.icon}
                    </div>
                  </Link>
                ),
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
