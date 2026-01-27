import Exp_TabPanelComponent from "@/components/tab/Exp_TabPanelComponent";
import TabsComponent from "@/components/tab/TabsComponent";
import TitleHeader from "@/components/TitleHeader";
import { groupBuyData } from "@/data/groupbuy";
import { groupBuyCols } from "@/data/groupBuy_prod_and_users_columns";
const page = () => {
  const pageInfo = {
    title: "Group Buys",
    description: "Manage group purchase orders",
  };
  return (
    <section className="flex flex-col gap-4">
      <TitleHeader title={pageInfo.title} desc={pageInfo.description} >
        <h1 className="text-2xl font-semibold">{pageInfo.title}</h1>
        <p>{pageInfo.description}</p>
      </TitleHeader>

      <TabsComponent>
        <Exp_TabPanelComponent products={groupBuyData} col={groupBuyCols} />
      </TabsComponent>
    </section>
  );
};

export default page;
