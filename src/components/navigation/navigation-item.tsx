import React from "react";
import { cn } from "@/lib/utils";
const NavigationItem = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <>
            <div
                className={cn(
                    "xl:flex xl:p-4 xl:w-auto xl:justify-start flex justify-center  py-4 w-16  mt-[2px] cursor-pointer hover:bg-slate-400/20 rounded-xl transition-all duration-200 ease-in-out",
                    className
                )}
            >
                {children}
            </div>
        </>
    );
};

export default NavigationItem;
