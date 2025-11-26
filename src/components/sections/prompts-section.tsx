"use client";

import React, { useState } from "react";
import { Copy, Check, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { prompts } from "@/lib/data";
import type { Prompt, PromptCategory } from "@/lib/types";
import { cn } from "@/lib/utils";

const categories: ("All" | PromptCategory)[] = ["All", "Research Design", "Literature Review", "Data Analysis", "Writing", "SME Research"];

function PromptCard({ prompt }: { prompt: Prompt }) {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt.promptText);
    setCopied(true);
    toast({
      title: "Copied to clipboard!",
      description: `Prompt "${prompt.title}" copied.`,
    });
    setTimeout(() => setCopied(false), 2000);
  };
  
  const difficultyBadgeClass = {
    'Beginner': 'bg-green-100 text-green-800 border-green-200',
    'Intermediate': 'bg-blue-100 text-blue-800 border-blue-200',
    'Advanced': 'bg-yellow-100 text-yellow-800 border-yellow-200',
  }

  return (
    <Card className="flex flex-col rounded-lg border-secondary/20 bg-gradient-to-br from-background to-secondary/5 transition-all duration-300 hover:border-primary hover:translate-x-1">
      <CardHeader className="p-5">
        <div className="flex justify-between items-start gap-2">
            <CardTitle className="text-lg font-bold text-foreground transition-colors hover:text-accent">
              <a href="#">{prompt.title}</a>
            </CardTitle>
            <Badge className={cn("text-xs w-fit", difficultyBadgeClass[prompt.difficulty])}>
                {prompt.difficulty}
            </Badge>
        </div>
        <CardDescription className="text-sm text-muted-foreground pt-1">
          {prompt.useCase}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow p-5 pt-0">
         <Badge variant="outline" className="text-xs uppercase tracking-wider bg-transparent border-secondary/50 text-secondary-foreground/100">
          {prompt.category}
        </Badge>
      </CardContent>
      <CardFooter className="p-5 pt-0 grid grid-cols-2 gap-2">
        <Button onClick={handleCopy} className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
          {copied ? <Check className="w-4 h-4 mr-2" /> : <Copy className="w-4 h-4 mr-2" />}
          {copied ? 'Copied' : 'Copy'}
        </Button>
        <Button variant="outline" asChild className="w-full border-primary/80 text-primary hover:bg-primary hover:text-primary-foreground hover:border-primary">
          <a href="https://gemini.google.com/" target="_blank" rel="noopener noreferrer">
            <ExternalLink className="w-4 h-4 mr-2" />
            Use
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}


export function PromptsSection() {
  const [filter, setFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPrompts = prompts
    .filter(p => filter === "All" || p.category === filter)
    .filter(p => p.title.toLowerCase().includes(searchTerm.toLowerCase()) || p.useCase.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <section id="prompts" className="w-full bg-background/70 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
           <div className="inline-block">
            <div className="w-10 h-1 bg-accent mb-2 mx-auto"></div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">AI Research Prompts</h2>
          </div>
          <p className="mt-4 text-lg text-muted-foreground">
            Ready-to-use prompts for Gemini — copy, paste, transform
          </p>
        </div>
        
        <div className="sticky top-[70px] z-10 bg-background/80 backdrop-blur-md py-4 my-8 rounded-lg">
            <div className="flex flex-col sm:flex-row gap-4">
                <Input 
                    placeholder="Filter by keyword..." 
                    className="flex-grow"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <div className="flex gap-2 mt-4 flex-wrap justify-center">
                {categories.map(cat => (
                    <Button 
                        key={cat}
                        variant={filter === cat ? "default" : "outline"}
                        onClick={() => setFilter(cat)}
                        className={cn("rounded-full transition-all text-sm", filter === cat ? "bg-accent text-accent-foreground" : "text-foreground/50 border-border")}
                    >
                        {cat}
                    </Button>
                ))}
            </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredPrompts.map((prompt) => (
            <PromptCard key={prompt.id} prompt={prompt} />
          ))}
        </div>
      </div>
    </section>
  );
}
