import ProductStats from "@/components/ProductDetails/ProductStats/ProductStats";
import ProductStatsDemo from "@/components/ProductDetails/ProductStats/ProductStatsDemo";
import ProductSummaryCard from "@/components/ProductDetails/ProductSummary/ProductSummaryCard";
import { groupBuyData } from "@/data/groupbuy";
import { GroupBuyType } from "@/Types/groupOrderBuy";
import { ProductIDPropType } from "@/Types/productTypes";
import GroupBuyerTable from "./GroupBuyerTable";

const GroupBuyProductDetail = ({ productId }: ProductIDPropType) => {
  const productGroup = groupBuyData.find((item) => {
    return item.id == productId;
  });

  if (!productGroup) {
    return (
      <section className="product-details-container">
        <p>Product not found.</p>
      </section>
    );
  }
  const {
    id,
    group_name,
    product_name,
    price,
    description,
    needed_members,
    joined_members,
    start_date,
    end_date,
    overall_status,
    members,
  }: GroupBuyType = productGroup;
  return (
    <div className="flex flex-col gap-8">
      <p className="text-3xl font-bold">Order Overview</p>
      <section className="flex max-lg:flex-wrap gap-8">
        <ProductSummaryCard {...{ id, product_name, price, description }} />
        {/* <ProductStats {...{ no_of_buyers, created_at, overall_status }} /> */}
        <ProductStatsDemo />
      </section>
      <div className="w-full">
        <GroupBuyerTable {...{ members }} />
      </div>
    </div>
  );
};

export default GroupBuyProductDetail;
