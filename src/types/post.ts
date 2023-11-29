export interface AddPost {
 image:string;
 content?:string;
}
export interface AddComment{
    postId:string;
    content:string;
}