import { getAccessToken } from "./auth";
import { PaginatedResponse } from "@/Types/common";
import { GroupBuy } from "@/Types/groupBuy";
import { GroupBuyOrderType } from "@/Types/groupBuyOrder";
import { SingleBuyType } from "@/Types/singleOrder";

export const fetchGroupBuys = async (): Promise<
    PaginatedResponse<GroupBuy>
> => {
    const response = await fetch("/api/group-buys?type=ACTIVE", {
        headers: {
            Authorization: getAccessToken(),
        },
    });

    if (!response.ok) throw new Error("Failed to fetch group buys");
    return response.json();
};

export const fetchGroupBuyOrders = async (
    id: number,
): Promise<PaginatedResponse<GroupBuyOrderType>> => {
    const response = await fetch(`/api/group-buy-orders?id=${id}`, {
        headers: {
            Authorization: getAccessToken(),
        },
    });

    if (!response.ok) throw new Error("Failed to fetch group buy orders");
    return response.json();
};

export const fetchSingleBuys = async (cursor?: string | null): Promise<
    PaginatedResponse<SingleBuyType>
> => {
	const url = cursor ? `/api/single-buys?cursor=${cursor}` : "/api/single-buys";
    const response = await fetch(url, {
        headers: {
            Authorization: getAccessToken(),
        },
    });

    if (!response.ok) throw new Error("Failed to fetch single buys");
    return response.json();
};
