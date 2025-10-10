import React from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { MapPin, Star, Users, Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";

interface AboutPreviewProps {
  showLearnMore?: boolean;
}

const AboutPreview = ({ showLearnMore = true }: AboutPreviewProps) => {
  const highlights = [
    {
      icon: <Star className="h-5 w-5 text-yellow-500" />,
      title: "3-Star Luxury",
      description: "Contemporary comfort with competitive rates since 2012",
    },
    {
      icon: <MapPin className="h-5 w-5 text-blue-500" />,
      title: "Prime Location",
      description: "Heart of Ulaanbaatar, walking distance to key attractions",
    },
    {
      icon: <Users className="h-5 w-5 text-green-500" />,
      title: "Expert Staff",
      description: "Multilingual team dedicated to your comfort",
    },
    {
      icon: <Calendar className="h-5 w-5 text-purple-500" />,
      title: "Rich Heritage",
      description: "Celebrating Mongolian culture and hospitality since 1990",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-8 sm:mb-10 md:mb-12">
        <Badge variant="outline" className="mb-4">
          About Hunnu Hotel
        </Badge>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
          Experience Mongolian Hospitality
        </h2>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 mb-8">
        {/* Main Description */}
        <div className="space-y-4 sm:space-y-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
              Your Home Away From Home
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4">
              Khunnu Palace Hotel was established as a modern and comfortable hotel in 2012, 
              building upon the foundation of the long-established Khunnu Hotel under the Khunnu group. 
              We have been offering the best services at very competitive rates since we started operations.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Our hotel seamlessly blends contemporary luxury with the warmth of traditional Mongolian hospitality, 
              creating an exceptional experience that honors our heritage while embracing modern comfort and service excellence.
            </p>
          </div>

          {/* Call to Action */}
          {showLearnMore && (
            <div className="pt-4">
              <Link href="/about">
                <Button className="group">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          )}
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {highlights.map((highlight, index) => (
            <Card
              key={index}
              className="bg-white overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <CardContent className="p-4 flex flex-col items-center text-center">
                <div className="rounded-full bg-primary/10 p-2 mb-3">
                  {highlight.icon}
                </div>
                <h4 className="text-base font-semibold mb-1">
                  {highlight.title}
                </h4>
                <p className="text-muted-foreground text-xs leading-relaxed line-clamp-2">
                  {highlight.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export { AboutPreview };
