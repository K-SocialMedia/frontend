"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const ModeToggle = ({ children }: { children?: React.ReactNode }) => {
    const { setTheme } = useTheme();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <div className="flex">
                    <div className="relative xl:mr-[14px] ml-[-2px]">
                        <Sun className="h-[1.75rem] w-[1.75rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                        <Moon className="absolute top-0 h-[1.75rem] w-[1.75rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    </div>
                    <div>{children}</div>
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                    Sáng
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                    Tối
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};
