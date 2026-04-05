export type GroupBuyStatus = "ACTIVE" | "FAILED" | "SUCCESSFUL";

export type GroupBuyStatusReason =
    | "ACTIVE_RUNNING"
    | "FAILED_GOAL_NOT_MET"
    | "SUCCESSFUL_GOAL_REACHED";

export type GroupBuyProductType = {
    url: string;
    name: string;
    image: string;
};

export type GroupBuy = {
    id: number;
    created_at: string; // ISO date string
    expires_at: string; // ISO date string
    successful_at: string | null;

    total_amount_collected: string; // comes as string from API
    group_buy_unit_goal: string;
    group_buy_order_units_quantity: string;

    group_buy_duration: string; // "2 days", "3 hours"
    group_buy_percentage: number;

    group_buy_status: GroupBuyStatus;
    group_buy_status_reason: GroupBuyStatusReason;

    group_buy_allow_refund_withdrawal: boolean;
    status_display_text: string | null;

    product: GroupBuyProductType;
};

export type GroupBuyStatusAction =
    | "PROCESSING"
    | "SHIPPING"
    | "PACKAGING"
    | "READY_FOR_PICKUP"
    | "FAILED_PROCESSING"
    | "FAILED_SHIPPING";
