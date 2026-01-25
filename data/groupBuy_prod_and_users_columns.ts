import { TableColumnType } from "@/Types/tableColumnType";

export const groupBuyCols: TableColumnType[] = [
  { key: "id", label: "ID" },
  { key: "product_name", label: "Product" },
  { key: "group_name", label: "Group Name" },
  { key: "needed_members", label: "Needed Members" },
  { key: "joined_members", label: "Joined Members" },
  { key: "start_date", label: "Starts On" },
  { key: "end_date", label: "Ends On" },
  { key: "status", label: "Status" },
];


export const groupMembersCols: TableColumnType[] = [
  { key: "member_id", label: "Member ID" },
  { key: "name", label: "Name" },
  { key: "email", label: "Email" },
  { key: "units", label: "Units" },
  { key: "order_date", label: "Joined On" },
  { key: "order_status", label: "Order Status" },
  { key: "payment_status", label: "Payment Status" },
];