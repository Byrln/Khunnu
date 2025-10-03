"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";

const AnimatedNavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className="group relative inline-flex items-center text-sm font-medium text-gray-300 hover:text-white cursor-pointer transition-all duration-300 ease-in-out"
    >
      <span className="relative">
        {children}
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 ease-in-out group-hover:w-full"></span>
      </span>
    </a>
  );
};

export function HunnuNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    // Add throttling for better performance
    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledHandleScroll);
    return () => window.removeEventListener("scroll", throttledHandleScroll);
  }, []);

  const logoElement = (
    <Link href="#hero" className="relative flex items-center space-x-2 transition-all duration-700 ease-out">
      <div className={`relative flex items-center justify-center rounded-lg shadow-lg transition-all duration-700 ease-out ${
        isScrolled ? "w-8 h-8" : "w-10 h-10"
      }`}>
        <Image
          src="/Logo.jpg"
          alt="Hunnu Hotel"
          width={40}
          height={40}
          className={`object-cover rounded-lg transition-all duration-700 ease-out ${
            isScrolled ? "w-8 h-8" : "w-10 h-10"
          }`}
        />
      </div>
      <span className={`text-white font-semibold hidden sm:block transition-all duration-700 ease-out ${
        isScrolled ? "text-base" : "text-lg"
      }`}>
        Khunnu Hotel
      </span>
    </Link>
  );

  const navLinksData = [
    { label: "Rooms", href: "#rooms" },
    { label: "Amenities", href: "#amenities" },
  ];

  const bookNowButton = (
    <button
      onClick={() => {
        const bookingUrl = "https://www.booking.com/hotel/mn/khunnu-palace-ulaanbaatar1.html?aid=356980&label=gog235jc-10CAsolgFCGmtodW5udS1wYWxhY2UtdWxhYW5iYWF0YXIxSDNYA2iWAYgBAZgBM7gBF8gBDNgBA-gBAfgBAYgCAagCAbgC7-XtxgbAAgHSAiQ2YjA3OWUzZi1iZmE3LTRkZDktODk5ZS0wYjBjNzQ0ZDZlMTPYAgHgAgE&sid=e32ce5ef89d1ffadff12a18b9f2bafbd&age=0&all_sr_blocks=1498257401_421512897_2_2_0&checkin=2025-09-30&checkout=2025-10-23&dest_id=-2353539&dest_type=city&dist=0&group_adults=1&group_children=0&hapos=1&highlighted_blocks=1498257401_421512897_2_2_0&hpos=1&matching_block_id=1498257401_421512897_2_2_0&no_rooms=1&req_adults=1&req_children=0&room1=A&sb_price_type=total&sr_order=popularity&sr_pri_blocks=1498257401_421512897_2_2_0__92000&srepoch=1759212309&srpvid=68522ab8ceea01b0&type=total&ucfs=1&";
        window.open(bookingUrl, '_blank');
      }}
      className={`border border-amber-800/50 bg-amber-800/20 text-amber-200 rounded-full hover:border-amber-700 hover:text-amber-100 hover:bg-amber-800/30 transition-all duration-300 w-full sm:w-auto whitespace-nowrap ${
        isScrolled ? "px-3 py-1.5 text-xs" : "px-4 py-2 text-sm"
      }`}
    >
      Book Now
    </button>
  );

  const contactButton = (
    <div className="relative group w-full sm:w-auto">
      <div
        className="absolute inset-0 -m-2 rounded-full
                     hidden sm:block
                     bg-amber-800
                     opacity-40 filter blur-lg pointer-events-none
                     transition-all duration-300 ease-out
                     group-hover:opacity-60 group-hover:blur-xl group-hover:-m-3"
      ></div>
      <button
        onClick={() => {
          const contactSection = document.getElementById("contact");
          if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" });
          }
        }}
        className="relative z-10 px-4 py-2 text-sm font-semibold text-white bg-gradient-to-br from-amber-800 to-amber-900 rounded-full hover:from-amber-900 hover:to-amber-950 transition-all duration-200 w-full sm:w-auto whitespace-nowrap"
      >
        Contact Us
      </button>
    </div>
  );

  return (
    <header
      className={`fixed left-1/2 transform -translate-x-1/2 z-50
                       flex items-center justify-between
                       px-6 rounded-full
                       border transition-all duration-700 ease-out
                       ${
                         isScrolled
                           ? "top-4 py-2 w-auto gap-6 backdrop-blur-xl bg-black/80 border-amber-800/40 shadow-2xl shadow-amber-900/20"
                           : "top-6 py-3 w-[calc(100%-2rem)] max-w-6xl backdrop-blur-md bg-black/40 border-amber-800/20 shadow-lg"
                       }`}
    >
      <div className="flex items-center">{logoElement}</div>

      <nav className={`hidden sm:flex items-center transition-all duration-700 ease-out ${
        isScrolled ? "space-x-4 text-xs" : "space-x-6 text-sm"
      }`}>
        {navLinksData.map((link) => (
          <AnimatedNavLink key={link.href} href={link.href}>
            {link.label}
          </AnimatedNavLink>
        ))}
      </nav>

      <div className="flex items-center gap-3">{bookNowButton}</div>
    </header>
  );
}
