"use client";
import Image from "next/image";
import { Button } from "@/components/ui";
import { RequestFriend } from "@/types/friend";

const RequestsItem = ({ data }: { data: RequestFriend }) => {
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

                <Button className="w-full mt-2 bg-[rgb(8,102,255)] text-white font-bold text-base hover:bg-opacity-80  hover:bg-[#0866ff]">
                    Đồng ý
                </Button>
                <Button className="w-full mt-2 bg-[#25282e] text-white font-bold text-base hover:bg-opacity-80  hover:bg-[#25282e]">
                    Từ chối
                </Button>
            </div>
        </div>
    );
};

export default RequestsItem;
