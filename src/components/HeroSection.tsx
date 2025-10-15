import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";
import { Spotlight } from "@/components/ui/aceternity/Spotlight";
import { BackgroundBeams } from "@/components/ui/aceternity/BackgroundBeams";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-b from-background to-secondary/30 overflow-hidden">
      <Spotlight className="top-0 left-0 md:left-60" />
      <BackgroundBeams />
      <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block">
              <span className="text-sm font-semibold text-primary bg-primary/10 px-4 py-1.5 rounded-full">
                New Collection 2025
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              <span className="inline-block animate-fade-in">Discover Your</span>
              <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-fade-in" style={{ animationDelay: "200ms" }}>
                Perfect Style
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-md">
              Explore premium products curated for the modern lifestyle. Quality meets elegance in every piece.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground group">
                Shop Now
                <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-2">
                Browse Categories
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-scale-in group">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 group-hover:shadow-[0_20px_60px_-10px_hsl(var(--primary)/0.3)]">
              <img
                src={heroBanner}
                alt="Featured lifestyle products collection"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-4 -left-4 bg-accent text-accent-foreground px-6 py-3 rounded-xl shadow-lg animate-slide-up hover:scale-105 transition-transform duration-300 cursor-pointer backdrop-blur-sm bg-accent/90">
              <p className="text-sm font-semibold">Up to 50% Off</p>
              <p className="text-xs opacity-90">Limited Time Offer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
