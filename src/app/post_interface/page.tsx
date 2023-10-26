import Image from "next/image";
import imgPost from "@/assets/images/IMG_8513.jpg"

export default function post_interface(){
    return(
        <div className="max-w-7xl h-screen mx-auto py-12">
            <div className="relative h-3/4 grid grid-cols-2 bg-red-200">
                <div className="col-span-1">
                    <Image layout="fill" objectFit="contain" src={imgPost} alt="#"></Image>
                </div>
                <div>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, deleniti? Aliquam, aperiam praesentium sint, architecto earum consequuntur ea voluptatibus repudiandae totam distinctio, ab debitis quam eum soluta? Asperiores, suscipit ab.
                </div>
            </div>
        </div>
        // <div className="h-screen"> 
        //     <div className="flex overflow-hidden p-20">
        //         <div className="w-[50%] h-10 overflow-hidden">
        //             <Image className="" src={imgPost} alt="#" />
        //         </div>
        //         <div className="w-50%">

        //         </div>
        //     </div>
        // </div>
    );
}