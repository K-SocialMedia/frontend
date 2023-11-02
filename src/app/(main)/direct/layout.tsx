import React from "react";
import MessageBar from "@/components/message/message-bar";
const DirectLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <div className="w-full h-full">
                <div className="h-full flex flex-col w-[130px] inset-y-0 lg:w-[300px] xl:w-[350px] fixed border-r-[0.5px]">
                    <MessageBar />
                </div>
                <main className="pl-[130px] lg:pl-[300px] xl:pl-[350px] w-full h-full ">
                    {children}
                </main>
            </div>
        </>
    );
};

export default DirectLayout;
