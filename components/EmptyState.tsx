// components/EmptyState.tsx
import { MdInbox } from "react-icons/md";

type Props = {
  message?: string;
};

const EmptyState = ({ message = "No data found" }: Props) => {
  return (
    <tr>
      <td colSpan={100}>
        <div className="flex flex-col items-center justify-center py-16 text-gray-400">
          <MdInbox size={48} className="mb-3" />
          <p className="text-sm">{message}</p>
        </div>
      </td>
    </tr>
  );
};

export default EmptyState;