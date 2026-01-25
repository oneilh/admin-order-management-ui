import { groupMembersColumns } from "@/data/Columns";
import Table from "@/components/Layout/table/Table";
import { GroupBuyType } from "@/Types/groupOrderBuy";
import GroupBuyerListRows from "./GroupBuyerListRows";


type GroupBuyerListProps =
  | Pick<GroupBuyType, "members">

const GroupBuyerList = ({members}: GroupBuyerListProps) => {
  return (
    <Table columns={groupMembersColumns}>
      <GroupBuyerListRows {...{ members }} />
    </Table>
  );
};

export default GroupBuyerList;
