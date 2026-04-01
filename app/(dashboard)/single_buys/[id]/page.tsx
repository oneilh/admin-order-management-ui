import SingleBuyDetailClient from "./SingleBuyDetailClient";

type Props = {
	params: Promise<{
		id: string
	}>
}

export default async function SingleBuyDetailPage({params} : Props) {
	const {id} = await params;
	return (
		<SingleBuyDetailClient id={Number(id)} />
	)
}