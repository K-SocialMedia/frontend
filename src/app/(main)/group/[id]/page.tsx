"use client";
import Header from "@/components/group/header";
import Body from "@/components/group/body";
import GroupApi from "@/api/group";
import User from "@/api/user";
import { GroupChat, MessageGroup } from "@/types/group-chat";
import { useAppSelector } from "@/redux/hooks";
import { Image, SendHorizontal } from "lucide-react";
import { Input, useToast } from "@/components/ui";
import { CldUploadButton } from "next-cloudinary";
import { HubConnection, HubConnectionBuilder } from "@microsoft/signalr";
import { useEffect, useState } from "react";
const MessageId = ({ params }: { params: { id: string } }) => {
    const { toast } = useToast();
    const token = useAppSelector((state) => state.authSlice.accessToken);
    const [hubConnection, setHubConnection] = useState<HubConnection>();
    const [profileGroup, setProfileGroup] = useState<GroupChat>(
        {} as GroupChat
    );
    const [text, setText] = useState<string>("");
    const [initialMessage, setInitialMessage] = useState<MessageGroup[]>([]);

    //b1
    useEffect(() => {
        createHubConnection();
    }, []);

    //b3 message khi có người gửi đến
    useEffect(() => {
        if (hubConnection) {
            hubConnection.on("ReceiveMessage", (messageModel) => {
                const newMessage: MessageGroup = {
                    id: messageModel.id,
                    content: messageModel.content,
                    createAt: new Date(Date.now()).toString(),
                    senderName: messageModel.senderName,
                    senderImage: messageModel.senderImage,
                    image: messageModel.image,
                    isRead: false,
                    senderId: messageModel.senderId,
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
                        roomId: params.id,
                    };
                    hubConnection.invoke("JoinRoom", chatRoomModel);
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
        GroupApi.GetAllMessageOfGroup(params.id).then(
            (res: any) => {
                setInitialMessage(res);
            },
            (err: any) => {}
        );
        GroupApi.GetGroupById(params.id).then(
            (res: any) => {
                console.log(res);
                setProfileGroup(res);
            },
            (err: any) => {}
        );
        setHubConnection(connect);
    };
    // when send text
    const handleSendText = () => {
        const chatRoomModel = {
            tokenUserId: token,
            roomId: params.id,
        };
        if (hubConnection) {
            hubConnection.invoke("SendMessage", text, "", chatRoomModel);
        }
        // const newMessage: MessageGroup = {
        //     id: "1",
        //     content: text,
        //     createAt: new Date(Date.now()).toString(),
        //     image: "",
        //     senderName: "",
        //     isRead: false,
        //     senderId: ``,
        // };
        // setInitialMessage((prevState) => {
        //     return prevState.concat(newMessage);
        // });

        setText("");
    };

    const handleUpload = (result: any) => {
        const chatRoomModel = {
            tokenUserId: token,
            roomId: params.id,
        };
        if (hubConnection) {
            hubConnection.invoke(
                "SendMessage",
                "",
                result.info.secure_url,
                chatRoomModel
            );
        }
    };
    return (
        <>
            <div className="h-[100vh]">
                <div className="h-full flex flex-col">
                    {profileGroup.hasOwnProperty("users") ? (
                        <Header profileGroup={profileGroup} />
                    ) : (
                        ""
                    )}
                    {/* <Header profileGroup={profileGroup} /> */}
                    {/* <Body messageList={messageList}/> */}
                    <div className="flex-1 overflow-y-auto scrollbarMessage">
                        {/* {messageList.length
                            ? messageList.length &&
                              messageList.map((message: any, index: number) => {
                                  return <div key={index}> {message}</div>;
                              })
                            : ""} */}
                        {initialMessage.length ? (
                            <Body
                                messageList={initialMessage}
                                // profileFriend={profileFriend}
                            />
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
