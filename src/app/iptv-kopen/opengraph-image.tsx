import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "IPTV kopen in Nederland — IPTV Compleet";

export default function Image() {
  return renderOgImage({
    eyebrow: "IPTV kopen",
    title: "IPTV kopen in Nederland",
    subtitle: "Veilige bestelling, directe activering en streaming in 5 minuten.",
  });
}
