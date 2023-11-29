"use client";
import React, { useRef, useEffect, useState } from "react";
import { Plus } from "lucide-react";
import AvatarMain from "./avatar-main";
import { ItemTooltip } from "./tooltip-item";
import { SearchUser } from "@/types/search-user";
import { Comment, InforProfile } from "@/types/profile";
import { FriendsOfUser } from "@/types/friend";

export interface Profile {
    avatar: string;
    name: string;
    username?: string;
    commentContent?: string;
}
const ListSearchRecent = ({
    listSearchItem,
}: {
    listSearchItem: SearchUser;
}) => {
    const { image, fullName, nickName } = listSearchItem;
    return (
        <>
            <div className="flex pl-4 mb-2 mx-3 py-3 cursor-pointer h-full justify-between hover:bg-slate-400/20  transition-all rounded-lg">
                <div className="flex">
                    <AvatarMain className=" scale-125" image={image} />
                    <div className="pl-4">
                        <div className="truncate ">{nickName}</div>
                        <div className="truncate text-gray-400">{fullName}</div>
                    </div>
                </div>
                <div className="flex justify-center flex-col h-[40px] pr-2">
                    <ItemTooltip label="Gửi lời mời kết bạn">
                        <Plus className="cursor-pointer" />
                    </ItemTooltip>
                </div>
            </div>
        </>
    );
};
const ListSearch = ({ listSearchItem }: { listSearchItem: Profile }) => {
    const { avatar, name, username } = listSearchItem;
    return (
        <>
            <div className="grid grid-cols-7 w-full pl-4 mb-4 cursor-pointer">
                <div className="col-span-1">
                    <img
                        className="w-full h-full bg-white rounded-full"
                        src={avatar}
                        sizes=""
                        // https://avatars.githubusercontent.com/u/109071521?s=400&v=4
                        alt=""
                    />
                </div>
                <div className="col-span-6 ml-2 relative flex items-center">
                    <div>
                        <div className="font-bold">{name}</div>
                        <div>{username}</div>
                    </div>
                    <div className="absolute top-1/2 transform -translate-y-1/2 right-8 cursor-pointer">
                        <Plus />
                    </div>
                </div>
            </div>
        </>
    );
};
const Represent = ({ represent }: { represent: InforProfile }) => {
    const { image, fullName } = represent;
    return (
        <>
            <div className="flex w-full pl-4 cursor-pointer items-center">
                <div className="">
                    <img className="w-[44px] h-[44px] bg-white rounded-full" src={image} />
                </div>
                <div className="ml-2 relative flex items-center">
                    <div>
                        <div className="font-bold">{fullName}</div>
                    </div>
                </div>
            </div>
        </>
    );
};
const ListComment = ({ commentItem }: { commentItem: Comment }) => {
    const { avatar, name, commentContent } = commentItem;
    return (
        <>
            <div className="grid grid-cols-12 w-full pl-4 mb-4 cursor-pointer">
                <div className="col-span-1">
                    <img className="w-3/4 rounded-full" src={avatar} />
                </div>
                <div className="col-span-11 ml-2 relative flex items-center">
                    <div>
                        <div className="font-bold">{name}</div>
                        <div>{commentContent}</div>
                    </div>
                </div>
            </div>
        </>
    );
};

const ListFriendInterface = ({ friendItem }: { friendItem: FriendsOfUser }) => {
    const { image, fullName } = friendItem;
    return (
        <div className="mr-4 w-[58px] last:mr-0">
            <div className="flex justify-center">
                <AvatarMain
                    image={image}
                    className="w-[58px] h-[58px]"
                ></AvatarMain>
            </div>
            <TruncateText text={friendItem.fullName}></TruncateText>
        </div>
    );
};
const TruncateText = ({ text }: { text: string }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isOverflowing, setIsOverflowing] = useState(false);

    useEffect(() => {
        const container = containerRef.current;
        if (container) {
            setIsOverflowing(container.scrollWidth > container.clientWidth);
        }
    }, [text]);

    const truncatedText = isOverflowing
        ? `${text.slice(0, text.length)}...`
        : text;

    return (
        <div
            ref={containerRef}
            className="text-xs overflow-hidden overflow-ellipsis text-center"
        >
            {truncatedText}
        </div>
    );
};

const SuggestToFriend = ({ friendItem }: { friendItem: SearchUser }) => {
    const { fullName,image } = friendItem;
    return (
        <div className="flex ml-4 w-full mt-4 relative">
            <div className="flex justify-start">
                <AvatarMain
                    image={image}
                    className="w-[44px] h-[44px]"
                ></AvatarMain>
            </div>
            <div className="items-center ml-2">
                <div className="font-bold">{fullName}</div>
                <div>đề xuất</div>
            </div>
            <div className="hover:text-gray-500 text-blue-400 absolute top-1/2 transform -translate-y-1/2 right-0 cursor-pointer">
                Thêm
            </div>
        </div>
    );
};

export {
    ListSearchRecent,
    SuggestToFriend,
    ListFriendInterface,
    Represent,
    ListComment,
    ListSearch as default,
};
