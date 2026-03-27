import { NextRequest, NextResponse } from "next/server";
import { BASE_URL } from "@/utils/auth";

export async function GET(req: NextRequest) {
    // Get the token from the request header
    const authHeader = req.headers.get("Authorization");

    // Get query params from the URL (like ?type=ACTIVE)
    const { searchParams } = new URL(req.url);
    const type = searchParams.get("type") ?? "ACTIVE";

    console.log("Fetching single buys, type:", type);

    const response = await fetch(
        `${BASE_URL}/sub-admin/v1/single-buys/?type=${type}`,
        {
            headers: {
                Authorization: authHeader ?? "",
            },
        },
    );

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
