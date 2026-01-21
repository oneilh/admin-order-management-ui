import ProductDetail from "./ProductDetail";
import ProductsBuyers from "./ProductsBuyers";
import ProductStats from "./ProductStats";

const ProductDetails = ({ productId }: { productId: string }) => {
  const ID = productId;
  return (
    <section className="product-details-container">
      <ProductDetail />
      <ProductStats />
      <ProductsBuyers />
    </section>
  );
};

export default ProductDetails;
