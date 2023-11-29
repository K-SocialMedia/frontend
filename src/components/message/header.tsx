import { User2, Video, Phone } from "lucide-react";
import { useState } from "react";
import { PhoneOff } from "lucide-react";
import { VideoOff } from "lucide-react";
import User from "@/api/user";
import AvatarMain from "@/components/avatar-main";
import Page from "../call";
interface User {
    id: string;
    fullName: string;
    image: string | null;
    nickName: string;
    email: string | null;
    status: number;
}
// export async function getServerSideProps() {
//     const res = await fetch(`https://localhost:7047/api/User/get-user-by-id/`)
//     // const respond: User = {
//     //     id: "",
//     //     fullName: "",
//     //     image: null,
//     //     nickName: "",
//     //     email: null,
//     //     status: 1,
//     // };

//     // await User.GetUserById("4fe4277a-e3b9-4cf7-90af-4bb1d5c51c06").then(
//     //     (res: any) => {
//     //         console.log(res);
//     //         respond.id = res.id;
//     //         respond.fullName = res.fullName;
//     //         respond.email = res.email;
//     //         respond.image = res.image;
//     //         respond.nickName = res.nickName;
//     //         respond.status = res.status;
//     //     },
//     //     (err: any) => {
//     //         console.log("loi");
//     //         return respond;
//     //     }
//     // );
//     // return respond;
// }
const Header = ({ id }: { id: string }) => {
    // const profile =  getServerSideProps(id);
    const [call, setCall] = useState("");
    function handleCall() {
        if (call == "") {
            setCall("call");
        } else {
            setCall("");
        }
    }
    function handleCallVideo() {
        if (call == "") {
            setCall("callVideo");
        } else {
            setCall("");
        }
    }
    return (
        <>
            <div className="flex w-full justify-between items-center p-[25px] border-b-[1px]     ">
                <div className="flex items-center">
                    <AvatarMain
                        image=""
                        className="border-[1px] xl:mr-2  xl:ml-0 scale-125"
                    ></AvatarMain>
                    <div className="pl-3 text-lg">tutu</div>
                    {/* {profile.nickName} */}
                </div>
                <div className="flex justify-between items-center ">
                    <div className="pr-6 cursor-pointer scale-125">
                        {call == "" ? (
                            <Phone onClick={handleCall} />
                        ) : (
                            <PhoneOff onClick={handleCall}></PhoneOff>
                        )}
                    </div>
                    <div className="cursor-pointer scale-125">
                        {call == "" ? (
                            <Video onClick={handleCallVideo} />
                        ) : (
                            <VideoOff onClick={handleCall}></VideoOff>
                        )}
                    </div>
                </div>
            </div>
            {call == "call" ? (
                <Page video={false}></Page>
            ) : call == "callVideo" ? (
                <Page video={true}></Page>
            ) : (
                ""
            )}
        </>
    );
};

export default Header;
