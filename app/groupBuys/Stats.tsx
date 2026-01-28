import { FaArrowTrendUp } from "react-icons/fa6";
import { LuPackage } from "react-icons/lu";
import { MdErrorOutline } from "react-icons/md";
import { TbCurrencyNaira } from "react-icons/tb";

type StatsProps = {
  totalAmount: number;
  activeCampaigns: number;
  failedCampaigns: number;
};
const Stats = ({
  totalAmount,
  activeCampaigns,
  failedCampaigns,
}: StatsProps) => {
  const stats = [
    {
      title: "Total Collected",
      amount: totalAmount,
      icon: (
        <div className="flex justify-center items-center w-14 h-14 bg-green-600/10 rounded-full">
          <TbCurrencyNaira className="text-3xl text-green-500" />
        </div>
      ),
    },
    {
      title: "Active Campaigns",
      amount: activeCampaigns,
      icon: (
        <div className="flex justify-center items-center w-14 h-14 bg-blue-600/10 rounded-full">
          <LuPackage className="text-3xl text-blue-500" />
        </div>
      ),
    },
    {
      title: "Failed Campaigns",
      amount: failedCampaigns,
      icon: (
        <div className="flex justify-center items-center w-14 h-14 bg-red-600/10 rounded-full">
          <MdErrorOutline className="text-3xl text-red-500" />
        </div>
      ),
    },
  ];
  return (
    <section className="flex flex-wrap gap-6">
      {stats.map((stat) => {
        return (
          <section
            key={stat.title}
            className="flex justify-between grow border border-gray-300 p-6 rounded-xl items-center"
          >
            {stat.icon}
            <div className="flex flex-col gap-2">
              <p className="font-semibold text-neutral-600">{stat.title}</p>
              <p className="text-2xl font-bold">
                {stat.amount.toLocaleString()}
              </p>
            </div>
          </section>
        );
      })}
    </section>
  );
};

export default Stats;
