"use client";

import { useQuery } from "@tanstack/react-query";
import { getAccessToken } from "@/utils/auth";
import { GroupBuy } from "@/Types/groupBuy";
import { PaginatedResponse } from "@/Types/common";

const fetchGroupBuys = async (): Promise<PaginatedResponse<GroupBuy>> => {
    const response = await fetch("/api/group-buys?type=ACTIVE", {
        headers: {
            Authorization: getAccessToken(),
        },
    });

    if (!response.ok) {
        throw new Error("Failed to fetch group buys");
    }
    return response.json();
};

export default function GroupBuysClient() {
    const { data, isLoading, error } = useQuery({
        queryKey: ["group-buys"],
        queryFn: fetchGroupBuys,
    });

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading single buys</p>;

    return (
        <div>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
}
