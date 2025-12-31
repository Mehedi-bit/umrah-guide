import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plane, Building2, Bus, Star, Search, SlidersHorizontal } from "lucide-react";
import { useState } from "react";

const allPackages = [
  {
    id: 1,
    title: "Essential Umrah",
    duration: "7 Days",
    hotelDistance: "500m from Haram",
    rating: 4.7,
    reviews: 324,
    price: 1299,
    features: ["Economy Flight", "3-Star Hotel", "Shared Transport"],
    category: "economy",
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
    category: "premium",
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
    category: "luxury",
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
    category: "family",
  },
  {
    id: 5,
    title: "Budget Umrah",
    duration: "5 Days",
    hotelDistance: "800m from Haram",
    rating: 4.5,
    reviews: 156,
    price: 899,
    features: ["Economy Flight", "2-Star Hotel", "Shared Transport"],
    category: "economy",
  },
  {
    id: 6,
    title: "VIP Experience",
    duration: "10 Days",
    hotelDistance: "50m from Haram",
    rating: 5.0,
    reviews: 89,
    price: 7999,
    features: ["First Class Flight", "Royal Suite", "Personal Butler"],
    category: "luxury",
  },
];

const Packages = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Packages" },
    { id: "economy", name: "Economy" },
    { id: "premium", name: "Premium" },
    { id: "luxury", name: "Luxury" },
    { id: "family", name: "Family" },
  ];

  const filteredPackages = allPackages.filter((pkg) => {
    const matchesSearch = pkg.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || pkg.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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
                Explore
              </span>
              <div className="h-px w-12 bg-primary" />
            </div>
            <h1 className="mb-4 font-serif text-4xl font-bold text-foreground">
              Umrah Packages
            </h1>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Discover our range of carefully curated packages designed to provide you with 
              a comfortable and spiritually enriching pilgrimage experience.
            </p>
          </div>

          {/* Filters */}
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search packages..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <p className="mb-6 text-sm text-muted-foreground">
            Showing {filteredPackages.length} packages
          </p>

          {/* Packages Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredPackages.map((pkg, index) => (
              <Card
                key={pkg.id}
                className={`group hover-lift relative overflow-hidden ${
                  pkg.popular ? "ring-2 ring-primary" : ""
                }`}
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

                  <Button variant="outline" className="w-full" asChild>
                    <Link to={`/packages/${pkg.id}`}>View Details</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredPackages.length === 0 && (
            <div className="py-12 text-center">
              <p className="text-muted-foreground">No packages found matching your criteria.</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Packages;
