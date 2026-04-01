"use client";

import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getAccessToken } from "@/utils/auth";
import { SingleBuyType, PaginatedResponse } from "@/Types/singleOrder";
import Image from "next/image";

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
    const {
        data: order,
        isLoading,
        error,
    } = useQuery({
        queryKey: ["singleBuy"], // same key as list page — shares cache
        queryFn: fetchSingleBuys, // same function as list page
        select: (data) => data.results.find((o) => o.id === id),
    });

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading order</p>;
    if (!order) return <p>Order not found</p>;

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
                    <p className="font-medium">{order.single_buy_status}</p>
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
        </section>
    );
}
