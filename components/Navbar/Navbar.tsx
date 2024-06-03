"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Logo } from "..";

type NavbarItemProps = {
  text: string;
  href: string;
  icon: string;
  active?: boolean;
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
    const { icon, text, href, active } = items;
    const iconComponent = (
      <div
        className={`w-8 h-8 flex items-center justify-center material-symbols-rounded transition-all group-hover:material-symbols-filled ${
          active ? "text-primary-1-500" : "text-slate-500"
        }`}
      >
        {icon}
      </div>
    );
    const textComponent = (
      <div
        className={`text-sm font-normal leading-7 transition-all group-hover:font-bold ${
          active ? "text-primary-1-500" : "text-slate-500"
        }`}
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
        } fixed top-0 left-0 z-50 transition-transform ease-in-out bg-slate-50 sm:hidden`}
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
    <div className="items-center justify-between h-16 flex-grow hidden sm:flex max-w-md">
      {items.map((item: NavbarItemProps) => {
        const { text, href, active } = item;
        return (
          <Link
            className={`transition-all ease-in-out text-slate-600 text-base font-bold leading-none hover:text-slate-800 ${
              active ? "font-black text-primary-1-500" : ""
            }`}
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

export default function Navbar({ items_ }: { items_?: NavbarItemProps[] }) {
  const [visible, setVisible] = useState(true);
  const [activeId, setActiveId] = useState("");
  const [items, setItems] = useState<Omit<NavbarItemProps, "active">[]>(
    items_ || []
  );
  const [expanded, setExpanded] = useState(false);
  const navbarRef = useRef(null);

  const selector = "a[id][data-title][data-icon]";

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      setVisible(window.scrollY < lastScrollY);
      lastScrollY = window.scrollY;
      if (window.scrollY <= 75) {
        setVisible(true);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (items_ != undefined) {
      setItems(items_!!);
      return;
    }
    if (typeof window !== "undefined") {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveId(entry.target.id);
            }
          });
        },
        { rootMargin: "-50% 0px -50% 0px", threshold: 0.01 }
      );

      document
        .querySelectorAll(selector)
        .forEach((element) => observer.observe(element));

      return () => observer.disconnect();
    }
  }, [items_]);

  useEffect(() => {
    if (items_ != undefined) {
      return;
    }
    if (typeof window !== "undefined") {
      const items: NavbarItemProps[] = [];
      document.querySelectorAll(selector).forEach((element) => {
        items.push({
          text: element.getAttribute("data-title")!!,
          href: `#${element.id}`,
          icon: element.getAttribute("data-icon")!!,
        });
      });
      setItems(items);
    }
  }, [items_]);

  return (
    <nav
      ref={navbarRef}
      className={`fixed top-0 left-0 right-0 bg-white shadow-sm z-50 transition-transform ease-in-out ${
        visible ? "translate-y-0" : "-translate-y-full"
      } flex items-center justify-between sm:justify-normal sm:gap-16 px-2 sm:px-4 md:px-12 md:py-4`}
    >
      <Logo className="flex-none" variant="logo-and-text" />
      <NavbarDesktop
        items={items.map((item) => ({
          ...item,
          active: item.href === activeId,
        }))}
      />
      <NavbarMobile
        items={items.map((item) => ({
          ...item,
          active: item.href === activeId,
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
    text: "Past Actions",
    href: "/actions",
    icon: "history",
  },
  {
    text: "Resources",
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
  return <Navbar items_={NavbarData} />;
}
