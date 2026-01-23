
import { IoAddOutline } from "react-icons/io5";
const TitleHeader = () => {
  return (
    <section className="flex items-center justify-between">
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-semibold">Single Buys</h1>
        <p>Manage individual purchase orders</p>
      </div>
      <button className="btn bg-black text-white">
        <div className="flex items-center">
          <IoAddOutline className="text-xl" />
          <p>New Buy</p>
        </div>
      </button>
    </section>
  )
}

export default TitleHeader
