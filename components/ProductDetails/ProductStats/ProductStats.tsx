import OrderStatusBadge from "@/components/OrderStatusBadge";
import Revenue from "./Revenue";
import Inventory from "./Inventory";
import Updated from "./Updated";
import { SingleOrderType } from "@/Types/singleOrder";
import ProductStatsDemo from "./ProductStatsDemo";

const ProductStats = ({
  no_of_buyers,
  created_at,
  overall_status,
}: Pick<SingleOrderType, "no_of_buyers" | "created_at" | "overall_status">) => {
  return (
    <section className="product-stats h-full flex flex-col bg-white border border-gray-300 rounded-lg overflow-hidden shadow-sm">
      {/* Header */}
      <div className="px-6 py-4 border-b border-gray-300 bg-gray-50">
        <h3 className="text-base font-bold text-gray-800">
          Product Statistics
        </h3>
      </div>

      {/* 2x2 Grid */}
      <div className="grid grid-cols-2 flex-1 divide-x divide-y divide-gray-300">
        {/* Revenue */}
        <Revenue />

        {/* Status */}
        <div className="flex flex-col justify-center p-6">
          {/* <OrderStatusBadge item={{ status: "Active" }} /> */}
        </div>

        <Inventory />
        <Updated />
      </div>
    </section>
  );
};

export default ProductStats;
