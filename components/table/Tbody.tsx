"use client";

import { Badge } from "@mantine/core";
import { useRouter } from "next/navigation";

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

          <td>
            <div className="flex items-center gap-3">
              <div className="avatar">
                <div className="mask mask-squircle h-12 w-12">
                  <img
                    src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                    alt="Product"
                  />
                </div>
              </div>
              <div className="font-bold">{item.product_name}</div>
            </div>
          </td>

          <td>{item.buyer_count}</td>
          <td>{item.price}</td>

          {showStatus && (
            <td>
              <Badge>{item.status}</Badge>
            </td>
          )}

          <td>{item.date}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default Tbody;
