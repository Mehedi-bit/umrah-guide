import { Shield, Users, HeadphonesIcon, Award } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Licensed & Trusted",
    description: "Officially registered with Saudi Ministry of Hajj and Umrah with years of proven service.",
  },
  {
    icon: Users,
    title: "Expert Guides",
    description: "Knowledgeable guides fluent in multiple languages to assist you throughout your journey.",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description: "Round-the-clock assistance before, during, and after your pilgrimage for peace of mind.",
  },
  {
    icon: Award,
    title: "Quality Assured",
    description: "Carefully selected hotels, transport, and services meeting the highest standards.",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container-custom">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Content */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="h-px w-12 bg-primary" />
              <span className="font-serif text-sm tracking-widest text-primary uppercase">
                Why Choose Us
              </span>
            </div>
            <h2 className="mb-6 font-serif text-3xl font-bold text-foreground sm:text-4xl">
              Your Journey, Our{" "}
              <span className="text-primary">Sacred Responsibility</span>
            </h2>
            <p className="mb-8 text-muted-foreground">
              We understand the spiritual significance of Umrah and treat every pilgrim's 
              journey with the utmost care and reverence. Our commitment is to ensure your 
              experience is seamless, comfortable, and deeply meaningful.
            </p>

            <div className="grid gap-6 sm:grid-cols-2">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="group flex gap-4 opacity-0 animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-card shadow-subtle transition-all duration-300 group-hover:bg-primary group-hover:shadow-card">
                    <feature.icon className="h-6 w-6 text-primary transition-colors group-hover:text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-serif text-lg font-semibold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative hidden lg:block">
            <div className="relative mx-auto aspect-square max-w-md">
              {/* Decorative Elements */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-card to-muted" />
              <div className="absolute inset-4 rounded-2xl border border-border bg-background shadow-elevated" />
              
              {/* Center Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="h-32 w-32 rounded-2xl bg-card shadow-card flex items-center justify-center animate-float">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-16 w-16 text-primary"
                      fill="currentColor"
                    >
                      <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.5L19.5 8 12 11.5 4.5 8 12 4.5zM4 9.5l7 3.5v7L4 16.5v-7zm9 10.5v-7l7-3.5v7L13 20z" />
                    </svg>
                  </div>
                  
                  {/* Floating Stats */}
                  <div className="absolute -left-20 top-0 rounded-xl bg-background p-4 shadow-card animate-float" style={{ animationDelay: "1s" }}>
                    <div className="text-2xl font-serif font-bold text-foreground">15+</div>
                    <div className="text-xs text-muted-foreground">Years Experience</div>
                  </div>
                  
                  <div className="absolute -right-16 bottom-0 rounded-xl bg-background p-4 shadow-card animate-float" style={{ animationDelay: "2s" }}>
                    <div className="text-2xl font-serif font-bold text-foreground">99%</div>
                    <div className="text-xs text-muted-foreground">Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
