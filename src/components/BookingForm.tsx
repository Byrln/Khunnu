"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Textarea } from "./ui/textarea";
import { Calendar } from "./ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { format } from "date-fns";
import { CalendarIcon, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface BookingFormProps {
  onSubmit?: (data: BookingFormData) => void;
  isOpen?: boolean;
}

interface BookingFormData {
  checkIn: Date | undefined;
  checkOut: Date | undefined;
  adults: string;
  children: string;
  roomType: string;
  name: string;
  email: string;
  phone: string;
  specialRequests: string;
}

export default function BookingForm({
  onSubmit,
  isOpen = true,
}: BookingFormProps) {
  const [formData, setFormData] = useState<BookingFormData>({
    checkIn: undefined,
    checkOut: undefined,
    adults: "2",
    children: "0",
    roomType: "standard",
    name: "",
    email: "",
    phone: "",
    specialRequests: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (field: keyof BookingFormData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
    }
    setIsSubmitted(true);
    // In a real application, you would send this data to your backend
  };

  if (!isOpen) return null;

  if (isSubmitted) {
    return (
      <Card className="w-full max-w-md mx-auto bg-background border shadow-lg">
        <CardHeader>
          <CardTitle className="text-center text-2xl">
            Booking Confirmation
          </CardTitle>
          <CardDescription className="text-center">
            Thank you for your reservation
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center py-8">
          <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
          <p className="text-center text-lg font-medium">
            Your booking request has been received!
          </p>
          <p className="text-center text-muted-foreground mt-2">
            We will send a confirmation to your email shortly.
          </p>
        </CardContent>
        <CardFooter>
          <Button className="w-full" onClick={() => setIsSubmitted(false)}>
            Make Another Booking
          </Button>
        </CardFooter>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-md mx-auto bg-background border shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl font-bold">Book Your Stay</CardTitle>
        <CardDescription>
          Fill in the details to reserve your room
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="check-in">Check-in Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    id="check-in"
                    variant={"outline"}
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !formData.checkIn && "text-muted-foreground",
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {formData.checkIn ? (
                      format(formData.checkIn, "PPP")
                    ) : (
                      <span>Pick a date</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={formData.checkIn}
                    onSelect={(date) => handleChange("checkIn", date)}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div className="space-y-2">
              <Label htmlFor="check-out">Check-out Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    id="check-out"
                    variant={"outline"}
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !formData.checkOut && "text-muted-foreground",
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {formData.checkOut ? (
                      format(formData.checkOut, "PPP")
                    ) : (
                      <span>Pick a date</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={formData.checkOut}
                    onSelect={(date) => handleChange("checkOut", date)}
                    initialFocus
                    disabled={(date) =>
                      (formData.checkIn ? date < formData.checkIn : false) ||
                      date < new Date()
                    }
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="adults">Adults</Label>
              <Select
                value={formData.adults}
                onValueChange={(value) => handleChange("adults", value)}
              >
                <SelectTrigger id="adults">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  {[1, 2, 3, 4].map((num) => (
                    <SelectItem key={num} value={num.toString()}>
                      {num}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="children">Children</Label>
              <Select
                value={formData.children}
                onValueChange={(value) => handleChange("children", value)}
              >
                <SelectTrigger id="children">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  {[0, 1, 2, 3].map((num) => (
                    <SelectItem key={num} value={num.toString()}>
                      {num}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="room-type">Room Type</Label>
            <Select
              value={formData.roomType}
              onValueChange={(value) => handleChange("roomType", value)}
            >
              <SelectTrigger id="room-type">
                <SelectValue placeholder="Select room type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="standard">Standard Room</SelectItem>
                <SelectItem value="deluxe">Deluxe Room</SelectItem>
                <SelectItem value="suite">Executive Suite</SelectItem>
                <SelectItem value="family">Family Room</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              placeholder="John Doe"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+1 (555) 000-0000"
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="special-requests">
              Special Requests (Optional)
            </Label>
            <Textarea
              id="special-requests"
              placeholder="Any special requirements or preferences..."
              value={formData.specialRequests}
              onChange={(e) => handleChange("specialRequests", e.target.value)}
              className="min-h-[80px]"
            />
          </div>

          <Button type="submit" className="w-full">
            Complete Booking
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
