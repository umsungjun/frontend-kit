import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Frontend Kit - 프론트엔드 플래시카드";
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
          alignItems: "center",
          background: "linear-gradient(135deg, #fff7ed 0%, #ffffff 55%, #f5f5f5 100%)",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        {/* Left accent bar */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: "8px",
            background: "#f97316",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "80px 80px 80px 96px",
            gap: "28px",
          }}
        >
          {/* Icon + Title */}
          <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
            <div
              style={{
                width: "88px",
                height: "88px",
                background: "#f97316",
                borderRadius: "22px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontSize: "42px",
                fontWeight: "800",
                letterSpacing: "-2px",
              }}
            >
              {"</>"}
            </div>
            <span
              style={{
                fontSize: "64px",
                fontWeight: "800",
                color: "#171717",
                letterSpacing: "-2px",
              }}
            >
              Frontend Kit
            </span>
          </div>

          {/* Description */}
          <p
            style={{
              fontSize: "30px",
              color: "#737373",
              margin: 0,
              lineHeight: "1.5",
              maxWidth: "820px",
            }}
          >
            CS, JavaScript, React, HTML/CSS 등{"\n"}
            프론트엔드 지식을 플래시카드로 학습하세요.
          </p>

          {/* Category tags */}
          <div style={{ display: "flex", gap: "12px", marginTop: "4px" }}>
            {["CS", "HTML/CSS", "JavaScript", "React", "자료구조", "알고리즘"].map((cat) => (
              <div
                key={cat}
                style={{
                  background: "#f5f5f5",
                  border: "1.5px solid #e5e5e5",
                  borderRadius: "100px",
                  padding: "8px 20px",
                  fontSize: "20px",
                  color: "#525252",
                  fontWeight: "500",
                }}
              >
                {cat}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
