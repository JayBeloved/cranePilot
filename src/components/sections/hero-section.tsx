import { Button } from "@/components/ui/button";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-background">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-primary/10"></div>
      <div className="container relative mx-auto flex min-h-[calc(100vh-70px)] flex-col items-center justify-center px-4 py-20 text-center md:px-6">
        
        <div className="animate-fade-in" style={{ animationDelay: '100ms' }}>
            {/* The SVG Logo is in the header, here we can just have text */}
        </div>

        <div className="max-w-4xl space-y-6">
          <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="block animate-slide-up-fade" style={{ animationDelay: '300ms' }}>Research Simplified.</span>
            <span className="block animate-slide-up-fade" style={{ animationDelay: '500ms' }}>
              Impact <span className="text-accent">Scaled</span>.
            </span>
          </h1>
          <p className="mx-auto max-w-[700px] text-lg text-foreground/70 md:text-xl animate-slide-up-fade" style={{ animationDelay: '700ms' }}>
            The Sidonian Edge in Research and Data. We bridge the gap between technical data intelligence and financial growth for African students, researchers, and SMEs.
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row animate-slide-up-fade" style={{ animationDelay: '900ms' }}>
          <Link href="/resources/guides">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 transition-transform hover:-translate-y-1">
              Explore Guides
            </Button>
          </Link>
          <Link href="/services">
            <Button size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground hover:border-secondary">
              Our Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
