import BreadCrumbs from "@/components/BreadCrumbs";
import Card_Head from "@/components/Orders/BuyersCard/Card_Head";
import Card_Info_Left from "@/components/Orders/BuyersCard/Card_Info_Left";
import Card_Info_Right from "@/components/Orders/BuyersCard/Card_Info_Right";
import Order_Details_Stats from "@/components/Orders/Order_Details_Stats";
import { getGroupBuyOrders } from "@/utils/fetchGroupBuyOrder";

//icon import
import { PiSquaresFour } from "react-icons/pi";
import { TbListDetails } from "react-icons/tb";
// type ProductPageProps = {
//   params: Promise<{ productId: string }>;
// }
type ProductPageProps = {
  params: { productId: string };
};
const ProductPage = async ({ params }: ProductPageProps) => {
  // const productId = (await params).productId;
  const productId = Number((await params).productId);
  const data = await getGroupBuyOrders(productId);
  console.log(data);

  // If data.results is undefined, fallback to empty array to avoid errors
  const orders = data?.results || [];

  let order_cnt= orders.length;
  return (
    <div className="w-full flex flex-col gap-8">
      <BreadCrumbs isGroupBuy={true} />
      <section className="flex justify-between items-center">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold">Order Management</h2>
          <p>Viewing recent transactions and pickup requests</p>
        </div>

        <section className="h-fit w-fit flex items-center border border-gray-200 p-1.5 rounded-lg">
          <div className="h-fit p-1.5 text-black bg-gray-200/70 rounded-lg cursor-pointer">
            <PiSquaresFour className="text-2xl" />
          </div>
          <div className="h-fit p-1.5 text-gray-500 cursor-pointer">
            <TbListDetails className="text-2xl" />
          </div>
        </section>
      </section>
      <Order_Details_Stats order_count={order_cnt} />

      <section className="flex gap-8 flex-wrap">
        {orders.map((data: any, index: string) => {
          return (
            <section
              key={data.id}
              className="w-full max-w-[800px] flex flex-col gap-4 p-4 border border-gray-300 rounded-2xl"
            >
              <Card_Head
                id={data.id}
                orderId={data.order_id}
                date={data.created_at}
                status={data.status_display_text}
              />
              <section className="flex flex-wrap gap-4 lg:grid lg:grid-cols-2">
                <Card_Info_Left
                  first_name={data.user?.first_name}
                  last_name={data.user?.last_name}
                  phonenumber={data.phonenumber}
                  qty={data.quantity}
                  price={data.price}
                  total_price={data.total_price}
                  unit_name={data.product_name}
                />
                <Card_Info_Right
                  state={data.pickup_location.state}
                  full_address={data.pickup_location.private_address}
                  location_contact={data.pickup_location.phonenumber}
                  public_address={data.pickup_location.public_address}
                />
              </section>
            </section>
          );
        })}
      </section>
    </div>
  );
};

export default ProductPage;
