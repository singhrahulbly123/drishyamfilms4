import { siyaImages } from "./siyaImages";
import masaan from "../assets/images/masaan-our-stories.jpg";
import masaanPoster from "../assets/images/masaan-poster.jpg";
import dhanak from "../assets/images/dhanak-poster.jpg";
import newton from "../assets/images/newton-poster.png";
import siya from "../assets/images/siya-gallery-poster.jpg";

const stills = siyaImages.map((image, index) => ({
  image,
  film: "Siya",
  category: "Film stills",
  title: `Siya / Frame ${String(index + 1).padStart(2, "0")}`,
  alt: `A moment from Siya, film still ${index + 1}`,
}));
export const gallery = [
  {
    image: masaan,
    film: "Masaan",
    category: "Film stills",
    title: "Masaan / A world by the river",
    alt: "A cinematic frame from Masaan",
  },
  {
    image: dhanak,
    film: "Dhanak",
    category: "Posters",
    title: "Dhanak / A journey of hope",
    alt: "Dhanak film poster",
  },
  ...stills.slice(0, 2),
  {
    image: newton,
    film: "Newton",
    category: "Posters",
    title: "Newton / A matter of conviction",
    alt: "Newton film poster",
  },
  {
    image: masaanPoster,
    film: "Masaan",
    category: "Posters",
    title: "Masaan / The official poster",
    alt: "Masaan film poster",
  },
  ...stills.slice(2),
  {
    image: siya,
    film: "Siya",
    category: "Posters",
    title: "Siya / A voice that matters",
    alt: "Siya film artwork",
  },
];
export const awards = [
  {
    film: "Masaan",
    event: "Cannes Film Festival",
    year: "2015",
    prize: "FIPRESCI Prize",
    note: "An intimate story. An international resonance.",
    image: masaanPoster,
    type: "International recognition",
  },
  {
    film: "Masaan",
    event: "Cannes Film Festival",
    year: "2015",
    prize: "Prix de l’Avenir",
    note: "A distinctive new voice in Indian cinema.",
    image: masaanPoster,
    type: "International recognition",
  },
  {
    film: "Dhanak",
    event: "Berlin International Film Festival",
    year: "2015",
    prize: "Crystal Bear · Grand Prix",
    note: "A little hope can travel a very long way.",
    image: dhanak,
    type: "International recognition",
  },
  {
    film: "Dhanak",
    event: "National Film Awards",
    year: null,
    prize: "Best Children’s Film",
    note: "Celebrating the wonder of a child’s world.",
    image: dhanak,
    type: "National recognition",
  },
  {
    film: "Newton",
    event: "Berlin International Film Festival",
    year: "2017",
    prize: "CICAE Art Cinema Award",
    note: "A story of conscience, seen around the world.",
    image: newton,
    type: "International recognition",
  },
  {
    film: "Newton",
    event: "National Film Awards",
    year: null,
    prize: "Best Hindi Film",
    note: "Independent in spirit. Universal in impact.",
    image: newton,
    type: "National recognition",
  },
];
