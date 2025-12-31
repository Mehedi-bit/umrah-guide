import { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  FileText, 
  Search, 
  Clock, 
  CheckCircle, 
  Upload, 
  Shield, 
  HeadphonesIcon,
  ChevronRight,
  AlertCircle,
  Info
} from "lucide-react";

const steps = [
  {
    icon: FileText,
    step: "01",
    title: "Document Preparation",
    description: "Gather your passport (valid for 6+ months), passport-sized photos, and completed application form.",
    details: [
      "Original passport with at least 2 blank pages",
      "2 recent passport-sized photographs",
      "Proof of accommodation in Saudi Arabia",
      "Round-trip flight booking confirmation"
    ]
  },
  {
    icon: Upload,
    step: "02",
    title: "Online Submission",
    description: "Upload all required documents through our secure platform for verification.",
    details: [
      "Create an account or log in",
      "Fill in personal details accurately",
      "Upload clear scans of all documents",
      "Pay the visa processing fee"
    ]
  },
  {
    icon: Search,
    step: "03",
    title: "Verification & Review",
    description: "Our expert team reviews your application within 24-48 hours for accuracy.",
    details: [
      "Document authenticity verification",
      "Information cross-checking",
      "Eligibility confirmation",
      "Any corrections communicated promptly"
    ]
  },
  {
    icon: Clock,
    step: "04",
    title: "Authority Processing",
    description: "We submit your application to Saudi authorities and track its progress.",
    details: [
      "Direct submission to Saudi consulate",
      "Real-time status tracking",
      "Priority handling available",
      "Regular updates via email/SMS"
    ]
  },
  {
    icon: CheckCircle,
    step: "05",
    title: "Visa Approval",
    description: "Receive your approved e-visa electronically, ready for your sacred journey.",
    details: [
      "Electronic visa delivery",
      "Print-ready format",
      "Validity confirmation",
      "Travel checklist provided"
    ]
  },
];

const requirements = [
  {
    category: "Passport Requirements",
    items: [
      "Valid for at least 6 months from travel date",
      "At least 2 blank visa pages",
      "Good condition, no damage",
      "Machine-readable format"
    ]
  },
  {
    category: "Photographs",
    items: [
      "Recent (within last 6 months)",
      "White background",
      "4.5cm x 3.5cm size",
      "Clear, no glasses"
    ]
  },
  {
    category: "Additional Documents",
    items: [
      "Proof of vaccination (if required)",
      "Hotel booking confirmation",
      "Return flight ticket",
      "Travel insurance (recommended)"
    ]
  }
];

const faqs = [
  {
    question: "How long does the visa processing take?",
    answer: "Standard processing takes 3-5 business days. Express processing is available for 24-48 hours delivery."
  },
  {
    question: "What is the validity of an Umrah visa?",
    answer: "Umrah visas are typically valid for 90 days from the date of issue, allowing a stay of up to 30 days."
  },
  {
    question: "Can I extend my Umrah visa?",
    answer: "Extensions may be possible in certain circumstances. Contact our support team for assistance with visa extensions."
  },
  {
    question: "Is travel insurance mandatory?",
    answer: "While not always mandatory, we highly recommend travel insurance for medical emergencies and trip protection."
  }
];

export default function VisaProcess() {
  const [expandedStep, setExpandedStep] = useState<number | null>(0);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-b from-card to-background overflow-hidden">
          {/* Decorative Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div 
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L30 60M0 30L60 30M15 15L45 45M45 15L15 45' stroke='%23ad6d2f' stroke-width='0.5' fill='none'/%3E%3C/svg%3E")`,
                backgroundSize: '60px 60px'
              }}
            />
          </div>
          
          <div className="container-custom relative">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-4 flex items-center justify-center gap-3">
                <div className="h-px w-12 bg-primary" />
                <span className="font-serif text-sm tracking-widest text-primary uppercase">
                  Visa Services
                </span>
                <div className="h-px w-12 bg-primary" />
              </div>
              <h1 className="mb-6 font-serif text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl">
                Hassle-Free <span className="text-primary">Visa Processing</span>
              </h1>
              <p className="mb-8 text-lg text-muted-foreground">
                We handle all the paperwork so you can focus on preparing for your spiritual journey. 
                Our expert team ensures a smooth and efficient visa application process.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to="/register">
                    Start Application
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/support">Contact Support</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-20 bg-background">
          <div className="container-custom">
            <div className="mx-auto mb-16 max-w-2xl text-center">
              <h2 className="mb-4 font-serif text-3xl font-bold text-foreground sm:text-4xl">
                Simple 5-Step Process
              </h2>
              <p className="text-muted-foreground">
                From document preparation to visa approval, we guide you through every step.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-5">
              {steps.map((step, index) => (
                <Card 
                  key={step.title}
                  className={`cursor-pointer transition-all duration-300 hover-lift ${
                    expandedStep === index ? 'ring-2 ring-primary bg-card' : 'bg-background'
                  }`}
                  onClick={() => setExpandedStep(expandedStep === index ? null : index)}
                >
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                        <step.icon className="h-6 w-6 text-primary" />
                      </div>
                      <span className="text-2xl font-bold text-primary/30">{step.step}</span>
                    </div>
                    <CardTitle className="font-serif text-lg">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">{step.description}</p>
                    {expandedStep === index && (
                      <ul className="space-y-2 animate-fade-in">
                        {step.details.map((detail, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-foreground">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Requirements Section */}
        <section className="py-20 bg-card">
          <div className="container-custom">
            <div className="mx-auto mb-16 max-w-2xl text-center">
              <h2 className="mb-4 font-serif text-3xl font-bold text-foreground sm:text-4xl">
                Document Requirements
              </h2>
              <p className="text-muted-foreground">
                Ensure you have all necessary documents ready for a smooth application process.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {requirements.map((req, index) => (
                <Card key={req.category} className="bg-background opacity-0 animate-fade-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardHeader>
                    <CardTitle className="font-serif text-xl flex items-center gap-2">
                      <FileText className="h-5 w-5 text-primary" />
                      {req.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {req.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Important Notice */}
            <div className="mt-12 p-6 rounded-xl bg-primary/5 border border-primary/20">
              <div className="flex items-start gap-4">
                <AlertCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Important Notice</h3>
                  <p className="text-muted-foreground text-sm">
                    Requirements may vary based on your nationality and current regulations. 
                    We recommend starting your application at least 2-3 weeks before your intended travel date. 
                    Our team will guide you through any additional requirements specific to your case.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-background">
          <div className="container-custom">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div>
                <h2 className="mb-6 font-serif text-3xl font-bold text-foreground sm:text-4xl">
                  Why Process Your Visa With Us?
                </h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 flex-shrink-0">
                      <Shield className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Secure & Confidential</h3>
                      <p className="text-muted-foreground text-sm">
                        Your documents are encrypted and handled with the highest security standards.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 flex-shrink-0">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Fast Processing</h3>
                      <p className="text-muted-foreground text-sm">
                        Express visa processing available with 24-48 hour delivery options.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 flex-shrink-0">
                      <HeadphonesIcon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">24/7 Support</h3>
                      <p className="text-muted-foreground text-sm">
                        Our dedicated team is available around the clock to assist you.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6">
                <Card className="text-center p-6 bg-card">
                  <div className="text-4xl font-bold text-primary mb-2">15K+</div>
                  <div className="text-sm text-muted-foreground">Visas Processed</div>
                </Card>
                <Card className="text-center p-6 bg-card">
                  <div className="text-4xl font-bold text-primary mb-2">99%</div>
                  <div className="text-sm text-muted-foreground">Approval Rate</div>
                </Card>
                <Card className="text-center p-6 bg-card">
                  <div className="text-4xl font-bold text-primary mb-2">3-5</div>
                  <div className="text-sm text-muted-foreground">Days Processing</div>
                </Card>
                <Card className="text-center p-6 bg-card">
                  <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground">Support Available</div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 bg-card">
          <div className="container-custom">
            <div className="mx-auto mb-16 max-w-2xl text-center">
              <h2 className="mb-4 font-serif text-3xl font-bold text-foreground sm:text-4xl">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground">
                Find answers to common questions about the visa process.
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index} className="bg-background">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Info className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">{faq.question}</h3>
                        <p className="text-muted-foreground text-sm">{faq.answer}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary/5">
          <div className="container-custom text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold text-foreground sm:text-4xl">
              Ready to Begin Your Journey?
            </h2>
            <p className="mb-8 text-muted-foreground max-w-2xl mx-auto">
              Start your visa application today and take the first step towards your sacred pilgrimage.
            </p>
            <Button size="lg" asChild>
              <Link to="/register">
                Start Visa Application
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}