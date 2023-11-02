"use client";
import { User2 } from "lucide-react";
import Image from "next/image";
import AvatarMain from "@/components/avatar-main";
import { useRouter } from "next/navigation";
import { useCallback, useMemo } from "react";
const MessageBarItem = ({ avatar, name }: { avatar: string; name: string }) => {
    const router = useRouter();
    const handleClick = useCallback(() => {
        router.push(`/messages/abcd`);
    }, [router]);
    return (
        <>
            <div
                onClick={handleClick}
                className="flex mt-1 justify-center rounded-lg mx-2 hover:bg-[#eaedf1] dark:hover:bg-[#262626] cursor-pointer py-3 transition-all lg:justify-start lg:pl-4 "
            >
                <AvatarMain
                    image={avatar}
                    className="border-[1px] xl:mr-2  xl:ml-0 scale-125"
                ></AvatarMain>
                <div className="flex flex-col hidden lg:block truncate lg:pl-4 lg:w-[222px] xl:w-[266px]">
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
