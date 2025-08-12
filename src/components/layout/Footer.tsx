import { Flame, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-deep-brown text-warm-cream">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-gradient-warm rounded-full">
                <Flame className="h-6 w-6 text-foreground" />
              </div>
              <span className="text-2xl font-elegant font-bold">
                LumièreArt
              </span>
            </div>
            <p className="text-warm-cream/80 leading-relaxed">
              Créateur de bougies artisanales d'exception depuis 2014. 
              L'art de la lumière pour illuminer vos moments précieux.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-elegant font-semibold mb-4 text-golden-amber">
              Navigation
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-warm-cream/80 hover:text-golden-amber transition-colors duration-300">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/boutique" className="text-warm-cream/80 hover:text-golden-amber transition-colors duration-300">
                  Boutique
                </Link>
              </li>
              <li>
                <Link to="/collections" className="text-warm-cream/80 hover:text-golden-amber transition-colors duration-300">
                  Collections
                </Link>
              </li>
              <li>
                <Link to="/a-propos" className="text-warm-cream/80 hover:text-golden-amber transition-colors duration-300">
                  À propos
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-elegant font-semibold mb-4 text-golden-amber">
              Service Client
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="text-warm-cream/80 hover:text-golden-amber transition-colors duration-300">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/livraison" className="text-warm-cream/80 hover:text-golden-amber transition-colors duration-300">
                  Livraison
                </Link>
              </li>
              <li>
                <Link to="/retours" className="text-warm-cream/80 hover:text-golden-amber transition-colors duration-300">
                  Retours
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-warm-cream/80 hover:text-golden-amber transition-colors duration-300">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-elegant font-semibold mb-4 text-golden-amber">
              Contact
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-golden-amber" />
                <span className="text-warm-cream/80 text-sm">
                  contact@lumiereart.fr
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-golden-amber" />
                <span className="text-warm-cream/80 text-sm">
                  01 23 45 67 89
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-golden-amber" />
                <span className="text-warm-cream/80 text-sm">
                  Paris, France
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-warm-cream/20 mt-8 pt-8 text-center">
          <p className="text-warm-cream/60 text-sm">
            © 2024 LumièreArt. Tous droits réservés. Fait avec ❤️ en France.
          </p>
        </div>
      </div>
    </footer>
  );
};