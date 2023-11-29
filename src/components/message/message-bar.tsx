"use client";
import { XCircle, Users2 } from "lucide-react";
import { Input, ScrollArea } from "@/components/ui";
import friend from "@/api/friend";
import { FriendsOfUser } from "@/types/friend";
import { useEffect, useState } from "react";
import MessageBarItem from "@/components/message/message-bar-item";
const MessageBar = () => {
    const [friends, setFriends] = useState<FriendsOfUser[]>([]);
    useEffect(() => {
        friend.GetFriend().then(
            (res: any) => {
                setFriends(res);
            },
            (err: any) => {
                // setStatus(true);
            }
        );
    }, []);
    return (
        <>
            <div>
                <div className=" border-b-[1px]  px-3 lg:border-0 flex justify-between">
                    <div className="truncate lg:block mt-[18px] text-xl  pb-7 pt-4 font-bold">
                        HaiBang1010.aaaaaa
                    </div>
                    <div className=" pb-7 pt-4 mt-[20px] cursor-pointer ">
                        <Users2 />
                    </div>
                </div>
                <div className="hidden lg:block px-3">
                    <div className="relative mb-4">
                        <Input
                            type="text"
                            className=" bg-slate-200 dark:placeholder:text-[#797979] dark:bg-[#262626] "
                            placeholder="Tìm kiếm tin nhắn"
                        />
                        <div className="absolute top-[8px] right-2 cursor-pointer">
                            <XCircle className="scale-75" />
                        </div>
                    </div>
                    <div className="text-lg pb-1">Tin nhắn gần đây</div>
                </div>
            </div>
            <ScrollArea className="h-full w-[130px] lg:w-[300px] xl:w-[350px] ">
                {friends.length
                    ? friends.length &&
                      friends.map((friend: FriendsOfUser, index: number) => {
                          return <MessageBarItem data={friend} key={index} />;
                      })
                    : ""}
            </ScrollArea>
        </>
    );
};

export default MessageBar;
