"use client";

import React, { useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import RoomShowcase from "@/components/RoomShowcase";
import AmenitiesSection from "@/components/AmenitiesSection";
import { AboutPreview } from "@/components/AboutPreview";

import { HunnuNavbar } from "@/components/HunnuNavbar";
import TestimonialSlider from "@/components/TestimonialSlider";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Calendar } from "lucide-react";

export default function Home() {
  const handleBookingClick = (roomId?: string) => {
    // Redirect to Booking.com URL
    const bookingUrl =
      "https://www.booking.com/hotel/mn/khunnu-palace-ulaanbaatar1.en-gb.html?aid=356980&label=gog235jc-10CAsolgFCGmtodW5udS1wYWxhY2UtdWxhYW5iYWF0YXIxSAlYA2iWAYgBAZgBM7gBF8gBDNgBA-gBAfgBAYgCAagCAbgCmsD8xgbAAgHSAiRiMGVhOTNhNy1iZGRhLTQyZmUtYWNmZS1jZjkyM2IwZDExZjbYAgHgAgE&sid=e32ce5ef89d1ffadff12a18b9f2bafbd&dest_id=-2353539&dest_type=city&dist=0&group_adults=1&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=1&req_children=0&room1=A&sb_price_type=total&sr_order=popularity&srepoch=1759453212&srpvid=e9e0070d8151004b&type=total&ucfs=1&";
    window.open(bookingUrl, "_blank");
  };

  // Add smooth scroll behavior and intersection observer for animations
  useEffect(() => {
    // Add smooth scroll behavior to the document
    document.documentElement.style.scrollBehavior = "smooth";

    // Intersection Observer for fade-in animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in-up");
          entry.target.classList.remove("opacity-0", "translate-y-8");
        }
      });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll(".animate-on-scroll");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <main className="min-h-screen bg-background">
      {/* Add custom CSS for animations */}
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease-out;
        }

        /* Smooth scroll for webkit browsers */
        html {
          scroll-behavior: smooth;
        }

        /* Custom scrollbar for webkit browsers */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.1);
        }

        ::-webkit-scrollbar-thumb {
          background: rgba(0, 0, 0, 0.3);
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: rgba(0, 0, 0, 0.5);
        }
      `}</style>

      {/* Navigation */}
      <HunnuNavbar />

      {/* Hero Section */}
      <section id="hero">
        <HeroSection onBookNowClick={() => handleBookingClick()} />
      </section>

      {/* About Section */}
      <section
        id="about"
        className="animate-on-scroll py-6 sm:py-8 md:py-12 lg:py-16 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12"
      >
        <AboutPreview />
      </section>

      {/* Room Showcase */}
      <section
        id="rooms"
        className="animate-on-scroll py-6 md:py-2 lg:py-3 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 max-w-7xl mx-auto"
      >
        <RoomShowcase onBookRoomClick={handleBookingClick} />
      </section>

      {/* Amenities Section */}
      <section
        id="amenities"
        className="animate-on-scroll py-6 sm:py-8 md:py-12 lg:py-16 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 bg-muted/30"
      >
        <AmenitiesSection />
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="animate-on-scroll py-6 sm:py-8 md:py-12 lg:py-16 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 bg-gradient-to-br from-muted/40 to-background"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <Badge variant="outline" className="mb-4">
              Get in Touch
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              We're Here to Help
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
            {/* Contact Information */}
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">
                  Contact Information
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  <div className="group flex items-center p-4 sm:p-5 bg-card rounded-xl border transition-all duration-300 hover:shadow-lg hover:border-primary/30 hover:-translate-y-1">
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 transition-all duration-300 group-hover:bg-primary/20">
                      <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground mb-1">
                        Phone
                      </h4>
                      <a
                        href="tel:+97670146989"
                        className="text-base sm:text-lg font-semibold hover:text-primary transition-colors"
                      >
                        +976 7014-6989
                      </a>
                    </div>
                  </div>

                  <div className="group flex items-center p-4 sm:p-5 bg-card rounded-xl border transition-all duration-300 hover:shadow-lg hover:border-primary/30 hover:-translate-y-1">
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 transition-all duration-300 group-hover:bg-primary/20">
                      <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground mb-1">
                        Email
                      </h4>
                      <a
                        href="mailto:reservations@Khunnuhotel.mn"
                        className="text-base sm:text-lg font-semibold hover:text-primary transition-colors break-all"
                      >
                        reservations@Khunnuhotel.mn
                      </a>
                    </div>
                  </div>

                  <div className="group flex items-center p-4 sm:p-5 bg-card rounded-xl border transition-all duration-300 hover:shadow-lg hover:border-primary/30 hover:-translate-y-1">
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 transition-all duration-300 group-hover:bg-primary/20">
                      <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground mb-1">
                        Address
                      </h4>
                      <p className="text-base sm:text-lg font-semibold">
                        СБД - 11 хороо, Улаанбаатар
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map and Hours */}
            <div className="space-y-6 sm:space-y-8">
              {/* Map */}
              <div className="bg-card p-2 sm:p-3 rounded-xl shadow-sm border">
                <h4 className="text-lg font-semibold mb-2">Find Us</h4>
                <div className="h-[250px] sm:h-[300px] rounded-lg overflow-hidden border shadow-sm">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d955.0076008465594!2d106.92989332610124!3d47.93014914847554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d9693914bf7ecf7%3A0xc829d356be14cbec!2z0YXSr9C90L3SryDQt9C-0YfQuNC0INCx0YPRg9C00LDQuw!5e1!3m2!1smn!2smn!4v1759207966998!5m2!1smn!2smn"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    title="Khunnu Palace Hotel Location"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
          {/* CTA Section */}
          <div className="mt-10">
            <div className="relative rounded-2xl overflow-hidden">
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage:
                    "url('/Superior Twin/0-02-08-0965e7b83bf96b1da74e9451a2dc1f29377d700f0270b3b04a6609c22c91432d_e511cc2cb00ce8d8.jpg')",
                }}
              />
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/50" />

              {/* Content */}
              <div className="relative p-8 sm:p-12 text-center">
                <div className="max-w-3xl mx-auto space-y-6">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white">
                    Ready to Experience Khunnu Palace?
                  </h2>
                  <p className="text-white/90 text-lg leading-relaxed">
                    Book your stay at Khunnu Palace Hotel and enjoy authentic
                    Mongolian hospitality with modern comfort in the heart of
                    Ulaanbaatar.
                  </p>
                  <Button
                    size="lg"
                    className="bg-white hover:bg-white/80 text-primary hover:text-primary/90 px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    onClick={() =>
                      window.open(
                        "https://www.booking.com/hotel/mn/khunnu-palace-ulaanbaatar1.en-gb.html?aid=356980&label=gog235jc-10CAsolgFCGmtodW5udS1wYWxhY2UtdWxhYW5iYWF0YXIxSAlYA2iWAYgBAZgBM7gBF8gBDNgBA-gBAfgBAYgCAagCAbgCmsD8xgbAAgHSAiRiMGVhOTNhNy1iZGRhLTQyZmUtYWNmZS1jZjkyM2IwZDExZjbYAgHgAgE&sid=e32ce5ef89d1ffadff12a18b9f2bafbd&dest_id=-2353539&dest_type=city&dist=0&group_adults=1&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=1&req_children=0&room1=A&sb_price_type=total&sr_order=popularity&srepoch=1759453212&srpvid=e9e0070d8151004b&type=total&ucfs=1&",
                        "_blank"
                      )
                    }
                  >
                    <Calendar className="h-5 w-5 mr-2" />
                    Book Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t py-6 sm:py-8 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-muted-foreground">
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/khunnuhotel"
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 p-2 rounded-full hover:bg-muted/50"
                aria-label="Facebook"
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
            </div>
            <p className="text-xs sm:text-sm text-center">
              &copy; {new Date().getFullYear()} Hunnu Hotel Ulaanbaatar. All
              rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
