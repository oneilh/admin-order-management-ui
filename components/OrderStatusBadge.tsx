import { Badge } from "@mantine/core";
import { statusIcon } from "./StatusIcons";

const OrderStatusBadge = ({item}:Record<string, any>) => {
  return (
    <td>
      {item.status.toLowerCase() == "active" ? (
        <Badge leftSection={statusIcon.processing} variant="light">
          {item.status}
        </Badge>
      ) : (
        <Badge leftSection={statusIcon.completed} variant="light" color="green">
          {item.status}
        </Badge>
      )}
    </td>
  );
};

export default OrderStatusBadge;
