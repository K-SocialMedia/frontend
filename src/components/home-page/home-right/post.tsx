"use client";
import { Represent } from "@/components/present-interface";
import Image from "next/image";
import { Heart } from 'lucide-react';
import { MessageCircle } from 'lucide-react';
import { Input } from "@/components/ui";
import imgPost from "@/assets/images/IMG_8513.jpg";
import imgPost2 from "@/assets/images/viewimage (1).jpg";
import imgPost1 from "@/assets/images/viewimage.jpg";
import { ChangeEvent,useState,useRef} from "react";
import { Profile } from "@/components/present-interface";
import DialogForm from "@/components/profile/dialog-post/dialog-post";
import Post_interface from "@/components/profile/dialog-post/post-detail";
import { Post } from "@/types/profile";
// export interface PostDetail {
//     represention:Profile;
//     contentPost?:String;
//     imagePost?:String;
//     like?:number;
//     user_id:number;
//     create_at:Date;

// }
const represention= {image: "https://avatars.githubusercontent.com/u/109071521?s=400&v=4", fullName: "thanhhovan123", username: "thanh_chatchit_16" }
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
const IkonComment=()=>{
    return(
        <MessageCircle className={`ml-4 cursor-pointer`}></MessageCircle>
    )
}

const Post = ({postItem}:{postItem:Post}) =>{
    const {imagePost,like,create_at}=postItem;
    const itemPostDetail={profile:represention,post:postItem,comment:listComments}
    const dialogItems={formAction:<Post_interface itemPostDetail={itemPostDetail}></Post_interface>,btnAction:<IkonComment></IkonComment>};
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
    const focusComment = () => {
      if(inputRef.current){
        inputRef.current.focus();
        };
    }
    return(
        <>
            <div  className="w-[400px] mx-auto sm:w-auto sm:mx-14 border-b-[1px] border-black">
                <div className="flex ml-[-1rem] items-center my-4">  
                    <Represent represent={represention}></Represent> 
                </div>         
                <Image className=" rounded-md border-[1px] border-gray-400 w-full min-h-[200px] max-h-[600px] h-full object-contain" src={imagePost} width={500} height={500} alt="#"/>              
                <div className="">
                    <div  className="flex py-4">
                        <Heart className={`cursor-pointer ${hasLove? 'text-red-600' : ''}`}onClick={clickLove}></Heart>
                        <DialogForm dialogItem={dialogItems}></DialogForm>
                    </div>
                    <div className="text-sm">
                        <div className="font-bold">
                        {like} yêu thích 
                        </div>
                        <div className="text-xs">
                         {create_at.toLocaleDateString()}
                        </div>          
                    </div>
                </div>
                <div className="flex items-center mb-4">
                    <Input className="bg-transparent mt-2 border-none h-fit" ref={inputRef} onChange={handleInputChange} placeholder="Thêm bình luận"></Input>
                    <div className={`font-bold px-2 py-0 h-full ${hasText ?'text-blue-400':'text-gray-500'}`}>
                        Đăng
                    </div>        
                </div> 
            </div> 
        </>
    )
}

export default Post;