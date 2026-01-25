import { GroupBuyType } from "@/Types/groupOrderBuy";


const GroupBuyerListRows = ({ members }: Pick<GroupBuyType, "members">) => {
  if(!members){
    return
  }
  return (
    <>
      {members.map((member) => (
        <tr key={member.member_id} className="cursor-pointer hover:bg-base-300">
          <td>#{member.member_id}</td>
          <td>{member.name}</td>
          <td>{member.email}</td>
          <td>{member.unit}</td>
          <td>{member.order_date}</td>
          <td>{member.order_status}</td>
          <td>{member.payment_status}</td>
        </tr>
      ))}
    </>
  );
};

export default GroupBuyerListRows;
