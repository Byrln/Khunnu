"use client";

import React, { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import Image from "next/image";
import { Button } from "./ui/button";
import {
  MapPin,
  Star,
  Users,
  Calendar,
  Clock,
  Globe,
  Award,
  Hotel,
  Utensils,
  UsersRound,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";

const AboutPage = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );
  const [currentImageSet, setCurrentImageSet] = useState<
    "lobby" | "restaurant"
  >("lobby");

  const lobbyImages = [
    "/Lobby/0-02-05-2142aa01fd7764a27fb7f38bf2cc0729ffa5d9884565e3e5925c3cc9ff4abbc7_e2061f433f918415.jpg",
    "/Lobby/0-02-05-3a0312687812bbede83f6f75c1dedc60f8e3b2329711f13cf3a8da26213f480e_77f394b411b8fba9.jpg",
    "/Lobby/0-02-05-6f8fc42f0c9036aaac6c31f954c4e8ad00dee28df2a9cc510c8f1b0048179191_2df793ec38e8bd14.jpg",
    "/Lobby/0-02-05-935f43fccd18129cbd315300c1f69d69973dad544eafbff962623c82658149eb_9fe8d1c0feffcbac.jpg",
    "/Lobby/0-02-05-cbc23d8b4d19d041bfc9ef7ca7cb8fb9524ffc1187586371873d95d34d6c82bf_69c0133da78d2b80.jpg",
  ];

  const restaurantImages = [
    "/Restraunt, Meeting/0-02-08-075ee8695766c3379db0a8b61085121a3330015700b89d37d2a99270dfff5bbf_ef78352a8b80f5d1.jpg",
    "/Restraunt, Meeting/0-02-08-7d1a970ff68f7b950fe3fc2a90f1080cb8ad53b370c302f4bb40216899a49968_9e34248337ecc4f.jpg",
    "/Restraunt, Meeting/0-02-08-8cc57440b41674862e9e192278b8ee1fcca729c8299880118bd5207afa86ab33_38f4dd188c96becc.jpg",
    "/Restraunt, Meeting/0-02-08-8e0ee287befc239c48e6e2d4a3e24f1942da09b8d753ee91fd9b268734aa2fe7_5c5698bced9948b0.jpg",
    "/Restraunt, Meeting/0-02-08-cb2d13acfd7ad5f6d3aa6531ded55bf66a7ad3bef97fb8dacd021b3635e9f4c4_a27a9dab90801ce1.jpg",
    "/Restraunt, Meeting/0-02-08-f6c3bc5f9c598ae84e5c736de5464e2f714dca5ab870fc22e3a021e59565d664_251b10f4d2587199.jpg",
  ];

  const nearbyAttractions = [
    "Sukhbaatar Square",
    "Business Centers",
    "Shopping Centers",
    "Theatres",
    "Museums",
    "Galleries",
  ];

  const openImageModal = (imageSet: "lobby" | "restaurant", index: number) => {
    setCurrentImageSet(imageSet);
    setSelectedImageIndex(index);
  };

  const closeImageModal = () => {
    setSelectedImageIndex(null);
  };

  const navigateImage = (direction: "prev" | "next") => {
    const currentImages =
      currentImageSet === "lobby" ? lobbyImages : restaurantImages;
    if (selectedImageIndex !== null) {
      if (direction === "prev") {
        setSelectedImageIndex(
          selectedImageIndex === 0
            ? currentImages.length - 1
            : selectedImageIndex - 1
        );
      } else {
        setSelectedImageIndex(
          selectedImageIndex === currentImages.length - 1
            ? 0
            : selectedImageIndex + 1
        );
      }
    }
  };

  const getCurrentImages = () => {
    return currentImageSet === "lobby" ? lobbyImages : restaurantImages;
  };

  return (
    <div className="w-full h-full p-0 m-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16 pt-16">
          <Badge variant="outline" className="mb-6 px-4 py-2">
            About Khunnu Hotel
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Experience Authentic Mongolian Hospitality
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Welcome to Khunnu Hotel, where traditional Mongolian warmth meets
            modern comfort in the heart of Ulaanbaatar. Since 2012, we've been
            providing exceptional service with competitive rates and
            professional excellence.
          </p>
        </div>
        {/* Heritage Section with Lobby Images */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-bold">Our Heritage</h2>
                <div className="w-20 h-1 bg-primary rounded-full"></div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                'Khunnu Hotel' was established as a modern and comfortable Hotel
                in 2012 on the basis of a long-established Khunnu Hotel under
                the Khunnu group. We have been offering the best services at
                very competitive rates since we started operations.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                "Khunnu Hotel" is a Three star Hotel and offers guests Standard,
                Semi-lux and Deluxe Rooms, ensuring that every guest finds the
                perfect accommodation for their needs.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {lobbyImages.map((image, index) => (
                <div
                  key={index}
                  className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg cursor-pointer group"
                  onClick={() => openImageModal("lobby", index)}
                >
                  <Image
                    src={image}
                    alt={`Lobby view ${index + 1}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/90 rounded-full p-2">
                        <div className="w-6 h-6 flex items-center justify-center">
                          <span className="text-xs font-semibold">View</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Location Section */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-bold">
                  Prime Location
                </h2>
                <div className="w-20 h-1 bg-primary rounded-full"></div>
              </div>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  The Hotel is located 30 minutes away from the Chinggis Khaan
                  International Airport and ten minutes away from the Central
                  Train station. This strategic location makes us easily
                  accessible for both international and domestic travelers.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  The city's main landmarks are all within 20 minute walking
                  distance from the Hotel, placing you at the center of
                  Ulaanbaatar's cultural and business hub.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-6">
                {nearbyAttractions.map((attraction, index) => (
                  <div
                    key={index}
                    className="flex items-center p-3 bg-card rounded-lg border border-border/50"
                  >
                    <Globe className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                    <span className="text-sm font-medium">{attraction}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-6">
              <div className="text-center space-y-4">
                <div className="space-y-2 text-sm">
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
                  <div className="flex justify-between pt-2">
                    <div className="flex justify-between gap-4 items-center">
                      <span className="text-muted-foreground">
                        Train Station:
                      </span>
                      <span className="font-medium">10 min</span>
                    </div>
                    <div className="flex justify-between gap-4 items-center">
                      <span className="text-muted-foreground">
                        City Center:
                      </span>
                      <span className="font-medium">20 min walk</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Restaurant & Meeting Facilities */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {restaurantImages.map((image, index) => (
                <div
                  key={index}
                  className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg cursor-pointer group"
                  onClick={() => openImageModal("restaurant", index)}
                >
                  <Image
                    src={image}
                    alt={`Restaurant & Meeting facilities ${index + 1}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/90 rounded-full p-2">
                        <div className="w-6 h-6 flex items-center justify-center">
                          <span className="text-xs font-semibold">View</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Utensils className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold">
                    Dining & Events
                  </h2>
                </div>
                <div className="w-20 h-1 bg-primary rounded-full"></div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Experience exceptional dining and versatile meeting spaces
                designed to accommodate your every need. Our facilities blend
                traditional Mongolian hospitality with modern amenities,
                creating the perfect atmosphere for business meetings, social
                gatherings, and memorable dining experiences.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <UsersRound className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">Meeting Rooms</span>
                </div>
                <div className="flex items-center gap-2">
                  <Utensils className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">Restaurant</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">Event Spaces</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-20">
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
        {/* Image Modal */}
        {selectedImageIndex !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full w-full">
              {/* Close Button */}
              <button
                onClick={closeImageModal}
                className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white rounded-full p-2 transition-colors"
              >
                <X className="h-6 w-6 text-gray-800" />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={() => navigateImage("prev")}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full p-3 transition-colors"
              >
                <ChevronLeft className="h-6 w-6 text-gray-800" />
              </button>

              <button
                onClick={() => navigateImage("next")}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full p-3 transition-colors"
              >
                <ChevronRight className="h-6 w-6 text-gray-800" />
              </button>

              {/* Image */}
              <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src={getCurrentImages()[selectedImageIndex]}
                  alt={`${currentImageSet} image ${selectedImageIndex + 1}`}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/90 px-4 py-2 rounded-full">
                <span className="text-sm font-medium text-gray-800">
                  {selectedImageIndex + 1} / {getCurrentImages().length}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* Footer */}
      <footer className="bg-card border-t pt-6">
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
    </div>
  );
};

export { AboutPage };
