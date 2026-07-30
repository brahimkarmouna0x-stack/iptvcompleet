import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "IPTV Compleet — Premium IPTV-abonnement in Nederland";

export default function Image() {
  return renderOgImage({
    eyebrow: "Premium IPTV \u00b7 Nederland",
    title: "IPTV-abonnement Nederland — 31.000+ zenders in 4K",
    subtitle: "Duizenden zenders & films in 4K/8K. Directe activering.",
  });
}
