import { useRouter } from "next/navigation";
import Product from "../../Product";
import OrderStatusBadge from "../../OrderStatusBadge";
type TableRowsProps = {
  data: any[];
  isGroupBuy?: boolean;
};
const TableRows = ({ data, isGroupBuy = false }: TableRowsProps) => {
  const router = useRouter();
  const goToPage = (id: string) => {
    if (!isGroupBuy) {
      router.push(`./singleBuys/${id}`);
    }
    else{
      router.push(`./groupBuys/${id}`);
    }
  };
  return (
    <>
      {data.map((item) => (
        <tr
          key={item.id}
          onClick={() => goToPage(item.id)}
          className="cursor-pointer hover:bg-base-300"
        >
          <td>#-{item.id}</td>
          <Product item={item} />

          {!isGroupBuy ? (
            <>
              <td>{item.no_of_buyers}</td>
              <td>{item.price}</td>
              <OrderStatusBadge item={item} />
              <td>{item.created_at}</td>
            </>
          ) : (
            <>
              <td>{item.group_name}</td>
              <td>{item.needed_members}</td>
              <td>{item.joined_members}</td>
              <td>{item.start_date}</td>
              <td>{item.end_date}</td>
              <td>{item.status}</td>
            </>
          )}
        </tr>
      ))}
    </>
  );
};

export default TableRows;
