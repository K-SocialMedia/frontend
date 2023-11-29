"use client";
import AvatarMain from "../avatar-main";
import Friend from "@/api/friend";
import { HandleFriend } from "@/types/friend";
import { Check, Minus, Plus } from "lucide-react";
import { ItemTooltip } from "../tooltip-item";
import { SearchUser } from "@/types/search-user";
import { useToast } from "@/components/ui";
import { useState } from "react";

const SuggestFriend = ({ friendItem }: { friendItem: SearchUser }) => {
    const { toast } = useToast();
    const { id, image, fullName, nickName, status } = friendItem;
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
   
    return (
        <>
           <div className="flex ml-4 w-full mt-4 relative">
                <div className="flex justify-start">
                    <AvatarMain
                        image={image}
                        className="w-[44px] h-[44px]"
                    ></AvatarMain>
                </div>
                <div className="items-center ml-2">
                    <div className="font-bold">{nickName}</div>
                    <div>đề xuất</div>
                </div>{
                    statusFriend==-1?(<div onClick={handleAddFriend} className="hover:text-gray-500 text-blue-400 absolute top-1/2 transform -translate-y-1/2 right-0 cursor-pointer">
                    Thêm
                </div>):(<div onClick={handleRemoveFriendRequest} className="text-gray-500 absolute top-1/2 transform -translate-y-1/2 right-0 cursor-pointer">
                    Hủy
                </div>)
                }
                
            </div>
        </>
    );
};

export default SuggestFriend;
