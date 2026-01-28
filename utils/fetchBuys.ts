// import { ACCESS_TOKEN } from "./auth";

// type QryParam = "PAST" | "ACTIVE";

// // Generic function to fetch either group buys or single buys
// export const getBuys = async (
//   buyType: "group" | "single",
//   type: QryParam = "PAST",
// ) => {
//   const endpoint = buyType === "group" ? "group-buys" : "single-buys";

//   const res = await fetch(
//     `$https://staging-cloud.grup.com.ng/v1/sub-admin/v1/${endpoint}/?type=${type}`,
//     {
//       headers: {
//         Authorization: ACCESS_TOKEN,
//       },
//     },
//   );

//   if (!res.ok) {
//     throw new Error(`Failed to fetch ${buyType} buys: ${res.statusText}`);
//   }

//   return res.json();
// };

// Usage examples
// Get active group buys
// const groupBuys = await getBuys("group", "ACTIVE");

// Get past single buys
// const singleBuys = await getBuys("single", "PAST");

import { ACCESS_TOKEN, BASE_URL } from "./auth";

type QryParam = "PAST" | "ACTIVE";

export const getBuys = async (
  buyType: "group" | "single",
  type: QryParam = "PAST"
) => {
  const endpoint = buyType === "group" ? "group-buys" : "single-buys";
  const url = `${BASE_URL}/sub-admin/v1/${endpoint}/?type=${type}`; // fixed URL

  const res = await fetch(url, {
    headers: {
      Authorization: ACCESS_TOKEN, // backend said no Bearer needed
    },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch ${buyType} buys: ${res.statusText}`);
  }

  return res.json();
};

// Example usage:
// const groupBuys = await getBuys("group", "ACTIVE");
// const singleBuys = await getBuys("single", "PAST");
