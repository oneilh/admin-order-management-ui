import { FaCheckToSlot } from "react-icons/fa6";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { MdLocalShipping } from "react-icons/md";
import { PiPackageDuotone } from "react-icons/pi";
import { RiProgress8Line } from "react-icons/ri";
import { TbPackageImport, TbPackageOff } from "react-icons/tb";

export const statusIcon = {
  active: <RiProgress8Line />,
  completed: <IoCheckmarkDoneCircle />,
  delivered: <MdLocalShipping className="text-lg" />,
  processing: <PiPackageDuotone />,
  cancelled: <TbPackageOff />,
  paid: <FaCheckToSlot />,
  refunded: <TbPackageImport />,
};
