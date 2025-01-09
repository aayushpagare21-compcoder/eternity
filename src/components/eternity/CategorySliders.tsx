import { useKeenSlider } from "keen-slider/react";
import { useState } from "react";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import { MovieCategory } from "../../../types/sliderDataTypes";
import { CATEGORIES } from "@/data/sliderData";
import "keen-slider/keen-slider.min.css";

const CategorySlider = ({
  title,
  items,
}: {
  title: string;
  items: MovieCategory[];
}) => {
  const [loadedImages, setLoadedImages] = useState(new Set());
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    breakpoints: {
      "(max-width: 3000px)": {
        slides: { perView: 4, spacing: 16 },
      },
      "(max-width: 1300px)": {
        slides: { perView: 3, spacing: 16 },
      },
      "(max-width: 500px)": {
        slides: { perView: 1.5, spacing: 16 },
      },
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
        {items.map((category, idx) => (
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
  return (
    <div>
      {Object.entries(CATEGORIES).map(([key, category]) => (
        <CategorySlider
          key={key}
          title={category.title}
          items={category.items}
        />
      ))}
    </div>
  );
};

export default CategorySliders;
