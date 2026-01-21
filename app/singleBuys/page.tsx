
import BuysHeader from "./BuysHeader";
import { singleBuyData } from "./table/buysData";
import { singleBuyColumns } from "./table/Columns";
import Table from "./table/Table";


const SingleBuyPage = () => {
 
  return (
    <section className="flex flex-col gap-4">
      <BuysHeader />
    <Table columns={singleBuyColumns} data={singleBuyData}/>
    </section>
  );
};

export default SingleBuyPage;
