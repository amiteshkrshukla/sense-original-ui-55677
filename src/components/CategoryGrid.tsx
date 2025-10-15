import { Smartphone, Shirt, Home, Sparkles } from "lucide-react";
import { FloatingCard } from "@/components/ui/aceternity/FloatingCard";

const categories = [
  {
    name: "Electronics",
    icon: Smartphone,
    count: "2,450+ items",
    color: "from-primary/20 to-primary/5",
  },
  {
    name: "Fashion",
    icon: Shirt,
    count: "3,200+ items",
    color: "from-accent/20 to-accent/5",
  },
  {
    name: "Home & Living",
    icon: Home,
    count: "1,800+ items",
    color: "from-primary/20 to-primary/5",
  },
  {
    name: "Beauty",
    icon: Sparkles,
    count: "950+ items",
    color: "from-accent/20 to-accent/5",
  },
];

const CategoryGrid = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Shop by Category</h2>
          <p className="text-muted-foreground">Discover what you love across all categories</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <FloatingCard
                key={category.name}
                intensity={10}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` } as React.CSSProperties}
              >
                <div className="group relative bg-card rounded-2xl p-6 border border-border hover:border-primary/50 transition-all duration-300 cursor-pointer hover:shadow-lg"
                >
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-1">{category.name}</h3>
                  <p className="text-sm text-muted-foreground">{category.count}</p>
                </div>
              </div>
              </FloatingCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
