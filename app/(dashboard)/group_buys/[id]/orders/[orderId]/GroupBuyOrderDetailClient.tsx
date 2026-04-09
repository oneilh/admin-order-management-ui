"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchGroupBuyOrders } from "@/utils/fetchBuys";

type Props = {
    id: number;
    orderId: number;
};

const GroupBuyOrderDetailClient = ({ id, orderId }: Props) => {
    const {
        data: group,
        isLoading,
        error,
    } = useQuery({
        queryKey: ["groupBuyOrder", id],
        queryFn: () => fetchGroupBuyOrders(id),
        select: (data) => data.results.find((s) => s.id === orderId),
    });

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading group buy order details...</p>;
    if (!group) return <p>Group buy order not found</p>;
    return (
        <div>
            <h1 className="text-lg font-bold mb-4">
                GroupBuy Order Detail Client
            </h1>
            <pre>{JSON.stringify(group, null, 2)}</pre>
        </div>
    );
};

export default GroupBuyOrderDetailClient;
