import BreadCrumbs from "@/components/BreadCrumbs";
import SingleBuyProductDetail from "./SingleBuyProductDetail";
import ProductDetails from "@/components/ProductDetails";

const ProductPage = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  const { productId } = await params;

  return (
    <div className="w-full">
      <BreadCrumbs />
      <ProductDetails productId={productId} isGroupBuy={false} />
      {/* <SingleBuyProductDetail productId={productId} /> */}
    </div>
  );
};

export default ProductPage;
