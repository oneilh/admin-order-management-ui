import { OrderType } from "@/Types/singleOrder";

const ProductDescription = ({ description }: OrderType) => {
  return (
    <div className="flex flex-col flex-1 min-h-0">
      <h4 className="text-sm font-bold text-gray-900 uppercase mb-3 shrink-0">
        Description
      </h4>
      <div className="overflow-y-auto pr-2">
        <p className="text-base text-gray-700 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default ProductDescription;
