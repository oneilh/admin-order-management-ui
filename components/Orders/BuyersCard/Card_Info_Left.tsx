import { MdOutlinePersonOutline } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { PiPackage } from "react-icons/pi";
type CardInfo_Left_Props = {
  qty: string;
  unit_name: string;
  total_price:string;
  price:string;
  first_name:string;
  last_name:string;
  phonenumber:string;
};
const Card_Info_Left = ({
  qty,
  unit_name,
  total_price,
  price,
  first_name,
  last_name,
  phonenumber
}: CardInfo_Left_Props) => {
  return (
    <section className="grow-2 flex flex-col gap-6">
      <div className="flex justify-between gap-6 border border-indigo-300 bg-indigo-300/40 p-4 rounded-2xl text-indigo-800">
        <section className="flex flex-col gap-2 justify-between">
          <div className="flex gap-2 items-center text-lg font-semibold">
            <PiPackage className="text-2xl" />
            <p>{unit_name}</p>
          </div>
          <div>Quantity: {qty} x N{Number(price).toFixed(2)}</div>
        </section>
        <section className="flex flex-col justify-between">
          <p>Total</p>
          <p className="text-lg font-semibold">N{total_price}</p>
        </section>
      </div>
      <div className="flex gap-3 items-center text-gray-500 font-semibold p-3">
        <MdOutlinePersonOutline className="text-xl" />
        <div className="flex flex-col ">
          <p>CUSTOMER </p>
          <p className="text-black ">{first_name} {last_name} </p>
        </div>
      </div>
      <div className="flex gap-3 items-center text-gray-500 font-semibold p-3">
        <IoCallOutline className="text-xl" />
        <div className="flex flex-col ">
          <p>CONTACT </p>
          <p className="text-black font-semibold">{phonenumber} </p>
        </div>
      </div>
    </section>
  );
};

export default Card_Info_Left;
