import ProductDetails from "@/components/ProductDetails/ProductDetails";

const ProductPage = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  const { productId } = await params;
  return <div><ProductDetails productId={productId} /></div>;
};

export default ProductPage;
