import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-candles.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-hero">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Collection de bougies artisanales élégantes"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-center mb-6">
          <Sparkles className="h-8 w-8 text-golden-amber mr-3 animate-pulse" />
          <span className="text-lg text-muted-foreground font-medium tracking-wide">
            Bougies Artisanales de Luxe
          </span>
          <Sparkles className="h-8 w-8 text-golden-amber ml-3 animate-pulse" />
        </div>

        <h1 className="text-5xl md:text-7xl font-elegant font-bold mb-6 text-foreground leading-tight">
          L'Art de la
          <span className="block text-golden-amber bg-gradient-warm bg-clip-text text-transparent">
            Lumière
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Découvrez notre collection exclusive de bougies parfumées, 
          créées à la main avec des ingrédients naturels pour illuminer vos moments précieux.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button asChild variant="hero" size="lg" className="text-lg px-8 py-4">
            <Link to="/boutique">
              Découvrir la Collection
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          
          <Button asChild variant="outline" size="lg" className="text-lg px-8 py-4 border-golden-amber text-golden-amber hover:bg-golden-amber hover:text-foreground">
            <Link to="/a-propos">
              Notre Histoire
            </Link>
          </Button>
        </div>

        <div className="mt-12 flex justify-center items-center space-x-8 text-sm text-muted-foreground">
          <div className="flex items-center">
            <div className="w-2 h-2 bg-golden-amber rounded-full mr-2"></div>
            Livraison gratuite dès 50€
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-golden-amber rounded-full mr-2"></div>
            Fabriqué en France
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-golden-amber rounded-full mr-2"></div>
            Cire 100% naturelle
          </div>
        </div>
      </div>
    </section>
  );
};