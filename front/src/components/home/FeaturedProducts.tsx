import { ProductCard } from "@/components/products/ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { products } from "@/data/products";

export const FeaturedProducts = () => {
  // Show first 4 products as featured
  const featuredProducts = products.slice(0, 4);

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-elegant font-bold mb-4 text-foreground">
            Nos Créations
            <span className="block text-golden-amber">Signature</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Découvrez notre sélection de bougies artisanales, 
            chacune raconte une histoire unique à travers ses parfums envoûtants.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              originalPrice={product.originalPrice}
              image={product.image}
              scent={product.scent}
              burnTime={product.burnTime}
              isNew={product.isNew}
              isSale={product.isSale}
            />
          ))}
        </div>

        <div className="text-center">
          <Button asChild variant="warm" size="lg" className="text-lg px-8 py-4">
            <Link to="/boutique">
              Voir toute la collection
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};