import { constants } from "fs";
import { Represent,SuggestToFriend } from "../present-interface";
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
    return(       
        representions.map((friendItem,index)=>(
            <SuggestToFriend friendItem={friendItem}></SuggestToFriend>
        )
    ) 
    )
}
const HomeLeft = () =>{
    return(
        <div className="pl-[64px]">
            <div>
                <Represent represent={represention}></Represent>
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