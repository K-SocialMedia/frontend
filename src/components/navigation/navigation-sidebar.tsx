"use client";
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
import { usePathname, useRouter } from "next/navigation";
import { useMemo } from "react";
import NavigationItem from "./navigation-item";
import AvatarMain from "@/components/avatar-main";
import logo from "@/assets/logo.png";
import Image from "next/image";
import logoDark from "@/assets/images/ChatChit_dark.png";
import logoLight from "@/assets/images/ChatChit_light.png";
const NavigatinoSidebar = () => {
    const pathname = usePathname();
    const router = useRouter();
    const getPathname = useMemo(() => pathname, [pathname]);
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
                <NavigationItem
                    active={getPathname === "/"}
                    onclick={() => router.push("/")}
                >
                    <ItemTooltip side="bottom" label="Trang chủ">
                        <Home className="xl:mr-4 scale-125" />
                    </ItemTooltip>
                    <span className="hidden xl:block">Trang chủ</span>
                </NavigationItem>
                <NavigationItem
                    active={getPathname.includes("/search")}
                    onclick={() => router.push("/search")}
                >
                    <ItemTooltip side="bottom" label="Tìm kiếm">
                        <Search className="xl:mr-4 scale-125" />
                    </ItemTooltip>
                    <span className="hidden xl:block">Tìm kiếm</span>
                </NavigationItem>
                <NavigationItem
                    className="xl:w-full"
                    active={getPathname.includes("/invite")}
                >
                    <ItemTooltip side="bottom" label="Lời mời kết bạn">
                        <UserPlus2 className="xl:mr-[14px] xl:ml-[3px] ml-1  scale-125" />
                    </ItemTooltip>
                    <span className="hidden xl:block">Lời mời kết bạn</span>
                </NavigationItem>
                <NavigationItem
                    active={getPathname.includes("/direct")}
                    onclick={() => {
                        return router.push("/direct");
                    }}
                >
                    <ItemTooltip side="bottom" label="Tin nhắn">
                        <MessageCircle className="xl:mr-4 scale-125" />
                    </ItemTooltip>
                    <span className="hidden xl:block">Tin nhắn</span>
                </NavigationItem>
                <NavigationItem>
                    <ItemTooltip side="bottom" label="Chuyển chế độ">
                        <ModeToggle>
                            <span className="hidden xl:block mt-1">
                                Chuyển chế độ
                            </span>
                        </ModeToggle>
                    </ItemTooltip>
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
            <NavigationItem className="xl:py-[8px] xl:w-[207px] mb-2">
                <ItemTooltip side="bottom" label="aaa">
                    <AvatarMain
                        className="border-[1px] xl:mr-2 scale-75 xl:ml-[-8px]"
                        image="https://avatars.githubusercontent.com/u/108066718?v=4"
                    ></AvatarMain>
                </ItemTooltip>
                <span className=" xl:flex xl:items-center hidden ">
                    Trang cá nhân
                </span>
            </NavigationItem>
        </>
    );
};

export default NavigatinoSidebar;
