import { Image, SendHorizontal } from "lucide-react";
import { Input } from "@/components/ui";
import { CldUploadButton } from "next-cloudinary";
const Form = () => {
    const handleUpload = (result: any) => {
        // axios.post('/api/messages', {
        //   image: result.info.secure_url,
        //   conversationId: conversationId
        // })
    };
    return (
        <>
            <div className="flex gap-2 lg:gap-4 items-center w-full pl-4 pr-5 border-t py-5">
                <CldUploadButton
                    options={{ maxFiles: 1 }}
                    onUpload={handleUpload}
                    uploadPreset="efoksozw"
                >
                    <div className="scale-125 cursor-pointer">
                        <Image />
                    </div>
                </CldUploadButton>

                <form action="" className="flex w-full">
                    <Input
                        type="text"
                        className=" text-base h-12 dark:placeholder:text-[#797979] dark:bg-[#262626] light:border-gray-500 rounded-full px-4"
                        placeholder="Nhắn tin ..."
                    />
                    <button className="ml-4 scale-125">
                        <SendHorizontal />
                    </button>
                </form>
            </div>
        </>
    );
};

export default Form;
