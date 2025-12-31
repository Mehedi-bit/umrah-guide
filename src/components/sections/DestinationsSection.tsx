import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

import makkahClockTower from "@/assets/destinations/makkah-clock-tower.jpg";
import masjidAlHaram from "@/assets/destinations/masjid-al-haram.jpg";
import abrajAlBait from "@/assets/destinations/abraj-al-bait.jpg";
import masjidNabawi from "@/assets/destinations/masjid-nabawi.jpg";
import masjidQuba from "@/assets/destinations/masjid-quba.jpg";

const destinations = [
  {
    id: 1,
    title: "Makkah Clock Tower",
    location: "Makkah",
    image: makkahClockTower,
  },
  {
    id: 2,
    title: "Masjid al-Haram",
    location: "Makkah",
    image: masjidAlHaram,
  },
  {
    id: 3,
    title: "Abraj Al Bait",
    location: "Makkah",
    image: abrajAlBait,
  },
  {
    id: 4,
    title: "Masjid an-Nabawi",
    location: "Madinah",
    image: masjidNabawi,
  },
  {
    id: 5,
    title: "Masjid Quba",
    location: "Madinah",
    image: masjidQuba,
  },
];

export const DestinationsSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    skipSnaps: false,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  // Slow auto-scroll
  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            Sacred Landmarks of Your Journey
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
            Moments and places that shape the Umrah experience
          </p>
        </div>

        {/* Slider */}
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-4 md:-ml-6">
              {destinations.map((destination) => (
                <div
                  key={destination.id}
                  className="flex-[0_0_85%] sm:flex-[0_0_70%] md:flex-[0_0_45%] lg:flex-[0_0_35%] pl-4 md:pl-6"
                >
                  <div className="group relative aspect-[3/4] rounded-xl overflow-hidden shadow-elegant cursor-pointer">
                    {/* Image */}
                    <img
                      src={destination.image}
                      alt={destination.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/20 to-transparent transition-opacity duration-300 group-hover:from-stone-900/90" />

                    {/* Text Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                      <h3 className="font-heading text-xl md:text-2xl font-semibold text-[#FBF9F6] mb-1 transition-transform duration-300 group-hover:-translate-y-1">
                        {destination.title}
                      </h3>
                      <p className="text-[#F4EFE8]/80 text-sm md:text-base">
                        {destination.location}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={scrollPrev}
            className={cn(
              "absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10",
              "w-10 h-10 md:w-12 md:h-12 rounded-full",
              "bg-sand/80 backdrop-blur-sm border border-sand-dark/20",
              "flex items-center justify-center",
              "text-foreground hover:bg-sand transition-all duration-200",
              "shadow-sm hover:shadow-md",
              !canScrollPrev && "opacity-50 cursor-not-allowed"
            )}
            disabled={!canScrollPrev}
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          <button
            onClick={scrollNext}
            className={cn(
              "absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10",
              "w-10 h-10 md:w-12 md:h-12 rounded-full",
              "bg-sand/80 backdrop-blur-sm border border-sand-dark/20",
              "flex items-center justify-center",
              "text-foreground hover:bg-sand transition-all duration-200",
              "shadow-sm hover:shadow-md",
              !canScrollNext && "opacity-50 cursor-not-allowed"
            )}
            disabled={!canScrollNext}
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {destinations.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                index === selectedIndex
                  ? "bg-gold w-6"
                  : "bg-sand-dark/40 hover:bg-sand-dark/60"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
