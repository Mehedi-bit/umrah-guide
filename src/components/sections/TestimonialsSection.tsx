import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import avatarMale from "@/assets/testimonials/avatar-male.jpg";
import avatarFemale from "@/assets/testimonials/avatar-female.jpg";

const testimonials = [
  {
    quote: "From the moment we landed, everything was handled with care. It allowed me to focus only on my ibadah.",
    name: "Abdul Rahman",
    location: "Bangladesh",
    tag: "First Umrah",
    avatar: avatarMale,
    gender: "male"
  },
  {
    quote: "The peace I found during this journey was beyond words. Every detail was thoughtfully arranged, letting my heart be present.",
    name: "Fatima Noor",
    location: "Malaysia",
    tag: "Family Journey",
    avatar: avatarFemale,
    gender: "female"
  },
  {
    quote: "At my age, I worried about the physical demands. But the care and support made my Umrah a blessed, comfortable experience.",
    name: "Hassan Al-Farsi",
    location: "United Arab Emirates",
    tag: "Elderly Friendly",
    avatar: avatarMale,
    gender: "male"
  },
  {
    quote: "Walking through the sacred grounds with my family, knowing everything was arranged perfectly — that is a gift I will always treasure.",
    name: "Aisha Begum",
    location: "United Kingdom",
    tag: "Peaceful Experience",
    avatar: avatarFemale,
    gender: "female"
  },
  {
    quote: "This was my third Umrah, but the first where I felt truly at ease. The seamless arrangements let me deepen my spiritual connection.",
    name: "Omar Siddique",
    location: "Canada",
    tag: "Returning Pilgrim",
    avatar: avatarMale,
    gender: "male"
  }
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToNext = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsTransitioning(false), 600);
  }, [isTransitioning]);

  const goToPrev = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsTransitioning(false), 600);
  }, [isTransitioning]);

  useEffect(() => {
    const interval = setInterval(goToNext, 9000);
    return () => clearInterval(interval);
  }, [goToNext]);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Subtle geometric pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232E2418' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Voices from the Journey
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Reflections from pilgrims who walked the sacred path
          </p>
        </div>

        {/* Testimonial Container */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Navigation Arrows */}
            <button
              onClick={goToPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 z-20 w-12 h-12 rounded-full bg-card/80 backdrop-blur-sm border border-border/50 flex items-center justify-center text-foreground/70 hover:text-foreground hover:bg-card transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 z-20 w-12 h-12 rounded-full bg-card/80 backdrop-blur-sm border border-border/50 flex items-center justify-center text-foreground/70 hover:text-foreground hover:bg-card transition-all duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Testimonial Content */}
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 lg:p-16 border border-border/30">
              <div 
                className={`transition-all duration-500 ease-out ${
                  isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
                }`}
              >
                {/* Quote */}
                <blockquote className="text-center mb-10">
                  <p className="font-heading text-xl md:text-2xl lg:text-3xl text-foreground leading-relaxed font-light italic">
                    {currentTestimonial.quote}
                  </p>
                </blockquote>

                {/* Person Identity */}
                <div className="flex flex-col items-center gap-4">
                  <Avatar className="w-16 h-16 md:w-20 md:h-20 border-2 border-border/50 shadow-soft saturate-[0.85]">
                    <AvatarImage 
                      src={currentTestimonial.avatar} 
                      alt={currentTestimonial.name}
                      className="object-cover"
                    />
                    <AvatarFallback className="bg-muted text-muted-foreground font-medium">
                      {currentTestimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>

                  <div className="text-center">
                    <p className="font-medium text-foreground text-lg">
                      {currentTestimonial.name}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {currentTestimonial.location}
                    </p>
                  </div>

                  {/* Journey Tag */}
                  <Badge variant="sand" className="mt-2 text-sm font-normal">
                    {currentTestimonial.tag}
                  </Badge>
                </div>
              </div>
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isTransitioning) {
                    setIsTransitioning(true);
                    setCurrentIndex(index);
                    setTimeout(() => setIsTransitioning(false), 600);
                  }
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-primary w-6' 
                    : 'bg-border hover:bg-muted-foreground/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
