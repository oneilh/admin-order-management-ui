import { Column } from "./Columns";
import Thead from "./Thead";
import { ReactNode } from "react";

export type TableProps = {
  columns: Column[];
  children: ReactNode;
};
const Table = ({ columns, children }: TableProps) => {
  return (
    <section className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
      <table className="table">
        <Thead columns={columns} />
        <tbody>{children}</tbody>
      </table>
    </section>
  );
};

export default Table;
