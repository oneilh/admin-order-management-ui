import { PickupLocationType } from "./common";

export type GroupBuyOrderUserType = {
	first_name: string;
	last_name: string;
}

export type GroupBuyOrderType = {
    id: number;
    unit: string;
    unit_name: string;
    created_at: string;
    quantity: number;
    price: string;
	total_price: string;
	creator_commission_fee: string | null;
	creator_commission_settled: boolean;
	platform_net_revenue: string | null;
	order_id: string;
	phonenumber: string;
	pickup_location: PickupLocationType;
	general_order_status: string | null;
	status_display_text: string | null;
	general_order_status_timestamp: string | null;
	user: GroupBuyOrderUserType;
};

export type GroupBuyOrderStatusAction = "DELIVERED";