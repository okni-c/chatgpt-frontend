import Image from "next/image"
import SearchBar from "./SearchBar";
import { useEffect, useState } from "react";

interface IContext {
    chatContext: any
}

export default function ChatBox({ chatContext }: IContext) {

    const [modChat, setModChat] = useState<any>({})

    useEffect(() => {
        if (chatContext != undefined) {
            const combinedChats = [];
            for (let i = 0; i < chatContext.aiResponses.length; i++) {
                combinedChats.push(chatContext.userPrompts[i], chatContext.aiResponses[i]);
            }

            setModChat({
                id: chatContext.id,
                question: chatContext.question,
                combinedChats,
            });
        } else {
            return
        }
    }, [chatContext])


    const NewChatTemplate = () => {
        return (
            <div className="flex flex-col justify-center items-center mt-56">
                <Image src={'/chat-logo.png'} alt="ChatGPT Logo" width={112} height={112} />
                <h1 className="login-heading mt-10">How can I help you?</h1>
            </div>
        );
    }

    const LoadOldChat = () => {
        return (
            <div className="flex flex-col justify-start items-start mt-56 gap-4 px-9 overflow-auto">
                {Object.keys(modChat).length != 0 && modChat.combinedChats.map((data: any) => (
                    <div key={data.question} className="flex flex-col align-baseline">
                        <h2 className="text-white text-lg font-semibold">{data.prompt ? 'Dallas Y.' : 'ChatGPT'}</h2>
                        <p>{data.prompt ? data.prompt : data.response}</p>
                    </div>
                ))}
            </div>
        );
    }

    return (
        <main className="flex-grow w-full relative">
            {chatContext != undefined ? <LoadOldChat /> : <NewChatTemplate />}

            <div className="absolute bottom-3 w-full flex flex-col justify-center items-center">
                <SearchBar />
                <p className="text-xs mt-2">ChatGPT can make mistakes. Consider checking important information.</p>
            </div>
        </main>
    );
}