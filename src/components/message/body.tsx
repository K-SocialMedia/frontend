"use client";
import { CldImage } from "next-cloudinary";
import { useEffect, useRef, useState } from "react";
import MessageBox from "./message-box"
const Body = () => {
    const bottomRef = useRef<HTMLDivElement>(null);
    // const [messages, setMessages] = useState(initialMessages);
    return (
        <>
            <div className="flex-1 overflow-y-auto scrollbarMessage">
                {/* {messages.map((message, i) => (
                    <MessageBox
                        isLast={i === messages.length - 1}
                        key={message.id}
                        data={message}
                    />
                ))} */}
                <MessageBox
                        // isLast={i === messages.length - 1}
                        // key={message.id}
                        // data={message}
                    />
                <div className="pt-24" ref={bottomRef} />
            </div>
        </>
    );
};

export default Body;
