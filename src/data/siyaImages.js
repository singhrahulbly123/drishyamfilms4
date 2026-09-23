const images = import.meta.glob("../assets/images/siya/*.jpg", {
  eager: true,
  query: "?url",
  import: "default",
});

export const siyaImages = Object.entries(images)
  .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
  .map(([, image]) => image);
