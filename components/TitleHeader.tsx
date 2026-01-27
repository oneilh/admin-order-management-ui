import { IoAddOutline } from "react-icons/io5";
type HeaderProps ={ title?: string; desc?: string, children?: React.ReactNode}
const description = "Manage individual purchase orders";
const TitleHeader = ({ title='Single Buys', desc = description, children}: HeaderProps) => {
  return (
    <section className="flex items-center justify-between">
      <div className="flex flex-col gap-4">
       {children}
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
