"use client";
import { useEffect, useRef, useState } from "react";
import TeamCard, { TeamCardProps } from "./TeamCard";

export type TeamProps = {
  team: TeamCardProps[];
  spaceBetween?: number;
  className?: string;
};

export default function Team({ team, className }: TeamProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const trackScroll = () => {
    if (containerRef.current) {
      if (containerRef.current.scrollLeft === 0) {
        setCanScrollLeft(false);
      } else {
        setCanScrollLeft(true);
      }
      if (
        containerRef.current.scrollLeft >=
        containerRef.current.scrollWidth -
          containerRef.current.clientWidth -
          containerRef.current.children[0].clientWidth
      ) {
        setCanScrollRight(false);
      } else {
        setCanScrollRight(true);
      }
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", trackScroll);
    }
    return () => {
      if (container) {
        container.removeEventListener("scroll", trackScroll);
      }
    };
  }, [containerRef]);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -containerRef.current.children[0].clientWidth,
        behavior: "smooth",
      });
    }
  };
  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: containerRef.current.children[0].clientWidth,
        behavior: "smooth",
      });
    }
  };
  const leftButton = (
    <button
      className="absolute -left-16 w-12 h-12 flex-shrink-0 rounded-full bg-slate-50 hover:bg-slate-100 material-symbols-outlined disabled:opacity-50 disabled:hover:bg-slate-50"
      disabled={!canScrollLeft}
      onClick={scrollLeft}
    >
      chevron_left
    </button>
  );
  const rightButton = (
    <button
      className="absolute -right-16 w-12 h-12 flex-shrink-0 rounded-full bg-slate-50 hover:bg-slate-100 material-symbols-outlined disabled:opacity-50 disabled:hover:bg-slate-50"
      onClick={scrollRight}
      disabled={!canScrollRight}
    >
      chevron_right
    </button>
  );
  const leftOverlay = (
    <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-l from-transparent to-slate-50 z-10" />
  );
  const rightOverlay = (
    <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-r from-transparent to-slate-50 z-10" />
  );

  return (
    <div className="relative flex gap-2 items-center">
      {leftButton}
      {canScrollLeft && leftOverlay}
      <div className="overflow-hidden w-full">
        <div
          className={`flex gap-4 h-auto overflow-y-visible overflow-x-auto scroll-m-0 snap-x snap-proximity ${className} box-content no-scrollbar w-full h-full`}
          ref={containerRef}
        >
          {team.map((member, _) => (
            <TeamCard
              {...member}
              key={member.name}
              className="flex-shrink-0 snap-center"
            />
          ))}
        </div>
      </div>
      {canScrollRight && rightOverlay}
      {rightButton}
    </div>
  );
}
