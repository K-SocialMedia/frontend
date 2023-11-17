import AvatarMain from "@/components/avatar-main";
import { User2, Video, Phone } from "lucide-react";
import { useState } from "react";
import Page from "../call";
const Header = () => {
    const [call,setCall]=useState('');
    function handleCall(){
        setCall('call');
    }
    function handleCallVideo(){
        setCall('callVideo');
    }
    return (
        <>
            <div className="flex w-full justify-between items-center p-[25px] border-b-[1px]     ">
                <div className="flex items-center">
                    <AvatarMain
                        image=""
                        className="border-[1px] xl:mr-2  xl:ml-0 scale-125"
                    ></AvatarMain>
                    <div className="pl-3 text-lg">Trần Phan Hải Bằng</div>
                </div>
                <div className="flex justify-between items-center ">
                    <div className="pr-6 cursor-pointer scale-125">
                        <Phone onClick={handleCall}/>
                    </div>
                    <div className="cursor-pointer scale-125">
                        <Video onClick={handleCallVideo}/>
                    </div>
                </div>
            </div>
            {call=='call'?<Page video={false}></Page>:
             call=='callVideo'?<Page video={true}></Page>:
             ''
             }
        </>
    );
};

export default Header;
