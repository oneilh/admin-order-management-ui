type Props = {
	params: Promise<{
		id: string
	}>
}

export default async function SingleBuyDetailPage({params} : Props) {
	const {id} = await params;
	return (
		<div>
			<p>Order ID : {id}</p>
		</div>
	)
}