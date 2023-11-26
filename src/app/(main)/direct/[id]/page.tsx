"use client";
import Header from "@/components/message/header.tsx";
import Body from "@/components/message/body.tsx";
import Form from "@/components/message/form.tsx";
import { useAppSelector } from "@/redux/hooks";
import { Image, SendHorizontal } from "lucide-react";
import { Input } from "@/components/ui";
import { CldUploadButton } from "next-cloudinary";
import {
    HubConnection,
    HubConnectionBuilder,
    LogLevel,
} from "@microsoft/signalr";
import { useEffect, useState } from "react";
interface IParams {
    messagesId: string;
}
const MessageId = ({ params }: { params: IParams }) => {
    const token = useAppSelector((state) => state.authSlice.accessToken);
    const [hubConnection, setHubConnection] = useState<HubConnection>();
    const [text, setText] = useState<string>("");
    const [messageList, setMessageList] = useState<string[]>([]);
    useEffect(() => {
        createHubConnection();
    }, []);
    useEffect(() => {
        if (hubConnection) {
            hubConnection.on("ReceiveMessage", (message, fromId) => {
                setMessageList((prevState) => {
                    return prevState.concat(message);
                });
            });
        }
    }, [hubConnection]);
    const createHubConnection = async () => {
        const hubConnection = new HubConnectionBuilder()
            .withUrl("https://localhost:7047/chat", token)
            .build();
        try {
            await hubConnection.start();
            console.log("connection started");
        } catch (error) {
            console.log("lỗi", error);
        }
    };

    const handleSendText = () => {
        if (hubConnection) {
            hubConnection.invoke("SendMessage", text, token, params.messagesId);
        }
        console.log(text);
        setText("");
    };

    const handleUpload = (result: any) => {
        if (hubConnection) {
            hubConnection.invoke("SendMessage", result.info.secure_url);
        }
        // axios.post('/api/messages', {
        //   image: result.info.secure_url,
        //   conversationId: conversationId
        // })
        // console.log(result);
    };
    return (
        <>
            <div className="h-[100vh]">
                <div className="h-full flex flex-col">
                    <Header />
                    {/* <Body messageList={messageList}/> */}
                    <div className="flex-1 overflow-y-auto scrollbarMessage">
                        {messageList.map((message: any, index: number) => {
                            return <div key={index}> {message}</div>;
                        })}
                    </div>
                    <div className="flex gap-2 lg:gap-4 items-center w-full pl-4 pr-5 border-t py-5">
                        <CldUploadButton
                            options={{ maxFiles: 1 }}
                            onUpload={handleUpload}
                            uploadPreset="efoksozw"
                        >
                            <div className="scale-125 cursor-pointer">
                                <Image />
                            </div>
                        </CldUploadButton>

                        <div className="flex w-full">
                            <Input
                                type="text"
                                value={text}
                                onChange={(e) => {
                                    setText(e.target.value);
                                }}
                                className=" text-base h-12 dark:placeholder:text-[#797979] dark:bg-[#262626] light:border-gray-500 rounded-full px-4"
                                placeholder="Nhắn tin ..."
                            />
                            <button
                                className="ml-4 scale-125"
                                onClick={handleSendText}
                            >
                                <SendHorizontal />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MessageId;
