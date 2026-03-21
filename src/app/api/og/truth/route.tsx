import { ImageResponse } from "next/og";
import { baseURL, person } from "@/resources";
import { truths } from "@/resources/truths";

export const runtime = "nodejs";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const id = url.searchParams.get("id");
  const truth = truths.find((t) => t.id === id);

  if (!truth) {
    return new Response("Not found", { status: 404 });
  }

  async function loadGoogleFont(font: string) {
    const url = `https://fonts.googleapis.com/css2?family=${font}`;
    const css = await (await fetch(url)).text();
    const resource = css.match(/src: url\((.+)\) format\('(opentype|truetype)'\)/);

    if (resource) {
      const response = await fetch(resource[1]);
      if (response.status === 200) {
        return await response.arrayBuffer();
      }
    }
    throw new Error("failed to load font data");
  }

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "1280px",
          height: "720px",
          padding: "80px",
          background: "#0a0a0a",
          color: "white",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Card Container */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "100%",
            background: "rgba(255, 255, 255, 0.03)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "40px",
            padding: "60px",
            position: "relative",
          }}
        >
          {/* Glow Effect */}
          <div
            style={{
              position: "absolute",
              top: "-150px",
              right: "-150px",
              width: "400px",
              height: "400px",
              background: "rgba(0, 183, 255, 0.15)",
              filter: "blur(100px)",
              borderRadius: "50%",
            }}
          />

          {/* Chevrons */}
          <div style={{ display: "flex", marginBottom: "40px" }}>
             <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#00b7ff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="13 17 18 12 13 7"></polyline><polyline points="6 17 11 12 6 7"></polyline></svg>
          </div>

          {/* Quote Content */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flex: 1,
              justifyContent: "center",
            }}
          >
            <span
              style={{
                fontSize: "56px",
                lineHeight: "1.4",
                fontWeight: "600",
                fontStyle: "italic",
                color: "#f5f5f5",
                marginBottom: "20px",
              }}
            >
              {truth.quote}
            </span>
          </div>

          {/* Footer */}
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              gap: "20px",
              marginTop: "auto",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
              <span style={{ fontSize: "32px", color: "#00b7ff", fontWeight: "500" }}>— {truth.author}</span>
              <span style={{ fontSize: "24px", color: "rgba(255, 255, 255, 0.5)" }}>{truth.date}</span>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1280,
      height: 720,
      fonts: [
        {
          name: "Geist",
          data: await loadGoogleFont("Geist:wght@600"),
          style: "normal",
        },
      ],
    }
  );
}
