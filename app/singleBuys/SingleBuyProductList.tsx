import { singleBuyColumns } from "@/components/Layout/table/Columns";
import Table from "@/components/Layout/table/Table";
import { singleBuyData } from "@/data/buy";
import SingleBuyTableRows from "./SingleBuyTableRows";

const SingleBuyProductList = ({ value }: { value: string }) => {
  const allOrders = singleBuyData;
  const activeOrders = singleBuyData.filter(
    (item) => item.overall_status === "Active",
  );
  const pastOrders = singleBuyData.filter(
    (item) => item.overall_status !== "Active",
  );

  if (value == "first") {
    return (
      <Table columns={singleBuyColumns}>
        <SingleBuyTableRows data={allOrders} />
      </Table>
    );
  }
  if (value == "second") {
    return (
      <Table columns={singleBuyColumns}>
        <SingleBuyTableRows data={pastOrders} />
      </Table>
    );
  }
  return (
    <Table columns={singleBuyColumns}>
      <SingleBuyTableRows data={activeOrders} />
    </Table>
  );
};

export default SingleBuyProductList;
