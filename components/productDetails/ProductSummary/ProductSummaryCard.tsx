import ProductDescription from "./ProductDescription";
import ProductHeader from "./ProductHeader";

const ProductSummaryCard = () => {
  return (
    <section className="product-detail h-full flex flex-col border border-gray-300 rounded-lg bg-white p-6 shadow-sm">
      <ProductHeader />
      {/* Divider */}
      <hr className="border-gray-300 my-6" />
      <ProductDescription />
    </section>
  );
};

export default ProductSummaryCard;
