import { NextRequest, NextResponse } from "next/server";

const WP_MEDIA_ORIGIN =
  process.env.WP_MEDIA_ORIGIN ?? "https://dev.vagneriga.lv/wp-content/uploads";

function sanitizePath(segments: string[]) {
  const cleaned = segments
    .filter(Boolean)
    .map((segment) => segment.replace(/[^a-zA-Z0-9\-._/]/g, ""));

  if (cleaned.length === 0) {
    return null;
  }

  const joined = cleaned.join("/");
  if (joined.includes("..")) {
    return null;
  }

  return joined;
}

export async function GET(
  _request: NextRequest,
  context: { params: Promise<{ path: string[] }> }
) {
  const { path } = await context.params;
  const safePath = sanitizePath(path);

  if (!safePath) {
    return NextResponse.json({ error: "Invalid media path" }, { status: 400 });
  }

  const sourceUrl = `${WP_MEDIA_ORIGIN}/${safePath}`;
  const upstream = await fetch(sourceUrl, {
    headers: { Accept: "image/*" },
    next: { revalidate: 300 },
  });

  if (!upstream.ok || !upstream.body) {
    return NextResponse.json(
      { error: "Media not found", source: sourceUrl },
      { status: upstream.status || 404 }
    );
  }

  return new NextResponse(upstream.body, {
    headers: {
      "Content-Type":
        upstream.headers.get("content-type") ?? "application/octet-stream",
      "Cache-Control": "public, max-age=300, s-maxage=300, stale-while-revalidate=60",
    },
  });
}
