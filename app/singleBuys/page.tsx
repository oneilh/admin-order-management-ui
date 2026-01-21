import TabsComponent from "@/components/TabsComponent";
import BuysHeader from "../../components/BuysHeader";


const SingleBuyPage = () => {
  return (
    <section className="flex flex-col gap-4">
      <BuysHeader />
      <TabsComponent />
    </section>
  );
};

export default SingleBuyPage;
