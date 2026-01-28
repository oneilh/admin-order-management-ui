// import { HiOutlineCalendarDateRange } from "react-icons/hi2";
// import { HiArrowLongRight } from "react-icons/hi2";

// type TimelineProps = {
//   start: string;
//   end: string;
//   duration: string;
// };
// const Timeline = ({ start, end, duration }: TimelineProps) => {
//   return (
//     <section className="flex gap-2 flex-wrap">
//       <HiOutlineCalendarDateRange className="text-2xl text-gray-500" />
//       <section className="flex flex-col gap-0.5">
//         <div className="flex gap-2 items-center">
//           <p className="font-semibold text-neutral-700">{start}</p>
//           <HiArrowLongRight className=" text-gray-500" />
//           <p className="font-semibold text-neutral-700">{end}</p>
//         </div>
//         <p className="text-sm text-gray-500">{duration}</p>
//       </section>
//     </section>
//   );
// };

// export default Timeline;

import { HiOutlineCalendarDateRange } from "react-icons/hi2";
import { HiArrowLongRight } from "react-icons/hi2";

type TimelineProps = {
  start: string; // Pass 'created_at' here
  end: string;   // Pass 'expires_at' here
  duration: string;
};

// Simple helper to format date to Nigeria (en-NG) style
const formatDate = (dateString: string) => {
  if (!dateString) return "";
  return new Date(dateString).toLocaleDateString("en-NG", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};

const Timeline = ({ start, end, duration }: TimelineProps) => {
  return (
    <section className="flex gap-2 flex-wrap">
      <HiOutlineCalendarDateRange className="text-2xl text-gray-500" />
      <section className="flex flex-col gap-0.5">
        <div className="flex gap-2 items-center">
          {/* Format the start date */}
          <p className="font-semibold text-neutral-700">{formatDate(start)}</p>
          
          <HiArrowLongRight className="text-gray-500" />
          
          {/* Format the end date */}
          <p className="font-semibold text-neutral-700">{formatDate(end)}</p>
        </div>
        {/* Duration is untouched as requested */}
        <p className="text-sm text-gray-500">{duration}</p> 
      </section>
    </section>
  );
};

export default Timeline;