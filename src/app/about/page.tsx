import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CheckCircle } from "lucide-react";

const leadership = [
    { name: "John J. Lawal", role: "CEO" },
    { name: "Adeolu P. Otegbolade", role: "COO" },
    { name: "Laura C. Njoku", role: "CRO" },
];

const corePillars = [
    {
        title: "Educational & Thought Leadership",
        points: [
            "Publish research guides and best practices on data analysis and research writing",
            "Create webinars and workshops for students, professionals, and SMEs",
            "Develop tips, frameworks, and resources for aspiring researchers",
        ]
    },
    {
        title: "Consulting & Implementation Services",
        points: [
            "Help organizations apply data-driven insights to decision-making",
            "Work with SMEs on profitability, productivity, and digital transformation",
            "Provide tailored data analysis solutions for finance, education, and business sectors",
        ]
    },
    {
        title: "Community Building & Mentorship",
        points: [
            "Build an engaged community of researchers, analysts, and data enthusiasts",
            "Offer mentorship and guidance on research methodologies and career development",
            "Create spaces for knowledge sharing, collaboration, and peer learning",
        ]
    },
    {
        title: "Tool & Resource Development",
        points: [
            "Curate and recommend AI tools, platforms, and software for research",
            "Develop frameworks and templates for research projects",
            "Create dashboards and visual guides for data storytelling",
        ]
    }
]

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-16 md:px-6">
        <div className="space-y-12">
            {/* Mission & Vision */}
            <div className="text-center">
                <h1 className="text-4xl font-bold tracking-tight md:text-5xl">About Us</h1>
                <p className="mt-4 text-lg text-muted-foreground">
                    Bridge the gap between research and implementation in data analysis.
                </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <Card className="bg-secondary/10 border-secondary/20">
                    <CardHeader>
                        <CardTitle className="text-2xl text-secondary">Our Mission</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">
                            To bridge the gap between research and implementation in data analysis. We foster a community of innovative thinkers, provide reliable insights, and adapt to the ever-changing landscape of data-driven decision-making.
                        </p>
                    </CardContent>
                </Card>
                 <Card className="bg-accent/10 border-accent/20">
                    <CardHeader>
                        <CardTitle className="text-2xl text-accent">Our Vision</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">
                            To become a leading force in data analysis, research, and training, known for our strong community and impactful contributions. We aim to create a world where data-driven insights are accessible, understood, and effectively implemented across industries and societies.
                        </p>
                    </CardContent>
                </Card>
            </div>

            {/* Core Pillars */}
            <div>
                <h2 className="text-3xl font-bold text-center mb-8">Our Core Pillars</h2>
                <div className="grid gap-8 md:grid-cols-2">
                    {corePillars.map(pillar => (
                        <Card key={pillar.title}>
                            <CardHeader>
                                <CardTitle>{pillar.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2">
                                    {pillar.points.map(point => (
                                        <li key={point} className="flex items-start gap-2">
                                            <CheckCircle className="w-5 h-5 text-accent mt-1 shrink-0" />
                                            <span className="text-muted-foreground">{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

            {/* Leadership */}
            <div>
                 <h2 className="text-3xl font-bold text-center mb-8">Our Leadership</h2>
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    {leadership.map(person => (
                        <div key={person.name} className="flex flex-col items-center">
                            <Avatar className="w-24 h-24 mb-4">
                                <AvatarImage src={`https://picsum.photos/seed/${person.name.split(' ')[0]}/200`} data-ai-hint="professional headshot" />
                                <AvatarFallback>{person.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                            </Avatar>
                            <h3 className="font-bold text-lg">{person.name}</h3>
                            <p className="text-accent font-semibold">{person.role}</p>
                        </div>
                    ))}
                 </div>
            </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}