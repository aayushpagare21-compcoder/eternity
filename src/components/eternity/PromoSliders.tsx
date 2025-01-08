import Image from "next/image";
import { Viggenette } from "../shared/Viggenette";
import { Badge } from "../ui/badge";
import { Clock, Info, Play, Star } from "lucide-react";
import { Button } from "../ui/button";
import { PromoSliderData } from "../../../types/sliderDataTypes";
import { useEffect, useState } from "react";
import LoadingSkeleton from "./LoadingSkeleton";
import { useKeenSlider } from "keen-slider/react";
import { PROMO_SLIDES } from "@/data/sliderData";
import { cn } from "@/lib/utils";

const PromoSlider = (slide: PromoSliderData) => {
  const { title, image, index, genre, duration, rating, year, description } =
    slide;
  return (
    <div key={index} className="keen-slider__slide relative">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover brightness-50 h-full"
        priority={index === 0}
        loading={index === 0 ? "eager" : "lazy"}
      />
      <Viggenette />
      <div className="absolute bottom-16 left-0 right-0 p-8 md:px-24 py-16 flex flex-col">
        <div className="space-y-2 mb-4 w-full">
          <Badge
            variant="secondary"
            className="mb-4 bg-red-500/10 text-red-500 hover:bg-red-500/20"
          >
            {genre}
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 font-[family-name:var(--font-geist-sans)]">
            {title}
          </h1>
          <div className="flex items-center gap-4 text-zinc-300 mb-4 flex-wrap">
            <span className="flex items-center text-sm sm:text-base">
              <Clock className="w-4 h-4 mr-1" />
              {duration}
            </span>
            <span className="flex items-center text-sm sm:text-base">
              <Star className="w-4 h-4 mr-1 text-yellow-400" />
              {rating}
            </span>
            <span className="text-sm sm:text-base">{year}</span>
          </div>
        </div>

        <p className="text-zinc-300 max-w-2xl mb-8 line-clamp-3 text-xs sm:text-sm md:text-base">
          {description}
        </p>

        <div className="flex gap-4 flex-wrap">
          <Button
            size="lg"
            className="bg-red-600 hover:bg-red-700 transform hover:scale-105 transition-all duration-300"
          >
            <Play className="w-4 h-4 mr-2" /> Watch Now
          </Button>
          <Button
            size="lg"
            variant="secondary"
            className="transform hover:scale-105 transition-all duration-300"
          >
            <Info className="w-4 h-4 mr-2" /> More Info
          </Button>
        </div>
      </div>
    </div>
  );
};

const PromoSliders = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 1 },
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    defaultAnimation: {
      duration: 5000,
      easing: (t) => 1 - Math.pow(1 - t, 5),
    },
  });

  useEffect(() => {
    const timer = setInterval(() => {
      instanceRef.current?.next();
    }, 10000);
    return () => clearInterval(timer);
  }, [instanceRef]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setImagesLoaded(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!imagesLoaded) {
    return <LoadingSkeleton />;
  }

  return (
    <div className="min-h-screen">
      <div className="relative h-[90vh] w-full">
        <div ref={sliderRef} className="keen-slider h-full mb-16">
          {PROMO_SLIDES.map((slide) => (
            <PromoSlider
              description={slide.description}
              duration={slide.duration}
              genre={slide.genre}
              image={slide.image}
              key={slide.index}
              index={slide.index}
              rating={slide.rating}
              title={slide.title}
              year={slide.year}
              buttonLink={slide.buttonLink}
              buttonText={slide.buttonText}
            />
          ))}
        </div>

        {/* Responsive Slider Navigation */}
        {loaded && instanceRef.current && (
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
            {[...Array(instanceRef.current.track.details.slides.length)].map(
              (_, idx) => (
                <button
                  key={idx}
                  onClick={() => instanceRef.current?.moveToIdx(idx)}
                  className={cn(
                    "w-8 sm:w-12 h-1 rounded-full transition-all duration-300",
                    currentSlide === idx
                      ? "bg-red-600"
                      : "bg-zinc-600/50 hover:bg-zinc-600",
                  )}
                />
              ),
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default PromoSliders;
