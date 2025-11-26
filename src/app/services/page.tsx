import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Zap, LineChart, BookCheck } from "lucide-react";

const services = [
  {
    title: "Research Assistance",
    description: "Comprehensive support for undergraduate and postgraduate research projects, from topic selection to final submission.",
    icon: BookCheck,
    features: [
      "Undergraduate Projects",
      "MSc & Postgraduate Theses",
      "Topic Formulation & Proposal Writing",
    ],
  },
  {
    title: "Data Analysis",
    description: "Expert data analysis services to uncover insights, validate hypotheses, and inform decision-making for academic and business clients.",
    icon: LineChart,
    features: [
      "Quantitative & Qualitative Analysis",
      "Statistical Modeling",
      "Data Visualization & Reporting",
    ],
  },
  {
    title: "Reviews and Corrections",
    description: "Thorough proofreading, editing, and correction services to ensure your research papers are polished and ready for publication.",
    icon: BookCheck,
    features: [
        "Grammar & Plagiarism Checks",
        "Methodology Review",
        "Formatting & Referencing",
    ]
  },
  {
    title: "Training and Courses",
    description: "Practical, hands-on training sessions and courses designed to build your skills in data analysis and research methodology.",
    icon: Zap,
    features: [
      "Customized Corporate Training",
      "Workshops for Students",
      "Online Courses on Research Tools",
    ],
  },
   {
    title: "Seminar Papers",
    description: "Assistance with developing and writing high-impact seminar papers for academic and professional presentation.",
    icon: BookCheck,
    features: [
        "Content Development",
        "Presentation Design",
        "Literature Synthesis",
    ]
  }
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-16 md:px-6">
        <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Our Services</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                We provide tailored data analysis, research support, and training to help you achieve your goals with clarity and impact.
            </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title} className="flex flex-col h-full border-primary/20 hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <service.icon className="w-10 h-10 text-accent" />
                  <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                </div>
                <CardDescription className="pt-2">{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2">
                    {service.features.map(feature => (
                        <li key={feature} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-500 mt-1 shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                        </li>
                    ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}