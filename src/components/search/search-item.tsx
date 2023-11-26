"use client";
import AvatarMain from "../avatar-main";
import Friend from "@/api/friend";
import { HandleFriend } from "@/types/friend";
import { Check, Minus, Plus } from "lucide-react";
import { ItemTooltip } from "../tooltip-item";
import { SearchUser } from "@/types/search-user";
import { useToast } from "@/components/ui";
import { useState } from "react";

const SearchItem = ({ searchItem }: { searchItem: SearchUser }) => {
    const { toast } = useToast();
    const { id, image, fullName, nickName, status } = searchItem;
    const [statusFriend, setStatusFriend] = useState<number>(status);
    const handleAddFriend = () => {
        const payload: HandleFriend = {
            friendId: id,
            status: 0,
        };
        Friend.HandleFriend(payload).then(
            (res: any) => {
                toast({
                    className: "border",
                    title: "Đã gửi yêu cầu kết bạn",
                    // description: "Friday, February 10, 2023 at 5:57 PM",
                    action: <Check></Check>,
                });
                setStatusFriend(0);
            },
            (err: any) => {
                toast({
                    className: "border",
                    title: "chưa gửi được",
                    // description: "Friday, February 10, 2023 at 5:57 PM",
                    action: <Check></Check>,
                });
            }
        );
    };
    const handleRemoveFriendRequest = () => {
        const payload: HandleFriend = {
            friendId: id,
            status: -1,
        };
        Friend.HandleFriend(payload).then(
            (res: any) => {
                toast({
                    className: "border",
                    title: "Đã hủy gửi yêu cầu kết bạn",
                    // description: "Friday, February 10, 2023 at 5:57 PM",
                    action: <Check></Check>,
                });
                setStatusFriend(-1);
            },
            (err: any) => {
                toast({
                    className: "border",
                    title: "chưa gửi được",
                    // description: "Friday, February 10, 2023 at 5:57 PM",
                    action: <Check></Check>,
                });
            }
        );
    };
    const handleRemoveFriend = () => {
        const payload: HandleFriend = {
            friendId: id,
            status: -1,
        };
        Friend.HandleFriend(payload).then(
            (res: any) => {
                toast({
                    className: "border",
                    title: "Đã xóa kết bạn",
                    // description: "Friday, February 10, 2023 at 5:57 PM",
                    action: <Check></Check>,
                });

                setStatusFriend(-1);
            },
            (err: any) => {
                toast({
                    className: "border",
                    title: "chưa gửi được",
                    // description: "Friday, February 10, 2023 at 5:57 PM",
                    action: <Check></Check>,
                });
            }
        );
    };
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
                    {statusFriend == -1 ? (
                        <ItemTooltip label="Gửi lời mời kết bạn">
                            <Plus
                                className="cursor-pointer"
                                onClick={handleAddFriend}
                            />
                        </ItemTooltip>
                    ) : statusFriend == 0 ? (
                        <ItemTooltip label="Hủy gửi lời mời kết bạn">
                            <Minus
                                className="cursor-pointer"
                                onClick={handleRemoveFriendRequest}
                            />
                        </ItemTooltip>
                    ) : (
                        <ItemTooltip label="Đã trở thành bạn, nhấn để hủy kết bạn">
                            <Check
                                className="cursor-pointer"
                                onClick={handleRemoveFriend}
                            />
                        </ItemTooltip>
                    )}
                </div>
            </div>
        </>
    );
};

export default SearchItem;
