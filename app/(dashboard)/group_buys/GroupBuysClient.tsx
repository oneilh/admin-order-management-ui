"use client";

import { useQuery } from "@tanstack/react-query";
import { getAccessToken } from "@/utils/auth";
import { GroupBuy } from "@/Types/groupBuy";
import { PaginatedResponse } from "@/Types/common";
import { groupBuyCols } from "@/data/groupBuy_prod_and_users_columns";
import GroupBuyRows from "./GroupBuyRows";
import Table from "@/components/Layout/table/Table";
import EmptyState from "@/components/EmptyState";

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
        queryKey: ["groupBuys"],
        queryFn: fetchGroupBuys,
    });

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading single buys</p>;

    const groupBuys = data?.results ?? [];

    return (
        <Table columns={groupBuyCols}>
            {groupBuys.length === 0 ? (
                <EmptyState message="No active group buys found" />
            ) : (
                <GroupBuyRows data={groupBuys} />
            )}
        </Table>
    );
}
