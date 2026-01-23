import { Column } from "./Columns";
import Tbody from "./Tbody";
import Thead from "./Thead";

export type TableProps = {
  columns: Column[];
  data?: Record<string, any>[];
  showStatus?: boolean;
};
const Table = ({ columns, data, showStatus = false }: TableProps) => {
  return (
    <section className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
      <table className="table">
        <Thead columns={columns} showStatus={showStatus} />
        <Tbody data={data} showStatus={showStatus} />
      </table>
    </section>
  );
};

export default Table;
