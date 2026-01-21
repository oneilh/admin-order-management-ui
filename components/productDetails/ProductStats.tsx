const ProductStats = () => {
  return (
 <section className="product-stats h-full flex flex-col bg-white border border-gray-300 rounded-lg overflow-hidden shadow-sm">
  
  {/* Header */}
  <div className="px-6 py-4 border-b border-gray-300 bg-gray-50">
    <h3 className="text-base font-bold text-gray-800">Product Statistics</h3>
  </div>

  {/* 2x2 Grid */}
  <div className="grid grid-cols-2 flex-1 divide-x divide-y divide-gray-300">
    
    {/* Revenue */}
    <div className="flex flex-col justify-center p-6">
      <span className="text-sm font-bold text-gray-500 uppercase mb-1">Revenue</span>
      <span className="text-3xl font-light text-gray-900">$143</span>
    </div>

    {/* Status */}
    <div className="flex flex-col justify-center p-6">
      <span className="text-sm font-bold text-gray-500 uppercase mb-1">Status</span>
      <span className="text-base font-bold text-green-700 bg-green-50 w-fit px-3 py-1 rounded-full border border-green-200">
        Active
      </span>
    </div>

    {/* Inventory */}
    <div className="flex flex-col justify-center p-6">
      <span className="text-sm font-bold text-gray-500 uppercase mb-1">Inventory</span>
      <span className="text-3xl font-light text-gray-900">42</span>
    </div>

    {/* Updated */}
    <div className="flex flex-col justify-center p-6">
      <span className="text-sm font-bold text-gray-500 uppercase mb-1">Last Updated</span>
      <div>
        <span className="block text-lg font-bold text-gray-900">Jan 1, 2026</span>
        <span className="text-sm text-gray-500">12:30 PM</span>
      </div>
    </div>

  </div>
</section>
  );
};

export default ProductStats;
