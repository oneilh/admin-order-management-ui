import { ProductSummaryCardProps } from "./ProductSummaryCard";

const ProductHeader = ({
  id,
  product_name,
  price,
}: Omit<ProductSummaryCardProps, "description">) => {
  // Header: Title & Price
  return (
    <div className="flex justify-between items-start gap-4 shrink-0">
      <div className="flex gap-4">
        {/* Thumbnail */}
        <div className="h-20 w-20 bg-gray-100 border border-gray-300 rounded-md shrink-0 flex items-center justify-center">
          <span className="text-gray-400 font-bold text-sm">IMG</span>
        </div>

        {/* Title & ID */}
        <div className="flex flex-col gap-3 items-center">
          <h3 className="text-xl font-bold text-gray-900 leading-tight">
            {product_name}
          </h3>
          <div className="flex gap-4">
            <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-lg text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-800/30 dark:text-blue-500">
              ID: #{id}
            </span>
            <span className="w-fit inline-flex items-center gap-x-1.5 py-1 px-3 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500">
              <span className="size-1.5 inline-block rounded-full bg-blue-800 dark:bg-blue-500"></span>
              Active
            </span>
          </div>
        </div>
      </div>

      {/* Price */}
      <div className="text-right shrink-0">
        <span className="block text-sm font-bold text-gray-500 uppercase">
          Price
        </span>
        <span className="block text-2xl font-bold text-gray-900">{price}</span>
      </div>
    </div>
  );
};

export default ProductHeader;
