import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ProductCard } from "@/components/products/ProductCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { products, categories } from "@/data/products";
import { Filter, SlidersHorizontal } from "lucide-react";

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [sortBy, setSortBy] = useState("name");

  const filteredProducts = products.filter(product => 
    selectedCategory === "Tous" || product.category === selectedCategory
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-asc":
        return a.price - b.price;
      case "price-desc":
        return b.price - a.price;
      case "name":
      default:
        return a.name.localeCompare(b.name);
    }
  });

  return (
    <div className="min-h-screen bg-background">
      <Header cartItemsCount={2} />
      
      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-elegant font-bold mb-4 text-foreground">
            Notre
            <span className="block text-golden-amber">Boutique</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explorez notre collection complète de bougies artisanales, 
            chacune créée avec passion pour illuminer vos moments précieux.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-warm-cream rounded-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            {/* Categories */}
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Filter className="h-5 w-5 text-golden-amber" />
                <span className="font-medium text-foreground">Catégories</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Badge
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    className={`cursor-pointer hover:bg-golden-amber hover:text-foreground transition-colors duration-300 ${
                      selectedCategory === category ? "bg-golden-amber text-foreground" : ""
                    }`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Sort */}
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <SlidersHorizontal className="h-5 w-5 text-golden-amber" />
                <span className="font-medium text-foreground">Trier par</span>
              </div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-background border border-border rounded-md px-3 py-2 text-foreground focus:ring-2 focus:ring-golden-amber focus:border-transparent"
              >
                <option value="name">Nom (A-Z)</option>
                <option value="price-asc">Prix croissant</option>
                <option value="price-desc">Prix décroissant</option>
              </select>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {sortedProducts.map((product) => (
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

        {/* Results Info */}
        <div className="text-center text-muted-foreground">
          <p>
            {sortedProducts.length} produit{sortedProducts.length > 1 ? "s" : ""} 
            {selectedCategory !== "Tous" && ` dans la catégorie "${selectedCategory}"`}
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Shop;