import type { MetadataRoute } from "next";

import { BRAND } from "@/lib/brand";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${BRAND.nameEn} — ${BRAND.taglineEn}`,
    short_name: BRAND.nameEn,
    description: BRAND.descriptionEn,
    start_url: "/",
    display: "standalone",
    background_color: "#f8fafc",
    theme_color: "#064E3B",
    orientation: "portrait",
    lang: "en",
    icons: [
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-512-maskable.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
