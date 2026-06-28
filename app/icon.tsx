import { ImageResponse } from "next/og";

export const size = { width: 512, height: 512 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #064E3B 0%, #0F766E 100%)",
          borderRadius: 112,
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            bottom: 96,
            width: 160,
            height: 140,
            border: "16px solid rgba(255,255,255,0.95)",
            borderTop: "none",
            borderBottomLeftRadius: 80,
            borderBottomRightRadius: 80,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 96,
            width: 8,
            height: 100,
            background: "rgba(255,255,255,0.85)",
            borderRadius: 4,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 88,
            right: 88,
            width: 116,
            height: 116,
            borderRadius: "50%",
            background: "#FBBF24",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 8px 24px rgba(2,44,34,0.35)",
          }}
        >
          <div
            style={{
              width: 44,
              height: 26,
              borderLeft: "14px solid #065F46",
              borderBottom: "14px solid #065F46",
              marginTop: -8,
              marginLeft: 4,
            }}
          />
        </div>
      </div>
    ),
    { ...size },
  );
}
