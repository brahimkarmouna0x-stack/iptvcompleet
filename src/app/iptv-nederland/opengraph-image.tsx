import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "IPTV Nederland — alle zenders, sport & 4K — IPTV Compleet";

export default function Image() {
  return renderOgImage({
    eyebrow: "IPTV Nederland",
    title: "IPTV Nederland",
    subtitle: "Alle Nederlandse & internationale zenders, voetbal en sport in 4K.",
  });
}
