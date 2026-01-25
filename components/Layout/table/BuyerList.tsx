import GroupBuyerListRows from "@/app/groupBuys/[productId]/GroupBuyerListRows"
import { BuyerTableProps } from "./BuyerTable"
import Table from "./Table"
import BuyerRows from "./BuyerRows"


const BuyerList = ({data,columns, isGroupBuy}:BuyerTableProps) => {
  return (
     <Table columns={columns}>
      <BuyerRows {...{ data, isGroupBuy }} />
    </Table>
  )
}

export default BuyerList
