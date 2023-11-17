import Image from "next/image";
import { useRef, useState } from "react";

export default function SearchBar() {
    const [sendOpacity, setSendOpacity] = useState<string>('opacity-30')
    const searchBar = useRef<any>()

    function handleChange() {
        if (searchBar.current?.value === '') {
            setSendOpacity('opacity-30')
        } else {
            setSendOpacity('opacity-100 cursor-pointer')
        }
    }
    
    return (
        <div className="w-full max-w-[633px] relative">
            <label htmlFor="chat-search" className="sr-only">Chat Search Bar</label>
            <input ref={searchBar} onChange={handleChange} className="user-input-field max-w-[633px] w-full" name="chat-search" id="chat-search" type="text" placeholder="Hey chat..." />
            <Image className={`absolute right-[15px] bottom-[18px] transition-opacity duration-150 ease-linear cur ${sendOpacity}`} src={'/send_chat.png'} alt="Send chat" width={28} height={30} />
        </div>
    );
}