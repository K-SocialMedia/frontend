import FormProfile from "./profile/setting/dialog-form/form-profile"
import { Button } from "./ui";
import Image from "next/image"
import addImage from "@/assets/images/addimage.png";
import { CldUploadButton } from "next-cloudinary";
import { useState } from "react";
import { AddPost } from "@/types/post";
import post from "@/api/post";
import { useToast } from "./ui";
import { Check } from "lucide-react";
import { Value } from "@radix-ui/react-select";

export default function Dialog({className,status,onUpdateParentState }:{className?:string,status:boolean,onUpdateParentState:any}) {
    // const [dialogStatus,setDialogStatus]=useState(status);
    // if(dialogStatus!=status){
    //     setDialogStatus(status);
    // }
    const [buttonSave,setButtonSave]=useState(true);
    const [content,setContent]= useState('')
    const { toast } = useToast();
    const [image,setImage]=useState('https://res.cloudinary.com/dnnyzyyas/image/upload/v1701024150/p6go2yvd8k6yiw74p2e1.png');
    function handleUpload(result: any){
        const imageUrl = result.info.secure_url;
        setImage(imageUrl);
        setButtonSave(false);
    }
    function handleClick(){
        onUpdateParentState();
    }
    const itemInforProfile={fullName:'Hồ Văn Thành',email:'thanh160523@gmail.com',nickName:"thanh"}
    const handleContentChange = (event:any) => {
        setContent(event.target.value);
      };
    const handleFinish = (e: React.FormEvent)=>{
        // alert('abc');
        const payload: AddPost = {
            image:image,
            content:content,
        };
        post.AddPost(payload).then(
            (res: any) => {
                if (!res) {
                    return;
                }
                // setLoading(false);
                toast({
                    className: "bg-green-400 text-white border-none",
                    title: "Thêm bài viết thành công ",
                    // description: "Friday, February 10, 2023 at 5:57 PM",
                    action: <Check></Check>,
                });
            },
            (err: any) => {
                // setLoading(false);
                toast({
                    className: "bg-green-400 text-white border-none",
                    title: "Thêm bài viết không thành công ",
                    // description: "Friday, February 10, 2023 at 5:57 PM",
                    action: <Check></Check>,
                });
            }
        );
        window.location.reload();
    }
    return(
        <div className={`${status?'':'hidden'} relative`}>
            <div onClick={handleClick} className="fixed z-50 inset-0 w-full h-full bg-white opacity-80">      
            </div>
            <div className="fixed overflow-y-auto left-[50%] top-[50%] w-50% inset-0 z-50 px-5 py-2 rounded-md border-[0.5px] -translate-y-1/2 -translate-x-1/2 border-black-100 shadow-sm max-h-[90vh] h-fit sm:max-w-[75%] md:max-w[150vh] md:w-[100vh] bg-white">
                <div className={`relative h-full`}>
                    <div className="h-max font-bold text-2xl">
                        Tạo bài viết
                    </div>
                    <div className="h-max">
                        <textarea onChange={handleContentChange} name="content" value={content} className="h-[100px] resize-none border-[1px] rounded-br-none w-full focus:outline-none" placeholder="Nội dung bài viết" />
                    </div>
                    <div className="flex justify-center">    
                    <CldUploadButton
                                options={{ maxFiles: 1 }}
                                onUpload={handleUpload}
                                uploadPreset="efoksozw"
                                className="w-full flex justify-center mt-1"
                            >        
                        <Image src={image} width={300} height={300} alt="" className="object-contain cursor-pointer w-full md:max-h-[400px]"/>
                    </CldUploadButton>
                    </div>
                <Button onClick={handleFinish} disabled={buttonSave} className=" p-2 font-bold rounded-md text-white absolute right-0">Lưu</Button>
               </div>
            </div>  
        </div> 
    )
};

