import { FaCoins } from "react-icons/fa6";
import { HiArchiveBox, HiMiniUserGroup } from "react-icons/hi2";

const ProductStatsDemo = () => {
  return (
    <section className="w-full flex flex-wrap gap-4  text-gray-800">
      <div className="w-full p-6 flex gap-8 items-center justify-between border border-gray-300 rounded-4xl">
        <div className="flex flex-col">
          <h2>Revenue</h2>
          <p className="text-2xl font-semibold">$1200</p>
        </div>
        <FaCoins className="text-4xl" />
      </div>
      <div className=" p-6 flex gap-8 grow-2 items-center justify-between border border-gray-300 rounded-4xl">
        <div className="flex flex-col">
          <h2>Inventory</h2>
          <p className="text-2xl font-semibold">60</p>
        </div>
        <HiArchiveBox className="text-4xl" />
      </div>
      <div className="p-6 flex gap-8 grow-2 items-center justify-between border border-gray-300 rounded-4xl">
        <div className="flex flex-col">
          <h2>Total Buyers</h2>
          <p className="text-2xl font-semibold">45</p>
        </div>
        <HiMiniUserGroup className="text-4xl" />
      </div>
    </section>
  );
};

export default ProductStatsDemo;
