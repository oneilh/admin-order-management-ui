import { OrderType } from "@/Types/singleOrder";
import ProductDescription from "./ProductDescription";
import ProductHeader from "./ProductHeader";

const ProductSummaryCard = ({ id, product_name, price, description }: OrderType) => {
  return (
    <section className="product-detail h-full flex flex-col border border-gray-300 rounded-lg bg-white p-6 shadow-sm">
      <ProductHeader {...{ id, product_name, price }} />
      {/* Divider */}
      <hr className="border-gray-300 my-6" />
      <ProductDescription {...{description}} />
    </section>
  );
};

export default ProductSummaryCard;
