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
  icon: string;
  items: NavbarItemProps[];
};

type NavbarFolderMobileProps = {
  text: string;
  icon: string;
  items: NavbarItemProps[];
  setExpanded: (state: boolean) => void;
};

type NavbarItemMobileProps = {
  item: NavbarItemProps;
  activeState?: boolean;
  setExpanded: (state: boolean) => void;
};

const NavbarItemMobile = ({
  item,
  activeState,
  setExpanded,
}: NavbarItemMobileProps) => {
  const { icon, text, href } = item;

  const [active, setActive] = useState(false);

  if (activeState) {
    setActive(activeState);
  }

  useEffect(() => {
    if (activeState) {
      setActive(activeState);
      return;
    }
    if (typeof window !== "undefined") {
      setActive(window.location.pathname === href);
    }
    const interval = setInterval(() => {
      setActive(window.location.pathname === href);
    }, 1000);
    return () => clearInterval(interval);
  }, [href, setActive, activeState]);

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

function NavbarFolderMobile({
  text,
  icon,
  items,
  setExpanded: setExpandedParent,
}: NavbarFolderMobileProps) {
  const [expanded, setExpanded] = useState(false);

  const iconComponent = (
    <div
      className={`material-symbols-rounded group-hover:material-symbols-filled flex h-8 w-8 items-center justify-center transition-all`}
    >
      {icon}
    </div>
  );
  const textComponent = (
    <div className={`text-sm font-normal leading-7 transition-all`}>{text}</div>
  );

  return (
    <div
      className={`group flex w-full flex-col ${expanded ? "rounded-xl bg-primary-1-100" : ""}`}
    >
      <div
        className={`group inline-flex w-full items-center justify-start gap-1 px-2 py-1 text-lg transition-all ease-in-out`}
        onClick={() => setExpanded(!expanded)}
      >
        {iconComponent}
        {textComponent}
      </div>
      <div
        className={`flex flex-col overflow-hidden transition-all ease-in-out ${expanded ? "mx-2 mb-2 max-h-[100vh] py-2" : "max-h-0"} rounded-lg bg-primary-1-50`}
      >
        {items.map((item) => (
          <NavbarItemMobile
            item={item}
            key={item.href}
            activeState={false}
            setExpanded={setExpandedParent}
          />
        ))}
      </div>
    </div>
  );
}

function NavbarItemDesktop({ text, href }: NavbarItemProps) {
  return (
    <Link
      className={`text-sm font-bold leading-none text-slate-600 transition-all ease-in-out hover:text-slate-800`}
      href={href}
      key={href}
    >
      {text}
    </Link>
  );
}

function NavbarFolderDesktop({ text, items }: NavbarFolderProps) {
  return (
    <div className="group relative flex h-[0.875rem] flex-grow-0 flex-col items-center overflow-clip hover:overflow-visible transition-all">
      <div className="text-sm font-bold leading-none text-slate-600 transition-all hover:text-slate-800 group-hover:font-bold">
        {text}
      </div>
      <div className="h-fit max-h-0 max-w-0 transition-all group-hover:max-h-[100vh] group-hover:max-w-[100vw]">
        <div className="flex flex-col gap-4 rounded-sm bg-white p-4 shadow-md">
          {items.map((item) => (
            <NavbarItemDesktop {...item} key={item.href} />
          ))}
        </div>
      </div>
    </div>
  );
}

function NavbarMobile({
  items,
  expanded,
  setExpanded,
}: {
  items: (NavbarItemProps | NavbarFolderProps)[];
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
          {items.map((item) => {
            if ("items" in item) {
              return (
                <NavbarFolderMobile
                  {...item}
                  key={item.text}
                  setExpanded={setExpanded}
                />
              );
            } else {
              return (
                <NavbarItemMobile
                  item={item}
                  key={item.href}
                  setExpanded={setExpanded}
                />
              );
            }
          })}
        </div>
      </div>
      <div
        className={`fixed bottom-0 left-0 right-0 top-0 z-40 h-[100vh] w-[100vw] bg-slate-900 bg-opacity-50 backdrop-blur-sm transition-opacity ease-in-out ${
          expanded ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setExpanded(false)}
      />
    </>
  );
}

function NavbarDesktop({
  items,
}: {
  items: (NavbarItemProps | NavbarFolderProps)[];
}) {
  return (
    <div className="invisible h-12 w-96 items-center justify-between sm:visible sm:flex transition-all">
      {items.map((item) => {
        if ("items" in item) {
          return <NavbarFolderDesktop {...item} key={item.text} />;
        } else {
          return <NavbarItemDesktop {...item} key={item.href} />;
        }
      })}
    </div>
  );
}

export default function Navbar({
  items,
}: {
  items: (NavbarItemProps | NavbarFolderProps)[];
}) {
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

export const NavbarData: (NavbarFolderProps | NavbarItemProps)[] = [
  {
    text: "Home",
    href: "/",
    icon: "home",
  },
  {
    text: "Action",
    icon: "history",
    items: [
      {
        text: "Outreach",
        href: "/action/outreach",
        icon: "communities",
      },
      {
        text: "Past Drives",
        href: "/action/past-drives",
        icon: "history",
      },
    ],
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
];

export function ConstNavbar() {
  return <Navbar items={NavbarData} />;
}
