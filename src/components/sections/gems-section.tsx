"use client";

import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { gems } from "@/lib/data";
import { cn } from "@/lib/utils";

export function GemsSection() {
    
  const gemTypeClasses = {
    'Analyzer': 'bg-blue-100 text-blue-800',
    'Generator': 'bg-yellow-100 text-yellow-800',
    'Outliner': 'bg-gray-100 text-gray-800',
    'Reviewer': 'bg-indigo-100 text-indigo-800',
  }

  return (
    <section id="gems" className="w-full bg-background py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
           <div className="inline-block">
            <div className="w-10 h-1 bg-accent mb-2 mx-auto"></div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Gemini Gems for Research</h2>
          </div>
          <p className="mt-4 text-lg text-muted-foreground">
            Pre-configured research tools powered by Gemini AI
          </p>
          <Badge variant="outline" className="mt-4 text-xs uppercase tracking-wider bg-transparent border-accent/50 text-accent">
            Powered by Superior Intelligence Frameworks
          </Badge>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {gems.map((gem) => (
            <Card key={gem.id} className="flex flex-col rounded-xl border-2 border-primary/30 bg-gradient-to-br from-background to-secondary/10 shadow-lg">
              <CardHeader className="p-6">
                 <div className="flex justify-between items-center">
                    <Badge className={cn("w-fit uppercase text-xs tracking-wider border-none text-black", gemTypeClasses[gem.type])}>{gem.type}</Badge>
                    {gem.tier && <Badge variant="destructive" className="text-xs">{gem.tier}</Badge>}
                 </div>
                <CardTitle className="mt-4 text-xl font-bold text-foreground transition-colors hover:text-accent">
                  <a href={gem.geminiLink} target="_blank" rel="noopener noreferrer">
                    {gem.title}
                  </a>
                </CardTitle>
                <CardDescription className="mt-2 text-base text-muted-foreground">
                  {gem.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow p-6 pt-0">
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button className="w-full transition-transform hover:scale-105 bg-accent text-accent-foreground hover:bg-accent/90">
                      Open in Gemini <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Coming Soon!</AlertDialogTitle>
                      <AlertDialogDescription>
                        This feature is currently under development. Please check back later.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogAction>OK</AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
