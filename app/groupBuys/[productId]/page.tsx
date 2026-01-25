import BreadCrumbs from "@/components/BreadCrumbs";
import GroupBuyProductDetail from "./GroupBuyProductDetail";

const ProductPage = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  const { productId } = await params;

  return (
    <div className="w-full">
      <BreadCrumbs />
      <GroupBuyProductDetail productId={productId} />
    </div>
  );
};

export default ProductPage;
