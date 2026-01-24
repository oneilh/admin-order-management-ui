export type BuyerType = {
  buyer_id: number;
  name: string;
  email: string;
  quantity: number;
  amount_paid: string; // keep as string since price has "$"
  order_date: string;
  order_status: string;
  payment_status: string;
};
export type OrderType = {
  id: number;
  product_name: string;
  no_of_buyers: number;
  price: string; // keep string like "$25"
  description: string;
  created_at: string;
  overall_status: string;
  buyers?: BuyerType[]; // array of buyers
};
