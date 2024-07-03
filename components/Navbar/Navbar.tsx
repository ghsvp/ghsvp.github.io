"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "..";

type NavbarItemProps = {
  text: string;
  href: string;
  icon: string;
};

function NavbarMobile({
  items,
  expanded,
  setExpanded,
}: {
  items: NavbarItemProps[];
  expanded: boolean;
  setExpanded: (expanded: boolean) => void;
}) {
  const NavbarItem = (items: NavbarItemProps) => {
    const { icon, text, href } = items;
    const iconComponent = (
      <div
        className={`w-8 h-8 flex items-center justify-center material-symbols-rounded transition-all group-hover:material-symbols-filled`}
      >
        {icon}
      </div>
    );
    const textComponent = (
      <div
        className={`text-sm font-normal leading-7 transition-all group-hover:font-bold`}
      >
        {text}
      </div>
    );
    return (
      <Link
        href={href}
        key={href}
        className={`justify-start items-center gap-2 inline-flex group transition-all ease-in-out`}
        onClick={() => setExpanded(false)}
      >
        {iconComponent}
        {textComponent}
      </Link>
    );
  };
  return (
    <>
      <div
        className={`w-64 h-[100vh] bg-white rounded-tr-2xl rounded-br-2xl shadow ${
          expanded ? "translate-x-0" : "-translate-x-full"
        } fixed top-0 left-0 z-50 transition-transform ease-in-out bg-slate-50 sm:invisible`}
      >
        <div className="flex-col justify-start items-start gap-4 flex ml-12 mt-12">
          {items.map(NavbarItem)}
        </div>
      </div>
      <div
        className={`fixed top-0 left-0 right-0 bottom-0 w-[100vw] h-[100vh] bg-black bg-opacity-50 backdrop-blur-sm z-40 transition-opacity ease-in-out ${
          expanded ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setExpanded(false)}
      />
    </>
  );
}

function NavbarDesktop({ items }: { items: NavbarItemProps[] }) {
  return (
    <div className="items-center justify-between h-16 invisible sm:visible sm:flex w-96">
      {items.map((item: NavbarItemProps) => {
        const { text, href } = item;
        return (
          <Link
            className={`transition-all ease-in-out text-slate-600 text-base font-bold leading-none hover:text-slate-800`}
            href={href}
            key={href}
          >
            {text}
          </Link>
        );
      })}
    </div>
  );
}

export default function Navbar({ items }: { items: NavbarItemProps[] }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 bg-white shadow-sm z-50 transition-transform ease-in-out flex items-center justify-between sm:gap-16 px-4 md:px-6 md:py-4`}
    >
      <Logo className="flex-none" variant="logo-and-text" />
      <NavbarDesktop
        items={items.map((item) => ({
          ...item,
        }))}
      />
      <NavbarMobile
        items={items.map((item) => ({
          ...item,
        }))}
        expanded={expanded}
        setExpanded={setExpanded}
      />
      <button
        className="flex items-center justify-center sm:hidden w-12 h-12 cursor-pointer"
        onClick={() => setExpanded(!expanded)}
      >
        <span className="material-symbols-rounded w-6 h-6">
          {expanded ? "menu_open" : "menu"}
        </span>
      </button>
    </nav>
  );
}

export const NavbarData = [
  {
    text: "Home",
    href: "/",
    icon: "home",
  },
  {
    text: "About Us",
    href: "/about",
    icon: "info",
  },
  {
    text: "Action",
    href: "/action",
    icon: "history",
  },
  {
    text: "Get Involved",
    href: "/resources",
    icon: "star",
  },
  {
    text: "Contact Us",
    href: "/contact",
    icon: "email",
  },
];

export function ConstNavbar() {
  return <Navbar items={NavbarData} />;
}
