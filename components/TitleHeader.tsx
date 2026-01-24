import { IoAddOutline } from "react-icons/io5";
type HeaderProps ={ title?: string; desc?: string }
const description = "Manage individual purchase orders";
const TitleHeader = ({ title='Single Buys', desc = description}: HeaderProps) => {
  return (
    <section className="flex items-center justify-between">
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-semibold">{title}</h1>
        <p>{desc}</p>
      </div>
      <button className="btn bg-black text-white">
        <div className="flex items-center">
          <IoAddOutline className="text-xl" />
          <p>New Buy</p>
        </div>
      </button>
    </section>
  );
};

export default TitleHeader;
