export type BuyerType = {
  buyer_id: number;
  name: string;
  email: string;
  qty: number;
  amount_paid: string; // keep as string since price has "$"
  order_date: string;
  order_status: string;
  payment_status: string;
};
export type SingleBuyType = {
  id: string;
  product_name: string;
  no_of_buyers: number;
  price: string; // keep string like "$25"
  description: string;
  created_at: string;
  status: string;
  buyers: BuyerType[]; // array of buyers
};
