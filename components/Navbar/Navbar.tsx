"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo } from "..";

type NavbarItemProps = {
  text: string;
  href: string;
  icon: string;
};

type NavbarFolderProps = {
  text: string;
  items: NavbarItemProps[];
};

function NavbarFolderDesktop({ text, items }: NavbarFolderProps) {
  return (
    <div className="group">
      <div className="text-sm font-bold leading-7 transition-all group-hover:font-bold">
        {text}
      </div>
      <div className="invisible flex flex-col gap-2 group-hover:visible">
        {items.map((item) => (
          <Link href={item.href} key={item.href}>
            <div className="text-sm font-normal leading-7 transition-all group-hover:font-bold">
              {item.text}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

function NavbarFolderMobile({ text, items }: NavbarFolderProps) {
  const [expanded, setExpanded] = useState(false);
}

const NavbarItem = (
  items: NavbarItemProps,
  setExpanded: (state: boolean) => void,
) => {
  const { icon, text, href } = items;
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setActive(window.location.pathname === href);
    }
    const interval = setInterval(() => {
      setActive(window.location.pathname === href);
    }, 1000);
    return () => clearInterval(interval);
  }, [href, setActive]);

  const iconComponent = (
    <div
      className={`material-symbols-rounded group-hover:material-symbols-filled flex h-8 w-8 items-center justify-center transition-all`}
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
      className={`group inline-flex w-full items-center justify-start gap-1 px-2 py-1 text-lg transition-all ease-in-out ${active && "rounded-full bg-primary-1-100 text-primary-1-700"}`}
      onClick={() => setExpanded(false)}
    >
      {iconComponent}
      {textComponent}
    </Link>
  );
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
  return (
    <>
      <div
        className={`h-[100vh] w-64 rounded-br-2xl rounded-tr-2xl bg-white shadow ${
          expanded ? "translate-x-0" : "-translate-x-full"
        } fixed left-0 top-0 z-50 bg-slate-50 transition-transform ease-in-out sm:invisible`}
      >
        <div className="ml-2 mr-2 mt-2 flex flex-col items-start justify-start gap-2">
          <div className="p-2">
            <div
              className={`material-symbols-rounded group-hover:material-symbols-filled flex h-8 w-8 items-center justify-center rounded-full ring-1 ring-slate-300 transition-all`}
              onClick={() => setExpanded(false)}
            >
              menu_open
            </div>
          </div>

          {items.map((item) => NavbarItem(item, setExpanded))}
        </div>
      </div>
      <div
        className={`bg-slate-900 fixed bottom-0 left-0 right-0 top-0 z-40 h-[100vh] w-[100vw] bg-opacity-50 backdrop-blur-sm transition-opacity ease-in-out ${
          expanded ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setExpanded(false)}
      />
    </>
  );
}

function NavbarDesktop({ items }: { items: NavbarItemProps[] }) {
  return (
    <div className="invisible h-12 w-96 items-center justify-between sm:visible sm:flex">
      {items.map((item: NavbarItemProps) => {
        const { text, href } = item;
        return (
          <Link
            className={`text-sm font-bold leading-none text-slate-600 transition-all ease-in-out hover:text-slate-800`}
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
      className={`fixed left-0 right-0 top-0 z-50 flex items-center justify-between bg-white px-4 py-2 shadow-sm transition-transform ease-in-out sm:gap-16 md:px-6`}
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
        className="flex h-12 w-12 cursor-pointer items-center justify-center sm:hidden"
        onClick={() => setExpanded(!expanded)}
      >
        <span className="material-symbols-rounded h-6 w-6">
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
    text: "About Us",
    href: "/about",
    icon: "info",
  },
  {
    text: "Contact Us",
    href: "/contact",
    icon: "email",
  },
  // TODO: make a nested navbar
];

export function ConstNavbar() {
  return <Navbar items={NavbarData} />;
}
