import { ScrollArea } from "@/components/ui";
import {
    Home,
    MessageCircle,
    LogOut,
    User2,
    Search,
    UserPlus2,
} from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";
import { ItemTooltip } from "@/components/tooltip-item";
import NavigationItem from "./navigation-item";
import AvatarMain from "@/components/avatar-main";
import logo from "@/assets/logo.png";
import Image from "next/image";
import logoDark from "@/assets/images/ChatChit_dark.png";
import logoLight from "@/assets/images/ChatChit_light.png";
const NavigatinoSidebar = () => {
    return (
        <>
            <div className=" mt-4 xl:ml-[-7px] ml-[-16]">
                <Image
                    alt=""
                    src={logo}
                    className="w-14 h-15 xl:hidden ml-1"
                ></Image>
                <Image
                    alt=""
                    src={logoDark}
                    className=" w-3/4 hidden xl:dark:block"
                ></Image>
                <Image
                    alt=""
                    src={logoLight}
                    className=" w-3/4 hidden xl:block dark:hidden"
                ></Image>
            </div>

            <ScrollArea className="h-full pr-3 w-full">
                <NavigationItem>
                    <ItemTooltip side="bottom" label="Trang chủ">
                        <Home className="xl:mr-4 scale-125" />
                    </ItemTooltip>
                    <span className="hidden xl:block">Trang chủ</span>
                </NavigationItem>
                <NavigationItem>
                    <ItemTooltip side="bottom" label="Tìm kiếm">
                        <Search className="xl:mr-4 scale-125" />
                    </ItemTooltip>
                    <span className="hidden xl:block">Tìm kiếm</span>
                </NavigationItem>
                <NavigationItem className="xl:w-full">
                    <ItemTooltip side="bottom" label="Lời mời kết bạn">
                        <UserPlus2 className="xl:mr-[14px] xl:ml-[3px] ml-1  scale-125" />
                    </ItemTooltip>
                    <span className="hidden xl:block">Lời mời kết bạn</span>
                </NavigationItem>
                <NavigationItem>
                    <ItemTooltip side="bottom" label="Tin nhắn">
                        <MessageCircle className="xl:mr-4 scale-125" />
                    </ItemTooltip>
                    <span className="hidden xl:block">Tin nhắn</span>
                </NavigationItem>
                <NavigationItem>
                    <ModeToggle>
                        <span className="hidden xl:block">Chuyển chế độ</span>
                    </ModeToggle>
                </NavigationItem>
                <NavigationItem>
                    <ItemTooltip side="bottom" label="Đăng xuất">
                        <LogOut className="xl:mr-4 scale-105" />
                    </ItemTooltip>
                    <span className="hidden xl:block">Đăng xuất</span>
                </NavigationItem>
                {/* <NavigationItem className="py-2">
                    <Avatar className="border-black border-[1px] xl:mr-2 scale-75 xl:ml-[-8px] dark:border-white">
                        <AvatarImage
                            src="https://avatars.githubusercontent.com/u/108066718?v=4"
                            alt="@shadcn"
                        />
                        <AvatarFallback>
                            <User2 />
                        </AvatarFallback>
                    </Avatar>
                    <span className=" xl:flex xl:items-center hidden ">
                        Trang cá nhân
                    </span>
                </NavigationItem>
                <NavigationItem className="py-2">
                    <Avatar className="border-black border-[1px] xl:mr-2 scale-75 xl:ml-[-8px] dark:border-white">
                        <AvatarImage
                            src="https://avatars.githubusercontent.com/u/108066718?v=4"
                            alt="@shadcn"
                        />
                        <AvatarFallback>
                            <User2 />
                        </AvatarFallback>
                    </Avatar>
                    <span className=" xl:flex xl:items-center hidden ">
                        Trang cá nhân
                    </span>
                </NavigationItem>
                <NavigationItem className="py-2">
                    <Avatar className="border-black border-[1px] xl:mr-2 scale-75 xl:ml-[-8px] dark:border-white">
                        <AvatarImage
                            src="https://avatars.githubusercontent.com/u/108066718?v=4"
                            alt="@shadcn"
                        />
                        <AvatarFallback>
                            <User2 />
                        </AvatarFallback>
                    </Avatar>
                    <span className=" xl:flex xl:items-center hidden ">
                        Trang cá nhân
                    </span>
                </NavigationItem> */}
            </ScrollArea>
            <NavigationItem className="xl:py-[10px] xl:w-[207px]">
                <AvatarMain
                    className="border-[1px] xl:mr-2 scale-75 xl:ml-[-8px]"
                    image="https://avatars.githubusercontent.com/u/108066718?v=4"
                ></AvatarMain>
                <span className=" xl:flex xl:items-center hidden ">
                    Trang cá nhân
                </span>
            </NavigationItem>
        </>
    );
};

export default NavigatinoSidebar;
