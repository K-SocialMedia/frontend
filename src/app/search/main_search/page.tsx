import { Input } from "@/components/ui/input";
import { X } from 'lucide-react';
import ListSearchRecent from "./list_search_recent/page";
import {ChangeEvent } from 'react';

const listSearchRecentItems = [
    { avatar: "https://avatars.githubusercontent.com/u/109071521?s=400&v=4", name: "thanhhovan", username: "thanh_chatchit_16" },
    { avatar: "https://avatars.githubusercontent.com/u/109071521?s=400&v=4", name: "thanhhovan", username: "thanh_chatchit_16" },
    { avatar: "https://avatars.githubusercontent.com/u/109071521?s=400&v=4", name: "thanhhovan", username: "thanh_chatchit_16" },
];

const ListSearchRecentContainer = () => {
    return (
        <>
            {listSearchRecentItems.map((listSearchItem, index) => (
                <ListSearchRecent listSearchItem={listSearchItem} key={index} />
            ))}
        </>
    );
}

export default function MainSearch() {
    // // const [inputValue, setInputValue] = useState('');
    // // const [hasText, setHasText] = useState(false);

    // function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    //     const value = event.target.value;
    //     alert(value);
    //     // setInputValue(value);
    //     // setHasText(value.length > 0);
    // };

    return (
        <>
            <div className="border-b border-gray-300">
                <div className="mb-6 relative">
                    <div className="px-4">
                        <Input
                            className="bg-input-search border-none"
                            placeholder="Search"
                            // onChange={handleInputChange}
                        />
                    </div>
                    <div className="absolute top-1/2 transform -translate-y-1/2 right-8 text-black rounded-full bg-slate-200">
                        <X className="w-4 h-4 cursor-pointer" />
                    </div>
                    <div className='hidden'>
                        <div className="absolute top-full w-full h-screen bg-white"></div>
                    </div>
                </div>
            </div>
            <div className=''>
                <h3 className='font-bold text-lg px-4 my-2'>Recent</h3>
                <ListSearchRecentContainer />
            </div>
        </>
    );
}
