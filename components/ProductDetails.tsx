import { ProductPropType } from "@/Types/productPropTypes";
import ProductSummaryCard from "./ProductDetails/ProductSummary/ProductSummaryCard";
import ProductStatsDemo from "./ProductDetails/ProductStats/ProductStatsDemo";
import { groupBuyData } from "@/data/groupbuy";
import { singleBuyData } from "@/data/singlebuy";
import { SingleBuyType } from "@/Types/singleOrder";
import { GroupBuyType } from "@/Types/groupOrderBuy";
import BuyerTable from "./Layout/table/BuyerTable";
import {
  groupMembersCols,
} from "@/data/groupBuy_prod_and_users_columns";
import { singleBuyersCols } from "@/data/singleBuy_prod_and_users_columns";

const ProductDetails = ({ productId, isGroupBuy }: ProductPropType) => {
  if (isGroupBuy) {
    const product = groupBuyData.find((item) => item.id === productId);
    if (!product) {
      return (
        <section className="product-details-container">
          <p>Product not found.</p>
        </section>
      );
    }
    const {
      id,
      product_name,
      price,
      description,
      buyers,
      end_date,
      group_name,
      joined_members,
      needed_members,
      start_date,
      status,
    } = product;
    return (
      <div className="flex flex-col gap-8">
        <p className="text-3xl font-bold">Order Overview</p>
        <section className="flex max-lg:flex-wrap gap-8">
          <ProductSummaryCard {...{ id, product_name, price, description }} />
          {/* <ProductStats {...{ no_of_buyers, created_at, overall_status }} /> */}
          <ProductStatsDemo />
        </section>
        <div className="w-full">
          <BuyerTable data={buyers} columns={groupMembersCols} isGroupBuy={true} />
        </div>
      </div>
    );
  }

  const product = singleBuyData.find((item) => item.id === productId);
  if (!product) {
    return (
      <section className="product-details-container">
        <p>Product not found.</p>
      </section>
    );
  }
  const {
    id,
    product_name,
    price,
    description,
    buyers,
    created_at,
    no_of_buyers,
    status,
  } = product as SingleBuyType;
  return (
    <div className="flex flex-col gap-8">
      <p className="text-3xl font-bold">Order Overview</p>
      <section className="flex max-lg:flex-wrap gap-8">
        <ProductSummaryCard {...{ id, product_name, price, description }} />
        {/* <ProductStats {...{ no_of_buyers, created_at, overall_status }} /> */}
        <ProductStatsDemo />
      </section>
      <div className="w-full">
        <BuyerTable data={buyers} columns={singleBuyersCols} isGroupBuy={false} />
        {/* <GroupBuyerTable {...{ buyers }} /> */}
      </div>
    </div>
  );
};

export default ProductDetails;
