type AmountCollectedProps = {
  amt_collected: string | number;
};

const AmountCollected = ({ amt_collected }: AmountCollectedProps) => {
  const formattedAmount = Number(amt_collected).toLocaleString("en-NG", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <p className="text-neutral-700 font-semibold">
      ₦ {formattedAmount}
    </p>
  );
};

export default AmountCollected;
