import { TableColumnType } from "@/Types/tableColumnType";

export const singleBuyCols: TableColumnType[] = [
  { key: "product", label: "Product" },
  { key: "user", label: "Customer" },
  { key: "order_id", label: "Order ID" },
  { key: "quantity", label: "Quantity" },
  { key: "total_price", label: "Total Price" },
  { key: "single_buy_status", label: "Status" },
  { key: "pickup_location", label: "Location" },
  { key: "created_at", label: "Date" },
];
