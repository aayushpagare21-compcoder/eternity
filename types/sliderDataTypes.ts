export interface PromoSliderData {
  title: string;
  description: string;
  image: string;
  index: number;
  genre: string;
  duration: string;
  rating: string;
  year: string;
  buttonText: string;
  buttonLink: string;
}

export interface MovieCategory {
  title: string;
  link: string;
  count: string;
  image: string;
}

export interface CategorySection {
  title: string;
  items: MovieCategory[];
}

export type MockCategoriesData = {
  genres: CategorySection;
  languages: CategorySection;
  decades: CategorySection;

  // Add more category sections as needed
};
