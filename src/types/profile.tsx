import { type } from "os";
import { Profile } from "@/components/present-interface";
import { AddPost } from "./post";
export interface InforProfile{
    fullName?:string;
    email?:string;
    nickName?:string;
    image?:string;
}
export interface ChangePassword{
    oldPassword:string;
    newPassword:string;
}
export interface UserProfile{
    fullname:String;
    avatar:String;
    nickName:String;
    friend_acount:number;
    listPost: Post[];    
}
export interface PostDetail{
    profile:InforProfile;
    post:Post;
    comment:Comment[];
}
export type Post = {
    id:string
    content:string;
    image:string;
    fullName:string;
    userImage:string;
    nickName:string;
}

 export type Comment={
    ownerImage?:string;
    ownerName?:string
    content:string;
 }