import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useRef, useState } from "react";
import addImage from "@/assets/images/addimage.png";
import addImage2 from "@/assets/images/viewimage (1).jpg";
import { Label } from "@radix-ui/react-dropdown-menu";

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

  return (
    <>
        <div className=" relative">
            <div className="h-max">
                <textarea  className="h-[100px] resize-none rounded-br-none w-full border-none focus:outline-none" placeholder="Nội dung bài viết" />
            </div>
            <div className="flex justify-center">
                {image ? (
                    <Image src={image}  onClick={HandleImageClick} alt="" className="object-contain cursor-pointer w-full h-full max-h-[500px]" width={300} height={300}/>
                ) : (
                    <Image src={addImage}  onClick={HandleImageClick} alt="" className="object-contain cursor-pointer"/>
                )}
                <Input type="file" onChange={HandleImageChange} ref={inputRef} style={{ display: "none" }} />
            </div>
            <button className="bg-blue-500 p-2 font-bold rounded-md text-white absolute right-0">Lưu</button>
        </div>
    </>
  );
};

export default AddPost;
