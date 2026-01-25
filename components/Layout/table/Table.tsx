import { TableColumnType } from "@/Types/tableColumnType";
import Thead from "./Thead";
import { ReactNode } from "react";

export type TableProps = {
  columns: TableColumnType[];
  children: ReactNode;
};
const Table = ({ columns, children }: TableProps) => {
  return (
    <section className="overflow-x-auto rounded-box border border-gray-200">
      <table className="table">
        <Thead columns={columns} />
        <tbody>{children}</tbody>
      </table>
    </section>
  );
};

export default Table;
