import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "IPTV Smarters Pro configureren — IPTV Compleet";

export default function Image() {
  return renderOgImage({
    eyebrow: "IPTV Smarters Pro",
    title: "IPTV Smarters Pro configureren",
    subtitle: "Verbinding via M3U of Xtream Codes \u2014 stap voor stap.",
  });
}
