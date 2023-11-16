"use client";
import AvatarMain from "@/components/avatar-main";
import AvatarGroup from "@/components/avatar-group";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
const MessageBarItem = ({ avatar, name }: { avatar: string; name: string }) => {
    const router = useRouter();
    const handleClick = useCallback(() => {
        router.push(`/direct/abcd`);
    }, [router]);
    return (
        <>
            <div
                onClick={handleClick}
                className="flex mt-1 justify-center rounded-lg mx-3 py-3 hover:bg-slate-400/20 cursor-pointer transition-all lg:justify-start lg:pl-4 "
            >
                {/* <AvatarMain
                    image={avatar}
                    className="border-[1px] xl:mr-2  xl:ml-0 scale-125"
                ></AvatarMain> */}
                <AvatarGroup></AvatarGroup>
                <div className=" lg:flex-col hidden lg:flex truncate lg:pl-4 lg:w-[222px] xl:w-[266px]">
                    <div className="truncate">{name}</div>
                    <div className="truncate text-gray-400">
                        tin nhan cuoiaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                    </div>
                </div>
            </div>
        </>
    );
};

export default MessageBarItem;
