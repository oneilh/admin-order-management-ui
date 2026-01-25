import Table from "./Layout/table/Table";
import { TableColumnType } from "@/Types/tableColumnType";
import TableRows from "./Layout/table/TableRows";

type ProductListProps = {
  column: TableColumnType[];
  data: any[];
  isGroupBuy?: boolean;
};
const ProductList = ({ column, data, isGroupBuy=false }: ProductListProps) => {
  return (
    <Table columns={column}>
      <TableRows data={data} isGroupBuy={isGroupBuy} />
    </Table>
  );
};

export default ProductList;
