"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchGroupBuyOrders, fetchGroupBuys } from "@/utils/fetchBuys";

type Props = {
    id: number;
};

const GroupBuyDetailClient = ({ id }: Props) => {
    const {
        data: group,
        isLoading: groupLoading,
        error: groupError,
    } = useQuery({
        queryKey: ["groupBuys"],
        queryFn: fetchGroupBuys,
        select: (data) => data.results.find((s) => s.id === id),
    });

    const {
        data: orders,
        isLoading: ordersLoading,
        error: ordersError,
    } = useQuery({
        queryKey: ["groupBuyOrders", id], // we includes id so each group has its own cache
        queryFn: () => fetchGroupBuyOrders(id),
    });

    if (groupLoading || ordersLoading) return <p>Loading...</p>;
    if (groupError) return <p>Error loading group buy details...</p>;
    if (ordersError) return <p>Error loading group buy orders...</p>;
    if (!group) return <p>Group buy not found</p>;
    return (
        <div>
            <h2>Group Info:</h2>
            <pre>{JSON.stringify(group, null, 2)}</pre>
            <h2>Orders:</h2>
            <pre>{JSON.stringify(orders, null, 2)}</pre>
        </div>
    );
};

export default GroupBuyDetailClient;
