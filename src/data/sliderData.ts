import {
  MockCategoriesData,
  PromoSliderData,
} from "../../types/sliderDataTypes";

export const PROMO_SLIDES: PromoSliderData[] = [
  {
    index: 0,
    title: "Four more shots",
    description:
      "Four More Shots Please is an Indian comedy-drama streaming television series on Amazon Prime Video directed by Anu Menon and Nupur Asthana. The series follows the story of four unapologetically flawed women (two in their 30s and two in their early 20s) as they live, love, make mistakes and discover what really makes them tick through friendship and shots of tequila in millennial Mumbai. The series is Amazon Prime Video's first all-women-protagonist Indian original starring Sayani Gupta, Bani J, Kirti Kulhari, and Maanvi Gagroo.",
    buttonText: "Watch Now",
    buttonLink: "/adventure",
    duration: "1h each episode",
    rating: "4.5",
    genre: "Romcom Drama",
    year: "2009",
    image:
      "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1925&auto=format&fit=crop",
  },
  {
    index: 1,
    title: "Schindler's List",
    description:
      "Schindler's List is a 1993 American epic historical drama film directed and produced by Steven Spielberg and written by Steven Zaillian. It is based on the historical novel Schindler's Ark (1982) by Thomas Keneally. The film follows Oskar Schindler, a German industrialist who saved more than a thousand mostly Polish–Jewish refugees from the Holocaust by employing them in his factories during World War II. It stars Liam Neeson as Schindler, Ralph Fiennes as SS officer Amon Göth, and Ben Kingsley as Schindler's Jewish accountant Itzhak Stern.",
    buttonText: "Explore",
    buttonLink: "/drama",
    duration: "3h 15m",
    rating: "5",
    genre: "Drama",
    year: "1993",
    image:
      "https://images.unsplash.com/photo-1733010687907-9f50762a4f9b?q=80&w=1770&auto=format&fit=crop",
  },
  {
    index: 2,
    title: "Inception",
    description:
      "Inception is a 2010 science fiction action heist film written and directed by Christopher Nolan, who also produced it with Emma Thomas, his wife. The film stars Leonardo DiCaprio as a professional thief who steals information by infiltrating the subconscious of his targets. He is offered a chance to have his criminal history erased as payment for the implantation of another person's idea into a target's subconscious.[8] The ensemble cast includes Ken Watanabe, Joseph Gordon-Levitt, Marion Cotillard, Elliot Page,[a] Tom Hardy, Cillian Murphy, Tom Berenger, Dileep Rao, and Michael Caine.",
    buttonText: "Learn More",
    buttonLink: "/movies",
    duration: "2h 30m",
    rating: "5",
    genre: "Sci-Fi Heist",
    year: "2010",
    image:
      "https://images.unsplash.com/photo-1533928298208-27ff66555d8d?q=80&w=1770&auto=format&fit=crop",
  },
];
export const CATEGORIES: MockCategoriesData = {
  genres: {
    title: "Movie Genres",
    items: [
      {
        title: "Action",
        link: "/action",
        count: "243 movies",
        image:
          "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?q=80&w=2056&auto=format&fit=crop",
      },
      {
        title: "Comedy",
        link: "/comedy",
        count: "186 movies",
        image:
          "https://images.unsplash.com/photo-1543584756-8f40a802e14f?q=80&w=1470&auto=format&fit=crop",
      },
      {
        title: "Horror",
        link: "/horror",
        count: "154 movies",
        image:
          "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=1470&auto=format&fit=crop",
      },
      {
        title: "Romance",
        link: "/romance",
        count: "198 movies",
        image:
          "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?q=80&w=1393&auto=format&fit=crop",
      },
    ],
  },
  languages: {
    title: "Languages",
    items: [
      {
        title: "English",
        link: "/english",
        count: "523 movies",
        image:
          "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1494&auto=format&fit=crop",
      },
      {
        title: "Hindi",
        link: "/hindi",
        count: "245 movies",
        image:
          "https://images.unsplash.com/photo-1532375810709-75b1da00537c?q=80&w=1476&auto=format&fit=crop",
      },
      {
        title: "Korean",
        link: "/korean",
        count: "178 movies",
        image:
          "https://images.unsplash.com/photo-1488814753891-99aa32036fd4?q=80&w=1470&auto=format&fit=crop",
      },
      {
        title: "Spanish",
        link: "/spanish",
        count: "156 movies",
        image:
          "https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?q=80&w=1467&auto=format&fit=crop",
      },
    ],
  },
  decades: {
    title: "By Decade",
    items: [
      {
        title: "2020s",
        link: "/2020s",
        count: "167 movies",
        image:
          "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1925&auto=format&fit=crop",
      },
      {
        title: "2010s",
        link: "/2010s",
        count: "345 movies",
        image:
          "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1459&auto=format&fit=crop",
      },
      {
        title: "2000s",
        link: "/2000s",
        count: "289 movies",
        image:
          "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1925&auto=format&fit=crop",
      },
      {
        title: "1990s",
        link: "/1990s",
        count: "234 movies",
        image:
          "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1459&auto=format&fit=crop",
      },
    ],
  },
};
