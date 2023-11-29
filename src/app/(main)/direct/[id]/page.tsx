"use client";
import Header from "@/components/message/header";
import Body from "@/components/message/body";
import Form from "@/components/message/form";
import MessageApi from "@/api/message";
import { Message } from "@/types/message";
import { usePathname } from "next/navigation";
import { useAppSelector } from "@/redux/hooks";
import { Image, SendHorizontal } from "lucide-react";
import { Input } from "@/components/ui";
import { CldUploadButton } from "next-cloudinary";
import { HubConnection, HubConnectionBuilder } from "@microsoft/signalr";
import { useEffect, useState } from "react";

const MessageId = ({ params }: { params: { id: string } }) => {
    const token = useAppSelector((state) => state.authSlice.accessToken);
    const [hubConnection, setHubConnection] = useState<HubConnection>();
    const [text, setText] = useState<string>("");
    const [initialMessage, setInitialMessage] = useState<Message[]>([]);
    const pathname = usePathname();
    //b1
    useEffect(() => {
        createHubConnection();
    }, []);

    //b3 message khi có người gửi đến
    useEffect(() => {
        if (hubConnection) {
            hubConnection.on("ReceiveMessage", (messageModel) => {
                const newMessage: Message = {
                    id: messageModel.id,
                    content: messageModel.content,
                    createAt: new Date(Date.now()).toString(),
                    receiverName: messageModel.receiverName,
                    senderName: messageModel.senderName,
                    image: messageModel.image,
                    isRead: false,
                    senderId: messageModel.senderId,
                    receiverId: messageModel.receiverId,
                };
                setInitialMessage((prevState) => {
                    return prevState.concat(newMessage);
                });
            });
        }
    }, [hubConnection]);

    //b3
    useEffect(() => {
        try {
            if (hubConnection) {
                hubConnection.start().then((res) => {
                    const chatRoomModel = {
                        tokenUserId: token,
                        friendId: params.id,
                    };
                    hubConnection.invoke("JoinRoomChat", chatRoomModel);
                });
                // console.log("connection started");
            }
        } catch (error) {
            console.log("lỗi", error);
        }
    }, [hubConnection]);

    //b2
    const createHubConnection = async () => {
        const connect = new HubConnectionBuilder()
            .withUrl("https://localhost:7047/chat")
            .withAutomaticReconnect()
            .build();
        MessageApi.GetAllMessageById(params.id).then(
            (res: any) => {
                setInitialMessage(res);
            },
            (err: any) => {
                console.log(err);
            }
        );
        setHubConnection(connect);
    };
    // when send text
    const handleSendText = () => {
        const chatRoomModel = {
            tokenUserId: token,
            friendId: params.id,
        };
        if (hubConnection) {
            hubConnection.invoke("SendMessage", text, "", chatRoomModel);
        }
        const newMessage: Message = {
            id: "1",
            content: text,
            createAt: new Date(Date.now()).toString(),
            receiverName: "",
            image: "",
            senderName: "",
            isRead: false,
            senderId: ``,
            receiverId: `${pathname.slice(8)}`,
        };
        setInitialMessage((prevState) => {
            return prevState.concat(newMessage);
        });

        setText("");
    };

    const handleUpload = (result: any) => {
        const chatRoomModel = {
            tokenUserId: token,
            friendId: params.id,
        };
        if (hubConnection) {
            hubConnection.invoke(
                "SendMessage",
                "",
                result.info.secure_url,
                chatRoomModel
            );
        }
        const newMessage: Message = {
            id: "1",
            content: text,
            createAt: new Date(Date.now()).toString(),
            receiverName: "",
            image: result.info.secure_url,
            senderName: "",
            isRead: false,
            senderId: ``,
            receiverId: `${pathname.slice(8)}`,
        };
        setInitialMessage((prevState) => {
            return prevState.concat(newMessage);
        });
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
                    <Header id={params.id} />
                    {/* <Body messageList={messageList}/> */}
                    <div className="flex-1 overflow-y-auto scrollbarMessage">
                        {/* {messageList.length
                            ? messageList.length &&
                              messageList.map((message: any, index: number) => {
                                  return <div key={index}> {message}</div>;
                              })
                            : ""} */}
                        {initialMessage.length ? (
                            <Body MessageList={initialMessage} />
                        ) : (
                            <div className="flex justify-center flex-col items-center flex-1 h-full">
                                <SendHorizontal className="scale-150" />
                                <div>
                                    Bạn Đã trở thành bạn bè, hãy bắt đầu nhắn
                                    tin
                                </div>
                            </div>
                        )}
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
