import { singleBuyData } from "@/data/buy";
import { ProductIDPropType } from "@/Types/productTypes";
import { OrderType } from "@/Types/singleOrder";
import SingleBuyProductDetail from "@/app/singleBuys/[productId]/SingleBuyProductDetail";

const ProductDetails = ({ productId }: ProductIDPropType) => {
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

  return (
    <section className="product-details-container">
      <SingleBuyProductDetail {...{ productId }} />
    </section>
  );
};

export default ProductDetails;
