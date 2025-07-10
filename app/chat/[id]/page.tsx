import Chat from "@/components/chat";
import Link from "next/link";

export default async function Page({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;
	return (
		<>
			<div className="flex max-w-md py-12 flex-col mx-auto">
				<Link href="/chat">
					<button className="bg-blue-500 text-white px-4 py-2 rounded">
						New Chat
					</button>
				</Link>
				<div>Chat ID: {id}</div>
			</div>
			<Chat id={id} />
		</>
	);
}
