import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

const paths = [
    {
        title: "Accelerate Your Degree",
        audience: "Undergraduate",
        description: "Master the fundamentals of research and set yourself up for academic success.",
        features: [
            "Research Writing Fundamentals",
            "Structural Guides",
            "Literature Review Frameworks",
        ],
        cta: {
            text: "Explore Student Guides",
            href: "/resources/guides"
        }
    },
    {
        title: "Master Your Impact",
        audience: "Postgraduate/PhD",
        description: "Elevate your research with advanced techniques and frameworks for originality and impact.",
        features: [
            "Advanced Data Analysis (Python/SQL/R)",
            "Methodology Design",
            "Originality Audits",
        ],
        cta: {
            text: "View Advanced Frameworks",
            href: "/resources/guides"
        }
    }
];

export function PathsSection() {
    return (
        <section className="bg-background py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Select Your Mastery Path</h2>
                    <p className="mt-4 text-lg text-muted-foreground">Tailored resources for every stage of your research journey.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {paths.map(path => (
                        <Card key={path.title} className="flex flex-col border-accent/20 hover:border-accent hover:shadow-2xl transition-all duration-300">
                            <CardHeader>
                                <span className="font-semibold text-accent uppercase tracking-widest">{path.audience}</span>
                                <CardTitle className="text-2xl pt-2">{path.title}</CardTitle>
                                <CardDescription>{path.description}</CardDescription>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <ul className="space-y-3">
                                    {path.features.map(feature => (
                                        <li key={feature} className="flex items-center gap-3">
                                            <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                                            <span className="text-muted-foreground">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                            <div className="p-6 pt-0">
                                <Button asChild size="lg" className="w-full bg-primary hover:bg-primary/90">
                                    <Link href={path.cta.href}>{path.cta.text}</Link>
                                </Button>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
