import HeadingSearch from "./heading_search/page";
import MainSearch from "./main_search/page";
export default function Search() {
    return (
        <div className="h-screen">
            <div className="h-full w-[400px] border-r border-gray-300 rounded-r-md">
            <HeadingSearch></HeadingSearch>
            <MainSearch></MainSearch>
            </div>     
        </div>
    );
}