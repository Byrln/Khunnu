import React from "react";
import { Card, CardContent } from "./ui/card";
import {
  Wifi,
  Utensils,
  Dumbbell,
  Coffee,
  Car,
  Shield,
  Users,
  Briefcase,
  Bed,
  Clock,
  Shirt,
  Receipt,
  Languages,
  Cigarette,
  CigaretteOff,
  Luggage,
  Phone,
  Sparkles,
} from "lucide-react";

interface AmenityProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Amenity = (
  { icon, title, description }: AmenityProps = {
    icon: <Coffee className="h-6 w-6" />,
    title: "Amenity Title",
    description: "Description of this amenity and what it offers to guests.",
  }
) => {
  return (
    <Card className="bg-white overflow-hidden transition-all duration-300 hover:shadow-lg">
      <CardContent className="p-4 flex flex-col items-center text-center">
        <div className="rounded-full bg-primary/10 p-2 mb-3">{icon}</div>
        <h3 className="text-base font-semibold mb-1">{title}</h3>
        <p className="text-muted-foreground text-xs leading-relaxed line-clamp-2">
          {description}
        </p>
      </CardContent>
    </Card>
  );
};

const AmenitiesSection = () => {
  const amenities = [
    // Most Popular Facilities
    {
      icon: <Car className="h-6 w-6 text-green-600" />,
      title: "Free Parking",
      description:
        "Complimentary private parking available on site (reservation not needed).",
      category: "popular",
    },
    {
      icon: <CigaretteOff className="h-6 w-6 text-blue-600" />,
      title: "Non-smoking Rooms",
      description: "Clean, fresh air environment in all guest accommodations.",
      category: "popular",
    },
    {
      icon: <Bed className="h-6 w-6 text-purple-600" />,
      title: "Room Service",
      description: "24-hour room service for your convenience and comfort.",
      category: "popular",
    },
    {
      icon: <Utensils className="h-6 w-6 text-orange-600" />,
      title: "Restaurant",
      description:
        "On-site restaurant serving delicious local and international cuisine.",
      category: "popular",
    },
    {
      icon: <Coffee className="h-6 w-6 text-amber-600" />,
      title: "Bar",
      description: "Stylish bar offering premium drinks and cocktails.",
      category: "popular",
    },
    {
      icon: <Utensils className="h-6 w-6 text-green-700" />,
      title: "Breakfast",
      description: "Fresh breakfast served in the room for your convenience.",
      category: "popular",
    },
    // Front Desk Services
    {
      icon: <Receipt className="h-6 w-6 text-blue-700" />,
      title: "Invoice Provided",
      description: "Professional invoicing service for business travelers.",
      category: "service",
    },
    {
      icon: <Clock className="h-6 w-6 text-indigo-600" />,
      title: "24-hour Front Desk",
      description: "Round-the-clock assistance for all your needs.",
      category: "service",
    },
    {
      icon: <Luggage className="h-6 w-6 text-gray-600" />,
      title: "Baggage Storage",
      description:
        "Secure storage for your luggage before check-in or after check-out.",
      category: "service",
    },
    // Cleaning Services
    {
      icon: <Sparkles className="h-6 w-6 text-pink-600" />,
      title: "Daily Housekeeping",
      description: "Professional daily cleaning service to maintain your room.",
      category: "cleaning",
    },
    {
      icon: <Shirt className="h-6 w-6 text-cyan-600" />,
      title: "Laundry Service",
      description: "Professional laundry and dry cleaning services available.",
      category: "cleaning",
    },
    // Business Facilities
    {
      icon: <Briefcase className="h-6 w-6 text-slate-600" />,
      title: "Meeting/Banquet Facilities",
      description: "Professional meeting and banquet spaces for your events.",
      category: "business",
    },
    // Safety & Security
    {
      icon: <Shield className="h-6 w-6 text-red-600" />,
      title: "24-hour Security",
      description:
        "Round-the-clock security monitoring for your safety and peace of mind.",
      category: "safety",
    },
    // General Amenities
    {
      icon: <Users className="h-6 w-6 text-teal-600" />,
      title: "Shared Lounge/TV Area",
      description: "Comfortable common area for relaxation and socializing.",
      category: "general",
    },
    // Languages Spoken
    {
      icon: <Languages className="h-6 w-6 text-violet-600" />,
      title: "Multilingual Staff",
      description:
        "Our staff speaks German and English to assist international guests.",
      category: "service",
    },
    // Fitness
    {
      icon: <Dumbbell className="h-6 w-6 text-emerald-600" />,
      title: "Fitness Center",
      description: "State-of-the-art fitness center with modern equipment.",
      category: "wellness",
    },
  ];

  // Group amenities by category
  const popularFacilities = amenities.filter((a) => a.category === "popular");
  const serviceFacilities = amenities.filter((a) => a.category === "service");
  const otherFacilities = amenities.filter(
    (a) => !["popular", "service"].includes(a.category)
  );

  return (
    <section className=" px-4 bg-slate-50">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Hotel Amenities & Services
          </h2>
        </div>

        {/* Most Popular Facilities */}
        <div className="mb-2">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {popularFacilities.map((amenity, index) => (
              <Amenity
                key={`popular-${index}`}
                icon={amenity.icon}
                title={amenity.title}
                description={amenity.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;
