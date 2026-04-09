import GroupBuyOrderDetailClient from "./GroupBuyOrderDetailClient";

type Props = {
    params: Promise<{
        id: string;
        orderId: string;
    }>;
};

const page = async ({ params }: Props) => {
    const { id, orderId } = await params;
    return <GroupBuyOrderDetailClient id={Number(id)} orderId={Number(orderId)} />;
};

export default page;
