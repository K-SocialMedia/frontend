"use client"
import { Input } from "@/components/ui/input";
import { X } from 'lucide-react';
import {ListSearchRecent} from "../present-interface";
import {ChangeEvent,useState } from 'react';
import { ScrollArea } from "@/components/ui/scroll-area"


const listSearchRecentItems = [
    { avatar: "https://avatars.githubusercontent.com/u/109071521?s=400&v=4", name: "thanhhovan", username: "thanh_chatchit_16" },
    { avatar: "https://avatars.githubusercontent.com/u/109071521?s=400&v=4", name: "thanhhovan", username: "thanh_chatchit_16" },
    { avatar: "https://avatars.githubusercontent.com/u/109071521?s=400&v=4", name: "thanhhovan", username: "thanh_chatchit_16" },
    { avatar: "https://avatars.githubusercontent.com/u/109071521?s=400&v=4", name: "thanhhovan", username: "thanh_chatchit_16" },
    { avatar: "https://avatars.githubusercontent.com/u/109071521?s=400&v=4", name: "thanhhovan", username: "thanh_chatchit_16" },
    { avatar: "https://avatars.githubusercontent.com/u/109071521?s=400&v=4", name: "thanhhovan", username: "thanh_chatchit_16" },
    { avatar: "https://avatars.githubusercontent.com/u/109071521?s=400&v=4", name: "thanhhovan", username: "thanh_chatchit_16" },
    { avatar: "https://avatars.githubusercontent.com/u/109071521?s=400&v=4", name: "thanhhovan", username: "thanh_chatchit_16" },
    { avatar: "https://avatars.githubusercontent.com/u/109071521?s=400&v=4", name: "thanhhovan", username: "thanh_chatchit_16" },
    { avatar: "https://avatars.githubusercontent.com/u/109071521?s=400&v=4", name: "thanhhovan", username: "thanh_chatchit_16" },
    { avatar: "https://avatars.githubusercontent.com/u/109071521?s=400&v=4", name: "thanhhovan", username: "thanh_chatchit_16" },
    { avatar: "https://avatars.githubusercontent.com/u/109071521?s=400&v=4", name: "thanhhovan", username: "thanh_chatchit_16" },
];

const listSearchItems = [
    { avatar: "https://avatars.githubusercontent.com/u/109071521?s=400&v=4", name: "thanhhovan123", username: "thanh_chatchit_16" },
    { avatar: "https://avatars.githubusercontent.com/u/109071521?s=400&v=4", name: "thanhhovan456", username: "thanh_chatchit_16" },
    { avatar: "https://avatars.githubusercontent.com/u/109071521?s=400&v=4", name: "thanhhovan789", username: "thanh_chatchit_16" },
    { avatar: "https://avatars.githubusercontent.com/u/109071521?s=400&v=4", name: "thanhhovan", username: "thanh_chatchit_16" },
    { avatar: "https://avatars.githubusercontent.com/u/109071521?s=400&v=4", name: "thanhhovan", username: "thanh_chatchit_16" },
    { avatar: "https://avatars.githubusercontent.com/u/109071521?s=400&v=4", name: "thanhhovan", username: "thanh_chatchit_16" },
    { avatar: "https://avatars.githubusercontent.com/u/109071521?s=400&v=4", name: "thanhhovan", username: "thanh_chatchit_16" },
    { avatar: "https://avatars.githubusercontent.com/u/109071521?s=400&v=4", name: "thanhhovan", username: "thanh_chatchit_16" },
    { avatar: "https://avatars.githubusercontent.com/u/109071521?s=400&v=4", name: "thanhhovan", username: "thanh_chatchit_16" },
    { avatar: "https://avatars.githubusercontent.com/u/109071521?s=400&v=4", name: "thanhhovan", username: "thanh_chatchit_16" },
    { avatar: "https://avatars.githubusercontent.com/u/109071521?s=400&v=4", name: "thanhhovan", username: "thanh_chatchit_16" },
    { avatar: "https://avatars.githubusercontent.com/u/109071521?s=400&v=4", name: "thanhhovan", username: "thanh_chatchit_16" },
];

const ListSearchRecentContainer = () => {
    return (
        <><ScrollArea  className="h-screen">
            {listSearchRecentItems.map((listSearchItem, index) => (
                <ListSearchRecent listSearchItem={listSearchItem} key={index} />
            ))}
            </ScrollArea>
        </>
    );
}
const ListSearchContainer = () => {
    return (
        <>  <ScrollArea className="h-screen">
            {listSearchItems.map((listSearchItem, index) => (
                <ListSearchRecent listSearchItem={listSearchItem} key={index} />
            ))}
            </ScrollArea>
        </>
    );
}

export default function MainSearch() {
    const [inputValue, setInputValue] = useState('');
    const [hasText, setHasText] = useState(false);

    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        const value = event.target.value;
        setInputValue(value);
        setHasText(value.length > 0);
    };

    function clearInput(){
        setInputValue('');
        setHasText(false);
    }
    return (
        <>
            <div className={`${hasText ? "" :"border-b border-gray-300"}`}>
                <div className="mb-6 relative">
                    <div className="px-4">
                        <Input
                            className="bg-input-search border-none"
                            placeholder="Tìm kiếm"  
                            onChange={handleInputChange}
                            value={inputValue}
                        />
                    </div>
                    <div onClick={clearInput} className="absolute top-1/2 transform -translate-y-1/2 right-8 text-black rounded-full bg-slate-200">
                        <X className="w-4 h-4 cursor-pointer" />
                    </div>
                    <div className={`absolute top-full w-full h-screen pt-4 ${hasText ? '' : 'hidden'}`}>
                        <ScrollArea>
                        <ListSearchContainer />
                        </ScrollArea>
                    </div>
                </div>
            </div>
            <div className={`${hasText ? 'hidden' : ''}`}>
                <h3 className='font-bold text-lg px-4 my-2'>Gần đây</h3>
                    <ListSearchRecentContainer />
            </div>
        </>
    );
}
