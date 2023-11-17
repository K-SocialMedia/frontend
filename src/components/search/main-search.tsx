"use client";
import User from "@/api/user";
import { Input, Skeleton } from "@/components/ui";
import { XCircle } from "lucide-react";
import SearchItem from "./search-item";
import SearchItemsList from "./search-items-list";
import useDebounce from "@/app/hooks/useDounced";
import { ChangeEvent, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function MainSearch() {
    const [inputValue, setInputValue] = useState("");

    const debouncedSearchTerm = useDebounce(inputValue, 300);
    const { data, error, isError, isLoading } = useQuery({
        queryKey: ["users", debouncedSearchTerm],
        queryFn: async () => {
            if (debouncedSearchTerm) {
                try {
                    const res = await User.SearchUserByNickName(inputValue);
                    return res;
                } catch (err) {
                    throw err;
                }
            }
            // try {
            //     const data1 = await User.SearchUserByNickName(inputValue);
            //     return data1;
            // } catch (err) {
            //     throw err;
            // }
        },
    });

    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        const value = event.target.value;

        setInputValue(value);
    }

    function clearInput() {
        setInputValue("");
    }
    return (
        <>
            <div className="w-full">
                <div className="mb-6 relative">
                    <div className="px-3">
                        <form action="">
                            <Input
                                className=" bg-slate-200 dark:placeholder:text-[#797979] dark:bg-[#262626]"
                                placeholder="Tìm kiếm"
                                onChange={handleInputChange}
                                value={inputValue}
                            />
                        </form>
                    </div>
                    <div
                        onClick={clearInput}
                        className="absolute top-1/2 cursor-pointer transform -translate-y-1/2 right-6 rounded-full "
                    >
                        <XCircle className="scale-75" />
                    </div>
                </div>
            </div>
            {inputValue ? (
                <SearchItemsList data={data} isLoading={isLoading} />
            ) : (
                <div className="flex justify-center items-center h-full flex-col text-[#a8a8a8]">
                    Tìm kiếm những người bạn mới
                </div>
            )}
        </>
    );
}
