"use client";
import { CldImage } from "next-cloudinary";
import { useEffect, useRef, useState } from "react";
import { MessageGroup } from "@/types/group-chat";
import MessageBox from "./message-box";
import { FriendsOfUser } from "@/types/friend";
const Body = ({
    messageList,
}: // profileFriend,
{
    messageList: MessageGroup[];
    // profileFriend: FriendsOfUser;
}) => {
    const bottomRef = useRef<HTMLDivElement>(null);
    // const [messages, setMessages] = useState(initialMessages);
    return (
        <>
            <div className="flex-1 overflow-y-auto scrollbarMessage">
                {messageList.map((message) => (
                    <MessageBox
                        // profileFriend={profileFriend}
                        // isLast={i === MessageList.length - 1}
                        key={message.id}
                        message={message}
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
