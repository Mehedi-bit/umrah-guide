import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { 
  Plane, Building2, Bus, Star, Calendar, MapPin, Clock, 
  CheckCircle, Users, Wifi, Coffee, Shield, ChevronRight 
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const packageData = {
  id: 2,
  title: "Premium Umrah Package",
  duration: "10 Days / 9 Nights",
  hotelDistance: "200m from Haram",
  rating: 4.9,
  reviews: 512,
  price: 2499,
  description: "Experience the ultimate spiritual journey with our Premium Umrah package. Enjoy luxury accommodations just steps away from the Holy Mosque, business class flights, and personalized services throughout your pilgrimage.",
  features: ["Business Class Flight", "5-Star Hotel", "Private Transport", "Guided Tours", "24/7 Support"],
  itinerary: [
    { day: 1, title: "Departure & Arrival", description: "Depart from your city and arrive in Jeddah. Transfer to Makkah hotel." },
    { day: 2, title: "First Umrah", description: "Perform your first Umrah with guided assistance. Rest and prayers." },
    { day: 3, title: "Makkah Ziyarat", description: "Visit historical sites in Makkah with expert guides." },
    { day: 4, title: "Prayers & Reflection", description: "Full day for prayers at Masjid Al-Haram." },
    { day: 5, title: "Transfer to Madinah", description: "Travel to Madinah and check into hotel near Masjid An-Nabawi." },
    { day: 6, title: "Madinah Prayers", description: "Prayers at the Prophet's Mosque and exploration." },
    { day: 7, title: "Madinah Ziyarat", description: "Visit sacred sites including Quba Mosque and Uhud." },
    { day: 8, title: "Final Prayers", description: "Last prayers in Madinah and preparation for departure." },
    { day: 9, title: "Return to Makkah", description: "Optional second Umrah. Final prayers." },
    { day: 10, title: "Departure", description: "Transfer to Jeddah airport for return flight." },
  ],
  hotels: [
    { name: "Swissotel Makkah", location: "Makkah", distance: "200m from Haram", nights: 5, amenities: ["Free WiFi", "Restaurant", "Gym", "Haram View"] },
    { name: "Oberoi Madinah", location: "Madinah", distance: "150m from Masjid", nights: 4, amenities: ["Free WiFi", "Restaurant", "Spa", "Prayer Room"] },
  ],
  flights: {
    airline: "Saudi Airlines",
    class: "Business",
    departure: "New York (JFK)",
    arrival: "Jeddah (JED)",
    duration: "12h 30m",
  },
  included: [
    "Round-trip business class flights",
    "5-star hotel accommodations",
    "Private airport transfers",
    "All ground transportation",
    "Umrah visa processing",
    "English-speaking guides",
    "Daily breakfast",
    "Ziyarat tours",
  ],
};

const PackageDetails = () => {
  const { id } = useParams();
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const dates = [
    { id: 1, date: "Jan 15, 2025", available: true, price: 2499 },
    { id: 2, date: "Feb 1, 2025", available: true, price: 2599 },
    { id: 3, date: "Feb 15, 2025", available: false, price: 2699 },
    { id: 4, date: "Mar 1, 2025", available: true, price: 2799 },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="py-8">
        <div className="container-custom">
          {/* Breadcrumb */}
          <nav className="mb-6 flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link to="/packages" className="hover:text-foreground">Packages</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">{packageData.title}</span>
          </nav>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Header */}
              <div className="mb-8">
                <div className="mb-4 flex flex-wrap items-center gap-3">
                  <Badge variant="gold">{packageData.duration}</Badge>
                  <Badge variant="sand" className="flex items-center gap-1">
                    <Star className="h-3 w-3 fill-primary text-primary" />
                    {packageData.rating} ({packageData.reviews} reviews)
                  </Badge>
                </div>
                <h1 className="mb-4 font-serif text-3xl font-bold text-foreground sm:text-4xl">
                  {packageData.title}
                </h1>
                <p className="text-muted-foreground">{packageData.description}</p>
              </div>

              {/* Tabs */}
              <Tabs defaultValue="overview" className="space-y-6">
                <TabsList className="grid w-full grid-cols-4 bg-card">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="hotels">Hotels</TabsTrigger>
                  <TabsTrigger value="flights">Flights</TabsTrigger>
                  <TabsTrigger value="visa">Visa Info</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-6">
                  {/* Itinerary */}
                  <Card>
                    <CardHeader>
                      <h3 className="font-serif text-xl font-semibold">Journey Itinerary</h3>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {packageData.itinerary.map((item, index) => (
                          <div key={index} className="flex gap-4">
                            <div className="flex flex-col items-center">
                              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                                {item.day}
                              </div>
                              {index < packageData.itinerary.length - 1 && (
                                <div className="w-px flex-1 bg-border" />
                              )}
                            </div>
                            <div className="flex-1 pb-4">
                              <h4 className="font-semibold text-foreground">{item.title}</h4>
                              <p className="text-sm text-muted-foreground">{item.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* What's Included */}
                  <Card>
                    <CardHeader>
                      <h3 className="font-serif text-xl font-semibold">What's Included</h3>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-3 sm:grid-cols-2">
                        {packageData.included.map((item, index) => (
                          <div key={index} className="flex items-center gap-3">
                            <CheckCircle className="h-5 w-5 text-primary" />
                            <span className="text-sm text-muted-foreground">{item}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="hotels" className="space-y-4">
                  {packageData.hotels.map((hotel, index) => (
                    <Card key={index}>
                      <CardContent className="pt-6">
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                          <div>
                            <h3 className="font-serif text-xl font-semibold text-foreground">
                              {hotel.name}
                            </h3>
                            <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                              <span className="flex items-center gap-1">
                                <MapPin className="h-4 w-4" />
                                {hotel.location}
                              </span>
                              <span className="flex items-center gap-1">
                                <Building2 className="h-4 w-4" />
                                {hotel.distance}
                              </span>
                              <span className="flex items-center gap-1">
                                <Clock className="h-4 w-4" />
                                {hotel.nights} nights
                              </span>
                            </div>
                            <div className="mt-4 flex flex-wrap gap-2">
                              {hotel.amenities.map((amenity, i) => (
                                <Badge key={i} variant="earth">
                                  {amenity}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>

                <TabsContent value="flights">
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-center gap-4">
                        <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-card shadow-subtle">
                          <Plane className="h-8 w-8 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-serif text-xl font-semibold text-foreground">
                            {packageData.flights.airline}
                          </h3>
                          <Badge variant="gold">{packageData.flights.class} Class</Badge>
                        </div>
                      </div>
                      <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row">
                        <div className="text-center">
                          <div className="font-semibold text-foreground">{packageData.flights.departure}</div>
                          <div className="text-sm text-muted-foreground">Departure</div>
                        </div>
                        <div className="flex flex-1 items-center gap-2">
                          <div className="h-px flex-1 bg-border" />
                          <div className="rounded-full bg-card px-4 py-2 text-sm text-muted-foreground shadow-subtle">
                            {packageData.flights.duration}
                          </div>
                          <div className="h-px flex-1 bg-border" />
                        </div>
                        <div className="text-center">
                          <div className="font-semibold text-foreground">{packageData.flights.arrival}</div>
                          <div className="text-sm text-muted-foreground">Arrival</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="visa">
                  <Card>
                    <CardContent className="pt-6">
                      <div className="space-y-4">
                        <div className="flex items-start gap-4">
                          <Shield className="h-6 w-6 text-primary" />
                          <div>
                            <h4 className="font-semibold text-foreground">Visa Processing Included</h4>
                            <p className="text-sm text-muted-foreground">
                              Your Umrah visa will be processed by our team. We handle all documentation and submissions.
                            </p>
                          </div>
                        </div>
                        <div className="rounded-lg bg-muted p-4">
                          <h5 className="mb-2 font-semibold text-foreground">Required Documents:</h5>
                          <ul className="space-y-2 text-sm text-muted-foreground">
                            <li className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-primary" />
                              Valid passport (6+ months validity)
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-primary" />
                              Passport-size photographs (white background)
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-primary" />
                              Completed visa application form
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-primary" />
                              COVID-19 vaccination certificate
                            </li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

            {/* Booking Card - Sticky */}
            <div className="lg:sticky lg:top-24 lg:self-start">
              <Card className="shadow-elevated">
                <CardContent className="pt-6">
                  <div className="mb-6">
                    <div className="text-sm text-muted-foreground">Starting from</div>
                    <div className="flex items-baseline gap-1">
                      <span className="font-serif text-4xl font-bold text-foreground">
                        ${packageData.price.toLocaleString()}
                      </span>
                      <span className="text-muted-foreground">/person</span>
                    </div>
                  </div>

                  {/* Date Selection */}
                  <div className="mb-6">
                    <label className="mb-3 block text-sm font-medium text-foreground">
                      Select Departure Date
                    </label>
                    <div className="space-y-2">
                      {dates.map((date) => (
                        <button
                          key={date.id}
                          onClick={() => date.available && setSelectedDate(date.date)}
                          disabled={!date.available}
                          className={`flex w-full items-center justify-between rounded-lg border p-3 text-left transition-all ${
                            selectedDate === date.date
                              ? "border-primary bg-primary/5"
                              : date.available
                              ? "border-border hover:border-primary/50"
                              : "cursor-not-allowed border-border bg-muted opacity-50"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm font-medium">{date.date}</span>
                          </div>
                          <span className="text-sm font-semibold text-foreground">
                            ${date.price.toLocaleString()}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full" size="lg" disabled={!selectedDate}>
                    Continue Booking
                  </Button>

                  <p className="mt-4 text-center text-xs text-muted-foreground">
                    Free cancellation up to 30 days before departure
                  </p>
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

export default PackageDetails;
