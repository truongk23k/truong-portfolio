import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Truong LV — Playable Ads Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
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
          background: "linear-gradient(135deg, #060910 0%, #0d0a1a 50%, #080c1a 100%)",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background glow blobs */}
        <div
          style={{
            position: "absolute",
            top: -100,
            left: -100,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "rgba(99,102,241,0.15)",
            filter: "blur(100px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -100,
            right: -100,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "rgba(139,92,246,0.12)",
            filter: "blur(100px)",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 16,
            zIndex: 1,
          }}
        >
          {/* Role pill */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            <div style={{ width: 40, height: 1, background: "rgba(99,102,241,0.6)" }} />
            <span
              style={{
                fontSize: 13,
                fontWeight: 800,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "#818cf8",
                padding: "6px 16px",
                border: "1px solid rgba(99,102,241,0.3)",
                borderRadius: 100,
                background: "rgba(99,102,241,0.08)",
              }}
            >
              Playable Ads Developer
            </span>
            <div style={{ width: 40, height: 1, background: "rgba(99,102,241,0.6)" }} />
          </div>

          {/* Name */}
          <div
            style={{
              fontSize: 84,
              fontWeight: 900,
              color: "white",
              letterSpacing: "-0.02em",
              lineHeight: 1,
            }}
          >
            TRUONG LV
          </div>

          {/* Subtitle */}
          <div
            style={{
              fontSize: 24,
              color: "rgba(148,163,184,0.9)",
              letterSpacing: "0.02em",
            }}
          >
            Unity Developer · Luna Playable · Ha Noi, Vietnam
          </div>

          {/* Stats row */}
          <div style={{ display: "flex", gap: 24, marginTop: 24 }}>
            {[
              { value: "20+", label: "Playables" },
              { value: "7", label: "Ad Networks" },
              { value: "1M+", label: "Installs" },
            ].map((s) => (
              <div
                key={s.label}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "16px 28px",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 16,
                  gap: 4,
                }}
              >
                <span style={{ fontSize: 30, fontWeight: 900, color: "#818cf8" }}>
                  {s.value}
                </span>
                <span style={{ fontSize: 12, color: "rgba(148,163,184,0.7)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em" }}>
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
