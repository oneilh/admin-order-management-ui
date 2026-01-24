import { groupBuyColumns, singleBuyColumns } from "@/components/Layout/table/Columns";
import Table from "@/components/Layout/table/Table";
import { singleBuyData } from "@/data/singlebuy";
import GroupBuyTableRows from "./GroupBuyTableRows";
import { groupBuyData } from "@/data/groupbuy";

const GroupBuyProductList = ({ value }: { value: string }) => {
  const allOrders = groupBuyData;
  const activeOrders = groupBuyData.filter(
    (item) => item.overall_status === "Active",
  );
  const pastOrders = groupBuyData.filter(
    (item) => item.overall_status !== "Active",
  );

  if (value == "first") {
    return (
      <Table columns={groupBuyColumns}>
        <GroupBuyTableRows data={allOrders} />
      </Table>
    );
  }
  if (value == "second") {
    return (
      <Table columns={groupBuyColumns}>
        <GroupBuyTableRows data={pastOrders} />
      </Table>
    );
  }
  return (
    <Table columns={groupBuyColumns}>
      <GroupBuyTableRows data={activeOrders} />
    </Table>
  );
};

export default GroupBuyProductList;
