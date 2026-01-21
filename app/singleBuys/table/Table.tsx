import { Column } from "./Columns";
import Tbody from "./Tbody";
import Thead from "./Thead";

export type TableProps = {
  columns: Column[];
  data?: Record<string, any>[];
};
const Table = ({ columns, data }: TableProps) => {
  return (
    <section className="overflow-x-auto">
      <table className="table">
        <Thead columns={columns} />
        <Tbody data={data} />
      </table>
    </section>
  );
};

export default Table;
