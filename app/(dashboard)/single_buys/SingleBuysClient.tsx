"use client";

import { useQuery } from "@tanstack/react-query";
import { getAccessToken, BASE_URL } from "@/utils/auth";
import { SingleBuyType, PaginatedResponse } from "@/Types/singleOrder";
import { singleBuyCols } from "@/data/singleBuy_prod_and_users_columns";
import Table from "@/components/Layout/table/Table";

// The function that fetches single buys from our proxy
const fetchSingleBuys = async (): Promise<PaginatedResponse<SingleBuyType>> => {
    const response = await fetch("/api/single-buys", {
        headers: {
            Authorization: getAccessToken(), // reads from localstorage
        },
    });

    if (!response.ok) {
        throw new Error("Failed to fetch single buys");
    }

    return response.json();
};

const SingleBuysClient = () => {
    const { data, isLoading, error } = useQuery({
        queryKey: ["singleBuys"], // Key for caching and refetching
        queryFn: fetchSingleBuys, // function to call
    });

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
        </section>
    );
};

export default SingleBuysClient;
