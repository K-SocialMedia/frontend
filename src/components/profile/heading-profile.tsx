import React from 'react'; 
import SettingProfile from "./setting/setting_profile";
import imageProfile from "@/assets/images/IMG_8513.jpg"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Image from 'next/image';
const MainProfile = () =>{
    return (
        <div>
            <div className='max-w-4xl mx-auto grid grid-cols-3 border-b-2 border-gray-400 py-6 items-center'>
                <span className='flex col-span-1 justify-center'>
                    {/* <Image alt=''  src={imageProfile}/> */}
                    <Avatar className='md:w-40 md:h-40 w-20 h-20'>
                        <AvatarImage src="abc"/>
                        <AvatarFallback>sss</AvatarFallback>
                    </Avatar>
                </span>
                <span className="col-span-2">
                    <div className='md:grid md:grid-cols-3'>
                        <span className='mr-2 md:col-span-1 break-words'>thanh_chatchit191</span>   
                        <div className='md:col-span-2 md:mt-0 mt-4'>
                            <SettingProfile></SettingProfile>
                        </div>                    
                    </div>
                    <div className='md:text-sm md:mt-6 md:block hidden'>
                        <span className='mr-5'>16 bạn bè</span>
                        <span>4 bài viết</span>  
                    </div>
                    <div className="md:text-10 md:mt-4 md:inline-block hidden">
                        Thanh Ho Van 
                    </div>
                </span>   
                <div className="md:text-10 md:mt-4 text-center inline-block md:hidden">
                        Thanh Ho Van 
                </div>
            </div>
            <div className='max-w-4xl mx-auto grid grid-cols-2 border-b-2 border-gray-400 py-2 items-center text-sm md:hidden'>
                <span className='mr-5 text-center col-span-1'><div className='font-bold'>16</div><div>bạn bè</div></span>
                <span className='text-center col-span-1'> <div className='font-bold'>4</div><div>bài viết</div></span>  
            </div> 
        </div>     
    )        
}
export default MainProfile;