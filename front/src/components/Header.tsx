import { Button } from "./ui/Button";
import { ShoppingCart, Search, Menu,X  } from "lucide-react";
import {useState} from "react";

const Header = () => {
  const [isMenuOpen,setIsMenuOpen] = useState(false);
    const [isSearchOpen,setIsSearchOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  const toggleSearch = () => {
      setIsSearchOpen(!isSearchOpen);
  }
  return (
    <header className="p-4 justify-between bg-gray-800 text-white">
     <div className="flex items-center justify-between w-full">
       <Button className="md:hidden" onClick={toggleMenu} variant="ghost" size="sm">
         {(isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6"> </Menu>)}
       </Button>
       <div className="flex items-center">
         <h1 className="text-xl font-bold">  E-commerce </h1>
       </div>
       <div className="hidden md:flex">
          <nav className="flex space-x-6">
              <a href="/" className="cursor-pointer hover:text-gray-400">Accueil</a>
              <a href="/products" className="cursor-pointer hover:text-gray-400">Télévision</a>
              <a href="/contact" className="cursor-pointer hover:text-gray-400">Contact</a>
          </nav>
       </div>

       <div className="flex items-center space-x-4">
         <Search className="cursor-pointer hover:text-gray-400"></Search>
         <ShoppingCart className="cursor-pointer hover:text-gray-400" onclick={toggleSearch}>
         </ShoppingCart>
       </div>
     </div>
      {/* Mobile Menu cache en desktop */}
        {isMenuOpen && (
        <div className="flex md:hidden">
              <nav className="flex flex-col bg-gray-700 p-4 space-y-4 border-t">
                  <a href="#"  className="cursor-pointer hover:text-gray-400"  onClick={() => setIsMenuOpen(false)}>Accueil</a>
                  <a href="#"  className="cursor-pointer hover:text-gray-400" onClick={() => setIsMenuOpen(false)}>Télévision</a>
                  <a href="#"  className="cursor-pointer hover:text-gray-400" onClick={() => setIsMenuOpen(false)}>Contact</a>
              </nav>
        </div>
        )}
    </header>

  );
};

export default Header;