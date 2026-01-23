import { singleBuyColumns } from "@/components/Layout/table/Columns";
import Table from "@/components/Layout/table/Table";
import { singleBuyData } from "@/data/buy";

const table2 = () => {
  const allOrders = singleBuyData.map((item) => item);
  return (
    <div>
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
        <Table columns={singleBuyColumns} data={allOrders} showStatus />
      </div>
    </div>
  );
};

export default table2;
