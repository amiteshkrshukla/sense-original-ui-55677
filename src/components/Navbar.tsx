import { Search, ShoppingCart, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-card/80 border-b border-border backdrop-blur-md transition-all duration-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-8">
            <a href="/" className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 inline-block">
              Sense Original
            </a>
            
            {/* Desktop Categories */}
            <div className="hidden md:flex space-x-6">
              <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full">
                Electronics
              </a>
              <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full">
                Fashion
              </a>
              <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full">
                Home & Living
              </a>
              <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full">
                Beauty
              </a>
            </div>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search for products..."
                className="w-full pl-10 bg-secondary border-none focus-visible:ring-primary"
              />
            </div>
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hidden md:flex hover:scale-110 transition-transform duration-300">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative hover:scale-110 transition-transform duration-300">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center animate-glow">
                3
              </span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4 animate-fade-in">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search products..."
                className="w-full pl-10 bg-secondary"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <a href="#" className="px-4 py-2 text-sm font-medium hover:bg-secondary rounded-lg transition-colors">
                Electronics
              </a>
              <a href="#" className="px-4 py-2 text-sm font-medium hover:bg-secondary rounded-lg transition-colors">
                Fashion
              </a>
              <a href="#" className="px-4 py-2 text-sm font-medium hover:bg-secondary rounded-lg transition-colors">
                Home & Living
              </a>
              <a href="#" className="px-4 py-2 text-sm font-medium hover:bg-secondary rounded-lg transition-colors">
                Beauty
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
