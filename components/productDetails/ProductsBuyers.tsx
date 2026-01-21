const ProductsBuyers = () => {
  return (
    <section className="product-buyers h-full flex flex-col bg-white border border-gray-300 rounded-lg overflow-hidden shadow-sm">
      {/* Header */}
      <div className="px-6 py-4 border-b border-gray-300 shrink-0 bg-white">
        <h3 className="text-lg font-bold text-gray-900">Recent Buyers</h3>
      </div>

      {/* Table Body */}
      <div className="flex-1 overflow-auto">
        <table className="w-full text-left text-sm text-gray-700">
          <thead className="bg-gray-100 text-sm font-bold text-gray-600 sticky top-0 border-b border-gray-300">
            <tr>
              <th className="px-6 py-4">Customer</th>
              <th className="px-6 py-4">Date</th>
              <th className="px-6 py-4 text-center">Qty</th>
              <th className="px-6 py-4 text-right">Amount</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-300">
            {/* Row 1 */}
            <tr className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4">
                <div className="text-base font-bold text-gray-900">
                  Maria Garcia
                </div>
                <div className="text-sm text-gray-500">maria.g@email.com</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-base">
                Jan 19, 2024
              </td>
              <td className="px-6 py-4 text-center text-base">2</td>
              <td className="px-6 py-4 text-right text-base font-bold text-gray-900">
                $259.98
              </td>
            </tr>
            {/* Row 2 */}
            <tr className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4">
                <div className="text-base font-bold text-gray-900">
                  Liam Johnson
                </div>
                <div className="text-sm text-gray-500">liam.j@tech.io</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-base">
                Jan 18, 2024
              </td>
              <td className="px-6 py-4 text-center text-base">1</td>
              <td className="px-6 py-4 text-right text-base font-bold text-gray-900">
                $129.99
              </td>
            </tr>
            {/* Row 3 */}
            <tr className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4">
                <div className="text-base font-bold text-gray-900">
                  Sarah Smith
                </div>
                <div className="text-sm text-gray-500">sarah.s@design.net</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-base">
                Jan 15, 2024
              </td>
              <td className="px-6 py-4 text-center text-base">5</td>
              <td className="px-6 py-4 text-right text-base font-bold text-gray-900">
                $649.95
              </td>
            </tr>
            {/* Row 4 */}
            <tr className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4">
                <div className="text-base font-bold text-gray-900">
                  Michael Chen
                </div>
                <div className="text-sm text-gray-500">m.chen88@web.co</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-base">
                Jan 12, 2024
              </td>
              <td className="px-6 py-4 text-center text-base">1</td>
              <td className="px-6 py-4 text-right text-base font-bold text-gray-900">
                $129.99
              </td>
            </tr>
          </tbody>
        </table>
      </div>

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
  );
};

export default ProductsBuyers;
