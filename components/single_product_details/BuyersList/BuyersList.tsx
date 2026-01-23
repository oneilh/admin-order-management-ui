import { singleBuyersColumns } from "@/components/Layout/table/Columns";
import Table from "@/components/Layout/table/Table";
import { singleBuyData } from "@/data/buy";
import { OrderType } from "@/Types/singleOrder";

const BuyersList = ({buyers}:OrderType) => {
  const allOrders = singleBuyData.map((item) => item);
  return <Table columns={singleBuyersColumns} data={allOrders} showStatus />;
};

export default BuyersList;
