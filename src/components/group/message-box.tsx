"use client";
import Image from "next/image";
import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import { MessageGroup } from "@/types/group-chat";
import AvatarMain from "@/components/avatar-main";
import { format } from "date-fns";
import { usePathname } from "next/navigation";

const MessageBox = ({
    message,
}: // profileFriend,
{
    message: MessageGroup;
    // profileFriend: FriendsOfUser;
}) => {
    const pathname = usePathname();
    const getPathname = useMemo(() => pathname, [pathname]);
    const [imageModalOpen, setImageModalOpen] = useState(false);
    const isOwn = getPathname.includes(`/${message.senderId}`);
    // const seenList = (data.seen || [])
    //     .filter((user) => user.email !== data?.sender?.email)
    //     .map((user) => user.name)
    //     .join(", ");
    const container = cn("flex gap-3 p-4", isOwn && "justify-end");
    const avatar = cn(isOwn && "order-2");
    const body = cn("flex flex-col gap-2", isOwn && "items-end");
    // const message = cn(
    //     "text-sm w-fit overflow-hidden",
    //     isOwn ? "bg-sky-500 text-white" : "bg-gray-100",
    //     data.image ? "rounded-md p-0" : "rounded-full py-2 px-3"
    // );

    return (
        <div className={container}>
            <div className={avatar}>
                {<AvatarMain image={message.senderImage} />}
            </div>
            <div className={body}>
                <div className=" items-center gap-1">
                    <div className="text-xs text-gray-400">
                        <span className="pr-2">{message.senderName}</span>
                        {format(Date.parse(message.createAt), "dd/MM/yyyy")}
                    </div>
                </div>
                <div className="text-sm w-fit overflow-hidden bg-gray-100  p-0 rounded-md    dark:bg-[#262626]">
                    {message.image ? (
                        <Image
                            src={message.image}
                            alt=""
                            height="288"
                            width="288"
                            className="
                        object-cover 
                        cursor-pointer 
                        hover:scale-110 
                        transition 
                        translate
                      "
                        />
                    ) : (
                        <div className="p-2">{message.content}</div>
                    )}
                </div>
                {/* {isLast && isOwn && seenList.length > 0 && ( */}
            </div>
        </div>
    );
};

export default MessageBox;
