"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  review: string;
  location?: string;
  stayDate?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Robert J.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Robert",
    rating: 4,
    review:
      "Perfect location with stunning views. The rooms were spacious and well-appointed. The only improvement could be more variety at breakfast.",
    location: "New York, USA",
    stayDate: "December 2024",
  },
  {
    id: 2,
    name: "Sarah M.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    rating: 5,
    review:
      "Exceptional service and beautiful traditional Mongolian hospitality. The staff went above and beyond to make our stay memorable. Highly recommend!",
    location: "London, UK",
    stayDate: "November 2024",
  },
  {
    id: 3,
    name: "David Chen",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
    rating: 5,
    review:
      "Amazing cultural experience! The hotel perfectly blends modern comfort with traditional Mongolian elements. The location is ideal for exploring Ulaanbaatar.",
    location: "Singapore",
    stayDate: "October 2024",
  },
  {
    id: 4,
    name: "Emma K.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
    rating: 4,
    review:
      "Clean, comfortable rooms with excellent amenities. The restaurant serves delicious local cuisine. Great value for money in the heart of the city.",
    location: "Sydney, Australia",
    stayDate: "September 2025",
  },
  {
    id: 5,
    name: "Michael R.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
    rating: 5,
    review:
      "Outstanding hotel with professional staff and top-notch facilities. The business center was perfect for my work needs. Will definitely stay again!",
    location: "Toronto, Canada",
    stayDate: "August 2025",
  },
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex text-yellow-500">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < rating ? "fill-current" : "stroke-current fill-none"
          }`}
        />
      ))}
    </div>
  );
};

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <Card className="border-none shadow-none bg-transparent">
      <CardContent className="p-0">
        <div className="flex items-center mb-4">
          <div className="h-12 w-12 rounded-full overflow-hidden mr-4 flex-shrink-0">
            <img
              src={testimonial.avatar}
              alt={testimonial.name}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex-grow">
            <h4 className="font-semibold text-foreground">
              {testimonial.name}
            </h4>
            <StarRating rating={testimonial.rating} />
            {testimonial.location && (
              <p className="text-xs text-muted-foreground mt-1">
                {testimonial.location} • {testimonial.stayDate}
              </p>
            )}
          </div>
        </div>
        <p className="text-muted-foreground text-sm text-pretty">
          "{testimonial.review}"
        </p>
      </CardContent>
    </Card>
  );
};

export default function TestimonialSlider() {
  return (
    <div className="w-full">
      <div className="mb-6 text-center">
        <h3 className="text-xl font-semibold mb-2">What Our Guests Say</h3>
      </div>

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {/* Group testimonials into slides of 3 */}
          {Array.from(
            { length: Math.ceil(testimonials.length / 3) },
            (_, slideIndex) => (
              <CarouselItem key={slideIndex}>
                <div className="flex flex-col gap-6">
                  {testimonials
                    .slice(slideIndex * 3, slideIndex * 3 + 3)
                    .map((testimonial) => (
                      <div key={testimonial.id} className="w-full">
                        <TestimonialCard testimonial={testimonial} />
                      </div>
                    ))}
                </div>
              </CarouselItem>
            )
          )}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex" />
        <CarouselNext className="hidden sm:flex" />
      </Carousel>

      <div className="flex justify-center mt-4 sm:hidden">
        <p className="text-xs text-muted-foreground">
          Swipe to see more reviews
        </p>
      </div>
    </div>
  );
}
