"use client"
import Image from "next/image";
import { ScrollArea } from "@/components/ui";
import imgPost from "@/assets/images/IMG_8513.jpg"
import imgPost2 from "@/assets/images/viewimage (1).jpg"
import { Heart } from 'lucide-react';
import { MessageCircle } from 'lucide-react';
import { Input } from "@/components/ui/input";
import {Represent,ListComment} from "@/components/present-interface";
import { ChangeEvent,useState,useRef} from "react";
import DialogForm from "./dialog-post";

const represention= {avatar: "https://avatars.githubusercontent.com/u/109071521?s=400&v=4", name: "thanhhovan123", username: "thanh_chatchit_16" }
const listComments=[
    { avatar: "https://avatars.githubusercontent.com/u/109071521?s=400&v=4", name: "thanhhovan", commentContent: "Nhom k 10đ ajsfjaf  djssfkja  dsafkjalkdsjf dsjadf lorem asdfjasjfajsfasjfajfijaofj" },
    { avatar: "https://avatars.githubusercontent.com/u/109071521?s=400&v=4", name: "thanhhovan", commentContent: "Nhom k 10đ" },
    { avatar: "https://avatars.githubusercontent.com/u/109071521?s=400&v=4", name: "thanhhovan", commentContent: "Nhom k 10đ" },
    { avatar: "https://avatars.githubusercontent.com/u/109071521?s=400&v=4", name: "thanhhovan", commentContent: "Nhom k 10đ" },
    { avatar: "https://avatars.githubusercontent.com/u/109071521?s=400&v=4", name: "thanhhovan", commentContent: "Nhom k 10đ" },
    { avatar: "https://avatars.githubusercontent.com/u/109071521?s=400&v=4", name: "thanhhovan", commentContent: "Nhom k 10đ" },
    { avatar: "https://avatars.githubusercontent.com/u/109071521?s=400&v=4", name: "thanhhovan", commentContent: "Nhom k 10đ" },
    { avatar: "https://avatars.githubusercontent.com/u/109071521?s=400&v=4", name: "thanhhovan", commentContent: "Nhom k 10đ" },
    { avatar: "https://avatars.githubusercontent.com/u/109071521?s=400&v=4", name: "thanhhovan", commentContent: "Nhom k 10đ ajsfjaf  djssfkja  dsafkjalkdsjf dsjadf lorem asdfjasjfajsfasjfajfijaofj" },
    { avatar: "https://avatars.githubusercontent.com/u/109071521?s=400&v=4", name: "thanhhovan", commentContent: "Nhom k 10đ" },
    { avatar: "https://avatars.githubusercontent.com/u/109071521?s=400&v=4", name: "thanhhovan", commentContent: "Nhom k 10đ" },
    { avatar: "https://avatars.githubusercontent.com/u/109071521?s=400&v=4", name: "thanhhovan", commentContent: "Nhom k 10đ" },
    { avatar: "https://avatars.githubusercontent.com/u/109071521?s=400&v=4", name: "thanhhovan", commentContent: "Nhom k 10đ" },
    { avatar: "https://avatars.githubusercontent.com/u/109071521?s=400&v=4", name: "thanhhovan", commentContent: "Nhom k 10đ" },
    { avatar: "https://avatars.githubusercontent.com/u/109071521?s=400&v=4", name: "thanhhovan", commentContent: "Nhom k 10đ" },
    { avatar: "https://avatars.githubusercontent.com/u/109071521?s=400&v=4", name: "thanhhovan", commentContent: "Nhom k 10đ" },
]
const ListcommentContain = () => {
    return (
        <><ScrollArea className="h-full">
            {listComments.map((commentItem, index) => (
                <ListComment commentItem={commentItem} key={index}/>
            ))}
            </ScrollArea>
        </>
    );
}
export default function Post_interface(){
    const [hasLove,setLove] = useState(false)
    const [hasText, setHasText] = useState(false);
    function clickLove(){
        setLove(!hasLove);
    }
    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        const value = event.target.value;
        setHasText(value.length > 0);
    };
    const inputRef = useRef<HTMLInputElement | null>(null);
    const inputRef2 = useRef<HTMLInputElement | null>(null);
    const focusComment = () => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
      if(inputRef2.current){
        inputRef2.current.focus();
        };
    }
    return(
        <>
        <div className="w-full sm:h-[90vh] sm:flex sm:justify-center border-2 border-red-600 sm:border-none rounded-lg overflow-y-auto">                               
            <div  className="sm:max-w-[70%] sm:min-w-[40%] sm:flex sm:items-center w-full">
                <div className="flex items-center sm:hidden my-4">  
                    <Represent represent={represention}></Represent> 
                </div>         
                <Image className="border-t-[1px] border-b-[1px] border-gray-400 sm:border-none w-full min-h-[200px] max-h-[250px] sm:max-h-full h-full object-contain" src={imgPost} alt="#"/>              
                <div className="sm:hidden px-4">
                    <div  className="flex py-2">
                        <Heart className={`cursor-pointer ${hasLove? 'text-red-600' : ''}`}onClick={clickLove}></Heart>
                        <MessageCircle className={`ml-4 cursor-pointer`} onClick={focusComment}></MessageCircle>
                    </div>
                    <div className="text-sm">
                        <div className="font-bold">
                        100 yêu thích 
                        </div>
                        <div className="text-xs">
                        28/10/2023
                        </div>          
                    </div>
                </div>
                <div className="sm:hidden mx-4 flex items-center my-4 border-t-2 border-red-600">
                    <Input className="px-[-12px] mt-2 border-none h-full" ref={inputRef2} onChange={handleInputChange} placeholder="Bình luận"></Input>
                    <div className={`font-bold p-2 h-full ${hasText ?'text-blue-400':'text-gray-500'}`}>
                        Đăng
                    </div>        
                </div> 
            </div> 
            <div className="max-w-[70%] min-w-[40%] hidden sm:block h-full w-full border-l-2 border-red-600">
                <div className="grid grid-rows-4 h-full">  
                    <div className="row-span-3 grid grid-rows-8 h-full">
                        <div className="border-b-2 border-red-600 flex items-center">
                            <Represent represent={represention}></Represent>    
                        </div>       
                        <div className="row-span-7 border-b-2 border-red-600">
                            <ListcommentContain></ListcommentContain>
                        </div>   
                    </div>
                    <div className="row-span-1 grid grid-rows-6 h-full">
                        <div className="row-span-4 px-4 border-b-2 border-red-600">
                            <div  className="flex py-2">
                                <Heart className={`cursor-pointer ${hasLove? 'text-red-600' : ''}`}onClick={clickLove}></Heart>
                                <MessageCircle className={`ml-4 cursor-pointer`} onClick={focusComment}></MessageCircle>
                            </div>
                            <div className="text-sm">
                                <div className="font-bold">
                                100 yêu thích 
                                </div>
                                <div className="text-xs">
                                28/10/2023
                                </div>          
                            </div>
                        </div>
                        <div className="row-span-2 pl-4 flex items-center">
                            <Input className="px-[-12px] border-none h-full" ref={inputRef} onChange={handleInputChange} placeholder="Bình luận"></Input>
                            <div className={`font-bold p-4 h-full ${hasText ?'text-blue-400':'text-gray-500'}`}>
                                Đăng
                            </div>        
                        </div>
                    </div>    
                </div>
            </div>  
        </div>  
      </>
        // <div className="max-w-7xl h-screen mx-auto py-12">
        //     <div className="relative h-3/4 grid grid-cols-2 bg-red-200">
        //         <div className="relative">
        //             <Image className="" layout="fill" objectFit="contain" src={imgPost} alt="#"></Image>             
        //         </div>
        //         <div>
                           
        //         </div>
        //     </div>
        // </div>
    );
}