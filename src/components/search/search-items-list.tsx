import { ScrollArea } from "@/components/ui/scroll-area";
import SearchItem from "./search-item";
import { Skeleton } from "@/components/ui";

const SearchItemsList = ({
    data,
    isLoading,
    isError,
}: {
    data: any;
    isLoading: boolean;
    isError?: any;
}) => {
    console.log(data);
    if (isLoading) {
        return isLoading ? (
            <>
                <div>
                    <div className="flex items-center space-x-4 pl-4 mb-2 w-full">
                        <Skeleton className="h-12 w-12 rounded-full" />
                        <div className="space-y-2 w-[206px] xl:w-[256px]">
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-1/2" />
                        </div>
                    </div>
                    <div className="flex items-center space-x-4 pl-4 mb-2 w-full">
                        <Skeleton className="h-12 w-12 rounded-full" />
                        <div className="space-y-2 w-[206px] xl:w-[256px]">
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-1/2" />
                        </div>
                    </div>
                    <div className="flex items-center space-x-4 pl-4 mb-2 w-full">
                        <Skeleton className="h-12 w-12 rounded-full" />
                        <div className="space-y-2 w-[206px] xl:w-[256px]">
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-1/2" />
                        </div>
                    </div>
                    <div className="flex items-center space-x-4 pl-4 mb-2 w-full">
                        <Skeleton className="h-12 w-12 rounded-full" />
                        <div className="space-y-2 w-[206px] xl:w-[256px]">
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-1/2" />
                        </div>
                    </div>
                    <div className="flex items-center space-x-4 pl-4 mb-2 w-full">
                        <Skeleton className="h-12 w-12 rounded-full" />
                        <div className="space-y-2 w-[206px] xl:w-[256px]">
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-1/2" />
                        </div>
                    </div>
                    <div className="flex items-center space-x-4 pl-4 mb-2 w-full">
                        <Skeleton className="h-12 w-12 rounded-full" />
                        <div className="space-y-2 w-[206px] xl:w-[256px]">
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-1/2" />
                        </div>
                    </div>
                    <div className="flex items-center space-x-4 pl-4 mb-2 w-full">
                        <Skeleton className="h-12 w-12 rounded-full" />
                        <div className="space-y-2 w-[206px] xl:w-[256px]">
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-1/2" />
                        </div>
                    </div>
                    <div className="flex items-center space-x-4 pl-4 mb-2 w-full">
                        <Skeleton className="h-12 w-12 rounded-full" />
                        <div className="space-y-2 w-[206px] xl:w-[256px]">
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-1/2" />
                        </div>
                    </div>
                </div>
            </>
        ) : (
            ""
        );
    }
    if (data) {
        return data ? (
            <ScrollArea className="h-full w-full">
                {data &&
                    data.map((value: any, index: any) => (
                        <SearchItem searchItem={value} key={index} />
                    ))}
            </ScrollArea>
        ) : (
            <div>kkk</div>
        );
    } else {
        return (
            <div className="flex justify-center items-center h-full flex-col text-[#a8a8a8]">
                Không tìm thấy người dùng
            </div>
        );
    }
};

export default SearchItemsList;
