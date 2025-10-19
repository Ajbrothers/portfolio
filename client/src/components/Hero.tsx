import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import heroImage from "@assets/generated_images/Professional_workspace_hero_background_e405ec43.png";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 to-foreground/70" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-primary-foreground mb-6" data-testid="text-hero-title">
          Bringing Your Digital Ideas to Life
        </h1>
        <p className="font-body text-lg sm:text-xl text-primary-foreground/90 max-w-3xl mx-auto mb-8" data-testid="text-hero-subtitle">
          Professional web development, branding, and creative services for small businesses. 
          Build a strong online presence with affordable packages and fast delivery.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button
            size="lg"
            onClick={() => scrollToSection('portfolio')}
            className="bg-primary text-primary-foreground border border-primary-border hover-elevate active-elevate-2"
            data-testid="button-view-work"
          >
            View Our Work
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection('contact')}
            className="bg-background/20 backdrop-blur-sm text-primary-foreground border-primary-foreground/30 hover-elevate active-elevate-2"
            data-testid="button-get-quote"
          >
            Get a Quote
          </Button>
        </div>

        <div className="flex flex-wrap gap-6 justify-center items-center text-primary-foreground/80">
          <div className="flex items-center gap-2" data-testid="trust-indicator-1">
            <CheckCircle2 className="h-5 w-5 text-primary" />
            <span className="font-body text-sm">5+ Years Experience</span>
          </div>
          <div className="flex items-center gap-2" data-testid="trust-indicator-2">
            <CheckCircle2 className="h-5 w-5 text-primary" />
            <span className="font-body text-sm">Fast Turnaround</span>
          </div>
          <div className="flex items-center gap-2" data-testid="trust-indicator-3">
            <CheckCircle2 className="h-5 w-5 text-primary" />
            <span className="font-body text-sm">24/7 Support</span>
          </div>
        </div>
      </div>
    </section>
  );
}
