"use client";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui";
import { Home, MessageCircle, User2, UserPlus2 } from "lucide-react";
import { cn } from "@/lib/utils";
const AvatarMain = ({
    className,
    image,
}: {
    className?: string;
    image: string;
}) => {
    // border-[1px] xl:mr-2 scale-75 xl:ml-[-8px]
    return (
        <>
            <Avatar
                className={cn(
                    "border-[#00000066]  dark:border-white",
                    className
                )}
            >
                <AvatarImage src={image} alt="@shadcn" />
                <AvatarFallback>
                    <User2 />
                </AvatarFallback>
            </Avatar>
        </>
    );
};

export default AvatarMain;
