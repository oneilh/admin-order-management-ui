"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchGroupBuyOrders, fetchGroupBuys } from "@/utils/fetchBuys";
import Product from "@/components/Layout/table/table_components/Product";
import Timeline from "@/components/Layout/table/table_components/Timeline";
import Progress from "@/components/Layout/table/table_components/Progress";
import Badge from "@/components/Badge";
import AmountCollected from "@/components/Layout/table/table_components/AmountCollected";
import Image from "next/image";

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
        <section className="flex flex-col gap-6 mt-4">
            <Product id={group.id} product={group.product} />
            <Timeline
                start={group.created_at}
                end={group.expires_at}
                duration={group.group_buy_duration}
            />
            <Progress
                current={group.group_buy_order_units_quantity}
                goal={group.group_buy_unit_goal}
                percent={group.group_buy_percentage}
            />
            <AmountCollected amt_collected={group.total_amount_collected} />
            <Badge status={group.group_buy_status} />
        </section>
    );
};

export default GroupBuyDetailClient;
