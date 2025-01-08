"use client";
import "keen-slider/keen-slider.min.css";
import PromoSlider from "./PromoSliders";
import CategorySliders from "./CategorySliders";
const LandingPage = () => {
  return (
    <div className="bg-gradient-to-b from-zinc-900 via-zinc-900 to-zinc-950">
      <PromoSlider />
      <CategorySliders />
    </div>
  );
};

export default LandingPage;
