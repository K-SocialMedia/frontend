import { type } from "os";
import { Profile } from "@/components/present-interface";

export interface UserProfile{
    fullname:String;
    avatar:String;
    nickName:String;
    friend_acount:number;
    listPost: Post[];    
}
export interface PostDetail{
    profile:Profile
    posts:Post;
    comment:Comment[];
}
export type Post = {
    contentPost?:String;
    imagePost:String;
    like?:number;
    user_id:number;
    create_at?:Date;
}

 export type Comment={
    user_id:number;
    post_id:number;
    content:String;
    create_at:Date;
 }