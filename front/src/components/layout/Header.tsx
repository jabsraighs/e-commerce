import { ShoppingCart, Search, Menu, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

interface HeaderProps {
  cartItemsCount?: number;
}

export const Header = ({ cartItemsCount = 0 }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="p-2 bg-gradient-warm rounded-full group-hover:shadow-warm transition-all duration-300">
              <Flame className="h-6 w-6 text-foreground" />
            </div>
            <span className="text-2xl font-elegant font-bold text-foreground">
              LumièreArt
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-foreground hover:text-golden-amber transition-colors duration-300 font-medium"
            >
              Accueil
            </Link>
            <Link 
              to="/boutique" 
              className="text-foreground hover:text-golden-amber transition-colors duration-300 font-medium"
            >
              Boutique
            </Link>
            <Link 
              to="/collections" 
              className="text-foreground hover:text-golden-amber transition-colors duration-300 font-medium"
            >
              Collections
            </Link>
            <Link 
              to="/a-propos" 
              className="text-foreground hover:text-golden-amber transition-colors duration-300 font-medium"
            >
              À propos
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="icon" className="hover:bg-warm-cream">
              <Search className="h-5 w-5" />
            </Button>
            
            <Button variant="ghost" size="icon" className="relative hover:bg-warm-cream">
              <ShoppingCart className="h-5 w-5" />
              {cartItemsCount > 0 && (
                <Badge 
                  variant="destructive" 
                  className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
                >
                  {cartItemsCount}
                </Badge>
              )}
            </Button>

            <Button variant="ghost" size="icon" className="md:hidden hover:bg-warm-cream">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};