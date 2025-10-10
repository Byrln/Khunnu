import { AboutPage } from "@/components/AboutPage";
import { HunnuNavbar } from "@/components/HunnuNavbar";

export default function About() {
  return (
    <main className="min-h-screen bg-background">
      <HunnuNavbar />
      <section className="py-6 sm:py-8 md:py-12 lg:py-16 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12">
        <AboutPage />
      </section>
    </main>
  );
}

export const metadata = {
  title: "About Us - Khunnu Hotel",
  description:
    "Learn about Khunnu Hotel's heritage, excellence, and commitment to providing exceptional hospitality in Ulaanbaatar, Mongolia.",
};
