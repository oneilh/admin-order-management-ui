import { OrderType } from "@/Types/singleOrder";
import ProductDescription from "./ProductDescription";
import ProductHeader from "./ProductHeader";
export type ProductSummaryCardProps = Pick<
  OrderType,
  "id" | "product_name" | "price" | "description"
>;

const ProductSummaryCard = ({
  id,
  product_name,
  price,
  description,
}: ProductSummaryCardProps) => {
  return (
    <section className="w-full flex flex-col border border-gray-300 rounded-lg bg-white p-6">
      <ProductHeader {...{ id, product_name, price }} />
      {/* Divider */}
      <hr className="border-gray-300 my-6" />
      <ProductDescription {...{ description }} />
    </section>
  );
};

export default ProductSummaryCard;
