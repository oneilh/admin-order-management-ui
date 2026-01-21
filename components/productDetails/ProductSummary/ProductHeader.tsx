import React from "react";

const ProductHeader = () => {
  // Header: Title & Price
  return (
    <div className="flex justify-between items-start gap-4 shrink-0">
      <div className="flex gap-4">
        {/* Thumbnail */}
        <div className="h-20 w-20 bg-gray-100 border border-gray-300 rounded-md shrink-0 flex items-center justify-center">
          <span className="text-gray-400 font-bold text-sm">IMG</span>
        </div>

        {/* Title & ID */}
        <div className="flex flex-col gap-1">
          <h3 className="text-xl font-bold text-gray-900 leading-tight">
            Wind Blower Machine
          </h3>
          <span className="text-sm text-gray-500 font-medium">
            ID: #PROD-8821-X
          </span>
        </div>
      </div>

      {/* Price */}
      <div className="text-right shrink-0">
        <span className="block text-sm font-bold text-gray-500 uppercase">
          Price
        </span>
        <span className="block text-2xl font-bold text-gray-900">$500.00</span>
      </div>
    </div>
  );
};

export default ProductHeader;
