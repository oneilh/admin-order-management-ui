

const Product = ({ item }: Record<string, any>) => {
  return (
    <td>
      <div className="flex items-center gap-3">
        <div className="avatar">
          <div className="mask mask-squircle h-12 w-12">
            <img
              src="https://img.daisyui.com/images/profile/demo/2@94.webp"
              alt="Product"
            />
          </div>
        </div>
        <div className="font-bold">{item.product_name}</div>
      </div>
    </td>
  );
};

export default Product;
