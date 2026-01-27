import Exp_TabPanelComponent from "@/components/tab/Exp_TabPanelComponent";
import TabPanelComponent from "@/components/tab/TabPanelComponent";
import TabsComponent from "@/components/tab/TabsComponent";
import TitleHeader from "@/components/TitleHeader";
import { groupBuyData } from "@/data/groupbuy";
import { groupBuyCols } from "@/data/groupBuy_prod_and_users_columns";
import { title } from "process";
const pageInfo = {
  title: "Group Buys",
  description: "Manage group purchase orders",
};
const page = () => {
  return (
    //  <section className="flex flex-col gap-4">
    //   <TabsComponent isGroupBuy={true}/>

    // </section>
    <section className="flex flex-col gap-4">
      <TitleHeader title={pageInfo.title} desc={pageInfo.description} />
      <TabsComponent>
        <Exp_TabPanelComponent products={groupBuyData} col={groupBuyCols} />
      </TabsComponent>
    </section>
  );
};

export default page;
