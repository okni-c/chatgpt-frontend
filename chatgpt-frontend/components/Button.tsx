import Image from "next/image";

interface IButton {
    type: 'new-chat' | 'old-chat' | 'profile',
    profileData?: {
        src?: string,
        username?: string
    },
    chatData?: {
        question: string,
        id: number
    },
    onClick: any,
    isActive?: boolean | null,
}

export default function Button({ type, profileData, chatData, onClick, isActive }: IButton) {

    const handleClick = () => {
        onClick(chatData!.id);
    };

    const NewChatBtn = () => {
        return (
            <button className="chat-btn new-chat">
                New Chat
                <Image src={'/new-chat-logo.png'} alt={'Notepad'} width={20} height={20} />
            </button>
        );
    }

    const ProfileBtn = () => {
        let src
        if (profileData?.src) {
            src = profileData?.src
        } else {
            src = '/profile-fallback.png'
        }
        return (
            <button className="chat-btn profile-btn mt-[18px]">
                <Image src={src} alt={'Notepad'} width={31} height={31} />
                {profileData ? profileData?.username : 'Dallas Y.'}
            </button>
        );
    }

    const OldChatBtn = () => {
        return (
            <button className={`chat-btn old-chat ${isActive ? `active-chat-btn` : ``}`}
            onClick={handleClick}>
                {chatData?.question}
            </button>
        );
    }

    if (type === 'new-chat') {
        return <NewChatBtn />;
    }

    if (type === 'old-chat') {
        return <OldChatBtn />;
    }

    if (type === 'profile') {
        return <ProfileBtn />;
    }
}