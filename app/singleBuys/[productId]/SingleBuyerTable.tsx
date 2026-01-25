import SingleBuyerList from "./SingleBuyerList";
import { SingleBuyType } from "@/Types/singleOrder";

const SingleBuyTable = ({ buyers }: Pick<SingleBuyType, "buyers">) => {
  return (
    <section className=" flex flex-col gap-6 p-6 bg-white border border-dashed border-gray-300 rounded-md shadow-sm">
      {/*== Header */}

      <h3 className="text-lg font-bold text-gray-900">Recent Buyers</h3>

      <section className="flex flex-col">
        {/*==Table Body */}
        <SingleBuyerList {...{ buyers }} />
        {/* Pagination */}
        <div className="px-6 pt-4 bg-gray-50 shrink-0 flex items-center justify-between">
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

export default SingleBuyTable;
