import { ImageResponse } from "next/og";

export const alt = "Tranqy — websites that ship";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0e0f14",
          color: "#e8eaed",
          padding: "80px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          fontFamily: "monospace",
        }}
      >
        <div
          style={{
            fontSize: 140,
            fontWeight: 600,
            display: "flex",
            letterSpacing: "-0.03em",
          }}
        >
          <span>tranqy</span>
          <span style={{ color: "#7fe5c9" }}>.</span>
          <span>com</span>
        </div>
        <div
          style={{
            fontSize: 36,
            color: "#8a8f9c",
            marginTop: 24,
            display: "flex",
          }}
        >
          Built quiet · runs loud
        </div>
      </div>
    ),
    size,
  );
}
