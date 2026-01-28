import { TableColumnType } from "@/Types/tableColumnType";

// For group buys
export const groupBuyCols: TableColumnType[] = [
  { key: "product", label: "Product" }, // e.g., row.product.name
  { key: "timeline", label: "Timeline" }, // e.g., computed from created_at → expires_at
  { key: "progress", label: "Progress" }, // e.g., group_buy_percentage
  { key: "collected", label: "Collected" }, // e.g., total_amount_collected
  { key: "status", label: "Status" }, // e.g., group_buy_status
  { key: "actions", label: "Actions" }, // buttons, etc.
];

// For group members
export const groupMembersCols: TableColumnType[] = [
  { key: "member_id", label: "Member ID" },
  { key: "name", label: "Name" },
  { key: "email", label: "Email" },
  { key: "units", label: "Units" },
  { key: "order_date", label: "Joined On" },
  { key: "order_status", label: "Order Status" },
  { key: "payment_status", label: "Payment Status" },
];
