"use client";
import Header from "@/components/message/header.tsx";
import Body from "@/components/message/body.tsx";
import Form from "@/components/message/form.tsx";
interface IParams {
    messagesId: string;
}
const MessageId = async ({ params }: { params: IParams }) => {
    return (
        <>
            <div className="h-[100vh]">
                <div className="h-full flex flex-col">
                    <Header />
                    <Body />
                    <Form />
                </div>
            </div>
        </>
    );
};

export default MessageId;
