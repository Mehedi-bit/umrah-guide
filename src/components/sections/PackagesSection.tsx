import { Link } from "react-router-dom";
import { Plane, Building2, Bus, Star } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const packages = [
  {
    id: 1,
    title: "Essential Umrah",
    duration: "7 Days",
    hotelDistance: "500m from Haram",
    rating: 4.7,
    reviews: 324,
    price: 1299,
    features: ["Economy Flight", "3-Star Hotel", "Shared Transport"],
    popular: false,
  },
  {
    id: 2,
    title: "Premium Umrah",
    duration: "10 Days",
    hotelDistance: "200m from Haram",
    rating: 4.9,
    reviews: 512,
    price: 2499,
    features: ["Business Flight", "5-Star Hotel", "Private Transport"],
    popular: true,
  },
  {
    id: 3,
    title: "Ramadan Special",
    duration: "14 Days",
    hotelDistance: "100m from Haram",
    rating: 4.8,
    reviews: 248,
    price: 3999,
    features: ["Business Flight", "5-Star Hotel", "VIP Services"],
    popular: false,
  },
  {
    id: 4,
    title: "Family Package",
    duration: "12 Days",
    hotelDistance: "300m from Haram",
    rating: 4.8,
    reviews: 186,
    price: 4599,
    features: ["Economy Flight", "4-Star Suite", "Family Transport"],
    popular: false,
  },
];

export function PackagesSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-primary" />
            <span className="font-serif text-sm tracking-widest text-primary uppercase">
              Our Packages
            </span>
            <div className="h-px w-12 bg-primary" />
          </div>
          <h2 className="mb-4 font-serif text-3xl font-bold text-foreground sm:text-4xl">
            Tailored Umrah Experiences
          </h2>
          <p className="text-muted-foreground">
            Choose from our carefully curated packages designed to provide you with a 
            comfortable and spiritually enriching journey.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {packages.map((pkg, index) => (
            <Card
              key={pkg.id}
              className={`group hover-lift relative overflow-hidden opacity-0 animate-fade-up ${
                pkg.popular ? "ring-2 ring-primary" : ""
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {pkg.popular && (
                <div className="absolute right-4 top-4">
                  <Badge variant="gold" className="font-semibold">
                    Most Popular
                  </Badge>
                </div>
              )}

              <CardHeader className="pb-4">
                <Badge variant="sand" className="w-fit mb-3">
                  {pkg.duration}
                </Badge>
                <h3 className="font-serif text-xl font-semibold text-foreground">
                  {pkg.title}
                </h3>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Star className="h-4 w-4 fill-primary text-primary" />
                  <span className="font-medium text-foreground">{pkg.rating}</span>
                  <span>({pkg.reviews} reviews)</span>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">{pkg.hotelDistance}</p>

                <div className="space-y-2">
                  {pkg.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      {i === 0 && <Plane className="h-4 w-4 text-primary" />}
                      {i === 1 && <Building2 className="h-4 w-4 text-primary" />}
                      {i === 2 && <Bus className="h-4 w-4 text-primary" />}
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <div className="text-sm text-muted-foreground">Starting from</div>
                  <div className="flex items-baseline gap-1">
                    <span className="font-serif text-3xl font-bold text-foreground">
                      ${pkg.price.toLocaleString()}
                    </span>
                    <span className="text-sm text-muted-foreground">/person</span>
                  </div>
                </div>
              </CardContent>

              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link to={`/packages/${pkg.id}`}>View Details</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* View All Link */}
        <div className="mt-12 text-center">
          <Button variant="ghost" asChild>
            <Link to="/packages" className="gap-2">
              View All Packages
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
