import SettingProfile from "./setting/setting-profile";
import imageProfile from "@/assets/images/IMG_8513.jpg";
import { useState } from 'react';
import AvatarMain from '../avatar-main';
import { Button } from '../ui';
import { CldUploadButton } from 'next-cloudinary';
const itemInforProfile = { fullName: 'Hồ Văn Thành', email: 'thanh160523@gmail.com', nickName: 'thanhchatchit' };
const MainProfile = () =>{
    const [avatar, setAvatar]=useState('https://res.cloudinary.com/dnnyzyyas/image/upload/v1700794282/ju2aks2g6uvnytreyajh.jpg');
    const {fullName,email,nickName}= itemInforProfile;
    const handleUpload = (result: any) => {
        // setAvatar(avatar,result?.info?.secure_url,{shoudValidate:true})
        const imageUrl = result.info.secure_url;
        console.log('Image uploaded to Cloudinary. URL:', imageUrl);
        setAvatar(imageUrl);
    };

    return (
        <div>
            <div className='max-w-4xl mx-auto grid grid-cols-3 border-b-2 border-gray-400 py-4 items-center'>
                <span className='flex col-span-1 justify-center'>
                    {/* <Image alt=''  src={imageProfile}/> */}
                    <div className='grid grid-cols-1 place-items-center relative'>
                        <AvatarMain  className='w-20 h-20 md:w-32 md:h-32' image={avatar} />
                        <CldUploadButton
                            options={{ maxFiles: 1 }}
                            onUpload={handleUpload}
                            uploadPreset="efoksozw"
                            className="w-full flex justify-center mt-1"
                        >
                           <div className="px-3 w-fit rounded-md border-black-100 border-[1px]">Thay đổi</div>
                        </CldUploadButton>
                    </div>            
                </span>
                <span className="col-span-2">
                    <div className='md:grid md:grid-cols-3'>
                        <div className='mr-2 md:col-span-1'>
                            <div className='break-words'>
                                {nickName}
                            </div>
                            <div className='md:text-sm md:mt-6 md:block hidden'>
                            <span className='mr-5'>16 bạn bè</span>
                            <span>4 bài viết</span>  
                            </div>
                            <div className="md:text-10 md:mt-4 md:inline-block hidden">
                                {fullName} 
                            </div>     
                        </div>   
                        <div className='md:col-span-2 md:mt-0 mt-4'>
                            <SettingProfile></SettingProfile>
                        </div>                 
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