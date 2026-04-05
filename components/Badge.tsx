import { MdErrorOutline } from "react-icons/md";
import { RiLoader4Line } from "react-icons/ri";
import { LiaTruckMovingSolid } from "react-icons/lia";
import { FaCheckCircle } from "react-icons/fa";
import { MdPendingActions } from "react-icons/md";
import { GroupBuyStatus } from "@/Types/groupBuy";

type BadgeProps = {
    status: GroupBuyStatus;
};
const Badge = ({ status }: BadgeProps) => {
    // Define mapping for status types
    const statusMap = {
        ACTIVE: {
            title: "Active",
            icon: <RiLoader4Line />,
            bgColor: "bg-blue-200/30",
            textColor: "text-blue-900",
            borderColor: "border-blue-900/60",
        },
        SUCCESSFUL: {
            title: "Successful",
            icon: <FaCheckCircle />,
            bgColor: "bg-green-200/30",
            textColor: "text-green-900",
            borderColor: "border-green-900/60",
        },
        FAILED: {
            title: "Failed",
            icon: <MdErrorOutline />,
            bgColor: "bg-red-200/30",
            textColor: "text-red-900",
            borderColor: "border-red-900/60",
        },
        PROCESSING: {
            title: "Processing",
            icon: <MdPendingActions />,
            bgColor: "bg-yellow-200/30",
            textColor: "text-yellow-900",
            borderColor: "border-yellow-900/60",
        },
        READY_FOR_PICKUP: {
            title: "Ready",
            icon: <LiaTruckMovingSolid />,
            bgColor: "bg-green-200/30",
            textColor: "text-green-900",
            borderColor: "border-green-900/60",
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
            className={`w-fit px-2 flex items-center gap-2 rounded-lg border ${badge.bgColor} ${badge.textColor} ${badge.borderColor} cursor-pointer`}
        >
            {badge.icon}
            <p>{badge.title}</p>
        </div>
    );
};

export default Badge;
