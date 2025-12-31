import { FileText, Search, Clock, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: FileText,
    title: "Document Upload",
    description: "Submit your passport and required documents securely through our platform.",
  },
  {
    icon: Search,
    title: "Verification",
    description: "Our team verifies all documents within 24-48 hours for accuracy.",
  },
  {
    icon: Clock,
    title: "Processing",
    description: "We submit your application to Saudi authorities and track progress.",
  },
  {
    icon: CheckCircle,
    title: "Approved",
    description: "Receive your approved visa electronically, ready for your journey.",
  },
];

export function VisaProcessSection() {
  return (
    <section className="py-20 bg-card">
      <div className="container-custom">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-primary" />
            <span className="font-serif text-sm tracking-widest text-primary uppercase">
              Visa Services
            </span>
            <div className="h-px w-12 bg-primary" />
          </div>
          <h2 className="mb-4 font-serif text-3xl font-bold text-foreground sm:text-4xl">
            Hassle-Free Visa Processing
          </h2>
          <p className="text-muted-foreground">
            We handle all the paperwork so you can focus on preparing for your spiritual journey.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="absolute left-1/2 top-12 hidden h-0.5 w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-border to-transparent lg:block" />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="group relative flex flex-col items-center text-center opacity-0 animate-fade-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Step Number */}
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 rounded-full bg-background px-2 text-xs font-semibold text-primary">
                  Step {index + 1}
                </div>

                {/* Icon */}
                <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-2xl bg-background shadow-card transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-elevated">
                  <step.icon className="h-10 w-10 text-primary" />
                </div>

                {/* Content */}
                <h3 className="mb-2 font-serif text-xl font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
