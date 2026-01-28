import { IoAddOutline } from "react-icons/io5";
type HeaderProps = { children: React.ReactNode };
const TitleHeader = ({ children }: HeaderProps) => {
  return (
    <section className="flex items-center justify-between">
      <div className="flex flex-col gap-4">{children}</div>
      <button className="btn bg-black text-white rounded-xl hover:bg-neutral-800 ">
        <div className="flex gap-2 items-center ">
          <IoAddOutline className="text-md" />
          <p>New Buy</p>
        </div>
      </button>
    </section>
  );
};

export default TitleHeader;
