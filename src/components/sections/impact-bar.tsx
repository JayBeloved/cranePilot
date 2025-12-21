import { Briefcase, FileText, Calendar } from "lucide-react";

const metrics = [
    { icon: FileText, value: "50+", label: "Research Papers & Technical Analyses Delivered" },
    { icon: Calendar, value: "1 Year", label: "of Strategic Excellence" },
    { icon: Briefcase, value: "10+", label: "Active Business Year Clients" },
];

export function ImpactBar() {
  return (
    <section className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {metrics.map((metric, index) => (
            <div key={index} className="flex flex-col items-center">
              <metric.icon className="w-10 h-10 mb-2 text-accent" />
              <div className="text-4xl font-bold">{metric.value}</div>
              <p className="text-sm text-secondary-foreground/80 mt-1">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
