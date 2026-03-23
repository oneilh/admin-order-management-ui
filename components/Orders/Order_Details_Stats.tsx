type Order_Details_Stats_Props = {
  order_count: number | undefined;
};
const Order_Details_Stats = ({ order_count }: Order_Details_Stats_Props) => {
  return (
    <section className="flex gap-8 font-semibold">
      <div className="flex flex-col gap-1 border border-gray-300 p-6 rounded-2xl">
        <p className="text-gray-500">TOTAL ORDERS</p>
        <p className="text-2xl">{order_count}</p>
      </div>
      <div className="flex flex-col gap-1 border border-gray-300 p-6 rounded-2xl">
        <p className="text-gray-500">PENDING REFUNDS</p>
        <p className="text-2xl">2</p>
      </div>
    </section>
  );
};

export default Order_Details_Stats;
