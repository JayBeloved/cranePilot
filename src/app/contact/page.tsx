import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-16 md:px-6 flex items-center justify-center">
        <div className="w-full max-w-2xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Get in Touch</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              We'd love to hear from you. Reach out with questions or for a consultation.
            </p>
          </div>
          
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-center">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="flex items-center gap-4">
                    <Mail className="w-8 h-8 text-accent" />
                    <div>
                        <h3 className="font-semibold">Email</h3>
                        <a href="mailto:contact.craneconsults@gmail.com" className="text-muted-foreground hover:text-accent">
                            contact.craneconsults@gmail.com
                        </a>
                    </div>
                </div>
                 <div className="flex items-center gap-4">
                    <Phone className="w-8 h-8 text-accent" />
                    <div>
                        <h3 className="font-semibold">Phone</h3>
                        <a href="tel:09167690849" className="text-muted-foreground hover:text-accent">
                            09167690849
                        </a>
                    </div>
                </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}