import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Sacred journey to Mecca"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 flex min-h-[90vh] items-center">
        <div className="max-w-2xl py-20">
          {/* Ornamental Element */}
          <div className="mb-6 flex items-center gap-3 opacity-0 animate-fade-up">
            <div className="h-px w-12 bg-primary" />
            <span className="font-serif text-sm tracking-widest text-primary uppercase">
              Sacred Journey Awaits
            </span>
          </div>

          {/* Headline */}
          <h1 className="mb-6 font-serif text-4xl font-bold leading-tight text-foreground opacity-0 animate-fade-up delay-100 sm:text-5xl lg:text-6xl">
            Plan Your Umrah Journey with{" "}
            <span className="text-primary">Peace & Confidence</span>
          </h1>

          {/* Subtext */}
          <p className="mb-10 max-w-lg text-lg text-muted-foreground opacity-0 animate-fade-up delay-200">
            Packages, visas, and journey management in one trusted platform. 
            Experience a spiritually fulfilling pilgrimage with complete peace of mind.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-4 opacity-0 animate-fade-up delay-300 sm:flex-row">
            <Button variant="hero" size="lg" asChild>
              <Link to="/packages">Explore Umrah Packages</Link>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <Link to="/support">Talk to an Agent</Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap items-center gap-8 opacity-0 animate-fade-up delay-400">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-card">
                <svg viewBox="0 0 24 24" className="h-5 w-5 text-primary" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">4.9/5 Rating</p>
                <p className="text-xs text-muted-foreground">From 2,500+ pilgrims</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-card">
                <svg viewBox="0 0 24 24" className="h-5 w-5 text-primary" fill="currentColor">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">Fully Licensed</p>
                <p className="text-xs text-muted-foreground">Saudi Ministry Approved</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-card">
                <svg viewBox="0 0 24 24" className="h-5 w-5 text-primary" fill="currentColor">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8m13 0l-3-3m0 0l3-3m-3 3h6" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">50,000+</p>
                <p className="text-xs text-muted-foreground">Pilgrims Served</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
