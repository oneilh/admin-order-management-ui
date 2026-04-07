"use client";

import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { fetchGroupBuyOrders, fetchGroupBuys } from "@/utils/fetchBuys";
import { GroupBuyStatusAction } from "@/Types/groupBuy";
import { PaginatedResponse } from "@/Types/common";
import { GroupBuy } from "@/Types/groupBuy";
import { getAccessToken } from "@/utils/auth";
import Product from "@/components/Layout/table/table_components/Product";
import Timeline from "@/components/Layout/table/table_components/Timeline";
import Progress from "@/components/Layout/table/table_components/Progress";
import Badge from "@/components/Badge";
import AmountCollected from "@/components/Layout/table/table_components/AmountCollected";

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

    const queryClient = useQueryClient();

    const [selectedAction, setSelectedAction] = useState<
        GroupBuyStatusAction | ""
    >("");
    const [updating, setUpdating] = useState(false);
    const [updateError, setUpdateError] = useState("");
    const [updateSuccess, setUpdateSuccess] = useState(false);

    if (groupLoading || ordersLoading) return <p>Loading...</p>;
    if (groupError) return <p>Error loading group buy details...</p>;
    if (ordersError) return <p>Error loading group buy orders...</p>;
    if (!group) return <p>Group buy not found</p>;

    const handleStatusUpdate = async () => {
        if (!selectedAction) return;

        setUpdating(true);
        setUpdateError("");
        setUpdateSuccess(false);

        try {
            const response = await fetch("/api/update-group-buy-status", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: getAccessToken(),
                },
                body: JSON.stringify({
                    id: group.id,
                    action: selectedAction,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                setUpdateError(
                    data.msg || data.message || "Failed to update status",
                );
            }

            setUpdateSuccess(true);
            queryClient.setQueryData<PaginatedResponse<GroupBuy>>(
                ["groupBuys"],
                (oldData) => {
                    if (!oldData) return oldData;
                    results: oldData.results.map((s) =>
                        s.id === group.id
                            ? { ...s, group_buy_status: selectedAction }
                            : s,
                    );
                },
            );
        } catch (_err) {
            setUpdateError("Something went wrong. Please try again.");
        } finally {
            setUpdating(false);
        }
    };
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

            {/* Status Update */}
            <div className="p-4 border rounded-lg flex flex-col gap-3">
                <p className="text-sm text-gray-500">Update Group Buy Status</p>

                <select
                    value={selectedAction}
                    onChange={(e) =>
                        setSelectedAction(
                            e.target.value as GroupBuyStatusAction,
                        )
                    }
                    className="border rounded px-3 py-2 text-sm w-full"
                >
                    <option value="">Select new status...</option>
                    <option value="PROCESSING">Processing</option>
                    <option value="SHIPPING">Shipping</option>
                    <option value="PACKAGING">Packaging</option>
                    <option value="READY_FOR_PICKUP">Ready For Pickup</option>
                    <option value="FAILED_PROCESSING">Failed Processing</option>
                    <option value="FAILED_SHIPPING">Failed Shipping</option>
                </select>

                {updateError && (
                    <p className="text-red-500 text-sm">{updateError}</p>
                )}
                {updateSuccess && (
                    <p className="text-green-500 text-sm">
                        Status updated successfully.
                    </p>
                )}

                <button
                    onClick={handleStatusUpdate}
                    disabled={updating || !selectedAction}
                    className="bg-blue-500 text-white px-4 py-2 rounded text-sm disabled:opacity-50"
                >
                    {updating ? "Updating..." : "Update Status"}
                </button>
            </div>
        </section>
    );
};

export default GroupBuyDetailClient;
