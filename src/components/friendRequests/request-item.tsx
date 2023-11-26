"use client";
import Image from "next/image";
import friend from "@/api/friend";
import { HandleFriend } from "@/types/friend";
import { Button } from "@/components/ui";
import { RequestFriend } from "@/types/friend";
import { Check } from "lucide-react";
import { useToast } from "@/components/ui";
import { useState } from "react";

const RequestsItem = ({ data }: { data: RequestFriend }) => {
    const { toast } = useToast();
    const [statusFriend, setStatusFriend] = useState<boolean>(false);
    const handelAccept = () => {
        const payload: HandleFriend = {
            friendId: data.id,
            status: 1,
        };
        friend.HandleFriend(payload).then(
            (res) => {
                toast({
                    className: "border",
                    title: `Bạn và ${data.nickName} đã trở thành bạn`,
                    // description: "Friday, February 10, 2023 at 5:57 PM",
                    action: <Check></Check>,
                });
                setStatusFriend(true);
            },
            (err) => {
                toast({
                    className: "border",
                    title: `Bạn không thể kết bạn với ${data.nickName}`,
                });
            }
        );
    };
    const handelRefuse = () => {
        const payload: HandleFriend = {
            friendId: data.id,
            status: -1,
        };
        friend.HandleFriend(payload).then(
            (res) => {
                toast({
                    className: "border",
                    title: `Bạn đã từ chối kết bạn từ ${data.nickName}`,
                    // description: "Friday, February 10, 2023 at 5:57 PM",
                    action: <Check></Check>,
                });
                setStatusFriend(true);
            },
            (err) => {
                toast({
                    className: "border",
                    title: `Bạn không thể từ chối kết bạn từ ${data.nickName}`,
                });
            }
        );
    };
    return (
        <div className="m-2 border rounded-lg  ">
            {data.image ? (
                <Image
                    className="rounded-t-lg "
                    width={300}
                    height={200}
                    src={data.image}
                    alt=""
                />
            ) : (
                <Image
                    className="rounded-t-lg "
                    width={300}
                    height={200}
                    src="https://res.cloudinary.com/dnnyzyyas/image/upload/v1699979412/rmvuddgotldix2itia3p.png"
                    alt=""
                />
            )}
            <div className="p-4  ">
                <div className="text-base truncate">{data.nickName}</div>
                <div className="truncate text-gray-400 w-full">
                    {data.fullName}
                </div>
                <Button
                    disabled={statusFriend}
                    onClick={handelAccept}
                    className="w-full mt-2 bg-[rgb(8,102,255)] text-white font-bold text-base hover:bg-opacity-80  hover:bg-[#0866ff]"
                >
                    Đồng ý
                </Button>
                <Button
                    disabled={statusFriend}
                    onClick={handelRefuse}
                    className="w-full mt-2 bg-[#25282e] text-white font-bold text-base hover:bg-opacity-80  hover:bg-[#25282e]"
                >
                    Từ chối
                </Button>
            </div>
        </div>
    );
};

export default RequestsItem;
