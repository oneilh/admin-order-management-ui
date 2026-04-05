import Image from "next/image";
import { GroupBuyProductType } from "@/Types/groupBuy";

type ProductProps = {
  id: number;
  product: GroupBuyProductType;
};

const Product = ({ id, product }: ProductProps) => {
  return (
    <section className="flex gap-2 items-center">
      <div className="">
        <Image
          src={product.image}
          alt={product.name}
		  width={64}
		  height={64}
          className="min-w-16 max-w-16 h-16 border-2 border-gray-400 rounded-lg  object-cover"
        />
      </div>
      <section>
        <p className="font-semibold">{product.name}</p>
        <p className="text-sm text-gray-500">ID: #{id}</p>
      </section>
    </section>
  );
};

export default Product;
