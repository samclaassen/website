import { ImageResponse } from "next/og";

export const alt = "Legacy Homeware — Home items that become heirlooms.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Typographic share card on linen. No photography. */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#F6EFE6",
          color: "#3B3128",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ fontSize: 22, letterSpacing: 6, textTransform: "uppercase", color: "#6E6155" }}>
          Legacy Homeware
        </div>
        <div style={{ fontSize: 76, marginTop: 36, textAlign: "center", maxWidth: 900, lineHeight: 1.05 }}>
          Home items that become heirlooms.
        </div>
        <div style={{ width: 120, height: 2, background: "#A4502F", marginTop: 44 }} />
      </div>
    ),
    size,
  );
}
