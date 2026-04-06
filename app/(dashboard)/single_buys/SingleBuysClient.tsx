"use client";

import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { fetchSingleBuys } from "@/utils/fetchBuys";
import { singleBuyCols } from "@/data/singleBuy_prod_and_users_columns";
import Table from "@/components/Layout/table/Table";
import Image from "next/image";

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

const SingleBuysClient = () => {
    const { data, isLoading, error } = useQuery({
        queryKey: ["singleBuys"], // Key for caching and refetching
        queryFn: fetchSingleBuys, // function to call
    });

    const router = useRouter();

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error Loading single buys...</p>;
    return (
        <section className="flex flex-col gap-6">
            <div>
                <h1 className="text-2xl font-semibold">Single Buys</h1>
                <p className="text-gray-500">
                    Manage individual purchase orders
                </p>
            </div>
            <Table columns={singleBuyCols}>
                {data?.results.map((order) => (
                    <tr
                        key={order.id}
                        className="cursor-pointer hover:bg-gray-50"
                        onClick={() => router.push(`/single_buys/${order.id}`)}
                    >
                        {/* Product: image + name */}
                        <td>
                            <div className="flex items-center gap-3">
                                <Image
                                    src={order.product.image}
                                    alt={order.product.name}
                                    width={40}
                                    height={40}
                                    className="rounded object-cover"
                                />
                                <span>{order.product.name}</span>
                            </div>
                        </td>

                        {/* Customer */}
                        <td>
                            {order.user.first_name} {order.user.last_name}
                        </td>

                        {/* Order Id */}
                        <td>{order.order_id}</td>

                        {/* Quantity */}
                        <td>{order.quantity}</td>

                        {/* Total Price */}
                        <td>₦{order.total_price}</td>

                        {/* Status */}
                        <td>
                            <span
                                className={`
                px-2 py-1 rounded-full text-xs font-semibold
                ${statusStyles[order.single_buy_status] ?? "bg-gray-100 text-gray-700"}
              `}
                            >
                                {order.single_buy_status}
                            </span>
                        </td>

                        {/* Location */}
                        <td>
                            {order.pickup_location.state},{" "}
                            {order.pickup_location.public_address}
                        </td>

                        {/* Date */}
                        <td>
                            {new Date(order.created_at).toLocaleDateString()}
                        </td>
                    </tr>
                ))}
            </Table>
        </section>
    );
};

export default SingleBuysClient;
