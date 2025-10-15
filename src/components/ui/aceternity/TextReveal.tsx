import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface TextRevealProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
}

export const TextReveal = ({ text, className, as: Component = "span" }: TextRevealProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const divRef = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (divRef) {
      observer.observe(divRef);
    }

    return () => {
      if (divRef) {
        observer.unobserve(divRef);
      }
    };
  }, []);

  return (
    <div ref={ref} className={cn(
      "inline-block",
      className
    )}>
      <Component
        className={cn(
          "inline-block opacity-0 translate-y-4 transition-all duration-700 ease-out",
          isVisible && "opacity-100 translate-y-0"
        )}
      >
        {text}
      </Component>
    </div>
  );
};
