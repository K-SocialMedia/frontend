"use client";
import { Represent } from "@/components/present-interface";
import Image from "next/image";
import { Heart } from 'lucide-react';
import { MessageCircle } from 'lucide-react';
import { Input } from "@/components/ui";
import { ChangeEvent,useState,useRef, useEffect} from "react";
import { Profile } from "@/components/present-interface";
import DialogForm from "@/components/profile/dialog-post/dialog-post";
import Post_interface from "@/components/profile/dialog-post/post-detail";
import { Post } from "@/types/profile";
import { Comment } from "@/types/profile";
import commentPost from "@/api/comment-post";
import { useToast } from "@/components/ui";
import { AddComment } from "@/types/post";
const IkonComment=()=>{
    return(
        <MessageCircle className={`ml-4 cursor-pointer`}></MessageCircle>
    )
}

const Post = ({postItem}:{postItem:Post}) =>{
    const {toast}=useToast();
    const [contentComment,setContent]= useState('')
    const {image,content,fullName,userImage,nickName,id}=postItem;
    const [listComment, SetListComment] = useState<Comment[]>([]);
    useEffect(() => {
        commentPost.GetCommentOfPost(id).then(
            (res: any) => {
                SetListComment(res);
                // setLoading(false);
            },
            (err: any) => {
                // setLoading(false);
            }
        );
    }, []);
    const represention= { fullName: `${fullName}`, nickName: `${nickName}`,image: `${userImage}` }
    const itemPostDetail={profile:represention,post:postItem,comment:listComment}
    const dialogItems={formAction:<Post_interface itemPostDetail={itemPostDetail}></Post_interface>,btnAction:<IkonComment></IkonComment>};
    const [hasLove,setLove] = useState(false)
    const [hasText, setHasText] = useState(false);
    function clickLove(){
        setLove(!hasLove);
    }
    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        const value = event.target.value;
        setHasText(value.length > 0);
        setContent(value);
    };
    const inputRef = useRef<HTMLInputElement | null>(null);
    const focusComment = () => {
      if(inputRef.current){
        inputRef.current.focus();
        };
    }
    const AddComment=(e: React.FormEvent)=>{
        const payload: AddComment = {
            postId:id,
            content:contentComment,
        };
        commentPost.AddComment(payload).then(
            (res: any) => {
                // setLoading(false);
            },
            (err: any) => {
                // setLoading(false);
                toast({
                    className: "bg-red-400 text-white border-none",
                    title: "Bình luận chưa được thêm ",
                    // description: "Friday, February 10, 2023 at 5:57 PM",
                    // action: <Check></Check>,
                });
            }
        );
        setContent('');
    }
    return(
        <>
            <div  className="w-[400px] mx-auto sm:w-auto sm:mx-14 border-b-[1px] border-black">
                <div className="flex ml-[-1rem] items-center my-4">  
                    <Represent represent={represention}></Represent> 
                </div>         
                <Image className=" rounded-md border-[1px] border-gray-400 w-full min-h-[200px] max-h-[600px] h-full object-contain" src={image} width={500} height={500} alt="#"/>              
                <div className="pt-4">
                    <div  className="flex">
                        <Heart className={`cursor-pointer ${hasLove? 'text-red-600' : ''}`}onClick={clickLove}></Heart>
                        <DialogForm dialogItem={dialogItems}></DialogForm>
                    </div>
                    <div className="text-sm">
                        <div className="font-bold">
                        4 yêu thích 
                        </div>
                        <div className="text-xs">
                         16-05-2023
                        </div>  
                    </div>
                    <div>
                        {content}
                    </div>
                </div>
                <div className="flex items-center mb-4">
                    <div className="flex items-center w-full">
                        <Input value={contentComment} name="content" className="px-[-12px] mt-2 border-none h-full" ref={inputRef} onChange={handleInputChange} placeholder="Bình luận"></Input>
                        <div className={`font-bold p-2 h-full ${hasText ?'text-blue-400':'text-gray-500'}`}>
                            <button onClick={AddComment}> Đăng</button>
                        </div> 
                    </div>         
                </div> 
            </div> 
        </>
    )
}

export default Post;