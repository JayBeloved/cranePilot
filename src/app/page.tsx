import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { ImpactBar } from "@/components/sections/impact-bar";
import { PathsSection } from "@/components/sections/paths-section";
import { SmeSection } from "@/components/sections/sme-section";
import { GuidesSection } from "@/components/sections/guides-section";
import { PromptsSection } from "@/components/sections/prompts-section";
import { GemsSection } from "@/components/sections/gems-section";


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ImpactBar />
        <PathsSection />
        <SmeSection />
        <GuidesSection />
        <PromptsSection />
        <GemsSection />
      </main>
      <Footer />
    </div>
  );
}
