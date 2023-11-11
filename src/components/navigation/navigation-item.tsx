import { cn } from "@/lib/utils";
import { MouseEventHandler } from "react";
const NavigationItem = ({
    children,
    className,
    onclick,
    active,
}: {
    children: React.ReactNode;
    className?: string;
    onclick?: MouseEventHandler<HTMLDivElement>;
    active?: boolean;
}) => {
    // const handleClick = () => {
    //     if (onclick) {
    //         return onclick();
    //     }
    // };
    return (
        <>
            <div
                className={cn(
                    "xl:flex xl:p-4 xl:w-auto xl:justify-start flex justify-center  py-4 w-16  mt-[2px] cursor-pointer hover:bg-slate-400/20 rounded-xl transition-all duration-200 ease-in-out",
                    className,
                    active && "bg-slate-400/20"
                )}
                onClick={onclick}
            >
                {children}
            </div>
        </>
    );
};

export default NavigationItem;
