export type GroupBuyStatus =
  | 'FAILED'
  | 'PROCESSING'
  | 'READY_FOR_PICKUP';

export type GroupBuyStatusReason =
  | 'FAILED_GOAL_NOT_MET'
  | 'PROCESSING_ORDERS'
  | 'READY_FOR_PICKUP_AVAILABLE';

export interface Product {
  // fill this properly when you inspect the product object
  id: number;
  name: string;
}

export interface GroupBuy {
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

  product: Product;
}
