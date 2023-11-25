import { type } from "os";
import { Profile } from "@/components/present-interface";

export interface InforProfile{
    fullName:String;
    email:String;
    nickName:String;
}

export interface UserProfile{
    fullname:String;
    avatar:String;
    nickName:String;
    friend_acount:number;
    listPost: Post[];    
}
export interface PostDetail{
    profile:Profile
    post:Post;
    comment:Comment[];
}
export type Post = {
    contentPost?:String;
    imagePost:string;
    like:number;
    user_id:number;
    create_at:Date;
}

 export type Comment={
    avatar:string;
    name:string
    commentContent:string;
 }
