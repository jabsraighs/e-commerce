import { useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ProductCard } from "@/components/products/ProductCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { products } from "@/data/products";
import { 
  Heart, 
  Share2, 
  Minus, 
  Plus, 
  Star,
  Clock,
  Flame,
  Leaf,
  ShoppingCart,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

const ProductPage = () => {
  const { id } = useParams();
  
  // États pour la gestion de l'interface (hooks doivent être appelés en haut du composant)
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  const [isFavorite, setIsFavorite] = useState(false);

  // Trouver le produit correspondant à l'ID
  const product = products.find(p => p.id === id);

  // Si le produit n'existe pas, rediriger vers 404
  if (!product) {
    return <Navigate to="/404" replace />;
  }

  // Créer un tableau d'images (utilise la vraie image du produit)
  const productImages = [product.image];

  // Obtenir les produits similaires (même catégorie, excluant le produit actuel)
  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % productImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? productImages.length - 1 : prev - 1
    );
  };

  const handleQuantityChange = (action) => {
    const stockLimit = 15; // Vous pouvez ajouter ce champ à votre interface Product plus tard
    if (action === "increase" && quantity < stockLimit) {
      setQuantity(prev => prev + 1);
    } else if (action === "decrease" && quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const addToCart = () => {
    console.log(`Ajout au panier: ${quantity}x ${product.name}`);
    // Ici vous ajouteriez la logique pour ajouter au panier
  };

  return (
    <div className="min-h-screen bg-background">
      <Header cartItemsCount={2} />
      
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-muted-foreground mb-8">
          <span>Accueil</span> / <span>Boutique</span> / <span>{product.category}</span> / 
          <span className="text-foreground font-medium"> {product.name}</span>
        </nav>

        {/* Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative aspect-square rounded-lg overflow-hidden bg-warm-cream">
              <img
                src={productImages[currentImageIndex]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {productImages.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 transition-colors duration-300"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 transition-colors duration-300"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </>
              )}
              {/* Badges */}
              <div className="absolute top-4 left-4 space-y-2">
                {product.isSale && (
                  <Badge className="bg-red-500 text-white">Promo</Badge>
                )}
                {product.isNew && (
                  <Badge className="bg-golden-amber text-foreground">Nouveau</Badge>
                )}
              </div>
            </div>

            {/* Thumbnail Images */}
            {productImages.length > 1 && (
              <div className="flex space-x-2">
                {productImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors duration-300 ${
                      index === currentImageIndex 
                        ? "border-golden-amber" 
                        : "border-border hover:border-golden-amber/50"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-elegant font-bold text-foreground mb-2">
                {product.name}
              </h1>
              
              {/* Rating */}
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < 4 // Note simulée de 4/5
                          ? "fill-golden-amber text-golden-amber"
                          : "text-muted-foreground"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  4.0 (23 avis)
                </span>
              </div>

              {/* Price */}
              <div className="flex items-center space-x-3 mb-6">
                <span className="text-3xl font-bold text-golden-amber">
                  {product.price}€
                </span>
                {product.originalPrice && (
                  <span className="text-lg text-muted-foreground line-through">
                    {product.originalPrice}€
                  </span>
                )}
              </div>
            </div>

            {/* Product Features */}
            <div className="grid grid-cols-2 gap-4 py-6 border-y border-border">
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-golden-amber" />
                <span className="text-sm font-medium">{product.burnTime} de combustion</span>
              </div>
              <div className="flex items-center space-x-2">
                <Flame className="h-5 w-5 text-golden-amber" />
                <span className="text-sm font-medium">Parfum {product.scent}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Leaf className="h-5 w-5 text-golden-amber" />
                <span className="text-sm font-medium">100% naturelle</span>
              </div>
              <div className="flex items-center space-x-2">
                <Badge variant="outline" className="border-green-500 text-green-500">
                  Stock: 15
                </Badge>
              </div>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <span className="font-medium">Quantité:</span>
                <div className="flex items-center border border-border rounded-lg">
                  <button
                    onClick={() => handleQuantityChange("decrease")}
                    disabled={quantity <= 1}
                    className="p-2 hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="px-4 py-2 min-w-[3rem] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => handleQuantityChange("increase")}
                    disabled={quantity >= 15}
                    className="p-2 hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="flex space-x-4">
                <Button
                  onClick={addToCart}
                  className="flex-1 bg-golden-amber hover:bg-golden-amber/90 text-foreground font-medium py-3"
                >
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Ajouter au panier
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setIsFavorite(!isFavorite)}
                  className={`px-4 ${isFavorite ? "text-red-500 border-red-500" : ""}`}
                >
                  <Heart className={`h-5 w-5 ${isFavorite ? "fill-current" : ""}`} />
                </Button>
                <Button variant="outline" className="px-4">
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mb-16">
          <div className="border-b border-border mb-6">
            <div className="flex space-x-8">
              {["description", "caracteristiques", "avis"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-4 px-1 font-medium transition-colors duration-300 capitalize ${
                    activeTab === tab
                      ? "text-golden-amber border-b-2 border-golden-amber"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {tab === "caracteristiques" ? "Caractéristiques" : tab}
                </button>
              ))}
            </div>
          </div>

          <div className="max-w-4xl">
            {activeTab === "description" && (
              <div className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
                <div>
                  <h3 className="font-semibold text-foreground mb-3">Caractéristiques principales:</h3>
                  <ul className="space-y-2">
                    {product.ingredients.map((ingredient, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <span className="text-golden-amber mt-1.5">•</span>
                        <span className="text-muted-foreground">{ingredient}</span>
                      </li>
                    ))}
                    <li className="flex items-start space-x-2">
                      <span className="text-golden-amber mt-1.5">•</span>
                      <span className="text-muted-foreground">Taille: {product.size}</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-golden-amber mt-1.5">•</span>
                      <span className="text-muted-foreground">Durée de combustion: {product.burnTime}</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {activeTab === "caracteristiques" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-foreground mb-3">Spécifications</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Durée de combustion:</span>
                      <span className="font-medium">{product.burnTime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Parfum:</span>
                      <span className="font-medium">{product.scent}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Taille:</span>
                      <span className="font-medium">{product.size}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-3">Composition</h3>
                  <div className="space-y-2">
                    {product.ingredients.map((ingredient, index) => (
                      <p key={index} className="text-muted-foreground text-sm">
                        • {ingredient}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "avis" && (
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="text-4xl font-bold text-golden-amber">
                    4.0
                  </div>
                  <div>
                    <div className="flex items-center space-x-1 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < 4
                              ? "fill-golden-amber text-golden-amber"
                              : "text-muted-foreground"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Basé sur 23 avis
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  Les avis clients seront affichés ici. Cette section peut inclure 
                  des commentaires détaillés, des notes par critère, et la possibilité 
                  pour les clients de laisser leur propre avis.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        <section>
          <h2 className="text-2xl md:text-3xl font-elegant font-bold text-foreground mb-8 text-center">
            Produits
            <span className="block text-golden-amber">Similaires</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {relatedProducts.map((product) => (
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
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProductPage;