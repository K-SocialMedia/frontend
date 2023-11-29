"use client";
import { CldImage } from "next-cloudinary";
import { useEffect, useRef, useState } from "react";
import { Message } from "@/types/message";
import MessageBox from "./message-box";
const Body = ({ MessageList }: { MessageList: Message[] }) => {
    const bottomRef = useRef<HTMLDivElement>(null);
    // const [messages, setMessages] = useState(initialMessages);
    return (
        <>
            <div className="flex-1 overflow-y-auto scrollbarMessage">
                {MessageList.map((message, i) => (
                    <MessageBox
                        // isLast={i === MessageList.length - 1}
                        key={message.id}
                        Message={message}
                    />
                ))}
                {/* <MessageBox
                // isLast={i === messages.length - 1}
                // key={message.id}
                // data={message}
                /> */}
            </div>
        </>
    );
};

export default Body;
