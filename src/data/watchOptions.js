const providers = {
  disney: {
    name: "Disney+",
    mark: "Disney+",
    tone: "disney",
    href: "https://www.disneyplus.com/",
  },
  hulu: {
    name: "Hulu",
    mark: "hulu",
    tone: "hulu",
    href: "https://www.hulu.com/",
  },
  prime: {
    name: "Prime Video",
    mark: "prime video",
    tone: "prime",
    href: "https://www.primevideo.com/search?phrase=Siya",
  },
  apple: {
    name: "Apple TV",
    mark: "tv",
    tone: "apple",
    href: "https://tv.apple.com/search?term=Siya",
  },
  fandango: {
    name: "Fandango at Home",
    mark: "F",
    tone: "fandango",
    href: "https://athome.fandango.com/",
  },
  youtube: {
    name: "YouTube",
    mark: "▶",
    tone: "youtube",
    href: "https://www.youtube.com/results?search_query=Siya+2022+movie",
  },
  amazon: {
    name: "Amazon",
    mark: "amazon",
    tone: "prime",
    href: "https://www.amazon.in/s?k=Siya+2022+blu+ray",
  },
  walmart: {
    name: "Walmart",
    mark: "✳",
    tone: "walmart",
    href: "https://www.walmart.com/search?q=Siya+blu+ray",
  },
};

export const watchOptions = [
  {
    id: "stream",
    label: "Stream On",
    description: "Settle in. Let the story unfold.",
    providers: [providers.disney, providers.hulu],
  },
  {
    id: "buy",
    label: "Buy On",
    description: "A story to return to, whenever you want.",
    providers: [
      providers.prime,
      providers.apple,
      providers.fandango,
      providers.youtube,
    ],
  },
  {
    id: "rent",
    label: "Rent On",
    description: "Make tonight a night for cinema.",
    providers: [providers.prime, providers.apple, providers.fandango],
  },
  {
    id: "bluray",
    label: "Own Blu-ray From",
    description: "For the shelf. For the love of cinema.",
    providers: [providers.amazon, providers.walmart],
  },
];
