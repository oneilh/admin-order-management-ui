"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchGroupBuyOrders, fetchGroupBuys } from "@/utils/fetchBuys";

type Props = {
    id: number;
};

const GroupBuyDetailClient = ({ id }: Props) => {
    const { data: group } = useQuery({
        queryKey: ["groupBuys"],
        queryFn: fetchGroupBuys,
        select: (data) => data.results.find((s) => s.id === id),
    });

    const { data: orders } = useQuery({
        queryKey: ["groupBuyOrders", id], // includes id so each group has its own cache
        queryFn: () => fetchGroupBuyOrders(id),
    });
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
