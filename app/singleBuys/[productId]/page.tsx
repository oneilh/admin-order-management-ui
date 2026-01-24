import BreadCrumbs from "@/components/BreadCrumbs";
import ProductDetails from "@/components/ProductDetails/ProductDetails";

const ProductPage = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  const { productId } = await params;
  return (
    <div className="w-full">
      <BreadCrumbs/>
      <ProductDetails productId={productId} />
    </div>
  );
};

export default ProductPage;
