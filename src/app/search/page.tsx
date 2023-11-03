import MainSearch from "../../components/search/main-search";
export default function Search() {
    return (
        <div className="h-screen overflow-hidden">
            <div className="h-full w-[400px] border-r border-gray-300 rounded-r-md">
            <div>
                <h1 className='font-bold text-2xl px-4 my-2 pt-3 pb-9'>Tìm kiếm</h1>
            </div>
            <MainSearch></MainSearch>
            </div>     
        </div>
    );
}