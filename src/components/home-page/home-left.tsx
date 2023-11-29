"use client"
import { Represent,SuggestToFriend } from "../present-interface";
import { useEffect,useState } from "react";
import user from "@/api/user";
import { InforProfile } from "@/types/profile";
import { FriendsOfUser } from "@/types/friend";
import friend from "@/api/friend";
import { SearchUser } from "@/types/search-user";
import SuggestFriend from "./suggest-friend";
import { useToast } from "../ui";
import { Check } from "lucide-react";
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
   
    const [friends, setFriends] = useState<SearchUser[]>([]);
    useEffect(() => {
        user.SuggetFriend().then(
            (res: any) => {
                setFriends(res);
            },
            (err: any) => {
                // setStatus(true);
            }
        );

    }, []);
    
    return(    
        friends.length &&   
        friends.slice(0,8).map((friendItem,index)=>(
            <SuggestFriend friendItem={friendItem}></SuggestFriend>
        )))
    }
    

const HomeLeft = () =>{
    const {toast}=useToast();
    const [requests,setRequests]=useState<InforProfile>({}as InforProfile);
    {useEffect(() => {
        user.GetUserCurrent().then(
            (res: any) => {
                setRequests(res);
            },
            (err: any) => {
                toast({
                    className: "border",
                    title: "Đã hủy gửi yêu cầu kết bạn",
                    // description: "Friday, February 10, 2023 at 5:57 PM",
                    action: <Check></Check>,
                });
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