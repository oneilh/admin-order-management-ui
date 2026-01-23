'use client'
import OrderStatusBadge from "@/components/OrderStatusBadge";
import Product from "@/components/Product";
import { useRouter } from "next/navigation";
type RowDataProps = {
  data?: Record<string, any>[];
};


const SingleBuyTableRows = ({ data = [] }: RowDataProps) => {
  const router = useRouter();

  const goToPage = (id: string) => {
    router.push(`./singleBuys/${id}`);
  };
  return (
    <>
      {data.map((item) => (
        <tr
          key={item.id}
          onClick={() => goToPage(item.id)}
          className="cursor-pointer hover:bg-base-300"
        >
          <td>#{item.id}</td>
          <Product item={item} />
          <td>{item.no_of_buyers}</td>
          <td>{item.price}</td>
          <OrderStatusBadge item={item} />
          <td>{item.created_at}</td>
        </tr>
      ))}
    </>
  );
};

export default SingleBuyTableRows;
