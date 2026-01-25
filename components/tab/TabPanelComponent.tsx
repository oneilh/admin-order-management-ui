import { Tabs } from "@mantine/core";
import { PageNameprop } from "./TabsComponent";
import { singleBuyData } from "@/data/singlebuy";
import { groupBuyData } from "@/data/groupbuy";
import ProductList from "../ProductList";
import { singleBuyCols } from "@/data/singleBuy_prod_and_users_columns";
import { groupBuyCols } from "@/data/groupBuy_prod_and_users_columns";

const TabPanelComponent = ({ isGroupBuy = false }: PageNameprop) => {
  const tabTabValues = ["first", "second", "third"];

  // === function to fetch data based on tab value ===

  //=== for group buy ===
  function fetchData(value: string) {
    if (isGroupBuy) {
      if (value === "second") {
        const activeOrders = groupBuyData.filter(
          (item) => item.status === "Active",
        );
        return (
          <ProductList column={groupBuyCols} data={activeOrders} isGroupBuy />
        );
      }
      if (value === "third") {
        const pastOrders = groupBuyData.filter(
          (item) => item.status !== "Active",
        );
        return (
          <ProductList column={groupBuyCols} data={pastOrders} isGroupBuy />
        );
      }
      return (
        <ProductList column={groupBuyCols} data={groupBuyData} isGroupBuy />
      );
    }

    // === for single buy ===
    if (value === "second") {
      const activeOrders = singleBuyData.filter(
        (item) => item.status === "Active",
      );
      return <ProductList column={singleBuyCols} data={activeOrders} />;
    }
    if (value === "third") {
      const pastOrders = singleBuyData.filter(
        (item) => item.status !== "Active",
      );
      return <ProductList column={singleBuyCols} data={pastOrders} />;
    }
    return <ProductList column={singleBuyCols} data={singleBuyData} />;
  }
  return (
    <>
      {tabTabValues.map((value, index) => {
        return (
          <Tabs.Panel value={value} key={index}>
            <div className="my-6 p-4 border border-dashed border-gray-300 shadow-md rounded-xl">
              {fetchData(value)}
            </div>
          </Tabs.Panel>
        );
      })}
    </>
  );
};

export default TabPanelComponent;
