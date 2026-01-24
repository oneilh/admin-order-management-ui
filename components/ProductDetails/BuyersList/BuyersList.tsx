import BuyerListRows from "@/app/singleBuys/[productId]/BuyerListRows";
import { singleBuyersColumns } from "@/components/Layout/table/Columns";
import Table from "@/components/Layout/table/Table";
import { SingleOrderType } from "@/Types/singleOrder";

const BuyersList = ({ buyers }: Pick<SingleOrderType, "buyers">) => {
  return (
    <Table columns={singleBuyersColumns}>
      <BuyerListRows {...{ buyers }} />
    </Table>
  );
};

export default BuyersList;
