import { getAccessToken } from "./auth";
import { PaginatedResponse } from "@/Types/common";
import { GroupBuy } from "@/Types/groupBuy";
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

export const fetchSingleBuys = async (): Promise<
    PaginatedResponse<SingleBuyType>
> => {
    const response = await fetch("/api/single-buys", {
        headers: {
            Authorization: getAccessToken(),
        },
    });

    if (!response.ok) throw new Error("Failed to fetch single buys");
    return response.json();
};
