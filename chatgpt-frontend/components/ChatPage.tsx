import ChatBox from "./ChatBox";
import Sidebar from "./Sidebar";

export default function ChatPage() {
    return (
        <div className="flex">
            <Sidebar />
            <ChatBox />
        </div>
    );
}