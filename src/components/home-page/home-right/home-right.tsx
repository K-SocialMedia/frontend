"use client"
import ListFriend from "./list-friend";
import Post from "./post";
import { format } from 'date-fns';
import post from "@/api/post";
import { useState,useEffect } from "react";
const parsedDate = new Date("11/12/2023");

const represention= {avatar: "https://avatars.githubusercontent.com/u/109071521?s=400&v=4", name: "thanhhovan123", username: "thanh_chatchit_16" }
const postItems = [
    {imagePost: 'https://res.cloudinary.com/dnnyzyyas/image/upload/v1700797491/fu8nwjonvkgri3ygawg1.jpg',represention:represention,like:3,create_at:parsedDate,user_id:1},
    { imagePost: 'https://res.cloudinary.com/dnnyzyyas/image/upload/v1700797491/fu8nwjonvkgri3ygawg1.jpg', represention:represention,like:3,create_at:parsedDate,user_id:1},
    { imagePost:'https://res.cloudinary.com/dnnyzyyas/image/upload/v1700797491/fu8nwjonvkgri3ygawg1.jpg' ,represention:represention,like:3,create_at:parsedDate,user_id:1},  
]
const ListPostContain=()=>{
    const [posts, setPostByUser] = useState<Post[]>();
    useEffect(() => {
        post.GetAllPost().then(
            (res: any) => {
                setPostByUser(res);
            },
            (err: any) => {
                // setStatus(true);
            }
        );
        
    }, []);
    if(posts!==undefined){
        return(
            posts.map((postItem,index)=>(
                <Post postItem={postItem} key={index}></Post>
            )
        )
        ) 
    }
    else{
        return(
            <div>không có bài post nào cả</div>
        )
    }
}
const HomeRight = () =>{
    return(
        <>
            <div className="">
                <ListFriend></ListFriend>
             </div>
            <div className="sm:mt-8">
                <ListPostContain></ListPostContain>
            </div>        
        </>
    )
}
export default HomeRight;