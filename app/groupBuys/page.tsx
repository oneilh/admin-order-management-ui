import { ACCESS_TOKEN } from "@/auth";
import TabComponent from "@/components/tab/TabComponent";
import TitleHeader from "@/components/TitleHeader";
import { groupBuyData } from "@/data/groupbuy";
import { groupBuyCols } from "@/data/groupBuy_prod_and_users_columns";
const page = async () => {
  const type = "ACTIVE";
   const res = await fetch(`https://staging-cloud.grup.com.ng/v1/sub-admin/v1/group-buys/?type=${type}`, {
    headers: {
      Authorization: ACCESS_TOKEN,
    },
  });
  const {result} = await res.json();
  console.log('data here:', result);

  const pageInfo = {
    title: "Group Buys",
    description: "Manage group purchase orders",
  };
  return (
    <section className="flex flex-col gap-4">
      <TitleHeader>
        <h1 className="text-2xl font-semibold">{pageInfo.title}</h1>
        <p>{pageInfo.description}</p>
      </TitleHeader>

        <TabComponent products={groupBuyData} col={groupBuyCols} />

    </section>
  );
};

export default page;
