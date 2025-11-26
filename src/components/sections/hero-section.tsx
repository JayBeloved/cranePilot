import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-background">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-secondary/10"></div>
      <div className="container relative mx-auto flex min-h-[calc(100vh-70px)] flex-col items-center justify-center px-4 py-20 text-center md:px-6">
        
        <div className="animate-fade-in" style={{ animationDelay: '100ms' }}>
            {/* The SVG Logo is in the header, here we can just have text */}
        </div>

        <div className="max-w-4xl space-y-6">
          <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="block animate-slide-up-fade" style={{ animationDelay: '300ms' }}>Research Simplified.</span>
            <span className="block animate-slide-up-fade" style={{ animationDelay: '500ms' }}>
              Impact <span className="text-primary">Scaled</span>.
            </span>
          </h1>
          <p className="mx-auto max-w-[700px] text-lg text-foreground/70 md:text-xl animate-slide-up-fade" style={{ animationDelay: '700ms' }}>
            Data-driven frameworks for African entrepreneurs and researchers
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row animate-slide-up-fade" style={{ animationDelay: '900ms' }}>
          <a href="#guides">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 transition-transform hover:-translate-y-1">
              Explore Guides
            </Button>
          </a>
          <a href="#prompts">
            <Button size="lg" variant="outline" className="border-secondary text-secondary hover:bg-accent hover:text-accent-foreground hover:border-accent">
              Browse Prompts
            </Button>
          </a>
        </div>
        <a href="#" className="mt-6 text-sm text-accent hover:text-primary hover:underline animate-slide-up-fade" style={{ animationDelay: '1100ms' }}>
          Join First Webinar
        </a>
      </div>
    </section>
  );
}
