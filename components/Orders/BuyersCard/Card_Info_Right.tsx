import { SlLocationPin } from "react-icons/sl";
import { RiMapPin4Line } from "react-icons/ri";
import { IoCallOutline } from "react-icons/io5";

type CardInfo_Left_Props = {
  public_address: string;
  state: string;
  full_address: string;
  location_contact: string;
};
const Card_Info_Right = ({
  public_address,
  state,
  full_address,
  location_contact,
}: CardInfo_Left_Props) => {
  return (
    <div className="grow-2 flex flex-col gap-2 border border-gray-200 p-2 rounded-xl font-semibold">
      <div className="flex items-center gap-2 bg-gray-300/30 p-4 rounded-t-xl">
        <h3 className=" text-gray-500">Pickup Location</h3>
      </div>
      <div className="flex gap-2 items-center p-3">
        <div>
          <RiMapPin4Line className="text-gray-500 text-xl" />
        </div>
        <div className="flex flex-col gap-0.5">
          <p className="text-gray-500">REGION</p>
          <p>{public_address}, {state}</p>
        </div>
      </div>

      <div className="flex gap-2 items-center p-3">
        <div>
          <SlLocationPin className="text-gray-500 text-xl" />
        </div>
        <div className="flex flex-col gap-0.5">
          <p className="text-gray-500 ">FULL ADDRESS</p>
          <p>{full_address}</p>
        </div>
      </div>
      <div className="flex gap-2 items-center p-3 border-t border-t-gray-200">
        <IoCallOutline className="text-xl" />

        <div className="flex flex-col gap-0.5">
          <p className="text-gray-500 ">LOCATION CONTACT</p>
          <p>{location_contact}</p>
        </div>
      </div>
    </div>
  );
};

export default Card_Info_Right;
