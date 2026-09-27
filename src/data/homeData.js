import kaamyaabVideo from "../assets/slider/kaamyaab.mp4";
import masaanCatalogVideo from "../assets/videos/Masaan_1.mp4";
import dhanakCatalogVideo from "../assets/videos/Dhanak_1.mp4";
import newtonCatalogVideo from "../assets/videos/Newton_4.mp4";
import siyaCatalogVideo from "../assets/videos/Siya_1.mp4";

export const sliderVideos = [
  masaanCatalogVideo,
  siyaCatalogVideo,
  newtonCatalogVideo,
  dhanakCatalogVideo,
  kaamyaabVideo,
];

export const slides = [
  {
    title: "MASAAN",
    kicker: "A STORY OF CONSCIENCE",
    date: "AWARD-WINNING CINEMA",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2200&q=90",
  },
  {
    title: "SIYA",
    kicker: "A DRISHYAM FILMS RELEASE",
    date: "NOW STREAMING",
    image:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=2200&q=90",
  },
  {
    title: "NEWTON",
    kicker: "A STORY OF CONSCIENCE",
    date: "AWARD-WINNING CINEMA",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2200&q=90",
  },
  { title: "DHANAK", kicker: "A DRISHYAM FILMS RELEASE", date: "", video: dhanakCatalogVideo },
  { title: "KAAMYAAB", kicker: "A DRISHYAM FILMS RELEASE", date: "", video: kaamyaabVideo },
];

export const films = [
  {
    title: "Siya",
    trailerUrl: "https://www.youtube.com/watch?v=fYhbW4I-Lwc",
    genre: "Realist Crime Drama",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1000&q=88",
    year: "2022",
    director: "Manish Mundra",
    award: "ZEE5\nDIGITAL PREMIERE",
    acclaim: [
      "IFFI Selection",
      "New York Indian Film Festival",
      "UK Asian Film Festival",
    ],
    video: siyaCatalogVideo,
  },
  {
    year: "2015",
    director: "Neeraj Ghaywan",
    award: "FIPRESCI PRIZE\nCANNES 2015",
    title: "Masaan",
    trailerUrl: "https://www.youtube.com/watch?v=SKJfBo3xMW0",
    genre: "Romance / Drama",
    image:
      "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=1000&q=88",
    acclaim: ["Cannes 2015", "FIPRESCI Prize", "Prix de l Avenir"],
    video: masaanCatalogVideo,
  },
  {
    title: "Dhanak",
    trailerUrl: "https://www.youtube.com/watch?v=7uSpaly_8JQ",
    genre: "Drama",
    image:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1000&q=88",
    year: "2016",
    director: "Nagesh Kukunoor",
    award: "NATIONAL FILM AWARD\nBEST CHILDRENS FILM",
    acclaim: ["Crystal Bear", "Grand Prix", "Berlinale 2015"],
    video: dhanakCatalogVideo,
  },
  {
    title: "Newton",
    trailerUrl: "https://www.youtube.com/watch?v=yU6zMPFd4UU",
    genre: "Black Comedy / Political Satire",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1000&q=88",
    year: "2017",
    director: "Amit V. Masurkar",
    award: "NATIONAL FILM AWARD\nBEST HINDI FILM",
    acclaim: [
      "India Official Entry",
      "CICAE Art Cinema Award",
      "Berlinale 2017",
    ],
    video: newtonCatalogVideo,
  },
];
