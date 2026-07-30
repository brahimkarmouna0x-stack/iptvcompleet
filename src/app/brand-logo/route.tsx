import { ImageResponse } from "next/og";

/**
 * Code-generated brand mark PNG. Served as a real URL so it can be referenced directly by
 * schema.org Organization/Product/Service `logo`/`image` fields and as the
 * default OG/Twitter card fallback for routes without their own
 * `opengraph-image.tsx` — external crawlers fetch this URL directly, so it
 * isn't subject to next/image's local-pattern allow-list.
 */
export const contentType = "image/png";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#060B16",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "16px",
            display: "flex",
          }}
        >
          <div style={{ flex: 1, background: "#AE1C28" }} />
          <div style={{ flex: 1, background: "#FFFFFF" }} />
          <div style={{ flex: 1, background: "#21468B" }} />
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "28px" }}>
          <div
            style={{
              width: "140px",
              height: "140px",
              borderRadius: "36px",
              background: "#21468B",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: 0,
                height: 0,
                borderTop: "34px solid transparent",
                borderBottom: "34px solid transparent",
                borderLeft: "52px solid #AE1C28",
                marginLeft: "10px",
              }}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", fontSize: "84px", fontWeight: 800 }}>
              <span style={{ color: "#EF4444" }}>IPTV</span>
              <span style={{ color: "#ffffff", marginLeft: "20px" }}>
                Compleet
              </span>
            </div>
            <div
              style={{
                fontSize: "28px",
                fontWeight: 600,
                color: "#C7CDD6",
                marginTop: "6px",
              }}
            >
              Het complete IPTV-abonnement in Nederland
            </div>
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
