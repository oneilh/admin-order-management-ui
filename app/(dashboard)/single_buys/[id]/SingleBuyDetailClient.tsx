"use client";

import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getAccessToken } from "@/utils/auth";
import {
    SingleBuyType,
    SingleBuyStatusAction,
} from "@/Types/singleOrder";
import { PaginatedResponse } from "@/Types/common";
import Image from "next/image";
import { useState } from "react";

// status style
const statusStyles: Record<string, string> = {
    SUCCESSFUL: "bg-green-100 text-green-700",
    DELIVERED: "bg-green-100 text-green-700",
    PROCESSING: "bg-blue-100 text-blue-700",
    PACKAGING: "bg-blue-100 text-blue-700",
    SHIPPING: "bg-purple-100 text-purple-700",
    READY_FOR_PICKUP: "bg-yellow-100 text-yellow-700",
    FAILED_PROCESSING: "bg-red-100 text-red-700",
    FAILED_SHIPPING: "bg-red-100 text-red-700",
};

// Reuse the same fetch query function — React Query deduplicates requests
const fetchSingleBuys = async (): Promise<PaginatedResponse<SingleBuyType>> => {
    const response = await fetch("/api/single-buys", {
        headers: {
            Authorization: getAccessToken(),
        },
    });

    if (!response.ok) {
        throw new Error("Failed to fetch single buys");
    }
    return response.json();
};

type Props = {
    id: number;
};

export default function SingleBuyDetailClient({ id }: Props) {
    const queryClient = useQueryClient();

    const [selectedAction, setSelectedAction] = useState<
        SingleBuyStatusAction | ""
    >("");
    const [updating, setUpdating] = useState(false);
    const [updateError, setUpdateError] = useState("");
    const [updateSuccess, setUpdateSuccess] = useState(false);

    const {
        data: order,
        isLoading,
        error,
    } = useQuery({
        queryKey: ["singleBuys"], // same key as list page — shares cache
        queryFn: fetchSingleBuys, // same function as list page
        staleTime: 0,
        select: (data) => data.results.find((ord) => ord.id === id),
    });

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading order</p>;
    if (!order) return <p>Order not found</p>;

    const handleStatusUpdate = async () => {
        if (!selectedAction) return;

        setUpdating(true);
        setUpdateError("");
        setUpdateSuccess(false);

        try {
            const response = await fetch("/api/update-single-buy-status", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: getAccessToken(),
                },
                body: JSON.stringify({ id: order.id, action: selectedAction }),
            });

            const data = await response.json();

            if (!response.ok) {
                setUpdateError(data.msg || data.message || "Failed to update status");
                return;
            }
            setUpdateSuccess(true);
            queryClient.setQueryData<PaginatedResponse<SingleBuyType>>(
                ["singleBuys"],
                (oldData) => {
                    if (!oldData) return oldData;
                    return {
                        ...oldData,
                        results: oldData.results.map((ord) =>
                            ord.id === id
                                ? { ...ord, single_buy_status: selectedAction }
                                : ord,
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

    return (
        <section className="flex flex-col gap-6">
            {/* Header */}
            <div>
                <h1 className="text-2xl font-semibold">Order Details</h1>
                <p className="text-gray-500">{order.order_id}</p>
            </div>

            {/* Product */}
            <div className="flex items-center gap-4 p-4 border rounded-lg">
                <Image
                    src={order.product.image}
                    alt={order.product.name}
                    width={80}
                    height={80}
                    className="rounded object-cover"
                />
                <div>
                    <p className="font-semibold text-lg">
                        {order.product.name}
                    </p>
                    <p className="text-gray-500">{order.unit_name}</p>
                </div>
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
                    <p className="text-sm text-gray-500">Total Price</p>
                    <p className="font-medium">₦{order.total_price}</p>
                </div>
                <div>
                    <p className="text-sm text-gray-500">Date</p>
                    <p className="font-medium">
                        {new Date(order.created_at).toLocaleDateString()}
                    </p>
                </div>
                <div>
                    <p className="text-sm text-gray-500">Status</p>
                    <p className={`
                px-2 py-1 rounded-full text-xs font-semibold
                ${statusStyles[order.single_buy_status] ?? "bg-gray-100 text-gray-700"}
              `}>
                        {order.single_buy_status}
                    </p>
                </div>
            </div>

            {/* Pickup Location */}
            <div className="p-4 border rounded-lg">
                <p className="text-sm text-gray-500 mb-2">Pickup Location</p>
                <p className="font-medium">
                    {order.pickup_location.public_address}
                </p>
                <p className="text-gray-500">{order.pickup_location.state}</p>
                <p className="text-gray-500">
                    {order.pickup_location.phonenumber}
                </p>
            </div>

            {/* Status Update */}
            <div className="p-4 border rounded-lg flex flex-col gap-3">
                <p className="text-sm text-gray-500">Update Status</p>

                <select
                    value={selectedAction}
                    onChange={(e) =>
                        setSelectedAction(
                            e.target.value as SingleBuyStatusAction,
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
}
