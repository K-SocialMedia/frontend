import RequestsItem from "@/components/friendRequests/request-item.tsx";
import friend from "@/api/friend";
import { useEffect } from "react";
const RequestsPage = () => {
    // useEffect(() => {
    //     friend.GetFriend().then(
    //         (res: any) => {},
    //         (err: any) => {}
    //     );
    // });
    return (
        <>
            <div className=" p-5">
                <h1 className="font-bold text-2xl">Lời mời kết bạn</h1>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                    <RequestsItem></RequestsItem>
                    <RequestsItem></RequestsItem>
                    <RequestsItem></RequestsItem>
                    <RequestsItem></RequestsItem>
                    <RequestsItem></RequestsItem>
                    <RequestsItem></RequestsItem>
                    <RequestsItem></RequestsItem>
                </div>
            </div>
        </>
    );
};

export default RequestsPage;
