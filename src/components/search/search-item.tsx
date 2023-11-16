import AvatarMain from "../avatar-main";
import Friend from "@/api/friend";
import { HandleFriend } from "@/types/friend";
import { Check } from "lucide-react";
import { Plus } from "lucide-react";
import { ItemTooltip } from "../tooltip-item";
import { SearchUser } from "@/types/search-user";
import { useToast } from "@/components/ui";
const SearchItem = ({ searchItem }: { searchItem: SearchUser }) => {
    const { toast } = useToast();
    const { id, image, fullName, nickName } = searchItem;

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
                    <ItemTooltip label="Gửi lời mời kết bạn">
                        <Plus
                            className="cursor-pointer"
                            onClick={handleAddFriend}
                        />
                    </ItemTooltip>
                </div>
            </div>
        </>
    );
};

export default SearchItem;
