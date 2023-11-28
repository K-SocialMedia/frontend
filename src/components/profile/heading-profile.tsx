import SettingProfile from "./setting/setting-profile";
import imageProfile from "@/assets/images/IMG_8513.jpg";
import { useState,useEffect } from 'react';
import AvatarMain from '../avatar-main';
import { Button } from '../ui';
import { CldUploadButton } from 'next-cloudinary';
import user from "@/api/user";
import { InforProfile } from "@/types/profile";
import { useToast } from "../ui";
import { toast } from "../ui/use-toast";
import { Check } from "lucide-react";
import { FriendsOfUser } from "@/types/friend";
import friend from "@/api/friend";
import post from "@/api/post";
import { AddPost } from "@/types/post";
const MainProfile = () =>{
    const {toast}=useToast();
    const [requests, setRequests] = useState<InforProfile>();
    const [status, setStatus] = useState<boolean>(false);
    const [avatar, setAvatar]=useState<string |undefined>(undefined);
    const [friends, setFriends] = useState<FriendsOfUser[]>([]);
    const[postProfile,setPost]=useState<AddPost[]>([]);
    useEffect(() => {
        friend.GetFriend().then(
            (res: any) => {
                setFriends(res);
            },
            (err: any) => {
                // setStatus(true);
            }
        );
        post.GetPostByUserId().then(
            (res: any) => {
                setPost(res);
            },
            (err: any) => {
                // setStatus(true);
            }
        );
        user.GetUserCurrent().then(
            (res: any) => {
                setRequests(res);
                setAvatar(res.image);
            },
            (err: any) => {
                setStatus(true);
            }
        );

    }, []);
    const handleUpload = (result: any) => {
        // setAvatar(avatar,result?.info?.secure_url,{shoudValidate:true})
        const imageUrl = result.info.secure_url;
        setAvatar(imageUrl);
        const payload: InforProfile = {
            fullName: requests?.fullName,
            nickName: requests?.nickName,
            image: `${imageUrl}`,
        };
        user.EditProfile(payload).then(
            (res: any) => {
                if (!res) {
                    return;
                }
                toast({
                    className: "bg-green-400 text-white border-none",
                    title: "Đổi ảnh đại diện thành công",
                    // description: "Friday, February 10, 2023 at 5:57 PM",
                    action: <Check></Check>,
                });
            },
            (err: any) => {
                toast({
                    className: "dark:bg-[#ef4444] border-none",
                    variant: "destructive",
                    title: "Đổi ảnh đại diện không thành công",
                    // description: "Friday, February 10, 2023 at 5:57 PM",
                }); 
            }
        );
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
                                {requests?.nickName}
                            </div>
                            <div className='md:text-sm md:mt-6 md:block hidden'>
                            <span className='mr-5'>{friends.length} bạn bè</span>
                            <span>{postProfile.length} bài viết</span>  
                            </div>
                            <div className="md:text-10 md:mt-4 md:inline-block hidden">
                                {requests?.fullName} 
                            </div>     
                        </div>   
                        <div className='md:col-span-2 md:mt-0 mt-4'>
                            <SettingProfile></SettingProfile>
                        </div>                 
                    </div>
                </span>   
                <div className="md:text-10 md:mt-4 text-center inline-block md:hidden">
                    {requests?.fullName}
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