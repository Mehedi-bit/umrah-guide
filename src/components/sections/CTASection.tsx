import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function CTASection() {
  return (
    <section className="py-20 bg-card">
      <div className="container-custom">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-background via-background to-muted p-12 text-center shadow-elevated lg:p-20">
          {/* Decorative Elements */}
          <div className="absolute left-0 top-0 h-40 w-40 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-60 w-60 rounded-full bg-primary/5 blur-3xl" />

          {/* Content */}
          <div className="relative mx-auto max-w-2xl">
            <div className="mb-6 flex items-center justify-center gap-3">
              <div className="h-px w-12 bg-primary" />
              <span className="font-serif text-sm tracking-widest text-primary uppercase">
                Begin Your Journey
              </span>
              <div className="h-px w-12 bg-primary" />
            </div>

            <h2 className="mb-6 font-serif text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
              Ready to Experience a Blessed Umrah?
            </h2>

            <p className="mb-10 text-lg text-muted-foreground">
              Join thousands of satisfied pilgrims who trusted us with their sacred journey. 
              Let us help you create memories that will last a lifetime.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button variant="hero" size="lg" asChild>
                <Link to="/packages">Start Planning Now</Link>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <Link to="/support">Contact Our Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
