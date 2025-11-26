import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { GuidesSection } from "@/components/sections/guides-section";

export default function GuidesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8 md:px-6">
            <h1 className="text-4xl font-bold">Guides</h1>
            <p className="text-lg text-muted-foreground mt-2">
                In-depth guides to master research and data analysis.
            </p>
        </div>
        <GuidesSection />
      </main>
      <Footer />
    </div>
  );
}
