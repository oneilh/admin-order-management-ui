import TitleHeader from "../../components/TitleHeader";
import { singleBuyData } from "@/data/singlebuy";
import { singleBuyCols } from "@/data/singleBuy_prod_and_users_columns";
import TabComponent from "@/components/tab/TabComponent";

const SingleBuyPage = () => {
  const pageInfo = {
    title: "Single Buys",
    description: "Manage individual purchase orders",
  };
  return (
    <section className="flex flex-col gap-4">
      <TitleHeader>
        <h1 className="text-2xl font-semibold">{pageInfo.title}</h1>
        <p>{pageInfo.description}</p>
      </TitleHeader>

      <TabComponent products={singleBuyData} col={singleBuyCols} />
    </section>
  );
};

export default SingleBuyPage;
