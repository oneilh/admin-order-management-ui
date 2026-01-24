import BuyersList from "./BuyersList";
import { OrderType } from "@/Types/singleOrder";

const ProductsBuyers = ({ buyers }: Pick<OrderType, "buyers">) => {
  return (
    <section className=" flex flex-col bg-white border border-gray-300 rounded-lg overflow-hidden shadow-sm">
      {/*== Header */}
      <div className="px-6 py-4 border-b border-gray-300 shrink-0 bg-white">
        <h3 className="text-lg font-bold text-gray-900">Recent Buyers</h3>
      </div>
      <section className="flex flex-col">
        {/*==Table Body */}
        <BuyersList {...{ buyers }} />
        {/* Pagination */}
        <div className="px-6 py-4 border-t border-gray-300 bg-gray-50 shrink-0 flex items-center justify-between">
          <span className="text-sm text-gray-600">
            Showing <b>1-4</b> of <b>42</b>
          </span>
          <div className="flex gap-2">
            <button className="px-4 py-2 text-sm font-bold text-gray-700 bg-white border border-gray-300 rounded hover:bg-gray-100 disabled:opacity-50">
              Previous
            </button>
            <button className="px-4 py-2 text-sm font-bold text-gray-700 bg-white border border-gray-300 rounded hover:bg-gray-100">
              Next
            </button>
          </div>
        </div>
      </section>
    </section>
  );
};

export default ProductsBuyers;
