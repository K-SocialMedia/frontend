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
export default function post_interface(){
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
        <div className="md:max-w-6xl md:min-w-xl md:h-[90vh] max-w-[300px]">
            <div className="w-full md:h-full md:flex md:justify-center border-2 border-red-600 md:border-none rounded-lg">                               
                <div  className="md:max-w-[70%] md:min-w-[30%] md:w-max">
                    <div className="flex items-center md:hidden my-4">  
                        <Represent represent={represention}></Represent> 
                    </div>
                    <Image className="w-full max-h-[300px] md:max-h-full h-full object-contain" src={imgPost} alt="#"/>
                    <div className="md:hidden px-4 pt-4">
                        <div  className="flex">
                            <Heart className={`cursor-pointer ${hasLove? 'text-red-600' : ''}`}onClick={clickLove}></Heart>
                            <MessageCircle className={`ml-4 cursor-pointer`} onClick={focusComment}></MessageCircle>
                        </div>
                        <div className="pt-2 text-sm">
                            <div className="font-bold">
                            100 yêu thích 
                            </div>
                            <div className="text-xs">
                            28/10/2023
                            </div>          
                        </div>
                    </div>
                    <div className="md:hidden mx-4 flex items-center my-4 border-t-2 border-red-600">
                        <Input className="px-[-12px] mt-2 border-none h-full" ref={inputRef2} onChange={handleInputChange} placeholder="Bình luận"></Input>
                        <div className={`font-bold p-2 h-full ${hasText ?'text-blue-400':'text-gray-500'}`}>
                            Đăng
                        </div>        
                    </div> 
                </div> 
                <div className="hidden md:block h-full max-w-[50%] min-w-[30%] w-full border-l-2 border-red-600">
                    <div className="grid grid-rows-4 h-full">  
                        <div className="row-span-3 grid grid-rows-8 h-full">
                            <div className="border-b-2 border-red-600 flex items-center">
                                <Represent represent={represention}></Represent>    
                            </div>       
                            <div className="row-span-7 border-b-2 border-red-600">
                                <ListcommentContain></ListcommentContain>
                            </div>   
                        </div>
                        <div className="row-span-1 grid grid-rows-4 h-full">
                            <div className="row-span-3 px-4 pt-4 border-b-2 border-red-600">
                                <div  className="flex">
                                    <Heart className={`cursor-pointer ${hasLove? 'text-red-600' : ''}`}onClick={clickLove}></Heart>
                                    <MessageCircle className={`ml-4 cursor-pointer`} onClick={focusComment}></MessageCircle>
                                </div>
                                <div className="pt-2 text-sm">
                                    <div className="font-bold">
                                    100 yêu thích 
                                    </div>
                                    <div className="text-xs">
                                    28/10/2023
                                    </div>          
                                </div>
                            </div>
                            <div className="row-span-1 pl-4 flex items-center">
                                <Input className="px-[-12px] border-none h-full" ref={inputRef} onChange={handleInputChange} placeholder="Bình luận"></Input>
                                <div className={`font-bold p-2 h-full ${hasText ?'text-blue-400':'text-gray-500'}`}>
                                    Đăng
                                </div>        
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