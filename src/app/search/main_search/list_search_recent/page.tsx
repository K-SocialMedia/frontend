import { X } from "lucide-react";
import { Plus } from 'lucide-react';
export interface Profile{
    avatar:string;
    name?:string;
    username?:string;
    commentContent?:string;
}
const ListSearchRecent=({listSearchItem}:{listSearchItem:Profile})=>{
    const {avatar,name,username}=listSearchItem;
    return(
        <>
         <div className="grid grid-cols-7 w-full pl-4 mb-4 cursor-pointer">
            <div className='col-span-1'>
                <img
                className="w-full h-full bg-white rounded-full"
                src={avatar}
                // https://avatars.githubusercontent.com/u/109071521?s=400&v=4
                alt=""
                />
            </div>
            <div className="col-span-6 ml-2 relative flex items-center">
                <div>
                    <div className="font-bold">{name}</div>
                    <div>{username}</div>   
                </div>  
                <div className="absolute top-1/2 transform -translate-y-1/2 right-8 cursor-pointer">
                    <X />
                </div>
            </div>
         </div>
        </> 
    );
}
 const ListSearch=({listSearchItem}:{listSearchItem:Profile})=>{
    const {avatar, name,username}=listSearchItem;
    return(
        <>
         <div className="grid grid-cols-7 w-full pl-4 mb-4 cursor-pointer">
            <div className='col-span-1'>
                <img
                className="w-full h-full bg-white rounded-full"
                src={avatar}
                sizes=""
                // https://avatars.githubusercontent.com/u/109071521?s=400&v=4
                alt=""
                />
            </div>
            <div className="col-span-6 ml-2 relative flex items-center">
                <div>
                    <div className="font-bold">{name}</div>
                    <div>{username}</div>   
                </div>            
                <div className="absolute top-1/2 transform -translate-y-1/2 right-8 cursor-pointer">
                    <Plus/>
                </div>
            </div>
         </div>
        </> 
    );
}
const Represent=({represent}:{represent:Profile})=>{
    const {avatar, name}=represent;
    return(
        <>
         <div className="grid grid-cols-12 w-full pl-4 cursor-pointer items-center">
            <div className='col-span-1'>
                <img
                className="w-3/4 bg-white rounded-full"
                src={avatar}
                />
            </div>
            <div className="col-span-11 ml-2 relative flex items-center">
                <div>
                    <div className="font-bold">{name}</div>
                </div>            
            </div>
         </div>
        </> 
    );
}
const ListComment=({commentItem}:{commentItem:Profile})=>{
    const {avatar, name,commentContent}=commentItem;
    return(
        <>
         <div className="grid grid-cols-12 w-full pl-4 mb-4 cursor-pointer">
            <div className='col-span-1'>
                <img
                className="w-3/4 rounded-full"
                src={avatar}
                />
            </div>
            <div className="col-span-11 ml-2 relative flex items-center">
                <div>
                    <div className="font-bold">{name}</div>
                    <div>{commentContent}</div>
                </div>            
            </div>
         </div>
        </> 
    );
}

export {ListSearchRecent,Represent,ListComment,ListSearch as default};