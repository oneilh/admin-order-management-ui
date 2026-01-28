import { ACCESS_TOKEN } from "./auth";
type QryParam = "PAST" | "ACTIVE";

export const getGroupBuys = async (type: QryParam = "PAST") => {
  const res = await fetch(
    `https://staging-cloud.grup.com.ng/v1/sub-admin/v1/group-buys/?type=${type}`,
    {
      headers: {
        Authorization: ACCESS_TOKEN,
      },
    },
  );
  return res.json();
};
