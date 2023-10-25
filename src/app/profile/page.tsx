import React from "react"
import NavProfile from './nav_profile/nav_profile'
import MainProfile from './main_profile/main_profile'
import FormProfile from "./main_profile/setting_profile/form_profile/form_profile";
import PostProfile from "./post_profile/post_profile";

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
            <PostProfile></PostProfile>
            <PostProfile></PostProfile>
            <PostProfile></PostProfile>
            <PostProfile></PostProfile>
        </div> 
        </>
    )
}
export default Profile;
