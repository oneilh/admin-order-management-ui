import { NextRequest, NextResponse } from "next/server";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL!;

export async function POST(req: NextRequest) {
  const body = await req.text();

  console.log("Login request hitting route.ts");

  const response = await fetch(`${BASE_URL}/sub-admin/v1/login/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body,
  });

  const text = await response.text();
  let data = null;

  if (text) {
    try {
      data = JSON.parse(text);
    } catch {
      data = { message: text };
    }
  }

  return NextResponse.json(data, { status: response.status });
}