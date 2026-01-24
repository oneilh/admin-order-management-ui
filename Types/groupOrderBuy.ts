export type GroupMemberType = {
  member_id: number;
  name: string;
  email: string;
  quantity: number;
  amount_paid: string; // keep string like "$25"
  order_date: string;
  order_status: string;
  payment_status: string;
};

export type GroupBuyType = {
  id: string;
  group_name: string;
  product_name: string;
  description: string;
  needed_members: number;
  joined_members: number;
  start_date: string;
  end_date: string;
  overall_status: string;
  members?: GroupMemberType[]; // array of group members
};
