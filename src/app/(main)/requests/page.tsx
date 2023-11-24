"use client";
import RequestsItem from "@/components/friendRequests/request-item";
import friend from "@/api/friend";
import { RequestFriend } from "@/types/friend";
import { useEffect, useState } from "react";
const RequestsPage = () => {
    const [requests, setRequests] = useState<RequestFriend[]>([]);
    const [status, setStatus] = useState<boolean>(false);

    useEffect(() => {
        friend.GetFriendPending().then(
            (res: any) => {
                setRequests(res);
            },
            (err: any) => {
                setStatus(true);
            }
        );
    }, []);
    return (
        <>
            <div className=" p-5">
                <h1 className="font-bold text-2xl">Lời mời kết bạn</h1>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                    {requests?.map((value: RequestFriend, index: number) => {
                        return <RequestsItem data={value} key={index} />;
                    })}
                </div>
            </div>
        </>
    );
};

export default RequestsPage;
