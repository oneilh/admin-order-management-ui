import { getAccessToken, BASE_URL } from "./auth";

export const getGroupBuyOrders = async (id: number) => {
  const url = `${BASE_URL}/sub-admin/v1/group-buy-orders/?id=${id}`;

  const res = await fetch(url, {
    headers: {
      Authorization: getAccessToken(),
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch group buy orders");
  }

  return res.json();
};
