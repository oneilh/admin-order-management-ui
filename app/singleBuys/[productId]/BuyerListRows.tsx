import {OrderType } from "@/Types/singleOrder";

const BuyerListRows = ({ buyers }: Pick<OrderType, "buyers">) => {
  if(!buyers){
    return
  }
  return (
    <>
      {buyers.map((buyer) => (
        <tr key={buyer.buyer_id} className="cursor-pointer hover:bg-base-300">
          <td>#{buyer.buyer_id}</td>
          <td>{buyer.name}</td>
          <td>{buyer.email}</td>
          <td>{buyer.quantity}</td>
          <td>{buyer.amount_paid}</td>
          <td>{buyer.order_date}</td>
          <td>{buyer.order_status}</td>
          <td>{buyer.payment_status}</td>
        </tr>
      ))}
    </>
  );
};

export default BuyerListRows;
