"use client";

import { useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchGroupBuyOrders } from "@/utils/fetchBuys";
import {
    GroupBuyOrderStatusAction,
    GroupBuyOrderType,
} from "@/Types/groupBuyOrder";
import { authFetch } from "@/utils/auth";
import { PaginatedResponse } from "@/Types/common";

type Props = {
    id: number;
    orderId: number;
};

const GroupBuyOrderDetailClient = ({ id, orderId }: Props) => {
    const queryClient = useQueryClient();
    const {
        data: order,
        isLoading,
        error,
    } = useQuery({
        queryKey: ["groupBuyOrders", id],
        queryFn: () => fetchGroupBuyOrders(id),
        select: (data) => data.results.find((s) => s.id === orderId),
    });

    const [selectedAction, setSelectedAction] = useState<
        GroupBuyOrderStatusAction | ""
    >("");
    const [updating, setUpdating] = useState(false);
    const [updateError, setUpdateError] = useState("");
    const [updateSuccess, setUpdateSuccess] = useState(false);

    const handleStatusUpdate = async () => {
        if (!selectedAction) return;

        setUpdating(true);
        setUpdateError("");
        setUpdateSuccess(false);

        try {
            const response = await authFetch("/api/update-group-buy-order-status", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    id: order?.id,
                    action: selectedAction,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                setUpdateError(
                    data.msg || data.message || "Failed to update status",
                );
                return;
            }
            setUpdateSuccess(true);

            queryClient.setQueryData<PaginatedResponse<GroupBuyOrderType>>(
                ["groupBuyOrder", id],
                (oldData) => {
                    if (!oldData) return oldData;
                    return {
                        ...oldData,
                        results: oldData.results.map((s) =>
                            s.id === orderId
                                ? { ...s, general_order_status: selectedAction }
                                : s,
                        ),
                    };
                },
            );
        } catch (_err) {
            setUpdateError("Something went wrong. Please try again.");
        } finally {
            setUpdating(false);
        }
    };

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading group buy order details...</p>;
    if (!order) return <p>Group buy order not found</p>;
    return (
        <section className="flex flex-col gap-4 p-4 bg-white rounded shadow">
            {/* Header */}
            <div>
                <h1 className="text-2xl font-semibold">Order Details</h1>
                <p className="text-gray-500">Order_Id: {order.order_id}</p>
            </div>
            {/* Order Info */}
            <div className="grid grid-cols-2 gap-4 p-4 border rounded-lg">
                <div>
                    <p className="text-sm text-gray-500">Customer</p>
                    <p className="font-medium">
                        {order.user.first_name} {order.user.last_name}
                    </p>
                </div>
                <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <p className="font-medium">{order.phonenumber}</p>
                </div>
                <div>
                    <p className="text-sm text-gray-500">Quantity</p>
                    <p className="font-medium">{order.quantity}</p>
                </div>
                <div>
                    <p className="text-sm text-gray-500">Price</p>
                    <p className="font-medium">
                        ₦{Number(order.price).toFixed(2)}
                    </p>
                </div>
                <div>
                    <p className="text-sm text-gray-500">Total Price</p>
                    <p className="font-medium">
                        ₦{Number(order.total_price).toFixed(2)}
                    </p>
                </div>
                <div>
                    <p className="text-sm text-gray-500">PickUp Location</p>
                    <p className="font-medium">
                        {order.pickup_location.public_address}
                    </p>
                </div>
                <div>
                    <p className="text-sm text-gray-500">Date</p>
                    <p className="font-medium">
                        {new Date(order.created_at).toLocaleDateString()}
                    </p>
                </div>
            </div>

            {/* Status Update */}
            <div className="p-4 border rounded-lg flex flex-col gap-3">
                <p className="text-sm text-gray-500">Update Status</p>

                <select
                    value={selectedAction}
                    onChange={(e) =>
                        setSelectedAction(
                            e.target.value as GroupBuyOrderStatusAction,
                        )
                    }
                    className="border rounded px-3 py-2 text-sm w-full"
                >
                    <option value="">Select new status...</option>
                    <option value="DELIVERED">Delivered</option>
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

export default GroupBuyOrderDetailClient;
