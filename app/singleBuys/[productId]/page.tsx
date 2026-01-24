import BreadCrumbs from "@/components/BreadCrumbs";
import SingleBuyProductDetail from "./SingleBuyProductDetail";

const ProductPage = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  const { productId } = await params;

  return (
    <div className="w-full">
      <BreadCrumbs />
      <SingleBuyProductDetail productId={productId} />
    </div>
  );
};

export default ProductPage;
