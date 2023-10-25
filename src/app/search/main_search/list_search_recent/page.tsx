import { X } from "lucide-react";
export interface ListSearchRecent{
    avatar:string;
    name:string;
    username:string;
}
const ListSearchRecent=({listSearchItem}:{listSearchItem:ListSearchRecent})=>{
    const {avatar, name,username}=listSearchItem;
    return(
        <>
         <div className="grid grid-cols-7 w-full pl-3 mb-4 cursor-pointer">
            <div className='col-span-1'>
                <img
                className="w-full h-full bg-white rounded-full"
                src={avatar}
                // https://avatars.githubusercontent.com/u/109071521?s=400&v=4
                alt=""
                />
            </div>
            <div className="col-span-6 ml-2 relative">
                <div className="font-bold">{name}</div>
                <div >{username}</div>
                <div className="absolute top-1/2 transform -translate-y-1/2 right-8 cursor-pointer">
                    <X />
                </div>
            </div>
         </div>
        </> 
    );
}
export default ListSearchRecent;