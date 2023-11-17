import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useRef, useState } from "react";
import addImage from "@/assets/images/addimage.png";
import addImage2 from "@/assets/images/viewimage (1).jpg";
import { Label } from "@radix-ui/react-dropdown-menu";
import { CldUploadButton } from "next-cloudinary";

const AddPost = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [image, setImage] = useState<string | null>(null);

  const HandleImageClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const HandleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };
  const handleUpload = (result: any,event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    // axios.post('/api/messages', {
    //   image: result.info.secure_url,
    //   conversationId: conversationId
    // })
    console.log(result)
};

  return (
    <>
        <div className="">
            <div className="h-max">
                <textarea  className="h-[100px] resize-none rounded-br-none w-full border-none focus:outline-none" placeholder="Nội dung bài viết" />
            </div>
            <div className="flex justify-center">
            <CldUploadButton
                    options={{ maxFiles: 1 }}
                    onUpload={handleUpload}
                    uploadPreset="efoksozw"
                >
                    <div className="scale-125 cursor-pointer">
                    {image ? (
                    <Image src={image} alt="" className="object-contain cursor-pointer w-full h-full max-h-[500px]" width={300} height={300}/>
                ) : (
                    <Image src={addImage} alt="" className="object-contain cursor-pointer"/>
                )}
                    </div>
            </CldUploadButton>
            </div>
        </div>
    </>
  );
};

export default AddPost;
