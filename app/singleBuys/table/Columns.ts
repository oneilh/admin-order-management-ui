export type Column = {
  key: string;
  label: string;
};

export const baseBuyColumns: Column[] = [
  { key: "id", label: "ID" },
  { key: "product_img", label: "Product Image" },
  { key: "product_name", label: "Product Name" },
  { key: "price", label: "Price" },
  { key: "status", label: "Status" },
  { key: "date", label: "Date" },
];

export const singleBuyColumns: Column[] = [
  ...baseBuyColumns,
  { key: "buyer_count", label: "Buyer Count" },
];


export const groupBuyColumns: Column[] = [
  ...baseBuyColumns,
  { key: "group_name", label: "Group Name" },
  { key: "members_count", label: "Members" },
];