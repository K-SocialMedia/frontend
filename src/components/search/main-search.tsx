"use client";
import User from "@/api/user";
import { Input, Skeleton } from "@/components/ui";
import { XCircle } from "lucide-react";
import SearchItem from "./search-item";
import { ChangeEvent, useMemo, useState, startTransition } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

const listSearchItems = [
    {
        avatar: "https://avatars.githubusercontent.com/u/109071521?s=400&v=4",
        name: "thanhhovan123",
        username: "thanh_chatchit_16",
    },
    {
        avatar: "https://avatars.githubusercontent.com/u/109071521?s=400&v=4",
        name: "thanhhovan456",
        username: "thanh_chatchit_16",
    },
    {
        avatar: "https://avatars.githubusercontent.com/u/109071521?s=400&v=4",
        name: "thanhhovan789",
        username: "thanh_chatchit_16",
    },
    {
        avatar: "https://avatars.githubusercontent.com/u/109071521?s=400&v=4",
        name: "thanhhovan",
        username: "thanh_chatchit_16",
    },
    {
        avatar: "https://avatars.githubusercontent.com/u/109071521?s=400&v=4",
        name: "thanhhovan",
        username: "thanh_chatchit_16",
    },
    {
        avatar: "https://avatars.githubusercontent.com/u/109071521?s=400&v=4",
        name: "thanhhovan",
        username: "thanh_chatchit_16",
    },
    {
        avatar: "https://avatars.githubusercontent.com/u/109071521?s=400&v=4",
        name: "thanhhovan",
        username: "thanh_chatchit_16",
    },
    {
        avatar: "https://avatars.githubusercontent.com/u/109071521?s=400&v=4",
        name: "thanhhovan",
        username: "thanh_chatchit_16",
    },
    {
        avatar: "https://avatars.githubusercontent.com/u/109071521?s=400&v=4",
        name: "thanhhovan",
        username: "thanh_chatchit_16",
    },
    {
        avatar: "https://avatars.githubusercontent.com/u/109071521?s=400&v=4",
        name: "thanhhovan",
        username: "thanh_chatchit_16",
    },
    {
        avatar: "https://avatars.githubusercontent.com/u/109071521?s=400&v=4",
        name: "thanhhovan",
        username: "thanh_chatchit_16",
    },
    {
        avatar: "https://avatars.githubusercontent.com/u/109071521?s=400&v=4",
        name: "thanhhovan",
        username: "thanh_chatchit_16",
    },
];

export default function MainSearch() {
    const [inputValue, setInputValue] = useState("");
    const [filterText, setFilterText] = useState("");
    const [isLoading, setLoading] = useState<boolean>(true);

    const [data, setData] = useState<any>([]);

    useMemo(() => {
        if (filterText) {
            User.SearchUserByNickName(filterText).then(
                (res: any) => {
                    if (res.length) {
                        setData(res);
                    } else {
                        setData([]);
                    }
                },
                (err: any) => {
                    setData([]);
                }
            );
        } else {
            // Đặt lại dữ liệu khi filterText là rỗng
            setData([]);
        }
        return [];
    }, [filterText]);

    useMemo(() => {
        if (data.length) {
            setLoading(false);
        } else {
            setLoading(true);
        }
        return false;
    }, [data]);

    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        const value = event.target.value;
        setInputValue(value);
        startTransition(() => {
            setFilterText(value);
        });
    }

    function clearInput() {
        setInputValue("");
        setFilterText("");
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
            {/* <ListSearchContainer /> */}
            {filterText ? (
                !isLoading ? (
                    <ScrollArea className="h-full w-full ">
                        {data.map((value: any, index: any) => {
                            return (
                                <SearchItem searchItem={value} key={index} />
                            );
                        })}
                    </ScrollArea>
                ) : (
                    <div>
                        {!data.length ? (
                            "Không tìm thấy"
                        ) : (
                            <div>
                                <div className="flex items-center space-x-4 pl-4 mb-2 w-full">
                                    <Skeleton className="h-12 w-12 rounded-full" />
                                    <div className="space-y-2 w-[206px] xl:w-[256px]">
                                        <Skeleton className="h-4 w-full" />
                                        <Skeleton className="h-4 w-1/2" />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    // <div>
                    //     <div className="flex items-center space-x-4 pl-4 mb-2 w-full">
                    //         <Skeleton className="h-12 w-12 rounded-full" />
                    //         <div className="space-y-2 w-[206px] xl:w-[256px]">
                    //             <Skeleton className="h-4 w-full" />
                    //             <Skeleton className="h-4 w-1/2" />
                    //         </div>
                    //     </div>
                    // </div>
                )
            ) : (
                <div className="flex justify-center items-center h-full flex-col text-[#a8a8a8]">
                    Tìm kiếm những người bạn mới
                </div>
            )}

            {/* <div className={`${hasText ? "hidden" : ""}`}>
                <h3 className="font-bold text-lg px-4 my-2">Gần đây</h3>
            </div> */}
        </>
    );
}
