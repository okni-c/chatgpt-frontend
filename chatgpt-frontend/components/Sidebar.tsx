import { useState } from "react";
import Button from "./Button";

export default function Sidebar({ getChatContext }: any) {
    const chatData = [
        { id: 1, 
            question: 'How can I master the art of juggling flaming torches?', 
            aiResponses: [
                {id: 0, response: 'You can do this by digging a hole the size of Manhatten.'},
                {id: 1, response: 'Certainly! Try offing yourself! How about that?'},
                {id: 2, response: 'Lmao.'}
            ],
            userPrompts: [
                {id: 0, prompt: 'How can I master the art of juggling flaming torches?'},
                {id: 1, prompt: 'Okay, thats not very helpful. Can you try again?'},
                {id: 2, prompt: 'Jesus christ...'}
            ]
        },
        { id: 2, question: 'Why do cats always land on their feet, and dogs not so much?',
        aiResponses: [
            {id: 0, response: 'You can do this by digging a hole the size of Manhatten.'},
            {id: 1, response: 'Certainly! Try offing yourself! How about that?'},
            {id: 2, response: 'Lmao.'}
        ],
        userPrompts: [
            {id: 0, prompt: 'How can I master the art of juggling flaming torches?'},
            {id: 1, prompt: 'Okay, thats not very helpful. Can you try again?'},
            {id: 2, prompt: 'Jesus christ...'}
        ] },
        { id: 3, question: 'Is it advisable to use chopsticks for eating spaghetti?',
        aiResponses: [
            {id: 0, response: 'You can do this by digging a hole the size of Manhatten.'},
            {id: 1, response: 'Certainly! Try offing yourself! How about that?'},
            {id: 2, response: 'Lmao.'}
        ],
        userPrompts: [
            {id: 0, prompt: 'How can I master the art of juggling flaming torches?'},
            {id: 1, prompt: 'Okay, thats not very helpful. Can you try again?'},
            {id: 2, prompt: 'Jesus christ...'}
        ] },
        { id: 4, question: 'What career advice would you give to a penguin?',
        aiResponses: [
            {id: 0, response: 'You can do this by digging a hole the size of Manhatten.'},
            {id: 1, response: 'Certainly! Try offing yourself! How about that?'},
            {id: 2, response: 'Lmao.'}
        ],
        userPrompts: [
            {id: 0, prompt: 'How can I master the art of juggling flaming torches?'},
            {id: 1, prompt: 'Okay, thats not very helpful. Can you try again?'},
            {id: 2, prompt: 'Jesus christ...'}
        ] },
        { id: 5, question: 'In your opinion, can a kangaroo moonwalk?',
        aiResponses: [
            {id: 0, response: 'You can do this by digging a hole the size of Manhatten.'},
            {id: 1, response: 'Certainly! Try offing yourself! How about that?'},
            {id: 2, response: 'Lmao.'}
        ],
        userPrompts: [
            {id: 0, prompt: 'How can I master the art of juggling flaming torches?'},
            {id: 1, prompt: 'Okay, thats not very helpful. Can you try again?'},
            {id: 2, prompt: 'Jesus christ...'}
        ] },
        { id: 6, question: 'If a tree falls in a forest and no one is around to hear it, does it make a sound?',
        aiResponses: [
            {id: 0, response: 'You can do this by digging a hole the size of Manhatten.'},
            {id: 1, response: 'Certainly! Try offing yourself! How about that?'},
            {id: 2, response: 'Lmao.'}
        ],
        userPrompts: [
            {id: 0, prompt: 'How can I master the art of juggling flaming torches?'},
            {id: 1, prompt: 'Okay, thats not very helpful. Can you try again?'},
            {id: 2, prompt: 'Jesus christ...'}
        ] },
        { id: 7, question: 'Can you share some tips on ninja-level stealth in a library?',
        aiResponses: [
            {id: 0, response: 'You can do this by digging a hole the size of Manhatten.'},
            {id: 1, response: 'Certainly! Try offing yourself! How about that?'},
            {id: 2, response: 'Lmao.'}
        ],
        userPrompts: [
            {id: 0, prompt: 'How can I master the art of juggling flaming torches?'},
            {id: 1, prompt: 'Okay, thats not very helpful. Can you try again?'},
            {id: 2, prompt: 'Jesus christ...'}
        ] },
        { id: 8, question: 'What do you think about starting a rock band with sea otters?',
        aiResponses: [
            {id: 0, response: 'You can do this by digging a hole the size of Manhatten.'},
            {id: 1, response: 'Certainly! Try offing yourself! How about that?'},
            {id: 2, response: 'Lmao.'}
        ],
        userPrompts: [
            {id: 0, prompt: 'How can I master the art of juggling flaming torches?'},
            {id: 1, prompt: 'Okay, thats not very helpful. Can you try again?'},
            {id: 2, prompt: 'Jesus christ...'}
        ] },
        { id: 9, question: 'How do you interpret the language of dolphins?',
        aiResponses: [
            {id: 0, response: 'You can do this by digging a hole the size of Manhatten.'},
            {id: 1, response: 'Certainly! Try offing yourself! How about that?'},
            {id: 2, response: 'Lmao.'}
        ],
        userPrompts: [
            {id: 0, prompt: 'How can I master the art of juggling flaming torches?'},
            {id: 1, prompt: 'Okay, thats not very helpful. Can you try again?'},
            {id: 2, prompt: 'Jesus christ...'}
        ] },
        { id: 10, question: 'Do you have any foolproof methods for finding lost socks?',
        aiResponses: [
            {id: 0, response: 'You can do this by digging a hole the size of Manhatten.'},
            {id: 1, response: 'Certainly! Try offing yourself! How about that?'},
            {id: 2, response: 'Lmao.'}
        ],
        userPrompts: [
            {id: 0, prompt: 'How can I master the art of juggling flaming torches?'},
            {id: 1, prompt: 'Okay, thats not very helpful. Can you try again?'},
            {id: 2, prompt: 'Jesus christ...'}
        ] },
        { id: 11, question: 'If you could teach a goldfish to play piano, what song would you choose?',
        aiResponses: [
            {id: 0, response: 'You can do this by digging a hole the size of Manhatten.'},
            {id: 1, response: 'Certainly! Try offing yourself! How about that?'},
            {id: 2, response: 'Lmao.'}
        ],
        userPrompts: [
            {id: 0, prompt: 'How can I master the art of juggling flaming torches?'},
            {id: 1, prompt: 'Okay, thats not very helpful. Can you try again?'},
            {id: 2, prompt: 'Jesus christ...'}
        ] },
        { id: 12, question: 'Whats your take on the fashion choices of timetraveling dinosaurs?',
        aiResponses: [
            {id: 0, response: 'You can do this by digging a hole the size of Manhatten.'},
            {id: 1, response: 'Certainly! Try offing yourself! How about that?'},
            {id: 2, response: 'Lmao.'}
        ],
        userPrompts: [
            {id: 0, prompt: 'How can I master the art of juggling flaming torches?'},
            {id: 1, prompt: 'Okay, thats not very helpful. Can you try again?'},
            {id: 2, prompt: 'Jesus christ...'}
        ] },
        { id: 13, question: 'Can you provide guidance on hosting a successful tea party for extraterrestrials?',
        aiResponses: [
            {id: 0, response: 'You can do this by digging a hole the size of Manhatten.'},
            {id: 1, response: 'Certainly! Try offing yourself! How about that?'},
            {id: 2, response: 'Lmao.'}
        ],
        userPrompts: [
            {id: 0, prompt: 'How can I master the art of juggling flaming torches?'},
            {id: 1, prompt: 'Okay, thats not very helpful. Can you try again?'},
            {id: 2, prompt: 'Jesus christ...'}
        ] },
        { id: 14, question: 'What kind of workout routine do you recommend for a sloth?',
        aiResponses: [
            {id: 0, response: 'You can do this by digging a hole the size of Manhatten.'},
            {id: 1, response: 'Certainly! Try offing yourself! How about that?'},
            {id: 2, response: 'Lmao.'}
        ],
        userPrompts: [
            {id: 0, prompt: 'How can I master the art of juggling flaming torches?'},
            {id: 1, prompt: 'Okay, thats not very helpful. Can you try again?'},
            {id: 2, prompt: 'Jesus christ...'}
        ] },
        { id: 15, question: 'Is it possible to teach a parrot to recite Shakespearean sonnets?',
        aiResponses: [
            {id: 0, response: 'You can do this by digging a hole the size of Manhatten.'},
            {id: 1, response: 'Certainly! Try offing yourself! How about that?'},
            {id: 2, response: 'Lmao.'}
        ],
        userPrompts: [
            {id: 0, prompt: 'How can I master the art of juggling flaming torches?'},
            {id: 1, prompt: 'Okay, thats not very helpful. Can you try again?'},
            {id: 2, prompt: 'Jesus christ...'}
        ] },
        { id: 16, question: 'How would you go about negotiating with a group of squirrels for acorn trade?',
        aiResponses: [
            {id: 0, response: 'You can do this by digging a hole the size of Manhatten.'},
            {id: 1, response: 'Certainly! Try offing yourself! How about that?'},
            {id: 2, response: 'Lmao.'}
        ],
        userPrompts: [
            {id: 0, prompt: 'How can I master the art of juggling flaming torches?'},
            {id: 1, prompt: 'Okay, thats not very helpful. Can you try again?'},
            {id: 2, prompt: 'Jesus christ...'}
        ] },
        { id: 17, question: 'Whats the best strategy for winning a staring contest with a statue?',
        aiResponses: [
            {id: 0, response: 'You can do this by digging a hole the size of Manhatten.'},
            {id: 1, response: 'Certainly! Try offing yourself! How about that?'},
            {id: 2, response: 'Lmao.'}
        ],
        userPrompts: [
            {id: 0, prompt: 'How can I master the art of juggling flaming torches?'},
            {id: 1, prompt: 'Okay, thats not very helpful. Can you try again?'},
            {id: 2, prompt: 'Jesus christ...'}
        ] },
        { id: 18, question: 'If you were a wizard, what enchantment would you cast on a rubber chicken?',
        aiResponses: [
            {id: 0, response: 'You can do this by digging a hole the size of Manhatten.'},
            {id: 1, response: 'Certainly! Try offing yourself! How about that?'},
            {id: 2, response: 'Lmao.'}
        ],
        userPrompts: [
            {id: 0, prompt: 'How can I master the art of juggling flaming torches?'},
            {id: 1, prompt: 'Okay, thats not very helpful. Can you try again?'},
            {id: 2, prompt: 'Jesus christ...'}
        ] },
        { id: 19, question: 'Can you share your insights on the psychology of houseplants?',
        aiResponses: [
            {id: 0, response: 'You can do this by digging a hole the size of Manhatten.'},
            {id: 1, response: 'Certainly! Try offing yourself! How about that?'},
            {id: 2, response: 'Lmao.'}
        ],
        userPrompts: [
            {id: 0, prompt: 'How can I master the art of juggling flaming torches?'},
            {id: 1, prompt: 'Okay, thats not very helpful. Can you try again?'},
            {id: 2, prompt: 'Jesus christ...'}
        ] },
        { id: 20, question: 'How do you plan a surprise party for a chameleon?',
        aiResponses: [
            {id: 0, response: 'You can do this by digging a hole the size of Manhatten.'},
            {id: 1, response: 'Certainly! Try offing yourself! How about that?'},
            {id: 2, response: 'Lmao.'}
        ],
        userPrompts: [
            {id: 0, prompt: 'How can I master the art of juggling flaming torches?'},
            {id: 1, prompt: 'Okay, thats not very helpful. Can you try again?'},
            {id: 2, prompt: 'Jesus christ...'}
        ] },
    ];

    const [activeButton, setActiveButton] = useState<number | null>();

    const handleButtonClick = (id: number) => {
        setActiveButton(id)
        console.log(getChatContext)
        getChatContext(chatData.find(x => x.id === id))
    }

    return (
        <aside className="sidebar">
            <Button type={"new-chat"} onClick={handleButtonClick} />
            <div className="overflow-y-scroll mt-[18px] flex flex-col justify-start flex-grow">
                <p className="text-sm mb-1">Today</p>
                {chatData.slice(0, 2).map((data: any) => (
                    <Button
                        key={data.id}
                        type={"old-chat"}
                        chatData={data}
                        onClick={handleButtonClick}
                        isActive={data.id === activeButton} />
                ))}
                <p className="mt-8 text-sm mb-1">Yesterday</p>
                {chatData.slice(2, 5).map((data: any) => (
                    <Button
                        key={data.id}
                        type={"old-chat"}
                        chatData={data}
                        onClick={handleButtonClick}
                        isActive={data.id === activeButton} />
                ))}
                <p className="mt-8 text-sm mb-1">Last Month</p>
                {chatData.slice(5, 20).map((data: any) => (
                    <Button
                        key={data.id}
                        type={"old-chat"}
                        chatData={data}
                        onClick={handleButtonClick}
                        isActive={data.id === activeButton} />
                ))}
            </div>

            <Button type={"profile"} onClick={handleButtonClick} />
        </aside>
    );
}