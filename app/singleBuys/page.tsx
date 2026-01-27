import TabsComponent from "@/components/tab/TabsComponent";
import TitleHeader from "../../components/TitleHeader";
import { singleBuyData } from "@/data/singlebuy";
import { singleBuyCols } from "@/data/singleBuy_prod_and_users_columns";
import Exp_TabPanelComponent from "@/components/tab/Exp_TabPanelComponent";



const SingleBuyPage = () => {
  const pageInfo = {
    title: "Single Buys",
    description: "Manage individual purchase orders",
  };
  return (
    <section className="flex flex-col gap-4">
       <TitleHeader title={pageInfo.title} desc={pageInfo.description} >
        <h1 className="text-2xl font-semibold">{pageInfo.title}</h1>
        <p>{pageInfo.description}</p>
      </TitleHeader>
      <TabsComponent>
        <Exp_TabPanelComponent products={singleBuyData} col={singleBuyCols} />
      </TabsComponent>
    </section>
  );
};

export default SingleBuyPage;
