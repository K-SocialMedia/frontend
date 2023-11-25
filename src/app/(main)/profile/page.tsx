"use client"    
import React from "react"
import NavProfile from '@/components/profile/nav-profile'
import MainProfile from '@/components/profile/heading-profile'
import DialogForm from "@/components/profile/dialog-post/dialog-post";
import Post_interface from "@/components/profile/dialog-post/post-detail";
import PostProfile from "@/components/profile/dialog-post/post_profile";
import User from "@/api/user";
import { useQuery } from "@tanstack/react-query";
const parsedDate = new Date("11/12/2023");
const represention= {avatar: "https://avatars.githubusercontent.com/u/109071521?s=400&v=4", name: "thanhhovan123", username: "thanh_chatchit_16" }
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
const postItem = {imagePost: 'https://res.cloudinary.com/dnnyzyyas/image/upload/v1700797491/fu8nwjonvkgri3ygawg1.jpg',represention:represention,like:3,create_at:parsedDate,user_id:1}
    
      
const itemPostDetail={profile:represention,post:postItem,comment:listComments}
const PostContain = () => {
    const dialogItems=[
        {formAction:<Post_interface itemPostDetail={itemPostDetail}></Post_interface>,btnAction: <PostProfile avatar={postItem.imagePost}></PostProfile>},
        {formAction:<Post_interface itemPostDetail={itemPostDetail}></Post_interface>,btnAction: <PostProfile avatar={postItem.imagePost}></PostProfile>},
        {formAction:<Post_interface itemPostDetail={itemPostDetail}></Post_interface>,btnAction: <PostProfile avatar={postItem.imagePost}></PostProfile>},
        {formAction:<Post_interface itemPostDetail={itemPostDetail}></Post_interface>,btnAction: <PostProfile avatar={postItem.imagePost}></PostProfile>},
        {formAction:<Post_interface itemPostDetail={itemPostDetail}></Post_interface>,btnAction: <PostProfile avatar={postItem.imagePost}></PostProfile>},
        {formAction:<Post_interface itemPostDetail={itemPostDetail}></Post_interface>,btnAction: <PostProfile avatar={postItem.imagePost}></PostProfile>},]
    return (
        <>
           {dialogItems.map((dialogItem, index) => (
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
