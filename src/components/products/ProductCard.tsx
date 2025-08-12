import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Heart } from "lucide-react";
import { Link } from "react-router-dom";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  scent: string;
  burnTime: string;
  isNew?: boolean;
  isSale?: boolean;
}

export const ProductCard = ({
  id,
  name,
  price,
  originalPrice,
  image,
  scent,
  burnTime,
  isNew,
  isSale
}: ProductCardProps) => {
  return (
    <Card className="group bg-gradient-card border-border hover:shadow-warm transition-all duration-300 hover:-translate-y-1 overflow-hidden">
      <div className="relative overflow-hidden">
        {/* Badges */}
        <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
          {isNew && (
            <Badge className="bg-warm-glow text-foreground">
              Nouveau
            </Badge>
          )}
          {isSale && (
            <Badge variant="destructive">
              Promo
            </Badge>
          )}
        </div>

        {/* Wishlist Button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-3 right-3 z-10 bg-background/80 hover:bg-background opacity-0 group-hover:opacity-100 transition-all duration-300"
        >
          <Heart className="h-4 w-4" />
        </Button>

        {/* Product Image */}
        <Link to={`/produit/${id}`}>
          <div className="aspect-square overflow-hidden">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </Link>
      </div>

      <CardContent className="p-4">
        <div className="space-y-3">
          {/* Product Info */}
          <div>
            <Link to={`/produit/${id}`}>
              <h3 className="font-elegant text-lg font-semibold text-foreground group-hover:text-golden-amber transition-colors duration-300">
                {name}
              </h3>
            </Link>
            <p className="text-sm text-muted-foreground">Parfum {scent}</p>
            <p className="text-xs text-muted-foreground">{burnTime} de combustion</p>
          </div>

          {/* Price */}
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-foreground">{price}€</span>
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                {originalPrice}€
              </span>
            )}
          </div>

          {/* Add to Cart Button */}
          <Button variant="shop" className="w-full">
            <ShoppingCart className="h-4 w-4 mr-2" />
            Ajouter au panier
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};