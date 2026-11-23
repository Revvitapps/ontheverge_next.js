export type StyleOption = {
  slug: "regal" | "joyful" | "horizon";
  number: string;
  name: string;
  feel: string;
  description: string;
  swatches: string[];
  ground: string;
  ink: string;
};

export const styleOptions: StyleOption[] = [
  {
    slug: "regal",
    number: "One",
    name: "Regal",
    feel: "Elegant · reverent · timeless",
    description:
      "Deep navy and gold with classic serif type. Quiet and dignified, like a candlelit sanctuary. Events read like a Sunday bulletin.",
    swatches: ["#0B1F29", "#13303E", "#BC9045", "#F1CD79"],
    ground: "#0B1F29",
    ink: "#F6F3EC",
  },
  {
    slug: "joyful",
    number: "Two",
    name: "Joyful",
    feel: "Warm · vibrant · celebratory",
    description:
      "Choir-robe purple, marigold and sunset clay around the logo's navy and gold. Bold type, arched photo frames and a whole lot of joy.",
    swatches: ["#4A1F4F", "#E9A23B", "#C4553A", "#13303E"],
    ground: "#4A1F4F",
    ink: "#FFF7EC",
  },
  {
    slug: "horizon",
    number: "Three",
    name: "Horizon",
    feel: "Light · airy · modern",
    description:
      "Clean white space, soft teal and a single gold star that rises over the horizon as you scroll. Calm, fresh and contemporary.",
    swatches: ["#F8FAFA", "#E7EEF0", "#1E4C63", "#BC9045"],
    ground: "#E7EEF0",
    ink: "#13303E",
  },
];
