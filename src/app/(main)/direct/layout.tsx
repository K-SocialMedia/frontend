import React from "react";
import MessageBar from "@/components/message/message-bar";
const DirectLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <div className="w-full">
                <div className="w-[350px] fixed bg-red-400">
                    <MessageBar />
                </div>
                <main className="pl-[350px]">tin nhan ne</main>
            </div>
        </>
    );
};

export default DirectLayout;
