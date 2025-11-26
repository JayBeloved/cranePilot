import { BookOpen } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { guides } from "@/lib/data";
import Link from "next/link";

export function GuidesSection() {
  return (
    <section id="guides" className="w-full bg-background py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-block">
            <div className="w-10 h-1 bg-accent mb-2 mx-auto"></div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Featured Guides</h2>
          </div>
          <p className="mt-4 text-lg text-muted-foreground">
            Practical frameworks and methodologies for research success
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:gap-8">
          {guides.map((guide) => (
            <Card key={guide.id} className="flex flex-col rounded-xl border border-border/15 bg-card shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <CardHeader className="p-6">
                <Badge variant="secondary" className="w-fit bg-secondary/15 text-secondary-foreground border-none uppercase text-xs font-semibold tracking-wider">
                  {guide.category}
                </Badge>
                <CardTitle className="mt-4 text-2xl font-bold text-foreground transition-colors hover:text-accent">
                  <Link href={`/resources/guides/${guide.slug}`}>{guide.title}</Link>
                </CardTitle>
                <CardDescription className="mt-2 text-base text-muted-foreground">
                  {guide.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow p-6 pt-0">
                <h4 className="font-semibold mb-2">Key Takeaways:</h4>
                <ul className="space-y-2 text-sm text-muted-foreground list-disc pl-5">
                  {guide.keyTakeaways.slice(0,3).map((takeaway) => (
                    <li key={takeaway}>{takeaway}</li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="flex flex-col items-start gap-4 p-6 pt-0">
                <div className="text-sm text-muted-foreground flex items-center gap-4">
                  <span className="flex items-center gap-2"><BookOpen className="w-4 h-4" /> {guide.readingTime} min read</span>
                  <span>|</span>
                  <span>By {guide.author}</span>
                  <span>|</span>
                  <span>{guide.datePublished}</span>
                </div>
                 <Button asChild variant="outline" className="mt-4 border-accent text-accent hover:bg-accent hover:text-accent-foreground hover:border-accent">
                  <Link href={`/resources/guides/${guide.slug}`}>Read Full Guide</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
