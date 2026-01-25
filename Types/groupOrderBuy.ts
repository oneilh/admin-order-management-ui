export type GroupMemberType = {
  member_id: number;
  name: string;
  email: string;
  unit: number;
  order_date: string;
  order_status: string;
  payment_status: string;
};

export type GroupBuyType = {
  id: string;
  group_name: string;
  product_name: string;
  description: string;
  price: string;
  needed_members: number;
  joined_members: number;
  start_date: string;
  end_date: string;
  status: string;
  members?: GroupMemberType[]; // array of group members
};
