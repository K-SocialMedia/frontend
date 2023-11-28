"use client"
import { Represent,SuggestToFriend } from "../present-interface";
import { useEffect,useState } from "react";
import user from "@/api/user";
import { InforProfile } from "@/types/profile";
import { FriendsOfUser } from "@/types/friend";
import friend from "@/api/friend";
const representions=[
    {avatar: "https://avatars.githubusercontent.com/u/109071521?s=400&v=4", name: "thanhhovan123", username: "thanh_chatchit_16" },
    {avatar: "https://avatars.githubusercontent.com/u/109071521?s=400&v=4", name: "thanhhovan123", username: "thanh_chatchit_16" },
    {avatar: "https://avatars.githubusercontent.com/u/109071521?s=400&v=4", name: "thanhhovan123", username: "thanh_chatchit_16" },
    {avatar: "https://avatars.githubusercontent.com/u/109071521?s=400&v=4", name: "thanhhovan123", username: "thanh_chatchit_16" },
    {avatar: "https://avatars.githubusercontent.com/u/109071521?s=400&v=4", name: "thanhhovan123", username: "thanh_chatchit_16" },
    {avatar: "https://avatars.githubusercontent.com/u/109071521?s=400&v=4", name: "thanhhovan123", username: "thanh_chatchit_16" },
    {avatar: "https://avatars.githubusercontent.com/u/109071521?s=400&v=4", name: "thanhhovan123", username: "thanh_chatchit_16" },

] 
const represention={avatar: "https://avatars.githubusercontent.com/u/109071521?s=400&v=4", name: "thanhhovan123", username: "thanh_chatchit_16" }
const SuggestToFriendContain=()=>{
    const [friends, setFriends] = useState<FriendsOfUser[]>([]);
    useEffect(() => {
        friend.GetFriend().then(
            (res: any) => {
                setFriends(res);
            },
            (err: any) => {
                // setStatus(true);
            }
        );
    }, []);
    return(       
        friends.map((friendItem,index)=>(
            <SuggestToFriend friendItem={friendItem}></SuggestToFriend>
        )
    ) 
    )
}
const HomeLeft = () =>{
    const [requests,setRequests]=useState<InforProfile>({}as InforProfile);
    {useEffect(() => {
        user.GetUserCurrent().then(
            (res: any) => {
                setRequests(res);
            },
            (err: any) => {
                alert('lấy thông tin user bị lỗi')
            }
        );
    }, []);
        
    }
    return(
        <div className="pl-[64px]">
            <div>
                <Represent represent={requests}></Represent>
            </div>
            <div className=" mt-4">
                <div className=" ml-4 font-bold">
                Gợi ý kết bạn
                </div>
                <div className="mt-2">
                <SuggestToFriendContain></SuggestToFriendContain>
                </div>
            </div>
           
        </div>
    )
}

export default HomeLeft;