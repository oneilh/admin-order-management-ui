import TabComponent from "@/components/tab/TabComponent";
import TitleHeader from "@/components/TitleHeader";
import { groupBuyCols } from "@/data/groupBuy_prod_and_users_columns";
import { getBuys} from "@/utils/fetchBuys";

const page = async () => {
  const activeData = await getBuys('group', "ACTIVE");
  const pastData = await getBuys('group');
  console.log("data here:", pastData);


  const pageInfo = {
    title: "Group Buys",
    description: "Manage group purchase orders",
  };
  return (
    <section className="flex flex-col gap-12">
      <TitleHeader>
        <h1 className="text-2xl font-semibold">{pageInfo.title}</h1>
        <p>{pageInfo.description}</p>
      </TitleHeader>

      <TabComponent
        col={groupBuyCols}
        activeData={activeData.results}
        pastData={pastData.results}
      />
    </section>
  );
};

export default page;
