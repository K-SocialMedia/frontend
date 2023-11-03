import Image from "next/image";
import imgExam from "@/assets/images/IMG_8513.jpg";
import { Profile } from "@/components/present-interface";
// PostProfile =({postItem}:{postItem:Profile})
const PostProfile =()=>{
   return(
        <div className='col-span-1 flex justify-center mt-6 px-3 cursor-pointer'>
            <Image className="w-ful h-full rounded-lg" src={imgExam} alt="#"></Image>
        </div>
   ) 
}
export default PostProfile;