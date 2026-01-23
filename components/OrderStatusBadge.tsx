import { Badge } from "@mantine/core";
import { statusIcon } from "./StatusIcons";

const OrderStatusBadge = ({item}:Record<string, any>) => {
  return (
    <td>
      {item.overall_status.toLowerCase() == "active" ? (
        <Badge leftSection={statusIcon.processing} variant="light">
          {item.overall_status}
        </Badge>
      ) : (
        <Badge leftSection={statusIcon.completed} variant="light" color="green">
          {item.overall_status}
        </Badge>
      )}
    </td>
  );
};

export default OrderStatusBadge;
