import { MessageCircle } from "lucide-react";
import Image from "next/image";
import messageDark from "@/assets/icons/dark/message-dark.svg";
import messageLight from "@/assets/icons/light/message-light.svg";
const EmtyState = () => {
    return ( <>
     <div className="relative h-[100vh] w-full">
                <div className="flex flex-col justify-center items-center relative h-full w-full">
                    <div>
                        <Image
                            src={messageDark}
                            alt="#"
                            className="hidden dark:block"
                        />
                        <Image
                            src={messageLight}
                            alt="#"
                            className=" dark:hidden"
                        />
                    </div>
                    <div className="text-xl pt-5">Tin nhắn của bạn</div>
                    <div className="text-[#737373] dark:text-[#a8a8a8] pt-3">
                        Gửi ảnh và tin nhắn riêng tư cho bạn bè hoặc nhóm
                    </div>
                </div>
            </div></> );
}
 
export default EmtyState;