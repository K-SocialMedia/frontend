"use client";
import NavigationSidebar from "@/components/navigation/navigation-sidebar";
import { HubConnection, HubConnectionBuilder } from "@microsoft/signalr";
import { Input, useToast } from "@/components/ui";
import { useAppSelector } from "@/redux/hooks";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
const MainLayout = ({ children }: { children: React.ReactNode }) => {
    const { toast } = useToast();
    const [hubConnection, setHubConnection] = useState<HubConnection>();
    useEffect(() => {
        const connect = new HubConnectionBuilder()
            .withUrl("https://localhost:7047/chat")
            .withAutomaticReconnect()
            .build();
        setHubConnection(connect);
    }, []);
    useEffect(() => {
        try {
            if (hubConnection) {
                hubConnection.start().then((res) => {
                    hubConnection.invoke("JoinHub", token);
                });
                hubConnection.on("Noti", (messageModel) => {
                    toast({
                        className: "font-bold",
                        title: `${messageModel.senderName} vừa gửi tin nhắn cho bạn`,
                        description: `${messageModel.image ?"Một hình ảnh":messageModel.content}`,
                    });
                });
                // console.log("connection started");
            }
        } catch (error) {
            console.log("lỗi", error);
        }
    }, [hubConnection]);
    const connect = new HubConnectionBuilder()
        .withUrl("https://localhost:7047/chat")
        .withAutomaticReconnect()
        .build();
    const token = useAppSelector((state) => state.authSlice.accessToken);
    const router = useRouter();
    if (!token) {
        router.push("/auth");
    } else {
        return (
            <div className="h-full">
                <div className=" flex h-full w-[78px] z-30 flex-col fixed inset-y-0 ml-3 border-r-[0.5px] lg:w-[220px] ">
                    <NavigationSidebar />
                </div>

                <div className="pl-[90px] lg:pl-[232px] h-full w-full">
                    {children}
                </div>
            </div>
        );
    }
    return "";
};

export default MainLayout;
