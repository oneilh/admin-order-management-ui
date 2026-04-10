import { NextRequest, NextResponse } from "next/server";
import { BASE_URL } from "@/utils/auth";

export async function POST(req: NextRequest) {
    try {
        const authHeader = req.headers.get("Authorization");

        if (!authHeader) {
            return NextResponse.json(
                { error: "Authorization header missing" },
                { status: 401 },
            );
        }

        let body: { id?: string; action?: string };
        try {
            body = await req.json();
        } catch {
            return NextResponse.json(
                { error: "Invalid JSON body" },
                { status: 400 },
            );
        }

        if (!body?.id || !body?.action) {
            return NextResponse.json(
                { error: "Missing required fields: id, action" },
                { status: 400 },
            );
        }

        const response = await fetch(
            `${BASE_URL}/sub-admin/v1/update-group-buy-order-status/`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: authHeader,
                },
                body: JSON.stringify(body),
            },
        );
        let data;
        const contentType = response.headers.get("content-type");
        if (contentType?.includes("application/json")) {
            data = await response.json();
        } else {
            const text = await response.text();
            data = { message: text || "No response body" };
        }
        return NextResponse.json(data, { status: response.status });
    } catch (error) {
        console.error("API route error:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 },
        );
    }
}
