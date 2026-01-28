import TitleHeader from "../../components/TitleHeader";
import { singleBuyData } from "@/data/singlebuy";
import { singleBuyCols } from "@/data/singleBuy_prod_and_users_columns";
import TabComponent from "@/components/tab/TabComponent";
import { getBuys } from "@/utils/fetchBuys";

const SingleBuyPage = async () => {
  const activeData = await getBuys("single", "ACTIVE");
  const pastData = await getBuys("single");
  console.log("data here:", pastData);

  const pageInfo = {
    title: "Single Buys",
    description: "Manage individual purchase orders",
  };
  return (
    <section className="flex flex-col gap-12">
      <TitleHeader>
        <h1 className="text-2xl font-semibold">{pageInfo.title}</h1>
        <p>{pageInfo.description}</p>
      </TitleHeader>

        <TabComponent
      
        activeData={activeData.results}
        pastData={pastData.results}
      />
    </section>
  );
};

export default SingleBuyPage;
