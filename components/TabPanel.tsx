import { Tabs } from "@mantine/core";
import SingleBuyProductList from "@/app/singleBuys/SingleBuyProductList";

const TabPanel = () => {

  const tabTabValues = ["first", "second", "third"];
  return (
    <>
      {tabTabValues.map((value, index) => {
        return (
          <Tabs.Panel value={value} key={index}>
            <div className="my-6 p-4 border border-gray-200 shadow-md rounded-xl">
              <SingleBuyProductList value={value} />
            </div>
          </Tabs.Panel>
        );
      })}
    </>
  );
};

export default TabPanel;
