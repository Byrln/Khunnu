import React from "react";
import { Button } from "./ui/button";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  imageUrl?: string;
  onBookNowClick?: () => void;
}

const HeroSection = ({
  title = "Khunnu Hotel - Luxury Accommodation in Mongolia",
  subtitle = "Experience world-class hospitality in the heart of Mongolia. Premium rooms, exceptional dining, and unparalleled service await you at Khunnu Hotel.",
  imageUrl = "/Lobby/0-02-05-935f43fccd18129cbd315300c1f69d69973dad544eafbff962623c82658149eb_9fe8d1c0feffcbac.jpg",
  onBookNowClick,
}: HeroSectionProps) => {
  return (
    <div className="relative h-[500px] sm:h-[600px] lg:h-[700px] w-full bg-background overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content Container */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
          {title}
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 sm:mb-10 max-w-3xl px-4">
          {subtitle}
        </p>

        {/* Book Now Button */}
        <Button
          data-book-now
          size="lg"
          className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 bg-gradient-to-r from-amber-800 to-amber-900 hover:from-amber-900 hover:to-amber-950 text-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          onClick={() => {
            const bookingUrl = "https://www.booking.com/hotel/mn/khunnu-palace-ulaanbaatar1.html?aid=356980&label=gog235jc-10CAsolgFCGmtodW5udS1wYWxhY2UtdWxhYW5iYWF0YXIxSDNYA2iWAYgBAZgBM7gBF8gBDNgBA-gBAfgBAYgCAagCAbgC7-XtxgbAAgHSAiQ2YjA3OWUzZi1iZmE3LTRkZDktODk5ZS0wYjBjNzQ0ZDZlMTPYAgHgAgE&sid=e32ce5ef89d1ffadff12a18b9f2bafbd&age=0&all_sr_blocks=1498257401_421512897_2_2_0&checkin=2025-09-30&checkout=2025-10-23&dest_id=-2353539&dest_type=city&dist=0&group_adults=1&group_children=0&hapos=1&highlighted_blocks=1498257401_421512897_2_2_0&hpos=1&matching_block_id=1498257401_421512897_2_2_0&no_rooms=1&req_adults=1&req_children=0&room1=A&sb_price_type=total&sr_order=popularity&sr_pri_blocks=1498257401_421512897_2_2_0__92000&srepoch=1759212309&srpvid=68522ab8ceea01b0&type=total&ucfs=1&";
            window.open(bookingUrl, '_blank');
          }}
        >
          Book Your Stay
        </Button>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
};

export default HeroSection;
