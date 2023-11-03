import AvatarMain from "@/components/avatar-main";
import { User2, Video, Phone } from "lucide-react";
const Header = () => {
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
                        <Phone />
                    </div>
                    <div className="cursor-pointer scale-125">
                        <Video />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
