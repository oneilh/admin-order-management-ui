"use client";

import { useQuery } from "@tanstack/react-query";
import { getAccessToken, BASE_URL } from "@/utils/auth";

// The function that fetches single buys from our proxy
const fetchSingleBuys = async () => {
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
		<div>
			<pre>{JSON.stringify(data, null, 2)}</pre>
		</div>
	);
};

export default SingleBuysClient;
