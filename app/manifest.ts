import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Glasshill Pansol · Natural Hot Spring Retreat",
    short_name: "Glasshill",
    description:
      "Private hot spring retreat in Pansol, Calamba, Laguna. Accommodates up to 40 overnight guests with 7 private ensuite rooms, infinity pool, jacuzzi & waterfall.",
    start_url: "/",
    display: "standalone",
    background_color: "#F5EFE3",
    theme_color: "#3B2E22",
    orientation: "portrait-primary",
    scope: "/",
    icons: [
      {
        src: "/icons/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icons/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
