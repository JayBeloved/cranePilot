import Link from "next/link";
import { Linkedin, Twitter, MessageSquare } from "lucide-react";
import { CraneLogo } from "@/components/logo";

const socialLinks = [
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "Medium", icon: MessageSquare, href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Column 1: Branding */}
          <div className="space-y-4">
            <CraneLogo />
            <p className="text-sm text-secondary-foreground/80">
              Research Simplified. Impact Scaled.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-secondary-foreground/70 transition-colors hover:text-primary"
                  aria-label={social.name}
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:justify-self-center">
            <h3 className="font-semibold tracking-wider text-secondary-foreground">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#guides" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">Guides</a></li>
              <li><a href="#prompts" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">Prompts</a></li>
              <li><a href="#gems" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">Gemini Gems</a></li>
              <li><a href="#" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">Webinar</a></li>
            </ul>
          </div>
          
          {/* Column 3: More */}
          <div className="md:justify-self-end">
            <h3 className="font-semibold tracking-wider text-secondary-foreground">More</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#newsletter" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">Newsletter</a></li>
              <li><a href="mailto:contact@crane-consults.com" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">Contact</a></li>
              <li><Link href="#" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-secondary-foreground/20 pt-8 text-center text-sm text-secondary-foreground/70">
          <p>© {new Date().getFullYear()} CRANE JLA Consults. All rights reserved.</p>
          <p className="mt-1">Made with intent for African impact.</p>
        </div>
      </div>
    </footer>
  );
}
