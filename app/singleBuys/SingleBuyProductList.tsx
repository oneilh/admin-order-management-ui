import { singleBuyColumns } from "@/components/Layout/table/Columns";
import Table from "@/components/Layout/table/Table";
import { singleBuyData } from "@/data/buy";

const SingleBuyProductList = ({ value }: { value: string }) => {
  const allOrders = singleBuyData;
  const activeOrders = singleBuyData.filter(
    (item) => item.overall_status === "Active",
  );
  const pastOrders = singleBuyData.filter(
    (item) => item.overall_status !== "Active",
  );

  if (value == "first") {
    return <Table columns={singleBuyColumns} data={allOrders} />;
  }
  if (value == "second") {
    return <Table columns={singleBuyColumns} data={pastOrders} />;
  }
  return <Table columns={singleBuyColumns} data={activeOrders} />;
};

export default SingleBuyProductList;
