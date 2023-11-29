"use client"
import Image from "next/image";
import { ScrollArea } from "@/components/ui";
import { Heart } from 'lucide-react';
import { MessageCircle } from 'lucide-react';
import { Input } from "@/components/ui/input";
import {Represent,ListComment} from "@/components/present-interface";
import { ChangeEvent,useState,useRef, useEffect} from "react";
import { PostDetail } from "@/types/profile";
import commentPost from "@/api/comment-post";
import { useToast } from "@/components/ui";
import { Check } from "lucide-react";
import { AddComment } from "@/types/post";
import { Comment } from "@/types/profile";
import user from "@/api/user";
import { InforProfile } from "@/types/profile";

export default function Post_interface({itemPostDetail}:{itemPostDetail:PostDetail}){
    const {toast}=useToast();
    const [userCurrent,setUserCurrent]= useState<InforProfile|undefined>();
    const [content,setContent]= useState('')
    const {profile,post,comment}=itemPostDetail;
    const [listComments, setListComment] = useState<Comment[]>(comment);
    const [hasLove,setLove] = useState(false)
    const [hasText, setHasText] = useState(false);
    function clickLove(){
        setLove(!hasLove);
    }
    useEffect(() => {
        user.GetUserCurrent().then(
            (res: any) => {
                setUserCurrent(res);
            },
            (err: any) => {
                // setStatus(true);
            }
        );

    }, []);
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
    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        const value = event.target.value;
        setHasText(value.length > 0);
        setContent(value);
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
    const AddComment=()=>{
        const payload: AddComment = {
            postId:post.id,
            content:content,
        };
        const newComment:Comment={ownerImage: userCurrent?.image,ownerName:userCurrent?.fullName ,content:content}
        const newArray = [newComment,...listComments];
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
        setListComment(newArray);
        setContent('');
    }
    return(
        <>
        <div className="w-full sm:h-[90vh] sm:flex sm:justify-center border-2 border-red-600 sm:border-none rounded-lg overflow-y-auto">                               
            <div  className="sm:max-w-[70%] sm:min-w-[40%] sm:flex sm:items-center w-full">
                <div className="flex items-center sm:hidden my-4">  
                    <Represent represent={profile}></Represent> 
                </div>         
                <Image className="border-t-[1px] border-b-[1px] border-gray-400 sm:border-none w-full min-h-[200px] max-h-[250px] sm:max-h-full h-full object-contain" src={post.image} width={500} height={500} alt="#"/>              
                <div className="sm:hidden px-4">
                    <div  className="flex py-2">
                        <Heart className={`cursor-pointer ${hasLove? 'text-red-600' : ''}`}onClick={clickLove}></Heart>
                        <MessageCircle className={`ml-4 cursor-pointer`} onClick={focusComment}></MessageCircle>
                    </div>
                    <div className="text-sm">
                        <div className="font-bold">
                            4 yêu thích
                        {/* {post.like} yêu thích   */}
                        </div>
                        <div className="text-xs">
                        {/* {post.create_at.toDateString()} */}
                        12/12/2023
                        </div>          
                    </div>
                    <div>
                        {post.content}
                    </div>
                </div>         
                <div className="sm:hidden mx-4 flex items-center my-4 border-t-2 border-red-600">
                    <div className="flex items-center w-full">
                        <Input value={content} name="content" className="px-[-12px] mt-2 border-none h-full" ref={inputRef2} onChange={handleInputChange} placeholder="Bình luận"></Input>
                        <div className={`font-bold p-2 h-full ${hasText ?'text-blue-400':'text-gray-500'}`}>
                            <button onClick={AddComment}> Đăng</button>
                        </div> 
                    </div>           
                </div>    
            </div> 
            <div className="max-w-[70%] min-w-[40%] hidden sm:block h-full w-full border-l-2 border-red-600">
                <div className="grid grid-rows-4 h-full">  
                    <div className="row-span-3 grid grid-rows-8 h-full">
                        <div className="border-b-2 border-red-600 flex items-center">
                            <Represent represent={profile}></Represent>    
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
                                {/* {post.like} yêu thích  */}
                                4 yêu thích
                                </div>
                                <div className="text-xs">
                                {/* {post.create_at.toDateString()} */}
                                12/12/2023
                                </div>          
                            </div>
                            <div>
                            {post.content}
                            </div>
                        </div>
                        <div className="row-span-2 pl-4 flex items-center">
                            <div className="flex items-center w-full">
                                <Input value={content} name="content" className="px-[-12px] mt-2 border-none h-full" ref={inputRef2} onChange={handleInputChange} placeholder="Bình luận"></Input>
                                <div className={`font-bold p-2 h-full ${hasText ?'text-blue-400':'text-gray-500'}`}>
                                    <button onClick={AddComment}> Đăng</button>
                                </div> 
                            </div>       
                        </div>
                    </div>    
                </div>
            </div>  
        </div>  
      </>
    );
}