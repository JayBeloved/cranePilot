import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PromptsSection } from "@/components/sections/prompts-section";

export default function PromptsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8 md:px-6">
            <h1 className="text-4xl font-bold">AI Prompts</h1>
            <p className="text-lg text-muted-foreground mt-2">
                Copy, paste, and accelerate your research with AI.
            </p>
        </div>
        <PromptsSection />
      </main>
      <Footer />
    </div>
  );
}
