import { Button } from "@/components/ui/button";
import { Flame, Heart, Leaf, Award } from "lucide-react";
import { Link } from "react-router-dom";

export const AboutSection = () => {
  const features = [
    {
      icon: <Flame className="h-8 w-8 text-golden-amber" />,
      title: "Artisanal",
      description: "Chaque bougie est fabriquée à la main avec passion et savoir-faire."
    },
    {
      icon: <Leaf className="h-8 w-8 text-golden-amber" />,
      title: "100% Naturel",
      description: "Cire de soja pure et huiles essentielles de première qualité."
    },
    {
      icon: <Heart className="h-8 w-8 text-golden-amber" />,
      title: "Fait en France",
      description: "Fièrement conçues dans nos ateliers français traditionnels."
    },
    {
      icon: <Award className="h-8 w-8 text-golden-amber" />,
      title: "Qualité Premium",
      description: "Des parfums d'exception pour des moments inoubliables."
    }
  ];

  return (
    <section className="py-16 bg-warm-cream">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-elegant font-bold text-foreground leading-tight">
              L'Excellence
              <span className="block text-golden-amber">
                Artisanale
              </span>
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Depuis plus de 10 ans, nous créons des bougies d'exception qui transforment 
              votre quotidien en moments magiques. Chaque création reflète notre passion 
              pour l'art de la parfumerie et notre engagement envers la qualité.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              De la sélection minutieuse des matières premières à la finition de chaque 
              bougie, nous mettons tout notre savoir-faire au service de votre bien-être 
              et de votre plaisir sensoriel.
            </p>

            <Button asChild variant="hero" size="lg" className="text-lg px-8 py-4">
              <Link to="/a-propos">
                Découvrir notre histoire
              </Link>
            </Button>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-background p-6 rounded-lg shadow-soft hover:shadow-warm transition-all duration-300 hover:-translate-y-1"
              >
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-elegant font-semibold mb-2 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};