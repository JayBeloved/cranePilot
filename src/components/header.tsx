
"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CraneLogo } from "@/components/logo";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

const resourcesLinks = [
  { name: "All Resources", href: "/resources" },
  { name: "Guides", href: "/resources/guides" },
  { name: "Prompts", href: "/resources/prompts" },
  { name: "Documents", href: "/resources/documents" },
  { name: "Videos", href: "/resources/videos" },
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
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-foreground hover:text-accent transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-accent transition-colors">
              Resources <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {resourcesLinks.map((link) => (
                <DropdownMenuItem key={link.name} asChild>
                  <Link href={link.href}>{link.name}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <Link
              href="/webinars"
              className="text-sm font-medium text-foreground hover:text-accent transition-colors"
            >
              Webinars & Trainings
          </Link>
        </nav>

        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-background/95 backdrop-blur-sm">
             <SheetTitle className="sr-only">Mobile Navigation Menu</SheetTitle>
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4 border-b">
                   <Link href="/" onClick={handleLinkClick}>
                     <CraneLogo />
                   </Link>
                </div>
                <nav className="flex flex-col gap-4 p-4 mt-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={handleLinkClick}
                      className="text-lg font-medium text-foreground hover:text-accent transition-colors"
                    >
                      {link.name}
                    </Link>
                  ))}
                   <Link
                      href="/webinars"
                      onClick={handleLinkClick}
                      className="text-lg font-medium text-foreground hover:text-accent transition-colors"
                    >
                      Webinars & Trainings
                    </Link>
                  <div className="text-lg font-medium text-foreground">Resources</div>
                  <div className="flex flex-col gap-2 pl-4">
                    {resourcesLinks.map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        onClick={handleLinkClick}
                        className="text-base font-medium text-muted-foreground hover:text-accent transition-colors"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

