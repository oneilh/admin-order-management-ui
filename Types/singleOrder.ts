export type PickupLocationType = {
    id: number;
    state: string;
    public_address: string;
    private_address: string;
    phonenumber: string;
};
export type SingleBuyUserType = {
    first_name: string;
    last_name: string;
};
export type SingleBuyProductType = {
    url: string;
    name: string;
    image: string;
};

export type SingleBuyType = {
    id: number;
    unit: string;
    unit_name: string;
    created_at: string;
    quantity: number;
    price: string; // keep string like "$25"
    total_price: string;
    creator_commission_fee: string | null;
    creator_commission_settled: boolean;
    platform_net_revenue: string | null;
    order_id: string;
    single_buy_status:
        | "SUCCESSFUL"
        | "PROCESSING"
        | "SHIPPING"
        | "PACKAGING"
        | "READY_FOR_PICKUP"
        | "FAILED_PROCESSING"
        | "FAILED_SHIPPING"
        | "DELIVERED";
    single_buy_status_reason: string;
    single_buy_allow_refund_withdrawal: boolean;
    phonenumber: string;
    pickup_location: PickupLocationType;
    general_order_status: string | null;
    status_display_text: string | null;
    general_order_status_timestamp: string | null;
    user: SingleBuyUserType;
    product: SingleBuyProductType;
};

export type SingleBuyStatusAction =
    | "PROCESSING"
    | "SHIPPING"
    | "PACKAGING"
    | "READY_FOR_PICKUP"
    | "FAILED_PROCESSING"
    | "FAILED_SHIPPING"
    | "DELIVERED";


