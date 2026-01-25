import Link from "next/link";

const BreadCrumbs = ({ isGroupBuy = false }: { isGroupBuy?: boolean }) => {
  return (
    <div className="breadcrumbs text-sm">
      <ul>
        <li>
          <Link href={isGroupBuy ? "/groupBuys" : "/singleBuys"}>
            {isGroupBuy ? "GroupBuys Products" : "SingleBuys Products"}
          </Link>
        </li>
        <li>
          <Link href={""}>Details</Link>
        </li>
      </ul>
    </div>
  );
};

export default BreadCrumbs;
