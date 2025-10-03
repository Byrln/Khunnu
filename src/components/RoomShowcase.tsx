import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { AspectRatio } from "./ui/aspect-ratio";
import { ChevronLeft, ChevronRight, X, Maximize2 } from "lucide-react";

interface RoomProps {
  id: string;
  name: string;
  description: string;
  price: number;
  capacity: number;
  size: number;
  amenities: string[];
  images: string[];
  featured?: boolean;
}

interface RoomShowcaseProps {
  rooms?: RoomProps[];
  title?: string;
  subtitle?: string;
  onBookRoomClick?: (roomId: string) => void;
}

const RoomShowcase = ({
  rooms = [
    {
      id: "1",
      name: "Standard Double Room",
      description:
        "Comfortable and well-appointed room with modern amenities and city views. Perfect for couples or business travelers.",
      price: 180,
      capacity: 2,
      size: 24,
      amenities: [
        "Private bathroom",
        "Flat-screen TV",
        "Free WiFi",
        "No Smoking",
      ],
      images: [
        "/Standard Double/0-02-08-10b00b607765fcffad1259873b0405fdc850ce16ababbe6dbdbf973e7a57f45c_350b0725306eea6c.jpg",
        "/Standard Double/0-02-08-526d6048f2974567307fbf817a24fa6f8613506a7501b233ca42ab8de3b8f1ea_b2cd16e8e1b500fb.jpg",
        "/Standard Double/0-02-08-82aceae0bd12bf761b98f42e938c6fa4925f6b89e3a0969538f32ffa23ec45e7_ee062bc3c48f2098.jpg",
        "/Standard Double/0-02-08-918ef28fdfaa6a405c37a92049919b42e821987f835f9db10305766773438fb8_3e4e37965b7fd4d4.jpg",
        "/Standard Double/0-02-08-bbb7acf58a91ac78f0d358990059fa957a70a060cd96e1f3b0e5d8372f8cf77f_5534e9998371d039.jpg",
        "/Standard Double/0-02-08-c2c6f255b5385771124a1be87356f58fec6f3a9205e5d4fec5ba8cb9d7bd7a78_169f569a8b2962a1.jpg",
        "/Standard Double/0-02-08-d9c2785c4f80d58ae59a6f2ed7f4bbcc7a670aeb2a55978559c33e026147201d_5842eb42bdcf0ce7.jpg",
        "/Standard Double/0-02-08-eab65dd7f0911088b37b70482e03d19a291d31e721867f8b95a77f3f93724ce1_83ded22917f09c97.jpg",
        "/Standard Double/0-02-08-f0cfa5a198ac8246365d37adf387a049a5be071b32800664656f99af5a375ce6_2bd108182950f95b.jpg",
      ],
      featured: true,
    },
    {
      id: "2",
      name: "Deluxe King Room",
      description:
        "Spacious luxury room with king-size bed, premium amenities, and panoramic city views of Ulaanbaatar.",
      price: 280,
      capacity: 2,
      size: 40,
      amenities: [
        "Private bathroom",
        "Flat-screen TV",
        "Free WiFi",
        "No Smoking",
      ],
      images: [
        "/Deluxe king/0-02-08-438308ae94891320e57736cbfea54fb482c4d43dd337c825461a7af6207d776a_ad82cece339ed607.jpg",
        "/Deluxe king/0-02-08-4d3ce468333616134381cc68469518d1b8812f47eae86e00ad017d1e85368844_20cdcaf26d94669c.jpg",
        "/Deluxe king/0-02-08-630b920112191806aa14f6791161f4e2040511d70637622ed2a7d596f7ebf0a0_216a9a4e22c6dbc9.jpg",
        "/Deluxe king/0-02-08-ecbcc9087841c46dbb1b3c80cbab8dc80c3c98a19c8536c88a6a0a1eeef3115f_9342ed05f8a17735.jpg",
        "/Deluxe king/0-02-08-f87d0c8a1430faf3f178b57ed9aca7bbe125d2e8ec35a41fc86303493a867e3c_6d3a418c7a11adbb.jpg",
      ],
    },
    {
      id: "3",
      name: "Presidential Suite",
      description:
        "Ultimate luxury experience with separate living area, dining room, and exclusive amenities. The pinnacle of hospitality in Mongolia.",
      price: 850,
      capacity: 4,
      size: 48,
      amenities: [
        "Private bathroom",
        "Flat-screen TV",
        "Free WiFi",
        "No Smoking",
      ],
      images: [
        "/Presidential Suite/0-02-08-08f252a81492007d8cf2ebc4ceb28d23a210b4e3824f0ae2e58b81828231607f_2403ca9ac8ec4882.jpg",
        "/Presidential Suite/0-02-08-2532e14df588fc5f0bd5643b73e7bd446db50866c3d1ae4c5becd09aa3c62906_8f925e09d6b89693.jpg",
        "/Presidential Suite/0-02-08-2b84061741668c86e0b8c65a1975cac59275196c8f22378ee11d595052381a8d_4e8bc1ba0f96b665.jpg",
        "/Presidential Suite/0-02-08-2dd4191d63aebf5864e6bf90b7bd03d13d131448e3c61e51020e82be0f7927c8_404c9e823715c418.jpg",
        "/Presidential Suite/0-02-08-64a554af100489077fe234a5f2d8d19a9541b6b43c4d90f31306d9cf27b77ff1_460bc2630ffce89d.jpg",
        "/Presidential Suite/0-02-08-a193953f362c01670e799f3f0d41bcf494d4433f1677298c690439e3a36bdbd6_286066bea14e2508.jpg",
        "/Presidential Suite/0-02-08-b9380ae58069da6077982520ccda9d0a4adc750a9b67df3bc88cbe6c7d88e618_445d5f8a9d35109d.jpg",
      ],
    },
    {
      id: "4",
      name: "Standard Twin Room",
      description:
        "Ideal for friends or colleagues traveling together. Two comfortable single beds with modern amenities.",
      price: 160,
      capacity: 2,
      size: 30,
      amenities: [
        "Private bathroom",
        "Flat-screen TV",
        "Free WiFi",
        "No Smoking",
      ],
      images: [
        "/Standard Twin/0-02-08-0e6669c0afe14cf0e830063fa54cf13b47abf373b97628fbf0b697a7c14cbef6_1378a6d50542e0f6.jpg",
        "/Standard Twin/0-02-08-34f253b404ab28553dfef81f8e60683c9ca53479d81d9f57eb5d12260b14d76b_62274cd1d8280dc1.jpg",
        "/Standard Twin/0-02-08-64263fadfb60c788170b0de4368f511d77a0a17a53bbcc44dc91370cec5b71be_9d071b68f21e10ec.jpg",
        "/Standard Twin/0-02-08-93876d7f0d8bd2581754c3d6e449edbba46776afc462d5f3cbe33308d5a8ba8a_aac304967ac247ba.jpg",
        "/Standard Twin/0-02-08-a8b3ed4b1edb489009e3b53afcb65725de99367c749835b929ac4b67845769a7_501869e0fc7b679e.jpg",
        "/Standard Twin/0-02-08-c55a4c75c1648a472f61c10846bc6e81d2a20b0ea65116db86f74080c64c9d39_b75d9caf317d0adc.jpg",
      ],
    },
    {
      id: "5",
      name: "Deluxe Double Room",
      description:
        "Enhanced comfort with premium furnishings, upgraded amenities, and stunning views of the Mongolian landscape.",
      price: 240,
      capacity: 2,
      size: 36,
      amenities: [
        "Private bathroom",
        "Flat-screen TV",
        "Free WiFi",
        "No Smoking",
      ],
      images: [
        "/Deluxe double/0-02-08-2d397bb5e974ca0370b69d47d2cf5aaf59f0de83688285bba44ea0a388ea6670_3443da28a094ff61.jpg",
        "/Deluxe double/0-02-08-9963a9ea38be68fc0c962a268c4bc5e8dcd45437e7eac823175c32eeb32ef256_58f22f54010dad28.jpg",
        "/Deluxe double/0-02-08-b2aa58b67cf1c71121f698cb785dae7c6f6d379f276fa5ff2390c7335c9dc820_b112fc34c3ae5b24.jpg",
        "/Deluxe double/0-02-08-bdf802f92737489a49fcab8ada5b00a7403093bf9941bdd7e869a5059723190d_ea62a010c719a769.jpg",
        "/Deluxe double/0-02-08-d3b6de45b98509050063f364f89a341001dd26637d7ae61ea8a32d6fab70c072_eb6021acd544a617.jpg",
        "/Deluxe double/0-02-08-df1637632c06c15192b790a77c7ca356a5001a95b6ddf8fbb2c83c15ddbe1b29_d8fd9c6178140894.jpg",
        "/Deluxe double/0-02-08-ee78d17c8e1fea42fb0c764acb4db598512cccdb50568c3348e7dd357159cf6e_e2919673544e498c.jpg",
      ],
    },
    {
      id: "6",
      name: "Superior Twin Room",
      description:
        "Spacious twin room with enhanced amenities and elegant décor. Perfect for business travelers or friends.",
      price: 200,
      capacity: 2,
      size: 48,
      amenities: [
        "Private bathroom",
        "Flat-screen TV",
        "Free WiFi",
        "No Smoking",
      ],
      images: [
        "/Superior Twin/0-02-08-0965e7b83bf96b1da74e9451a2dc1f29377d700f0270b3b04a6609c22c91432d_e511cc2cb00ce8d8.jpg",
        "/Superior Twin/0-02-08-1455753670dbed3eeb9e2445796f6b836bc174fece377c7411b50425369ddb16_56ca8c7727fe2a1.jpg",
        "/Superior Twin/0-02-08-3afe3ae1fe657e6c7d88422ef5b757d3993b38f1aedcbd12c762408340e5373a_27a94e7f1ca687f6.jpg",
        "/Superior Twin/0-02-08-5bf0e0917bf3533abc27dddd6143eb9e9728b870a6c598cf536a2d8097045969_973b9c2491d43aef.jpg",
        "/Superior Twin/0-02-08-6b6d9901c317fbe829a2032b79f11af3cec95522d758981a370b8ecf7c689099_4101532d0b1dcaaf.jpg",
        "/Superior Twin/0-02-08-8126abd589fc44eaf3755db3861082a5322930f1f84612ace825bf9ed362b8a0_b15094360dd3a108.jpg",
        "/Superior Twin/0-02-08-83674e6336d28f021b51a46bf1a9e9b1dc66d73dd9cdf631dd593d5cad79e254_b5dbbbc2ef0c0c97.jpg",
        "/Superior Twin/0-02-08-9806a948cbc1eae597c9c62c6d97b8214491215b1aa5aa22af5c2f50229b46c0_c042eb9cf78d5ccc.jpg",
        "/Superior Twin/0-02-08-fb18a8c35bb54bbf7b95c0b0b95d295b058df3ed838184ed8737238bc1caebe7_9fb7a4bec6f6da88.jpg",
        "/Superior Twin/0-02-08-fd951b66fe78e4df2a483a4bdbef7060146176c4711765c5d9899250485a25c6_f34a72cdbdd6e50e.jpg",
      ],
    },
    {
      id: "7",
      name: "Deluxe Twin Room",
      description:
        "Elegant twin room with sophisticated design and premium amenities. Ideal for business travelers or friends seeking luxury.",
      price: 220,
      capacity: 2,
      size: 40,
      amenities: [
        "Private bathroom",
        "Flat-screen TV",
        "Free WiFi",
        "No Smoking",
      ],
      images: [
        "/Delxuxe Twin/0-02-08-0105398cdf0df233bacdeef4b455a01769d9c2e9d9034db734ea7c6fba0f8bba_e6cf4edac09c4be2.jpg",
        "/Delxuxe Twin/0-02-08-2af7bc9ee783736b711e83f0f6ee0cd17db491c4d1967867815709aea67d3e41_76542d1390e7d8a1.jpg",
        "/Delxuxe Twin/0-02-08-60e8c428bd1c366c5bdfa776073a19db2b84e37147210e2cf183e8e6c8930d0e_b578102b044c3a75.jpg",
        "/Delxuxe Twin/0-02-08-89f8dafcc98aa63a957b9f554573ad52fb32201705b2fae7cdabd302431403a3_80017556464079b7.jpg",
        "/Delxuxe Twin/0-02-08-ac5662205771e00ad39d3893bdbaf7bb99f35104e711304c1cbe664482f69840_9426bc6279395d74.jpg",
        "/Delxuxe Twin/0-02-08-d184cb8c158e50c379fbedd7a7fe36e32aad1a9ca1c12a6bbfc84d72fd5342bc_b41c43eb84e0058c.jpg",
      ],
    },
  ],
  title = "Luxury Hotel Rooms & Suites in Mongolia",
  subtitle = "Choose from our collection of elegantly appointed rooms and suites, each designed to provide the ultimate comfort and luxury experience at Khunnu Hotel",
  onBookRoomClick,
}: RoomShowcaseProps) => {
  return (
    <section className="py-8 sm:py-12 lg:py-16 px-4 bg-background min-h-[800px]">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">
            {title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
          {rooms.map((room) => (
            <RoomCard
              key={room.id}
              room={room}
              onBookRoomClick={onBookRoomClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ImageSlider = ({
  images,
  roomName,
}: {
  images: string[];
  roomName: string;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextImage();
    } else if (isRightSwipe) {
      prevImage();
    }
  };

  // Mouse drag functionality
  const onMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setTouchStart(e.clientX);
    setTouchEnd(null);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setTouchEnd(e.clientX);
  };

  const onMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);

    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextImage();
    } else if (isRightSwipe) {
      prevImage();
    }
  };

  const onMouseLeave = () => {
    setIsDragging(false);
  };

  return (
    <div className="relative">
      <AspectRatio ratio={16 / 10}>
        <img
          src={images[currentIndex]}
          alt={`${roomName} - Image ${currentIndex + 1}`}
          className="object-cover w-full h-full rounded-md cursor-grab active:cursor-grabbing select-none"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseLeave}
          draggable={false}
        />
      </AspectRatio>

      {images.length > 1 && (
        <>
          <Button
            variant="outline"
            size="icon"
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
            onClick={prevImage}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
            onClick={nextImage}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>

          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? "bg-white" : "bg-white/50"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const ModalImageGallery = ({
  images,
  roomName,
  initialIndex = 0,
  onClose,
}: {
  images: string[];
  roomName: string;
  initialIndex?: number;
  onClose: () => void;
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && images.length > 1) {
      nextImage();
    }
    if (isRightSwipe && images.length > 1) {
      prevImage();
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        prevImage();
      } else if (e.key === "ArrowRight") {
        nextImage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="flex flex-col h-full w-full">
      {/* Header with close button */}
      <div className="flex items-center justify-between w-full mb-2 sm:mb-4 flex-shrink-0">
        <div>
          <h3 className="text-base sm:text-lg font-semibold">Image Gallery</h3>
          <p className="text-xs sm:text-sm text-muted-foreground">
            {currentIndex + 1} of {images.length}
          </p>
        </div>
        <Button
          variant="outline"
          size="icon"
          onClick={onClose}
          className="h-8 w-8 sm:h-10 sm:w-10"
        >
          <X className="h-4 w-4" />
        </Button>
      </div>

      {/* Main image container - responsive and swipeable */}
      <div
        className="relative flex-1 min-h-0 mb-2 sm:mb-4 touch-pan-y"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div className="relative w-full h-full">
          <img
            src={images[currentIndex]}
            alt={`${roomName} - Image ${currentIndex + 1}`}
            className="object-contain w-full h-full max-h-[60vh] sm:max-h-[70vh] md:max-h-[75vh] lg:max-h-[80vh] rounded-lg select-none"
            draggable={false}
          />
        </div>

        {/* Navigation arrows - hidden on small screens, visible on larger screens */}
        {images.length > 1 && (
          <>
            <Button
              variant="outline"
              size="icon"
              className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white hidden sm:flex"
              onClick={prevImage}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white hidden sm:flex"
              onClick={nextImage}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </>
        )}

        {/* Swipe indicator for mobile */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 sm:hidden">
          <p className="text-xs text-white bg-black/50 px-2 py-1 rounded-full">
            Swipe to navigate
          </p>
        </div>
      </div>

      {/* Thumbnail strip - responsive sizing */}
      {images.length > 1 && (
        <div className="flex space-x-1 sm:space-x-2 overflow-x-auto pb-2 flex-shrink-0 justify-center">
          {images.map((image, index) => (
            <button
              key={index}
              className={`flex-shrink-0 w-12 h-9 sm:w-16 sm:h-12 rounded border-2 transition-all ${
                index === currentIndex
                  ? "border-primary"
                  : "border-border hover:border-primary/50"
              }`}
              onClick={() => setCurrentIndex(index)}
            >
              <img
                src={image}
                alt={`${roomName} thumbnail ${index + 1}`}
                className="w-full h-full object-cover rounded"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const ImageSliderWithFullscreen = ({
  images,
  roomName,
  onFullscreenClick,
}: {
  images: string[];
  roomName: string;
  onFullscreenClick: (index: number) => void;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextImage();
    } else if (isRightSwipe) {
      prevImage();
    }
  };

  // Mouse drag functionality
  const onMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setTouchStart(e.clientX);
    setTouchEnd(null);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setTouchEnd(e.clientX);
  };

  const onMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);

    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextImage();
    } else if (isRightSwipe) {
      prevImage();
    }
  };

  const onMouseLeave = () => {
    setIsDragging(false);
  };

  return (
    <div className="relative group">
      <AspectRatio ratio={16 / 10}>
        <img
          src={images[currentIndex]}
          alt={`${roomName} - Image ${currentIndex + 1}`}
          className="object-cover w-full h-full rounded-md cursor-grab active:cursor-grabbing select-none"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseLeave}
          draggable={false}
        />
      </AspectRatio>

      {/* Fullscreen button */}
      <Button
        variant="outline"
        size="icon"
        className="absolute top-2 right-2 bg-white/80 hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        onClick={() => onFullscreenClick(currentIndex)}
      >
        <Maximize2 className="h-4 w-4" />
      </Button>

      {images.length > 1 && (
        <>
          <Button
            variant="outline"
            size="icon"
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
            onClick={prevImage}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
            onClick={nextImage}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>

          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? "bg-white" : "bg-white/50"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const FullscreenImageViewer = ({
  images,
  roomName,
  isOpen,
  onClose,
  initialIndex = 0,
}: {
  images: string[];
  roomName: string;
  isOpen: boolean;
  onClose: () => void;
  initialIndex?: number;
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Reset index when opening with new initial index
  React.useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex, isOpen]);

  // Handle keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      switch (e.key) {
        case "Escape":
          onClose();
          break;
        case "ArrowLeft":
          prevImage();
          break;
        case "ArrowRight":
          nextImage();
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Prevent body scroll when fullscreen is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextImage();
    } else if (isRightSwipe) {
      prevImage();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
      {/* Close button */}
      <Button
        variant="outline"
        size="icon"
        className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 text-white border-white/20"
        onClick={onClose}
      >
        <X className="h-6 w-6" />
      </Button>

      {/* Image counter */}
      <div className="absolute top-4 left-4 z-10 bg-black/50 text-white px-3 py-1 rounded-md">
        {currentIndex + 1} / {images.length}
      </div>

      {/* Room name */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10 bg-black/50 text-white px-4 py-2 rounded-md">
        {roomName}
      </div>

      {/* Main image */}
      <div
        className="relative w-full h-full flex items-center justify-center p-4"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <img
          src={images[currentIndex]}
          alt={`${roomName} - Image ${currentIndex + 1}`}
          className="max-w-full max-h-full object-contain select-none"
          draggable={false}
        />
      </div>

      {/* Navigation buttons */}
      {images.length > 1 && (
        <>
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white border-white/20"
            onClick={prevImage}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white border-white/20"
            onClick={nextImage}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </>
      )}

      {/* Thumbnail strip */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 bg-black/50 p-2 rounded-lg max-w-[90vw] overflow-x-auto">
          {images.map((image, index) => (
            <button
              key={index}
              className={`flex-shrink-0 w-16 h-12 rounded border-2 transition-all ${
                index === currentIndex
                  ? "border-white"
                  : "border-white/30 hover:border-white/60"
              }`}
              onClick={() => setCurrentIndex(index)}
            >
              <img
                src={image}
                alt={`${roomName} thumbnail ${index + 1}`}
                className="w-full h-full object-cover rounded"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const RoomCard = ({
  room,
  onBookRoomClick,
}: {
  room: RoomProps;
  onBookRoomClick?: (roomId: string) => void;
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isGalleryMode, setIsGalleryMode] = useState(false);
  const [galleryInitialIndex, setGalleryInitialIndex] = useState(0);

  const openGallery = (index: number = 0) => {
    setGalleryInitialIndex(index);
    setIsGalleryMode(true);
  };

  const closeGallery = () => {
    setIsGalleryMode(false);
  };
  return (
    <Card className="overflow-hidden h-full flex flex-col bg-card group cursor-pointer hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
      <div className="relative overflow-hidden">
        <AspectRatio ratio={16 / 9}>
          <img
            src={room.images[0]}
            alt={room.name}
            className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
          />
        </AspectRatio>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Gallery button */}
        {/* <Button
          variant="outline"
          size="icon"
          className="absolute bottom-4 right-4 bg-white/80 hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          onClick={(e) => {
            e.stopPropagation();
            setIsModalOpen(true);
            setTimeout(() => openGallery(0), 100);
          }}
        >
          <Maximize2 className="h-4 w-4" />
        </Button> */}

        <Badge className="absolute top-4 left-4 bg-gradient-to-r from-amber-800 to-amber-900 text-white shadow-lg">
          {room.capacity} Guests
        </Badge>
        {room.featured && (
          <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
            Featured
          </Badge>
        )}
      </div>

      <CardHeader className="pb-3">
        <CardTitle className="text-lg sm:text-xl">{room.name}</CardTitle>
        <CardDescription className="flex items-center gap-2 sm:gap-4 text-sm">
          <span>{room.capacity} Guests</span>
          <span>•</span>
          <span>{room.size} m²</span>
        </CardDescription>
      </CardHeader>

      <CardContent className="flex-grow pb-3">
        <p className="text-muted-foreground mb-4 text-sm sm:text-base line-clamp-3">
          {room.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {room.amenities.slice(0, 3).map((amenity, index) => (
            <Badge key={index} variant="outline" className="bg-muted">
              {amenity}
            </Badge>
          ))}
          {room.amenities.length > 3 && (
            <Dialog>
              <DialogTrigger asChild>
                <Badge variant="outline" className="cursor-pointer bg-muted">
                  +{room.amenities.length - 3} more
                </Badge>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Room Amenities</DialogTitle>
                  <DialogDescription>
                    All amenities available in {room.name}
                  </DialogDescription>
                </DialogHeader>
                <div className="grid grid-cols-2 gap-2 mt-4">
                  {room.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </DialogContent>
            </Dialog>
          )}
        </div>
      </CardContent>

      <CardFooter className="flex flex-col items-stretch border-t pt-4">
        <div className="flex justify-between items-center gap-3">
          {/* <div className="font-semibold">
            <span className="text-2xl">${room.price}</span>
            <span className="text-muted-foreground text-sm"> / night</span>
          </div> */}
          <Button
            className="w-full bg-gradient-to-r from-amber-800 to-amber-900 hover:from-amber-900 hover:to-amber-950 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            onClick={() => onBookRoomClick?.(room.id)}
          >
            Book This Room
          </Button>
          <Dialog
            open={isModalOpen}
            onOpenChange={(open) => {
              setIsModalOpen(open);
              if (!open) {
                setIsGalleryMode(false);
              }
            }}
          >
            <DialogTrigger asChild>
              <Button variant="outline" size="sm" className="w-full py-5">
                View Details
              </Button>
            </DialogTrigger>
            {isGalleryMode ? (
              <DialogContent
                className={`${isGalleryMode ? "min-w-full max-h-full overflow-auto [&_button[data-dialog-close]]:hidden" : ""}`}
              >
                <ModalImageGallery
                  images={room.images}
                  roomName={room.name}
                  initialIndex={galleryInitialIndex}
                  onClose={closeGallery}
                />
              </DialogContent>
            ) : (
              <>
                <DialogContent
                  className={`${isGalleryMode ? "max-w-[95vw] md:max-w-[85vw] h-[90vh]" : "max-w-[90vw] md:max-w-[600px] max-h-[90vh]"} ${isGalleryMode ? "p-6" : "overflow-auto"}`}
                >
                  <DialogHeader>
                    <DialogTitle>{room.name}</DialogTitle>
                    <DialogDescription>
                      {room.capacity} Guests • {room.size} m²
                    </DialogDescription>
                  </DialogHeader>

                  <div className="mt-4">
                    <ImageSliderWithFullscreen
                      images={room.images}
                      roomName={room.name}
                      onFullscreenClick={openGallery}
                    />
                  </div>

                  <div className="mt-4">
                    <h4 className="font-semibold mb-2">Description</h4>
                    <p className="text-muted-foreground">{room.description}</p>
                  </div>

                  <Separator className="my-4" />

                  <div>
                    <h4 className="font-semibold mb-2">Amenities</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {room.amenities.map((amenity, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary"></div>
                          <span>{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 flex justify-between items-center">
                    {/* <div className="font-semibold">
                      <span className="text-2xl">${room.price}</span>
                      <span className="text-muted-foreground text-sm">
                        {" "}
                        / night
                      </span>
                    </div> */}
                    <Button
                      className="bg-gradient-to-r w-full from-amber-800 to-amber-900 hover:from-amber-900 hover:to-amber-950 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                      onClick={() => onBookRoomClick?.(room.id)}
                    >
                      Book This Room
                    </Button>
                  </div>
                </DialogContent>
              </>
            )}
          </Dialog>
        </div>
      </CardFooter>
    </Card>
  );
};

export default RoomShowcase;
