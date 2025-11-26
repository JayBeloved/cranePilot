"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { CraneLogo } from "@/components/logo";

const navLinks = [
  { name: "Guides", href: "#guides" },
  { name: "Prompts", href: "#prompts" },
  { name: "Gemini Gems", href: "#gems" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-sm border-b border-border/50 shadow-md"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex h-[70px] items-center justify-between px-4 md:px-6">
        <Link href="/" aria-label="Home">
          <CraneLogo className="h-[40px]" />
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
            Join Webinar
          </Button>
        </div>

        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-background/95 backdrop-blur-sm">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4 border-b">
                   <Link href="/" onClick={handleLinkClick}>
                     <CraneLogo />
                   </Link>
                </div>
                <nav className="flex flex-col gap-4 p-4 mt-4">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={handleLinkClick}
                      className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  ))}
                </nav>
                <div className="mt-auto p-4">
                  <Button variant="outline" className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                    Join Webinar
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
