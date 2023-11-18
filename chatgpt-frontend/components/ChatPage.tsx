import { useState } from "react";
import ChatBox from "./ChatBox";
import Sidebar from "./Sidebar";

export default function ChatPage() {
    const [chatContext, setChatContext] = useState<Object | undefined>(undefined)

    const getChatContext = (chatData: any) => {
        setChatContext(chatData)
    }

    return (
        <div className="flex">
            <Sidebar getChatContext={getChatContext} />
            <ChatBox chatContext={chatContext} />
        </div>
    );
}