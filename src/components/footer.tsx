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
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Column 1: Branding */}
          <div className="space-y-4">
            <CraneLogo />
            <p className="text-sm text-primary-foreground/80">
              Research Simplified. Impact Scaled.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-primary-foreground/70 transition-colors hover:text-secondary"
                  aria-label={social.name}
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:justify-self-center">
            <h3 className="font-semibold tracking-wider text-primary-foreground">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/resources/guides" className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors">Guides</Link></li>
              <li><Link href="/resources/prompts" className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors">Prompts</Link></li>
              <li><Link href="/resources/documents" className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors">Documents</Link></li>
              <li><Link href="/resources/videos" className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors">Videos</Link></li>
            </ul>
          </div>
          
          {/* Column 3: More */}
          <div className="md:justify-self-end">
            <h3 className="font-semibold tracking-wider text-primary-foreground">More</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors">Webinar</a></li>
              <li><a href="mailto:contact@crane-consults.com" className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors">Contact</a></li>
              <li><Link href="#" className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/70">
          <p>© {new Date().getFullYear()} CRANE JLA Consults. All rights reserved.</p>
          <p className="mt-1">Made with intent for African impact.</p>
        </div>
      </div>
    </footer>
  );
}
