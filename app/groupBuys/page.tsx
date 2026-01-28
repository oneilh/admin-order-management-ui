import TabComponent from "@/components/tab/TabComponent";
import TitleHeader from "@/components/TitleHeader";
import { groupBuyData } from "@/data/groupbuy";
import { groupBuyCols } from "@/data/groupBuy_prod_and_users_columns";
import Stats from "./Stats";
import { getCampaignStats } from "./campaignStats";
import { getGroupBuys } from "@/utils/fetchGroupBuys";
const page = async () => {
  const activeData = await getGroupBuys("ACTIVE");
  console.log("data here:", activeData);

  const { totalAmount, activeCampaigns, failedCampaigns } = getCampaignStats(
    activeData.results,
  );

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
      <Stats
        totalAmount={totalAmount}
        activeCampaigns={activeCampaigns}
        failedCampaigns={failedCampaigns}
      />

      {/* <TabComponent products={groupBuyData} col={groupBuyCols} /> */}
      <TabComponent
        col={groupBuyCols}
        activeData={activeData.results}
        pastData={activeData.results}
      />
    </section>
  );
};

export default page;
