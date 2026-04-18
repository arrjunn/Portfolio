import { ImageResponse } from "next/og";

export const alt = "Arjun Varshney — AI Product Manager & Builder";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background:
            "linear-gradient(135deg, #0b0b0e 0%, #14141a 45%, #1a1220 100%)",
          color: "#f5f0e8",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            fontSize: 22,
            letterSpacing: 2,
            textTransform: "uppercase",
            color: "#a89878",
          }}
        >
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: 999,
              background: "#8a7a5a",
            }}
          />
          arjunvarshney.dev
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              fontSize: 104,
              lineHeight: 1,
              fontWeight: 800,
              letterSpacing: -3,
              color: "#f5f0e8",
              display: "flex",
            }}
          >
            Arjun Varshney
            <span style={{ color: "#c0a26c", marginLeft: 6 }}>.</span>
          </div>
          <div
            style={{
              fontSize: 42,
              fontStyle: "italic",
              color: "#c8b894",
              display: "flex",
            }}
          >
            AI Product Manager &amp; Builder
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 22,
            color: "#8a7a5a",
          }}
        >
          <span>Turning user insights into products that matter.</span>
          <span>Open to PM internships</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
