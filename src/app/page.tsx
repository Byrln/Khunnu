"use client";

import React from "react";
import HeroSection from "@/components/HeroSection";
import RoomShowcase from "@/components/RoomShowcase";
import AmenitiesSection from "@/components/AmenitiesSection";

import { HunnuNavbar } from "@/components/HunnuNavbar";
import TestimonialSlider from "@/components/TestimonialSlider";

import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Home() {
  const handleBookingClick = (roomId?: string) => {
    // Redirect to Booking.com URL
    const bookingUrl = "https://www.booking.com/hotel/mn/khunnu-palace-ulaanbaatar1.html?aid=356980&label=gog235jc-10CAsolgFCGmtodW5udS1wYWxhY2UtdWxhYW5iYWF0YXIxSDNYA2iWAYgBAZgBM7gBF8gBDNgBA-gBAfgBAYgCAagCAbgC7-XtxgbAAgHSAiQ2YjA3OWUzZi1iZmE3LTRkZDktODk5ZS0wYjBjNzQ0ZDZlMTPYAgHgAgE&sid=e32ce5ef89d1ffadff12a18b9f2bafbd&age=0&all_sr_blocks=1498257401_421512897_2_2_0&checkin=2025-09-30&checkout=2025-10-23&dest_id=-2353539&dest_type=city&dist=0&group_adults=1&group_children=0&hapos=1&highlighted_blocks=1498257401_421512897_2_2_0&hpos=1&matching_block_id=1498257401_421512897_2_2_0&no_rooms=1&req_adults=1&req_children=0&room1=A&sb_price_type=total&sr_order=popularity&sr_pri_blocks=1498257401_421512897_2_2_0__92000&srepoch=1759212309&srpvid=68522ab8ceea01b0&type=total&ucfs=1&";
    window.open(bookingUrl, '_blank');
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Navigation */}
      <HunnuNavbar />

      {/* Hero Section */}
      <section id="hero">
        <HeroSection onBookNowClick={() => handleBookingClick()} />
      </section>

      {/* Room Showcase */}
      <section
        id="rooms"
        className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl mx-auto"
      >
        <RoomShowcase onBookRoomClick={handleBookingClick} />
      </section>

      {/* Amenities Section */}
      <section
        id="amenities"
        className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 md:px-8 lg:px-12 bg-muted/30"
      >
        <AmenitiesSection />
      </section>

      {/* Contact Section */}
      <section className="py-8 px-4 md:px-8 lg:px-12 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Have questions or ready to book? Reach out to our friendly team
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 mr-3 text-primary" />
                    <span>+976 7014-6989</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 mr-3 text-primary" />
                    <span>reservations@Khunnuhotel.mn</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 mr-3 text-primary" />
                    <span>СБД - 11 хороо, Улаанбаатар</span>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="h-[300px] rounded-xl overflow-hidden border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d955.0076008465594!2d106.92989332610124!3d47.93014914847554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d9693914bf7ecf7%3A0xc829d356be14cbec!2z0YXSr9C90L3SryDQt9C-0YfQuNC0INCx0YPRg9C00LDQuw!5e1!3m2!1smn!2smn!4v1759207966998!5m2!1smn!2smn"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  title="Hotel Location"
                ></iframe>
              </div>
            </div>

            {/* Testimonials Slider */}
            <div className="bg-card p-6 rounded-xl shadow-sm border">
              <TestimonialSlider />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t py-8 px-4 md:px-8 lg:px-12 flex justify-between items-center text-muted-foreground">
        <div className="flex space-x-4">
          <a
            href="https://www.facebook.com/khunnuhotel"
            className="text-muted-foreground hover:text-foreground"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-facebook"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </a>
          {/* <a href="#" className="text-muted-foreground hover:text-foreground">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-twitter"
            >
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
            </svg>
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-instagram"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </a> */}
        </div>
        <p>
          &copy; {new Date().getFullYear()} Hunnu Hotel Ulaanbaatar. All rights
          reserved.
        </p>
      </footer>


    </main>
  );
}
