import ProductsBuyers from "@/components/ProductDetails/BuyersList/ProductsBuyers";
import ProductStats from "@/components/ProductDetails/ProductStats/ProductStats";
import ProductSummaryCard from "@/components/ProductDetails/ProductSummary/ProductSummaryCard";
import { singleBuyData } from "@/data/buy";
import { ProductIDPropType } from "@/Types/productTypes";
import { OrderType } from "@/Types/singleOrder";

const SingleBuyProductDetail = ({ productId }: ProductIDPropType) => {
  const ID = Number(productId);

  // Find the product by ID
  const single_product = singleBuyData.find((item) => item.id === ID);

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
  }: OrderType = single_product;
  return (
    <>
      <ProductSummaryCard {...{ id, product_name, price, description }} />
      <ProductStats {...{ no_of_buyers, created_at, overall_status }} />
      <ProductsBuyers {...{ buyers }} />
    </>
  );
};

export default SingleBuyProductDetail;
