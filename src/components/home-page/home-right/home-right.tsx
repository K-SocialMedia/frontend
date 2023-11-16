import ListFriend from "./list-friend";
import Post from "./post";
import { format } from 'date-fns';

const parsedDate = new Date("11/12/2023");

const represention= {avatar: "https://avatars.githubusercontent.com/u/109071521?s=400&v=4", name: "thanhhovan123", username: "thanh_chatchit_16" }
const postItems = [
    {  represention:represention,like:3,create_at:parsedDate,user_id:1},
    {  represention:represention,like:3,create_at:parsedDate,user_id:1},
    {  represention:represention,like:3,create_at:parsedDate,user_id:1},  
]
const ListPostContain=()=>{
    return(
        postItems.map((postItem,index)=>(
            <Post postItem={postItem} key={index}></Post>
        )
    )
    )
}
const HomeRight = () =>{
    return(
        <>
            <div className="">
                <ListFriend></ListFriend>
             </div>
            <div className="sm:mt-8">
                <ListPostContain></ListPostContain>
            </div>        
        </>
    )
}
export default HomeRight;