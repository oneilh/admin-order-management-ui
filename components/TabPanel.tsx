import { Tabs } from "@mantine/core";
import { singleBuyColumns } from "./table/Columns";
import Table from "./table/Table";
import { singleBuyData } from "./table/buysData";

const TabPanel = () => {
  //   // Active orders
  // PENDING
  // PAID
  // PROCESSING
  // SHIPPED

  // // Past orders
  // DELIVERED
  // CANCELLED
  // REFUNDED
  const ACTIVE_STATUSES = ["ACTIVE"];

  const allOrders = singleBuyData.map((item) => item);
  const activeOrders = singleBuyData.filter((item) =>
    ACTIVE_STATUSES.includes(item.status.toUpperCase()),
  );

  const pastOrders = singleBuyData.filter(
    (item) => !ACTIVE_STATUSES.includes(item.status.toUpperCase()),
  );
  return (
    <>
      <Tabs.Panel value="first">
        <div className="my-6 p-4 border border-gray-200 shadow-md rounded-xl ">
          <Table columns={singleBuyColumns} data={allOrders} />
        </div>
      </Tabs.Panel>
      <Tabs.Panel value="second">
        <div className="my-6 p-4 border border-gray-200 shadow-md rounded-xl ">
          <Table columns={singleBuyColumns} data={activeOrders} showStatus />
        </div>
      </Tabs.Panel>
      <Tabs.Panel value="third">
        <div className="my-6 p-4 border border-gray-200 shadow-md rounded-xl ">
          <Table columns={singleBuyColumns} data={pastOrders} showStatus />
        </div>
      </Tabs.Panel>
    </>
  );
};

export default TabPanel;
