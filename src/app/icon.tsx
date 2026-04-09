import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#121214",
          borderRadius: 6,
          color: "#6C9CFC",
          fontSize: 16,
          fontWeight: 700,
          fontFamily: "sans-serif",
          letterSpacing: "-0.5px",
        }}
      >
        AV
      </div>
    ),
    { ...size }
  );
}
