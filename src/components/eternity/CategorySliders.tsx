import { useKeenSlider } from "keen-slider/react";
import { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CategoryCardSkeleton } from "./CardSkeleton";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import { MovieCategory } from "../../../types/sliderDataTypes";
import { CATEGORIES } from "@/data/sliderData";

const CategorySlider = ({
  title,
  items,
  isLoading,
}: {
  title: string;
  items: MovieCategory[];
  isLoading: boolean;
}) => {
  const [loadedImages, setLoadedImages] = useState(new Set());
  const [slidesPerView, setSlidesPerView] = useState(4);
  
  useEffect(() => {
    const updateSlidesPerView = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setSlidesPerView(1.5);
      } else if (width < 768) {
        setSlidesPerView(2);
      } else if (width < 1024) {
        setSlidesPerView(3);
      } else {
        setSlidesPerView(4);
      }
    };

    // Initial check
    updateSlidesPerView();

    // Add resize listener
    window.addEventListener('resize', updateSlidesPerView);
    return () => window.removeEventListener('resize', updateSlidesPerView);
  }, []);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slides: {
      perView: slidesPerView,
      spacing: 16,
    },
    created(s) {
      // Force update on creation to ensure correct slide sizing
      setTimeout(() => {
        s.update();
      }, 100);
    },
  });

  const handleImageLoad = (title: string) => {
    setLoadedImages((prev) => new Set(prev).add(title));
  };

  return (
    <div className="flex flex-col gap-4 px-4 md:px-20 pb-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl md:text-3xl font-bold text-white">{title}</h2>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => instanceRef.current?.prev()}
            className="rounded-full hover:scale-110 transition-all duration-300"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => instanceRef.current?.next()}
            className="rounded-full hover:scale-110 transition-all duration-300"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <div ref={sliderRef} className="keen-slider">
        {isLoading
          ? Array(4)
              .fill(0)
              .map((_, idx) => <CategoryCardSkeleton key={idx} />)
          : items.map((category, idx) => (
              <div key={idx} className="keen-slider__slide">
                <div className="px-2">
                  <Card className="overflow-hidden bg-zinc-900 border-zinc-800 group hover:scale-105 transition-all duration-500">
                    <CardContent className="p-0 relative aspect-[4/3]">
                      {!loadedImages.has(category.title) && (
                        <div className="absolute inset-0 bg-gradient-to-b from-zinc-800 to-zinc-900 animate-pulse" />
                      )}
                      <Image
                        src={category.image}
                        alt={category.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                        onLoad={() => handleImageLoad(category.title)}
                        sizes="(max-width: 640px) 80vw, (max-width: 768px) 40vw, (max-width: 1024px) 30vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                      <div className="absolute bottom-0 left-0 p-4">
                        <h3 className="text-xl font-bold text-white mb-1">
                          {category.title}
                        </h3>
                        <p className="text-sm text-zinc-300">{category.count}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

const CategorySliders = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {Object.entries(CATEGORIES).map(([key, category]) => (
        <CategorySlider
          key={key}
          title={category.title}
          items={category.items}
          isLoading={isLoading}
        />
      ))}
    </div>
  );
};

export default CategorySliders;