import { BuyerTableProps } from "./BuyerTable";

const BuyerRows = ({ data, isGroupBuy }: Omit<BuyerTableProps, "columns">) => {
  return (
    <>
      {data.map((data) => (
        <tr key={data.buyer_id} className="cursor-pointer hover:bg-base-300">
          <td>#{data.buyer_id}</td>
          <td>{data.name}</td>
          <td>{data.email}</td>
          <td>{data.qty}</td>
          {!isGroupBuy ? (
            <>
              <td>#{data.amount_paid}</td>
              <td>{data.order_date}</td>
              <td>{data.order_status}</td>
            </>
          ) : (
            <>
              <td>{data.order_date}</td>
              <td>{data.order_status}</td>
            </>
          )}
          <td>{data.payment_status}</td>
        </tr>
      ))}
    </>
  );
};

export default BuyerRows;
