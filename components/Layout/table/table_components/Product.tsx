type ProductProps = {
  id: string;
  name: string;
  imageUrl: string;
};
const Product = ({ id, name, imageUrl }: ProductProps) => {
  return (
    <section className="flex gap-2 items-center">
      <div className="">
        <img
          src={imageUrl}
          alt=""
          className="min-w-16 max-w-16 h-16 border-2 border-gray-400 rounded-lg  object-cover"
        />
      </div>
      <section>
        <p className="font-semibold">{name}</p>
        <p className="text-sm text-gray-500">ID: #{id}</p>
      </section>
    </section>
  );
};

export default Product;
