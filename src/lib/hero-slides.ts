export type HeroSlide = {
  image: string;
  mobileImage?: string;
  quote: string;
  caption: string;
  position: string;
  mobilePosition?: string;
};

export const heroSlides: HeroSlide[] = [
  {
    image: "/images/hero-1.webp",
    mobileImage: "/images/hero-1-mobile.webp",
    quote: "Release is not force. It is permission.",
    caption: "fascia · mobility · recovery",
    position: "object-center",
    mobilePosition: "object-center",
  },
  {
    image: "/images/hero-2.webp",
    mobileImage: "/images/hero-2.webp",
    quote: "Your body remembers where it learned to hold.",
    caption: "breath · structure · awareness",
    position: "object-center",
    mobilePosition: "object-[45%_50%]",
  },
  {
    image: "/images/hero-3.webp",
    mobileImage: "/images/hero-3.webp",
    quote: "Move with less resistance.",
    caption: "restore · align · flow",
    position: "object-[65%_50%]",
    mobilePosition: "object-[52%_50%]",
  },
  {
    image: "/images/hero-4a.webp",
    mobileImage: "/images/hero-4-mobile.webp",
    quote: "Return to flow.",
    caption: "integrative movement therapy",
    position: "object-center",
    mobilePosition: "object-center",
  },
];
