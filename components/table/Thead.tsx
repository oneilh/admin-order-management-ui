import { Column } from "./Columns";

type TheadProps = {
  columns: Column[];
  showStatus?: boolean;
};

const Thead = ({ columns, showStatus = false }: TheadProps) => {
  const visibleColumns = showStatus
    ? columns
    : columns.filter((column) => column.key !== "status");

  return (
    <thead>
      <tr>
        {visibleColumns.map((column) => (
          <th key={column.key}>{column.label}</th>
        ))}
      </tr>
    </thead>
  );
};

export default Thead;
