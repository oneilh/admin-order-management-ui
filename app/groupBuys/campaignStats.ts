type Campaign = {
  total_amount_collected: string;
  group_buy_status: string;
};

export function getCampaignStats(results: Campaign[] = []) {
  let totalAmount = 0;
  let activeCampaigns = 0;
  let failedCampaigns = 0;

  for (const item of results) {
    totalAmount += Number(item.total_amount_collected || 0);

    if (item.group_buy_status === "FAILED") {
      failedCampaigns++;
    }

    if (
      item.group_buy_status === "PROCESSING" ||
      item.group_buy_status === "READY_FOR_PICKUP"
    ) {
      activeCampaigns++;
    }
  }

  return {
    totalAmount,
    activeCampaigns,
    failedCampaigns,
  };
}
