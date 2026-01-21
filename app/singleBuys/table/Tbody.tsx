'use client'

import { useRouter } from "next/navigation";

type TbodyProps = {
  data?: Record<string, any>[];
};
const Tbody = ({ data }: TbodyProps) => {
  const router = useRouter();

  const goToPage = (id: string) => {
    router.push(`./singleBuys/${id}`); 
  };
  return (
    <tbody>
      {data?.map((item) => {
        return (
          <tr key={item.id} onClick={() => goToPage(item.id)} className="cursor-pointer">
            <td>{item.id}</td>
            <td>
              <div className="avatar">
                <div className="mask mask-squircle h-12 w-12">
                  <img
                    src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                    alt="Avatar Tailwind CSS Component"
                  />
                </div>
              </div>
            </td>
            <td>{item.product_name}</td>
            <td>{item.price}</td>
            <td>{item.status}</td>
            <td>{item.date}</td>
            <td>{item.buyer_count}</td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default Tbody;
