type RefundableStatusProps = {
  statusText: string;
  allowRefund: string;
};

const RefundableStatus = ({
  statusText,
  allowRefund,
}: RefundableStatusProps) => {
  if (allowRefund) {
    return <p className="text-neutral-500 text-sm">{statusText}</p>;
  }
  return <p className="text-neutral-500 text-sm">{statusText}</p>;
};

export default RefundableStatus;