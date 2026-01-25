import SingleBuyerListRows from "@/app/singleBuys/[productId]/SingleBuyerListRows";
import { singleBuyersColumns } from "@/data/Columns";
import Table from "@/components/Layout/table/Table";
import { SingleBuyType } from "@/Types/singleOrder";

type SingleBuyerListProps =
  | Pick<SingleBuyType, "buyers">

const SingleBuyerList = ({buyers}: SingleBuyerListProps) => {
  return (
    <Table columns={singleBuyersColumns}>
      <SingleBuyerListRows {...{ buyers }} />
    </Table>
  );
};

export default SingleBuyerList;
