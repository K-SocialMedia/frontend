"use client";
import { CldImage, CldOgImage } from "next-cloudinary";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
import AvatarMain from "@/components/avatar-main";
// import { format } from "date-fns";

const MessageBox = () => {
    // const session = useSession();
    const [imageModalOpen, setImageModalOpen] = useState(false);
    const img =
        "https://res-console.cloudinary.com/dnnyzyyas/thumbnails/v1/image/upload/v1698854254/djNxaHBjdWdqcXVwYW96dGZveGQ=/grid_landscape";
    // const isOwn = session.data?.user?.email === data?.sender?.email;
    // const seenList = (data.seen || [])
    //     .filter((user) => user.email !== data?.sender?.email)
    //     .map((user) => user.name)
    //     .join(", ");

    // const container = cn("flex gap-3 p-4", isOwn && "justify-end");
    // const avatar = cn(isOwn && "order-2");
    // const body = cn("flex flex-col gap-2", isOwn && "items-end");
    // const message = cn(
    //     "text-sm w-fit overflow-hidden",
    //     isOwn ? "bg-sky-500 text-white" : "bg-gray-100",
    //     data.image ? "rounded-md p-0" : "rounded-full py-2 px-3"
    // );

    return (
        <div className="flex gap-3 p-4">
            {/*container*/}
            <div className="">
                {/*avatar*/}
                <AvatarMain image="https://res-console.cloudinary.com/dnnyzyyas/thumbnails/v1/image/upload/v1698854254/djNxaHBjdWdqcXVwYW96dGZveGQ=/grid_landscape" />
            </div>
            <div className="flex flex-col gap-2">
                {/*body*/}
                <div className="flex items-center gap-1">
                    <div className="text-sm text-gray-500">
                        {/* {data.sender.name} */}HaiBang
                    </div>
                    <div className="text-xs text-gray-400">
                        {/* {format(new Date().getDate, "p")} */}11/2/2023
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
                    {true ? (
                        <CldImage
                            alt="Image"
                            height="288"
                            width="288"
                            onClick={() => setImageModalOpen(true)}
                            src="v3qhpcugjqupaoztfoxd"
                            className="
                  object-cover 
                  cursor-pointer 
                  hover:scale-110 
                  transition 
                  translate
                "
                        />
                    ) : (
                        <div>{/*data.body*/}tinnhan</div>
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
