import { TableColumnType } from "@/Types/tableColumnType";

type TheadProps = {
  columns: TableColumnType[];
};

const Thead = ({ columns } : TheadProps) => {

  return (
    <thead>
      <tr>
        {columns.map((column) => (
          <th key={column.key}>{column.label}</th>
        ))}
      </tr>
    </thead>
  );
};

export default Thead;
