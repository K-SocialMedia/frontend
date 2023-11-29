"use client";
import AvatarMain from "@/components/avatar-main";
import AvatarGroup from "@/components/avatar-group";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";
import { useMemo } from "react";
import { FriendsOfUser } from "@/types/friend";
import { useCallback } from "react";
const MessageBarItem = ({ data }: { data: FriendsOfUser }) => {
    const pathname = usePathname();
    const getPathname = useMemo(() => pathname, [pathname]);
    const router = useRouter();
    // const handleClick = useCallback(() => {
    //     router.push(`/direct/${data.id}`);
    // }, [router]);
    const handleClick = () => {
        router.push(`/direct/${data.id}`);
    };
    return (
        <>
            <div
                onClick={handleClick}
                className={cn(
                    "flex mt-1 justify-center rounded-lg mx-3 py-3 hover:bg-slate-400/20 cursor-pointer transition-all lg:justify-start lg:pl-4 ",
                    getPathname.includes(`/${data.id}`) ? "bg-slate-400/20" : ""
                )}
            >
                <AvatarMain
                    image={data.image}
                    className="border-[1px] xl:mr-2  xl:ml-0 scale-125"
                ></AvatarMain>
                {/* <AvatarGroup></AvatarGroup> */}
                <div className=" lg:flex-col hidden lg:flex truncate lg:pl-4 lg:w-[222px] xl:w-[266px]">
                    <div className="truncate">{data.nickName}</div>
                    <div className="truncate text-gray-400">
                        {data.fullName}
                    </div>
                </div>
            </div>
        </>
    );
};

export default MessageBarItem;
