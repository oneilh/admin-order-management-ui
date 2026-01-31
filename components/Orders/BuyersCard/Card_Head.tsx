import Badge from "../../Layout/table/table_components/Badge";
import { IoIosArrowUp } from "react-icons/io";
type Card_Head_Props = {
  id: string;
  orderId: string;
  date: string;
  status: string;
};
const Card_Head = ({ id, orderId, date, status }: Card_Head_Props) => {
  return (
    <div className="flex justify-between">
      <section className="flex flex-col">
        <div className="flex gap-3 text-gray-400 font-semibold">
          <p>#{id}</p>
          <div className="h-1 w-1 rounded-full bg-gray-400 place-self-center"></div>
          <p>23 Jan 2026, 16:56</p>
        </div>
        <p>{orderId}</p>
      </section>

      <div className="flex gap-4 items-center">
        <Badge status={"PROCESSING"} />
        <div className="hover:bg-neutral-500/10 p-3 rounded-lg cursor-pointer">
          <IoIosArrowUp className="text-xl text-gray-500 " />
        </div>
      </div>
    </div>
  );
};

export default Card_Head;
