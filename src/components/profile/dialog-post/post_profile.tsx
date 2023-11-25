import Image from "next/image";
import imgExam from "@/assets/images/IMG_8513.jpg";
import imgExam2 from "@/assets/images/viewimage.jpg";
import { Profile } from "@/components/present-interface";
// PostProfile =({postItem}:{postItem:Profile})
const PostProfile =({avatar}:{avatar:string})=>{
   return(
        <div className='col-span-1 h-[400px] flex justify-center mt-4 px-2 cursor-pointer'>
            <Image className="w-ful object-cover h-full rounded-lg" width={500} height={500} src={avatar} alt="#"></Image>
        </div>
   ) 
}
export default PostProfile;