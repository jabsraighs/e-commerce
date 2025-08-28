import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/home/Hero";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { AboutSection } from "@/components/home/AboutSection";
import { Footer } from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header cartItemsCount={0} />
      <Hero />
      <FeaturedProducts />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default Index;
