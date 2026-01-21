const ProductDetail = () => {
  return (
<section className="product-detail h-full flex flex-col border border-gray-300 rounded-lg bg-white p-6 shadow-sm">
  
  {/* Header: Title & Price */}
  <div className="flex justify-between items-start gap-4 shrink-0">
    <div className="flex gap-4">
      {/* Thumbnail */}
      <div className="h-20 w-20 bg-gray-100 border border-gray-300 rounded-md shrink-0 flex items-center justify-center">
        <span className="text-gray-400 font-bold text-sm">IMG</span>
      </div>

      {/* Title & ID */}
      <div className="flex flex-col gap-1">
        <h3 className="text-xl font-bold text-gray-900 leading-tight">Wind Blower Machine</h3>
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
      <span className="block text-2xl font-bold text-gray-900">
        $500.00
      </span>
    </div>
  </div>

  {/* Divider */}
  <hr className="border-gray-300 my-6" />

  {/* Description */}
  <div className="flex flex-col flex-1 min-h-0">
    <h4 className="text-sm font-bold text-gray-900 uppercase mb-3 shrink-0">
      Description
    </h4>
    <div className="overflow-y-auto pr-2">
      <p className="text-base text-gray-700 leading-relaxed">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
        quisquam, suscipit quae labore nisi distinctio debitis. Eaque
        laudantium minima cumque fuga. Nisi quaerat consequatur in labore,
        debitis nostrum aspernatur asperiores.
      </p>
    </div>
  </div>

</section>
  );
};

export default ProductDetail;
