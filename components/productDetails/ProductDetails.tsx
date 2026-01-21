import ProductSummaryCard from "./ProductSummary/ProductSummaryCard";
import ProductsBuyers from "./BuyersList/ProductsBuyers";
import ProductStats from "./ProductStats/ProductStats";

const ProductDetails = ({ productId }: { productId: string }) => {
  const ID = productId;
  return (
    <section className="product-details-container">
      <ProductSummaryCard />
      <ProductStats />
      <ProductsBuyers />
    </section>
  );
};

export default ProductDetails;
