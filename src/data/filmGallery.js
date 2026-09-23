import { siyaImages } from "./siyaImages";

const galleryItems = siyaImages.map((poster, index) => ({
  title: "Siya",
  detail: "Gallery / " + String(index + 1).padStart(2, "0"),
  alt: "Siya gallery image " + (index + 1),
  poster,
}));
export const galleryRows = [
  galleryItems.slice(0, Math.ceil(galleryItems.length / 2)),
  galleryItems.slice(Math.ceil(galleryItems.length / 2)),
];
