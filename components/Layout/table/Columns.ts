export type Column = {
  key: string;
  label: string;
};

export const singleBuyColumns: Column[] = [
  { key: "id", label: "ID" },
  { key: "product", label: "Product" },
  { key: "No. of Buyers", label: "No. of Buyers" },
  { key: "price", label: "Price" },
  { key: "status", label: "Status" },
  { key: "created_at", label: "created_at" },
];


//======Buyers=====

export const singleBuyersColumns: Column[] = [
  { key: "buyer_id", label: "Buyer ID" },
  { key: "name", label: "Name" },
  { key: "email", label: "Email" },
  { key: "quantity", label: "Quantity" },
  { key: "amount_paid", label: "Amount Paid" },
  { key: "order_date", label: "Order Date" },
  { key: "order_status", label: "Order Status" },
  { key: "payment_status", label: "Payment Status" },
];


//=========================

//======Group Buys=====

export const groupBuyColumns: Column[] = [
  { key: "id", label: "ID" },
  { key: "product_name", label: "Product" },
  { key: "group_name", label: "Group Name" },
  { key: "needed_members", label: "Needed Members" },
  { key: "joined_members", label: "Joined Members" },
  { key: "start_date", label: "Starts On" },
  { key: "end_date", label: "Ends On" },
  { key: "overall_status", label: "Status" },
];

//======Group Members=====

export const groupMembersColumns: Column[] = [
  { key: "member_id", label: "Member ID" },
  { key: "name", label: "Name" },
  { key: "email", label: "Email" },
  { key: "quantity", label: "Quantity" },
  { key: "amount_paid", label: "Amount Paid" },
  { key: "order_date", label: "Joined On" },
  { key: "order_status", label: "Order Status" },
  { key: "payment_status", label: "Payment Status" },
];
