import { type } from "os";

export interface UserProfile{
    name:String;
    avatar:String;
    nickName:String;
    friend_acount:number;
    post_acount: number;    
}
export interface PostDetail{
    posts:Post;
    comment:Comment[];
}
export type Post = {
    name:String;
    avater:String;
    contentPost:String;
    imagePost:String;
    like:number;
    user_id:number;
    create_at:Date;
}

 export type Comment={
    user_id:number;
    post_id:number;
    content:String;
    create_at:Date;
 }