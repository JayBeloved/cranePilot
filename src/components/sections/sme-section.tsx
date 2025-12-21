import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export function SmeSection() {
    return (
        <section className="bg-secondary text-secondary-foreground py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Data-Driven Profitability for SMEs</h2>
                        <p className="mt-4 text-lg text-secondary-foreground/80">
                            We move beyond reporting into Implementation. Leverage our 'No-Leak' Operational Systems to optimize business profitability and bridge the gap between your Finance and IT departments.
                        </p>
                        <Button asChild size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/80">
                            <Link href="/contact">Request a Strategic Growth Audit</Link>
                        </Button>
                    </div>
                    <div className="relative h-80 rounded-lg overflow-hidden">
                        <Image src="https://picsum.photos/seed/sme/800/600" alt="SME Growth" layout="fill" objectFit="cover" data-ai-hint="business meeting" />
                    </div>
                </div>
            </div>
        </section>
    );
}
