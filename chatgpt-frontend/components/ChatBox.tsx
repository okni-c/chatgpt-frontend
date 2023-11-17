import Image from "next/image"
import SearchBar from "./SearchBar";

export default function ChatBox() {
    return (
        <main className="flex-grow w-full relative">
            <div className="flex flex-col justify-center items-center mt-56">
                <Image src={'/chat-logo.png'} alt="ChatGPT Logo" width={112} height={112} />
                <h1 className="login-heading mt-10">How can I help you?</h1>
            </div>
            <div className="absolute bottom-3 w-full flex flex-col justify-center items-center">
                <SearchBar />
                <p className="text-xs mt-2">ChatGPT can make mistakes. Consider checking important information.</p>
            </div>
        </main>
    );
}