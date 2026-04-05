type RefundableStatusProps = {
    statusText: string | null;
    allowRefund: boolean;
};

const RefundableStatus = ({
    statusText,
    allowRefund,
}: RefundableStatusProps) => {
    if (!statusText) return null; // nothing to show
    return (
        <p
            className={`text-neutral-500 text-sm ${allowRefund ? "text-orange-500" : "text-neutral-500"}`}
        >
            {statusText}
        </p>
    );
};

export default RefundableStatus;
