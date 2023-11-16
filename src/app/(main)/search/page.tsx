import MainSearch from "@/components/search/main-search";
export default function Search() {
    return (
        <div className="h-full w-[300px] xl:w-[350px] fixed overflow-hidden flex flex-col rounded-md border-r-[0.5px]  ">
            <h1 className="font-bold text-2xl px-3 my-2 pt-3 pb-9">Tìm kiếm</h1>
            <MainSearch></MainSearch>
        </div>
    );
}
