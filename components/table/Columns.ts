export type Column = {
  key: string;
  label: string;
};

export const baseBuyColumns: Column[] = [
  { key: "id", label: "ID" },
  { key: "product", label: "Product" },
  { key: "buyer", label: "Buyers" },
  { key: "price", label: "Price" },
  { key: "status", label: "Status" },
  { key: "date", label: "Date" },
];

export const singleBuyColumns: Column[] = [
  ...baseBuyColumns,
];


export const groupBuyColumns: Column[] = [
  ...baseBuyColumns,
  { key: "group_name", label: "Group Name" },
  { key: "members_count", label: "Members" },
];