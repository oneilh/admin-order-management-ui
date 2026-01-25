import BreadCrumbs from "@/components/BreadCrumbs";
import ProductDetails from "@/components/ProductDetails";

const ProductPage = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  const { productId } = await params;

  return (
    <div className="w-full">
      <BreadCrumbs isGroupBuy={true} />
      <ProductDetails productId={productId} isGroupBuy={true} />
    </div>
  );
};

export default ProductPage;
