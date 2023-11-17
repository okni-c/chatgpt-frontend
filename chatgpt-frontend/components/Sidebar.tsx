import Button from "./Button";

export default function Sidebar() {
    const chatData = [
        { name: 'How do I eat burgers in the dark with a headlamp?' },
        { name: 'What is the difference between dogs and cats?' },
        { name: 'How do I eat burgers in the dark with a headlamp?' },
        { name: 'What is the difference between dogs and cats?' },
        { name: 'How do I eat burgers in the dark with a headlamp?' },
        { name: 'What is the difference between dogs and cats?' },
        { name: 'How do I eat burgers in the dark with a headlamp?' },
        { name: 'What is the difference between dogs and cats?' },
        { name: 'How do I eat burgers in the dark with a headlamp?' },
        { name: 'What is the difference between dogs and cats?' },
        { name: 'How do I eat burgers in the dark with a headlamp?' },
        { name: 'What is the difference between dogs and cats?' },
        { name: 'How do I eat burgers in the dark with a headlamp?' },
        { name: 'What is the difference between dogs and cats?' },
        { name: 'How do I eat burgers in the dark with a headlamp?' },
        { name: 'What is the difference between dogs and cats?' },
        { name: 'How do I eat burgers in the dark with a headlamp?' },
        { name: 'What is the difference between dogs and cats?' },
        { name: 'How do I eat burgers in the dark with a headlamp?' },
        { name: 'What is the difference between dogs and cats?' }
    ]
    return (
        <aside className="sidebar">
            <Button type={"new-chat"} />
            <div className="overflow-y-scroll max-h-[600px] flex flex-col justify-start flex-grow shadow-inner">
                <p className="text-sm">Today</p>
                {chatData.slice(0,2).map((data: any) => (
                    <Button key={data.name} type={"old-chat"} chatData={data} />
                ))}
                <p className="mt-8 text-sm">Yesterday</p>
                 {chatData.slice(2,5).map((data: any) => (
                    <Button key={data.name} type={"old-chat"} chatData={data} />
                ))}
                <p className="mt-8 text-sm">Last Month</p>
                {chatData.slice(5, 20).map((data: any) => (
                    <Button key={data.name} type={"old-chat"} chatData={data} />
                ))}
            </div>

            <Button type={"profile"} />
        </aside>
    );
}