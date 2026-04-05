import { NextRequest, NextResponse } from "next/server";
import { BASE_URL } from "@/utils/auth";

export async function GET(req: NextRequest) {
    try {
        const authHeader = req.headers.get("Authorization");
        if (!authHeader) {
            return NextResponse.json(
                { error: "Authorization header missing" },
                { status: 401 },
            );
        }

        const { searchParams } = new URL(req.url);
        const type = searchParams.get("type") ?? "ACTIVE";

        const response = await fetch(
            `${BASE_URL}/sub-admin/v1/group-buys/?type=${type}`,
            {
                headers: {
                    Authorization: authHeader,
                },
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
        console.error("Error fetching group buys:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 },
        );
    }
}
