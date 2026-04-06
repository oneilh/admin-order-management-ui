import GroupBuyDetailClient from "./GroupBuyDetailClient";

type Props = {
    params: Promise<{ id: string }>;
};

export default async function GroupBuyDetailPage({ params }: Props) {
	const { id } = await params;

	return (
		<div>
			<h1>Group Buy Detail - ID: {id}</h1>
			<GroupBuyDetailClient id={Number(id)} />
		</div>
	)
}