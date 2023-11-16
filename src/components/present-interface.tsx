"use client";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui";
import AvatarMain from "./avatar-main";
import { X } from "lucide-react";
import { Plus } from 'lucide-react';
import React, { useRef, useEffect, useState } from 'react';
export interface Profile{
    avatar:string;
    name:string;
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
    const {avatar,name,username}=listSearchItem;
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
         <div className="flex pl-4 w-full cursor-pointer items-center">
            <div className=''>
                <img
                className="w-[44px] h-[44px] bg-white rounded-full"
                src={avatar}
                />
            </div>
            <div className="ml-2 relative flex items-center">
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

const ListFriendInterface = ({friendItem}:{friendItem:Profile}) =>{
    const {avatar,name}=friendItem;
    return(
        <div className="mr-4 w-[58px] last:mr-0">
            <div className="flex justify-center">
            <AvatarMain image={avatar} className="w-[58px] h-[58px]"></AvatarMain>
            </div>      
            <TruncateText text={name}></TruncateText>
        </div>
    )
}
const TruncateText = ({ text }:{text:string}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isOverflowing, setIsOverflowing] = useState(false);
  
    useEffect(() => {
      const container = containerRef.current;
      if (container) {
        setIsOverflowing(container.scrollWidth > container.clientWidth);
      }
    }, [text]);
  
    const truncatedText = isOverflowing ? `${text.slice(0, text.length)}...` : text;
  
    return (
      <div ref={containerRef} className="text-xs overflow-hidden overflow-ellipsis text-center">
        {truncatedText}
      </div>
    );
};

const SuggestToFriend = ({friendItem}:{friendItem:Profile}) =>{
    const {avatar,name}=friendItem;
    return(
        <div className="flex ml-4 w-full mt-4 relative">
            <div className="flex justify-start">
            <AvatarMain image={avatar} className="w-[44px] h-[44px]"></AvatarMain>
            </div>      
            <div className="items-center ml-2">
                <div className="font-bold">
                    {name}
                </div>
                <div>
                    đề xuất
                </div>         
            </div>
            <div className="hover:text-gray-500 text-blue-400 absolute top-1/2 transform -translate-y-1/2 right-0 cursor-pointer">
                    Thêm 
            </div>
        </div>
    )
}

export {ListSearchRecent,SuggestToFriend, ListFriendInterface,Represent,ListComment,ListSearch as default};