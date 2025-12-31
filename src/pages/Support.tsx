import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MessageCircle, Phone, Mail, MapPin, Clock } from "lucide-react";

const faqs = [
  {
    question: "What documents are required for Umrah visa?",
    answer: "You'll need a valid passport with at least 6 months validity, passport-size photographs with white background, completed visa application form, and COVID-19 vaccination certificate. Our team will guide you through the entire process.",
  },
  {
    question: "How long does visa processing take?",
    answer: "Typically, Umrah visa processing takes 3-5 business days after document submission. During peak seasons (Ramadan), it may take up to 7-10 days. We recommend applying at least 2 weeks before your planned departure.",
  },
  {
    question: "Can I customize my package?",
    answer: "Yes! We offer flexible customization options. You can adjust hotel categories, flight classes, duration of stay, and add additional services. Contact our team to discuss your specific requirements.",
  },
  {
    question: "What is your cancellation policy?",
    answer: "Full refund for cancellations made 30+ days before departure. 50% refund for 15-29 days. No refund for less than 15 days. Travel insurance is recommended to cover unexpected cancellations.",
  },
  {
    question: "Do you provide guides who speak my language?",
    answer: "Yes, we have multilingual guides available in English, Arabic, Urdu, Turkish, French, and Indonesian. Please specify your language preference when booking.",
  },
  {
    question: "What is included in the ground transportation?",
    answer: "Ground transportation includes airport transfers, hotel-to-Haram transfers, and all Ziyarat tours mentioned in your package. VIP packages include private vehicles; standard packages use shared coaches.",
  },
];

const Support = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="py-12">
        <div className="container-custom">
          {/* Header */}
          <div className="mb-12 text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <div className="h-px w-12 bg-primary" />
              <span className="font-serif text-sm tracking-widest text-primary uppercase">
                Support
              </span>
              <div className="h-px w-12 bg-primary" />
            </div>
            <h1 className="mb-4 font-serif text-4xl font-bold text-foreground">
              How Can We Help?
            </h1>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Our dedicated team is here to assist you at every step of your Umrah journey. 
              Reach out through any channel below.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Contact Methods */}
            <div className="space-y-6 lg:col-span-1">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Call Us</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        Available 24/7 for urgent inquiries
                      </p>
                      <a href="tel:+966123456789" className="text-primary hover:underline">
                        +966 12 345 6789
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Email Us</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        Response within 24 hours
                      </p>
                      <a href="mailto:support@umrahguide.com" className="text-primary hover:underline">
                        support@umrahguide.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                      <MessageCircle className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Live Chat</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        Instant support from our team
                      </p>
                      <Button variant="outline" size="sm">
                        Start Chat
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Visit Us</h3>
                      <p className="text-sm text-muted-foreground">
                        Makkah Al-Mukarramah<br />
                        Saudi Arabia
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form & FAQ */}
            <div className="space-y-8 lg:col-span-2">
              {/* Contact Form */}
              <Card>
                <CardHeader>
                  <CardTitle className="font-serif">Send Us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="mb-2 block text-sm font-medium text-foreground">
                          Full Name
                        </label>
                        <Input placeholder="Your name" />
                      </div>
                      <div>
                        <label className="mb-2 block text-sm font-medium text-foreground">
                          Email
                        </label>
                        <Input type="email" placeholder="your@email.com" />
                      </div>
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-foreground">
                        Subject
                      </label>
                      <Input placeholder="How can we help?" />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-foreground">
                        Message
                      </label>
                      <Textarea
                        placeholder="Tell us more about your inquiry..."
                        rows={5}
                      />
                    </div>
                    <Button type="submit" className="w-full sm:w-auto">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* FAQ */}
              <Card>
                <CardHeader>
                  <CardTitle className="font-serif">Frequently Asked Questions</CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, index) => (
                      <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger className="text-left font-medium">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Support;
