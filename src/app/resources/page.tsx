import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BookOpen, FileText, Video, MessageSquare } from "lucide-react";

const resourceCategories = [
  {
    title: "Guides",
    description: "In-depth guides to master research and data analysis.",
    href: "/resources/guides",
    icon: BookOpen,
  },
  {
    title: "Prompts",
    description: "AI prompts to accelerate your research workflow.",
    href: "/resources/prompts",
    icon: MessageSquare,
  },
    {
    title: "Documents",
    description: "Templates and documents for your research.",
    href: "/resources/documents",
    icon: FileText,
  },
  {
    title: "Videos",
    description: "Watch tutorials and webinars on research topics.",
    href: "/resources/videos",
    icon: Video,
  },
];

export default function ResourcesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 md:px-6">
        <h1 className="text-4xl font-bold">Resources</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Explore our collection of guides, prompts, and more.
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
          {resourceCategories.map((category) => (
            <Link key={category.title} href={category.href} className="group">
              <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <category.icon className="w-8 h-8 text-primary" />
                    <CardTitle>{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>{category.description}</CardDescription>
                  <div className="flex items-center justify-end text-primary group-hover:underline mt-4">
                    <span>Explore</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
