import ProductsBuyers from "@/components/ProductDetails/BuyersList/ProductsBuyers";
import ProductStats from "@/components/ProductDetails/ProductStats/ProductStats";
import ProductStatsDemo from "@/components/ProductDetails/ProductStats/ProductStatsDemo";
import ProductSummaryCard from "@/components/ProductDetails/ProductSummary/ProductSummaryCard";
import { singleBuyData } from "@/data/singlebuy";
import { ProductIDPropType } from "@/Types/productTypes";
import { SingleOrderType } from "@/Types/singleOrder";

const SingleBuyProductDetail = ({ productId }: ProductIDPropType) => {
  const single_product = singleBuyData.find((item) => {
    return item.id == productId;
  });

  if (!single_product) {
    return (
      <section className="product-details-container">
        <p>Product not found.</p>
      </section>
    );
  }
  const {
    id,
    product_name,
    no_of_buyers,
    price,
    description,
    created_at,
    overall_status,
    buyers,
  }: SingleOrderType = single_product;
  return (
    <div className="flex flex-col gap-8">
      <p className="text-3xl font-bold">Order Overview</p>
      <section className="flex max-lg:flex-wrap gap-8">
        <ProductSummaryCard {...{ id, product_name, price, description }} />
        {/* <ProductStats {...{ no_of_buyers, created_at, overall_status }} /> */}
        <ProductStatsDemo />
      </section>
      <div className="w-full">
        <ProductsBuyers {...{ buyers }} />
      </div>
    </div>
  );
};

export default SingleBuyProductDetail;
