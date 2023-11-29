"use client";
import { CldImage, CldOgImage } from "next-cloudinary";
import Image from "next/image";
import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import { Message } from "@/types/message";
import AvatarMain from "@/components/avatar-main";
import { format } from "date-fns";
import { usePathname } from "next/navigation";

const MessageBox = ({ Message }: { Message: Message }) => {
    const pathname = usePathname();
    const getPathname = useMemo(() => pathname, [pathname]);
    const [imageModalOpen, setImageModalOpen] = useState(false);
    const isOwn = getPathname.includes(`/${Message.receiverId}`);
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
                <AvatarMain image="https://res-console.cloudinary.com/dnnyzyyas/thumbnails/v1/image/upload/v1698854254/djNxaHBjdWdqcXVwYW96dGZveGQ=/grid_landscape" />
            </div>
            <div className={body}>
                <div className="flex items-center gap-1">
                    <div className="text-sm text-gray-500">
                        {isOwn ? "" : Message.senderName}
                    </div>
                    <div className="text-xs text-gray-400">
                        {format(Date.parse(Message.createAt), "dd/MM/yyyy")}
                    </div>
                </div>
                <div className="text-sm w-fit overflow-hidden bg-gray-100  p-0 rounded-md    dark:bg-[#262626]">
                    {/* message */}
                    {/* <ImageModal
                        src={data.image}
                        isOpen={imageModalOpen}
                        onClose={() => setImageModalOpen(false)}
                    /> */}
                    {/*data.image */}
                    {Message.image ? (
                        <Image
                            src={Message.image}
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
                        <div className="p-2">{Message.content}</div>
                    )}
                </div>
                {/* {isLast && isOwn && seenList.length > 0 && ( */}
                {1 > 0 && (
                    <div
                        className="
              text-xs 
              font-light 
              text-gray-500
              "
                    >
                        {/* {`Seen by ${seenList}`} */}
                    </div>
                )}
            </div>
        </div>
    );
};

export default MessageBox;
