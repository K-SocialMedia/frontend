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
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { logOut } from "@/redux/features/authSlice";
import { useMemo,useEffect,useState } from "react";
import NavigationItem from "./navigation-item";
import AvatarMain from "@/components/avatar-main";
import logo from "@/assets/logo.png";
import Image from "next/image";
import logoDark from "@/assets/images/ChatChit_dark.png";
import logoLight from "@/assets/images/ChatChit_light.png";
import Auth from "@/api/auth";
import user from "@/api/user";
import { InforProfile } from "@/types/profile";

const NavigatinoSidebar = () => {
    const pathname = usePathname();
    const router = useRouter();
    const dispatch = useAppDispatch();
    const getPathname = useMemo(() => pathname, [pathname]);
    const [requests, setRequests] = useState<InforProfile>();
    useEffect(() => {
        user.GetUserCurrent().then(
            (res: any) => {
                setRequests(res);
            },
            (err: any) => {
                
            }
        );
    }, []);
    return (
        <>
            <div className=" mt-4 lg:ml-[-7px] ml-[-16]">
                <Image
                    alt=""
                    src={logo}
                    className="w-14 h-15 lg:hidden ml-1"
                ></Image>
                <Image
                    alt=""
                    src={logoDark}
                    className=" w-3/4 hidden lg:dark:block"
                ></Image>
                <Image
                    alt=""
                    src={logoLight}
                    className=" w-3/4 hidden lg:block dark:hidden"
                ></Image>
            </div>

            <ScrollArea className="h-full pr-3 w-full">
                <NavigationItem
                    active={getPathname === "/"}
                    onclick={() => router.push("/")}
                >
                    <ItemTooltip side="bottom" label="Trang chủ">
                        <Home className="lg:mr-4 scale-125" />
                    </ItemTooltip>
                    <span className="hidden lg:block">Trang chủ</span>
                </NavigationItem>
                <NavigationItem
                    active={getPathname.includes("/search")}
                    onclick={() => router.push("/search")}
                >
                    <ItemTooltip side="bottom" label="Tìm kiếm">
                        <Search className="lg:mr-4 scale-125" />
                    </ItemTooltip>
                    <span className="hidden lg:block">Tìm kiếm</span>
                </NavigationItem>
                <NavigationItem
                    className="lg:w-full"
                    onclick={() => router.push("/requests")}
                    active={getPathname.includes("/requests")}
                >
                    <ItemTooltip side="bottom" label="Lời mời kết bạn">
                        <UserPlus2 className="lg:mr-[14px] lg:ml-[3px] ml-1  scale-125" />
                    </ItemTooltip>
                    <span className="hidden lg:block">Lời mời kết bạn</span>
                </NavigationItem>
                <NavigationItem
                    active={getPathname.includes("/direct")}
                    onclick={() => router.push("/direct")}
                >
                    <ItemTooltip side="bottom" label="Tin nhắn">
                        <MessageCircle className="lg:mr-4 scale-125" />
                    </ItemTooltip>
                    <span className="hidden lg:block">Tin nhắn</span>
                </NavigationItem>
                <NavigationItem>
                    <ItemTooltip side="bottom" label="Chuyển chế độ">
                        <ModeToggle>
                            <span className="hidden lg:block mt-1">
                                Chuyển chế độ
                            </span>
                        </ModeToggle>
                    </ItemTooltip>
                </NavigationItem>
                <NavigationItem
                    onclick={() => {
                        dispatch(logOut());
                        // Auth.logout().then(
                        //     (res: any) => {
                        //         localStorage.removeItem("ACCESS_TOKEN");
                        //         router.push("/auth");
                        //     },
                        //     (err: any) => {
                        //         return;
                        //     }
                        // );
                    }}
                >
                    <ItemTooltip side="bottom" label="Đăng xuất">
                        <LogOut className="lg:mr-4 scale-105" />
                    </ItemTooltip>
                    <span className="hidden lg:block">Đăng xuất</span>
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
            <NavigationItem
                className="lg:py-[8px] lg:w-[207px] mb-2"
                active={getPathname.includes("/profile")}
                onclick={() => router.push("/profile")}
            >
                <ItemTooltip side="bottom" label="aaa">
                    <AvatarMain
                        className="border-[1px] lg:mr-2 scale-75 lg:ml-[-8px]"
                        image = {requests?.image}
                    ></AvatarMain>
                </ItemTooltip>
                <span className=" lg:flex lg:items-center hidden ">
                    Trang cá nhân
                </span>
            </NavigationItem>
        </>
    );
};

export default NavigatinoSidebar;
