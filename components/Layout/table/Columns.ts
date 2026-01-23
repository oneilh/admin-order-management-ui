export type Column = {
  key: string;
  label: string;
};

export const baseBuyColumns: Column[] = [
  { key: "id", label: "ID" },
  { key: "product", label: "Product" },
  { key: "No. of Buyers", label: "No. of Buyers" },
  { key: "price", label: "Price" },
  { key: "status", label: "Status" },
  { key: "created_at", label: "created_at" },
];

export const singleBuyColumns: Column[] = [...baseBuyColumns];

export const groupBuyColumns: Column[] = [
  ...baseBuyColumns,
  { key: "group_name", label: "Group Name" },
  { key: "members_count", label: "Members" },
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
