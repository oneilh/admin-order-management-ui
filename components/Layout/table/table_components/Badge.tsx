// import { MdErrorOutline } from "react-icons/md";
// import { RiLoader4Line } from "react-icons/ri";
// import { LiaTruckMovingSolid } from "react-icons/lia";

// const Badge = ({status}) => {
//   const status = [
//     {
//       title: "Ready",
//       status_type: "ready",
//       icon: <LiaTruckMovingSolid />,
//     },
//     {
//       title: "Processing",
//       status_type: "processing",
//       icon: <RiLoader4Line />,
//     },
//     {
//       title: "Failed",
//       status_type: "failed",
//       icon: <MdErrorOutline />,
//     },
//   ];
//   return (
//     <div className="w-fit py-1 px-3 flex items-center gap-2 bg-green-200/30 rounded-2xl text-green-900 border border-green-900/60">
//       {status[0].icon}
//       <p>{status[0].title}</p>
//     </div>
//   );
// };

// export default Badge;

import { MdErrorOutline } from "react-icons/md";
import { RiLoader4Line } from "react-icons/ri";
import { LiaTruckMovingSolid } from "react-icons/lia";

type BadgeStatus = "READY_FOR_PICKUP" | "PROCESSING" | "FAILED";
interface BadgeProps {
  status: BadgeStatus;
}
const Badge = ({ status }: BadgeProps) => {
  // Define mapping for status types
  const statusMap = {
    READY_FOR_PICKUP: {
      title: "Ready",
      icon: <LiaTruckMovingSolid />,
      bgColor: "bg-green-200/30",
      textColor: "text-green-900",
      borderColor: "border-green-900/60",
    },
    PROCESSING: {
      title: "Processing",
      icon: <RiLoader4Line />,
      bgColor: "bg-yellow-200/30",
      textColor: "text-yellow-900",
      borderColor: "border-yellow-900/60",
    },
    FAILED: {
      title: "Failed",
      icon: <MdErrorOutline />,
      bgColor: "bg-red-200/30",
      textColor: "text-red-900",
      borderColor: "border-red-900/60",
    },
  };

  // Get the correct badge based on API status
  const badge = statusMap[status] || {
    title: status,
    icon: null,
    bgColor: "bg-gray-200/30",
    textColor: "text-gray-900",
    borderColor: "border-gray-900/60",
  };

  return (
    <div
      className={`w-fit py-1 px-3 flex items-center gap-2 rounded-2xl border ${badge.bgColor} ${badge.textColor} ${badge.borderColor}`}
    >
      {badge.icon}
      <p>{badge.title}</p>
    </div>
  );
};

export default Badge;
