import { Tabs } from "@mantine/core";
import SingleBuyProductList from "@/app/singleBuys/SingleBuyProductList";
import GroupBuyProductList from "@/app/groupBuys/GroupBuyProductList";

const TabPanel = ({ route }: { route?: string }) => {
  const tabTabValues = ["first", "second", "third"];
  return (
    <>
      {tabTabValues.map((value, index) => {
        return (
          <Tabs.Panel value={value} key={index}>
            <div className="my-6 p-4 border border-dashed border-gray-300 shadow-md rounded-xl">
              {route === "groupBuys" ? (
                <GroupBuyProductList value={value} />
              ) : (
                <SingleBuyProductList value={value} />
              )}
            </div>
          </Tabs.Panel>
        );
      })}
    </>
  );
};

export default TabPanel;
