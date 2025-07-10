import Chat from "@/components/chat";
import Link from "next/link";

export default async function Page() {
	return (
		<>
			<div className="flex max-w-md py-24 flex-col mx-auto">
				<Link href="/chat">
					<button className="bg-blue-500 text-white px-4 py-2 rounded">
						New Chat
					</button>
				</Link>
			</div>
			<Chat />
		</>
	);
}
