"use client";

import { useRouter } from "next/navigation";
import OrderStatusBadge from "../../OrderStatusBadge";
import Product from "../../Product";

type TbodyProps = {
  data?: Record<string, any>[];
  showStatus?: boolean;
};

const Tbody = ({ data = [], showStatus = false }: TbodyProps) => {
  const router = useRouter();

  const goToPage = (id: string) => {
    router.push(`./singleBuys/${id}`);
  };

  return (
    <tbody>
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

          {!showStatus && <OrderStatusBadge item={item} />}

          <td>{item.created_at}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default Tbody;
