"use client";

import { useQuery } from "@tanstack/react-query";
import { getAccessToken } from "@/utils/auth";
import 

type Props = {
    id: number;
};

const fetchGroupBuys = async () => {
	const response = await fetch("/api/group-buys?type=ACTIVE", {
		headers : {
			Authorization: getAccessToken()
		}
	})
	if(!response.ok) {
		throw new Error("Failed to fetch group buys")
	}
	return response.json()
}

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
    return <div>GroupBuyDetailClient</div>;
};

export default GroupBuyDetailClient;
