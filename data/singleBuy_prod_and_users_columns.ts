import { TableColumnType } from "../Types/tableColumnType";

export const singleBuyCols: TableColumnType[] = [
  { key: "id", label: "ID" },
  { key: "product", label: "Product" },
  { key: "No. of Buyers", label: "No. of Buyers" },
  { key: "price", label: "Price" },
  { key: "status", label: "Status" },
  { key: "created_at", label: "created_at" },
];

export const singleBuyersCols: TableColumnType[] = [
  { key: "buyer_id", label: "Buyer ID" },
  { key: "name", label: "Name" },
  { key: "email", label: "Email" },
  { key: "quantity", label: "Quantity" },
  { key: "amount_paid", label: "Amount Paid" },
  { key: "order_date", label: "Order Date" },
  { key: "order_status", label: "Order Status" },
  { key: "payment_status", label: "Payment Status" },
];