import { ImageResponse } from "next/og";

import { siteConfig } from "@/config/site";

export const alt = `${siteConfig.name} - ${siteConfig.role}`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        background: "#FF7AAC",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <span
          style={{
            fontSize: "72px",
            fontWeight: "bold",
            color: "#121117",
            letterSpacing: "-2px",
          }}
        >
          {siteConfig.name.toUpperCase()}
        </span>
        <span
          style={{
            fontSize: "32px",
            fontWeight: 500,
            color: "#121117",
            letterSpacing: "-1px",
          }}
        >
          {siteConfig.role}
        </span>
      </div>
    </div>,
    { ...size },
  );
}
