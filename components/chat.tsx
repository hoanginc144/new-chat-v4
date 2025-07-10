"use client";
import { generateId } from "@/lib/utils";
import { useChat } from "@ai-sdk/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface ChatProps {
	id?: string;
}

export default function Chat({ id }: ChatProps) {
	const router = useRouter();
	const [chatId] = useState<string>(id || generateId());
	const { messages, input, handleInputChange, handleSubmit } = useChat({
		id: chatId,
	});
	const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!id) {
			router.push(`/chat/${chatId}`);
		}
		handleSubmit();
	};
	return (
		<div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
			{messages.map((message) => (
				<div key={message.id} className="whitespace-pre-wrap">
					{message.role === "user" ? "User: " : "AI: "}
					{message.parts.map((part, i) => {
						switch (part.type) {
							case "text":
								return <div key={`${message.id}-${i}`}>{part.text}</div>;
						}
					})}
				</div>
			))}

			<form onSubmit={handleFormSubmit}>
				<input
					className="fixed dark:bg-zinc-900 bottom-0 w-full max-w-md p-2 mb-8 border border-zinc-300 dark:border-zinc-800 rounded shadow-xl"
					value={input}
					placeholder="Say something..."
					onChange={handleInputChange}
				/>
			</form>
		</div>
	);
}
