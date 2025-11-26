import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { GuidesSection } from "@/components/sections/guides-section";
import { PromptsSection } from "@/components/sections/prompts-section";
import { GemsSection } from "@/components/sections/gems-section";
import { NewsletterSection } from "@/components/sections/newsletter-section";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <GuidesSection />
        <PromptsSection />
        <GemsSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
}
