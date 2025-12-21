
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from 'next/image';
import { PlayCircle } from 'lucide-react';

const videos: any[] = [];

const categories = ["All", "Research Writing", "Data Analysis", "AI Tools"];

export default function WebinarsPage() {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    const [filter, setFilter] = useState("All");

    useEffect(() => {
        const targetDate = new Date('2024-12-21T00:00:00');

        const interval = setInterval(() => {
            const now = new Date();
            const difference = targetDate.getTime() - now.getTime();

            if (difference > 0) {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
                const minutes = Math.floor((difference / 1000 / 60) % 60);
                const seconds = Math.floor((difference / 1000) % 60);
                setTimeLeft({ days, hours, minutes, seconds });
            } else {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                clearInterval(interval);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const filteredVideos = videos.filter(video => filter === 'All' || video.category === filter);

    return (
        <div className="flex flex-col min-h-screen bg-background">
            <Header />
            <main className="flex-grow container mx-auto px-4 py-16 md:px-6">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Webinars & Training Vault</h1>
                    <p className="mt-4 text-lg text-muted-foreground">Level up your skills with expert-led trainings.</p>
                </div>

                {/* Upcoming Training */}
                <Card className="mb-16 bg-gradient-to-r from-primary/90 to-primary text-primary-foreground shadow-2xl overflow-hidden">
                    <div className="grid md:grid-cols-2 items-center">
                        <div className="p-8 md:p-12">
                            <Badge variant="destructive" className="mb-4">UPCOMING LIVE TRAINING</Badge>
                            <h2 className="text-3xl font-bold mb-4">Effective Project Writing : Research 101</h2>
                            <p className="mb-6 text-primary-foreground/80">
                                Join us on December 21st for a hands-on workshop on transforming complex data into compelling narratives that drive action.
                            </p>
                            <div className="flex gap-4 items-center mb-8">
                                {Object.entries(timeLeft).map(([unit, value]) => (
                                    <div key={unit} className="text-center p-3 bg-white/10 rounded-lg w-20">
                                        <div className="text-3xl font-bold">{String(value).padStart(2, '0')}</div>
                                        <div className="text-xs uppercase tracking-wider">{unit}</div>
                                    </div>
                                ))}
                            </div>
                            <Button size="lg" asChild className="bg-accent text-accent-foreground hover:bg-accent/80 transition-transform hover:scale-105">
                                <Link href="https://meet.google.com/tht-ubmc-sdp" target="_blank">Register Now</Link>
                            </Button>
                        </div>
                        <div className="relative h-64 md:h-full">
                           <Image src="https://picsum.photos/seed/webinar/800/600" alt="Webinar" layout="fill" objectFit="cover" data-ai-hint="data analysis" />
                        </div>
                    </div>
                </Card>

                {/* The Vault */}
                <div>
                    <h2 className="text-3xl font-bold text-center mb-4">The Vault</h2>
                    <p className="text-center text-muted-foreground mb-8">Access on-demand recordings of past webinars.</p>
                    
                    <div className="flex justify-center gap-2 mb-8 flex-wrap">
                        {categories.map(category => (
                            <Button 
                                key={category} 
                                variant={filter === category ? "default" : "outline"}
                                onClick={() => setFilter(category)}
                            >
                                {category}
                            </Button>
                        ))}
                    </div>

                    {filteredVideos.length > 0 ? (
                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {filteredVideos.map(video => (
                                <Card key={video.id} className="group overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                                    <CardHeader className="p-0 relative">
                                        <Image src={`https://picsum.photos/seed/${video.thumbnail}/600/400`} alt={video.title} width={600} height={400} className="w-full h-auto" data-ai-hint="research analysis" />
                                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                            <PlayCircle className="w-16 h-16 text-white"/>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="p-6">
                                        <Badge variant="secondary" className="mb-2">{video.category}</Badge>
                                        <h3 className="font-bold text-lg">{video.title}</h3>
                                        <Button variant="link" className="p-0 mt-4">Watch Now</Button>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-16 text-muted-foreground">
                            <p>No recordings available yet. Check back soon!</p>
                        </div>
                    )}
                </div>
            </main>
            <Footer />
        </div>
    );
}
