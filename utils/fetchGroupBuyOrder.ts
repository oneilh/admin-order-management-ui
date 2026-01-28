import { ACCESS_TOKEN } from "./auth";

const getGroupBuyOrders = async (id: string) => {
  const res = await fetch(
    `https://staging-cloud.grup.com.ng/v1/sub-admin/v1/group-buy-orders/?id=${id}`,
    {
      headers: {
        Authorization: ACCESS_TOKEN,
      },
    },
  );
  return res.json();
};
