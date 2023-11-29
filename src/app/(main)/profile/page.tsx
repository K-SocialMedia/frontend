"use client"    
import React from "react"
import NavProfile from '@/components/profile/nav-profile'
import MainProfile from '@/components/profile/heading-profile'
import DialogForm from "@/components/profile/dialog-post/dialog-post";
import Post_interface from "@/components/profile/dialog-post/post-detail";
import PostProfile from "@/components/profile/dialog-post/post_profile";
import { useState,useEffect } from "react";
import user from "@/api/user";
import { InforProfile } from "@/types/profile";
import post from "@/api/post";
import { comment } from "postcss";
import { PostDetail } from "@/types/profile";
import { Post } from "@/types/profile";
import { Comment } from "@/types/profile";
import commentPost from "@/api/comment-post";
import { useToast } from "@/components/ui";
import { AddComment } from "@/types/post";
const parsedDate = new Date("11/12/2023");
const represention= {Image: "https://avatars.githubusercontent.com/u/109071521?s=400&v=4", fullName: "thanhhovan123", nickName: "thanh_chatchit_16" }
const listComments=[
    { avatar: "https://avatars.githubusercontent.com/u/109071521?s=400&v=4", name: "thanhhovan", commentContent: "Nhom k 10đ ajsfjaf  djssfkja  dsafkjalkdsjf dsjadf lorem asdfjasjfajsfasjfajfijaofj" },
    { avatar: "https://avatars.githubusercontent.com/u/109071521?s=400&v=4", name: "thanhhovan", commentContent: "Nhom k 10đ" },
    { avatar: "https://avatars.githubusercontent.com/u/109071521?s=400&v=4", name: "thanhhovan", commentContent: "Nhom k 10đ" },
    { avatar: "https://avatars.githubusercontent.com/u/109071521?s=400&v=4", name: "thanhhovan", commentContent: "Nhom k 10đ" },
    { avatar: "https://avatars.githubusercontent.com/u/109071521?s=400&v=4", name: "thanhhovan", commentContent: "Nhom k 10đ" },
    { avatar: "https://avatars.githubusercontent.com/u/109071521?s=400&v=4", name: "thanhhovan", commentContent: "Nhom k 10đ" },
    { avatar: "https://avatars.githubusercontent.com/u/109071521?s=400&v=4", name: "thanhhovan", commentContent: "Nhom k 10đ" },
    { avatar: "https://avatars.githubusercontent.com/u/109071521?s=400&v=4", name: "thanhhovan", commentContent: "Nhom k 10đ" },
    { avatar: "https://avatars.githubusercontent.com/u/109071521?s=400&v=4", name: "thanhhovan", commentContent: "Nhom k 10đ ajsfjaf  djssfkja  dsafkjalkdsjf dsjadf lorem asdfjasjfajsfasjfajfijaofj" },
]

    
const PostContain = () => {
    const {toast}=useToast();
    const [contentComment,setContent]= useState('')
    const [requests, setRequests] = useState<InforProfile|undefined>();
    const [listComment, SetListComment] = useState<Comment[]>([]);
    const [postsByUser, setPostByUser] = useState<Post[]>();
    
    useEffect(() => {
        user.GetUserCurrent().then(
            (res: any) => {
                setRequests(res);
            },
            (err: any) => {
                // setStatus(true);
            }
        );
        post.GetPostByUserId().then(
            (res: any) => {
                setPostByUser(res);
            },
            (err: any) => {
                // setStatus(true);
            }
        );
    }, []);
    const listPostDetail:PostDetail[]=[];
    // const postItem = {imagePost: 'https://res.cloudinary.com/dnnyzyyas/image/upload/v1700797491/fu8nwjonvkgri3ygawg1.jpg',represention:represention,like:3,create_at:parsedDate,user_id:1}
    if(postsByUser!==undefined && requests!==undefined){
        postsByUser.forEach((itemPost) => {
            let arrComment: Comment[]=[];
            commentPost.GetCommentOfPost(itemPost.id).then(
                (res: any) => {
                    arrComment.push(...res);
                    // setLoading(false);
                },
                (err: any) => {
                    // setLoading(false);
                }
            );
            
            const itemPostDetail={profile:requests,post:itemPost, comment:arrComment}
            listPostDetail.push(itemPostDetail);
        }
        )
    }
    const dialogItems:any[]=[]
    listPostDetail.map((postItemDetail)=>{
        const itemDialog= {formAction:<Post_interface itemPostDetail={postItemDetail}></Post_interface>,btnAction: <PostProfile avatar={postItemDetail.post.image}></PostProfile>}

        dialogItems.push(itemDialog)
    })
    return (
        <>
           {  dialogItems.map((dialogItem, index) => (
                <DialogForm dialogItem={dialogItem} key={1}></DialogForm>
            ))}
        </>
    );
}

const navItemProfiles=[
    {label:'Bài viết', active:true},
];

const NavItemProfilesContainer = () =><>
 {navItemProfiles.map((navItemProfile,index) => <NavProfile navItemProfile={navItemProfile} key={index}/>)}
</>
const Profile = () =>{  
    return(
        <>
        {/* <Dialog></Dialog> */}
        <MainProfile></MainProfile>
        <div className='flex justify-center'>
            <NavItemProfilesContainer/>
        </div>
        <div className='mt-5 grid grid-cols-2 md:grid-cols-3 md:max-w-[54rem] md:mx-auto'>
            <PostContain></PostContain>    
        </div> 
        </>
    )
}
export default Profile;
