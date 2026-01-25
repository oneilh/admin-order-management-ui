// types/admin-table.ts
export type AdminTableRow = {
  id: string;
  product: string;
  status: string;
  type: "single" | "group";

  buyerCount?: number;
  price?: number;
  groupName?: string;
  neededMembers?: number;
  joinedMembers?: number;
  startDate?: string;
  endDate?: string;
};
