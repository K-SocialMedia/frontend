"use client"    
import React from "react"
import NavProfile from '../../components/profile/nav-profile'
import MainProfile from '../../components/profile/heading-profile'
import DialogForm from "@/components/profile/dialog-post/dialog-post";
import post_interface from "@/components/profile/dialog-post/post-detail";
// const postItems=[
//     {avatar:"https://avatars.githubusercontent.com/u/109071521?s=400&v=4"},
//     {avatar:"https://avatars.githubusercontent.com/u/109071521?s=400&v=4"},
//     {avatar:"https://avatars.githubusercontent.com/u/109071521?s=400&v=4"},
//     {avatar:"https://avatars.githubusercontent.com/u/109071521?s=400&v=4"},
//     {avatar:"https://avatars.githubusercontent.com/u/109071521?s=400&v=4"},
//     {avatar:"https://avatars.githubusercontent.com/u/109071521?s=400&v=4"},
//     {avatar:"https://avatars.githubusercontent.com/u/109071521?s=400&v=4"},
// ]
// const PostContain = () => {
//     return (
//         <div>
//            {postItems.map((postItem, index) => (
//                 <PostProfile postItem={postItem} key={index}></PostProfile>
//             ))}
//         </div>
//     );
// }
const dialogItems={formAction:post_interface};
const navItemProfiles=[
    {label:'Bài viết', active:true},
    // {label:'Edit profile', active:true},
    // {label:'Change password', active:false},
];

const NavItemProfilesContainer = () =><>
 {navItemProfiles.map((navItemProfile,index) => <NavProfile navItemProfile={navItemProfile} key={index}/>)}
</>
const Profile = () =>{  
    return(
        <>
        <MainProfile></MainProfile>
        <div className='flex justify-center'>
            <NavItemProfilesContainer/>
        </div>
        <div className='mt-5 grid grid-cols-2 md:grid-cols-3 md:max-w-4xl md:mx-auto'>
             <DialogForm dialogItem={dialogItems} key={1}></DialogForm>
             <DialogForm dialogItem={dialogItems} key={1}></DialogForm>
             <DialogForm dialogItem={dialogItems} key={1}></DialogForm>
             <DialogForm dialogItem={dialogItems} key={1}></DialogForm>
             <DialogForm dialogItem={dialogItems} key={1}></DialogForm>
            
        </div> 
        </>
    )
}
export default Profile;
