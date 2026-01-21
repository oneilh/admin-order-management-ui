import { Column } from "./Columns";

type TheadProps = {
  columns: Column[];
};

const Thead = ({ columns }: TheadProps) => {
  return (
    <thead>
      <tr>
        {columns.map((column) => (
          <th key={column.key} className="px-6 py-3">
            {column.label}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default Thead;
