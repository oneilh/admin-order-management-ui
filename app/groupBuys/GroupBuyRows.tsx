"use client";
import Product from "@/components/Layout/table/table_components/Product";
import Timeline from "@/components/Layout/table/table_components/Timeline";
import Progress from "@/components/Layout/table/table_components/Progress";
import Badge from "@/components/Layout/table/table_components/Badge";
import { CgMore } from "react-icons/cg";
import { useRouter, usePathname } from "next/navigation";
import AmountCollected from "@/components/Layout/table/table_components/AmountCollected";
import RefundableStatus from "@/components/Layout/table/table_components/RefundableStatus";
type TableRowsProps = {
  data?: any[];
};

const GroupBuyRows = ({ data }: TableRowsProps) => {
  const goToPage = (id: string) => {
    router.push(`/groupBuys/${id}`);
  };

  const router = useRouter();
  if (!data) {
    return "No data to display";
  }
  return (
    <>
      {data.map((item) => {
        return (
          <tr
            key={item.id}
            onClick={() => goToPage(item.id)}
            className="cursor-pointer hover:bg-base-300"
          >
            <td>
              <Product
                id={item.id}
                name={item.product.name}
                imageUrl={item.product.image}
              />
            </td>
            <td>
              <Timeline
                start={item.created_at}
                end={item.expires_at}
                duration={item.group_buy_duration}
              />
            </td>
            <td>
              <Progress
                current={item.group_buy_order_units_quantity}
                goal={item.group_buy_unit_goal}
                percent={item.group_buy_percentage}
              />
            </td>
            <td>
              <AmountCollected amt_collected={item.total_amount_collected} />
            </td>
            <td>
              <div className="flex flex-col gap-2">
                <Badge status={item.group_buy_status} />
                <RefundableStatus
                  allowRefund={item.group_buy_allow_refund_withdrawal}
                  statusText={item.status_display_text}
                />
              </div>
            </td>
            <td className="text-neutral-700 text-lg cursor-pointer">
              <div className="p-3 w-fit hover:bg-neutral-700/10 rounded-lg">
                <CgMore />
              </div>
            </td>
          </tr>
        );
      })}
    </>
  );
};

export default GroupBuyRows;
