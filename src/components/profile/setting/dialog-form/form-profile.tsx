import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
import { InforProfile } from "@/types/profile";
// import { Avatar,AvatarImage,AvatarFallback } from "@radix-ui/react-avatar";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AlignRight } from "lucide-react";  
import { read } from "fs";
  const FormEditProfile = z
  .object({
      email: z
          .string()
          .trim()
          .min(1, "Email bắt buộc")
          .email("Email không hợp lệ")
          .min(10, "Email phải có ít nhất 10 ký tự")
          .max(40, "Email tối đa 40 ký tự"),
      fullName: z.string().min(1, "Họ và tên bắt buộc").max(100),
      nickname: z.string().max(20, "Nickname tối đa 20 ký tự"),
  })

const FormProfile = ({itemProfile}:{itemProfile:InforProfile}) =>{
    const {fullName,email,nickName}=itemProfile;
    const handleUpload = (result: any) => {
        // axios.post('/api/messages', {
        //   image: result.info.secure_url,
        //   conversationId: conversationId
        // })
        console.log(result)
    };
    const form = useForm<z.infer<typeof FormEditProfile>>({
        resolver: zodResolver(FormEditProfile),
        defaultValues: {
            email: "",
            fullName: "",
            nickname: "",
        },
    });
    const handleFinish = (values: z.infer<typeof FormEditProfile>)=>{
        // form.reset();
        // console.log("Abc");
        alert('abc');
    }
    return (
    <Form {...form}>
    <form 
    onSubmit={form.handleSubmit(handleFinish)}
    >
        <div className='max-w-4xl mx-auto mt-4'>       
            <div className='grid grid-cols-4'>
                <div className='col-span-1 text-right flex justify-end items-center'>
                    <label htmlFor="userName">Tên người dùng:</label>
                </div>
                <div className='col-span-3 w-3/4 ml-8'>
                <FormField
                        control={form.control}
                        name="fullName"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                <Input
                                    className="bg-[#eee] text-sm w-full mx-0 my-2 px-4 py-2.5 rounded-lg border-[none] "
                                    type="text"
                                    id="fullName"
                                    {...field}
                                    value={`${fullName}`}
                                />
                                </FormControl>
                                <FormMessage className="text-[#f24444]" />
                            </FormItem>
                        )}
                    />
                   
                </div>
                <div className='col-span-1 text-right flex justify-end items-center'>
                    <label htmlFor="email">Email:</label>
                </div>
                <div className='col-span-3 w-3/4 ml-8'>
                <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                <Input
                                    className="bg-[#eee] text-sm w-full mx-0 my-2 px-4 py-2.5 rounded-lg border-[none] "
                                    type="text"
                                    id="email"
                                    disabled
                                    {...field}
                                    value={`${email}` 

                                }
                                />
                                </FormControl>
                                <FormMessage className="text-[#f24444]" />
                            </FormItem>
                        )}
                    /> 
                </div>
                <div className='col-span-1 text-right flex justify-end items-center'>
                    <label htmlFor="nickname">Nickname:</label>
                </div>
                <div className='col-span-3 w-3/4 ml-8'>
                <FormField
                        control={form.control}
                        name="nickname"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                <Input
                                    className="bg-[#eee] text-sm w-full mx-0 my-2 px-4 py-2.5 rounded-lg border-[none] "
                                    type="text"
                                    id="nickname"
                                    value={`${nickName}`}
                                />
                                </FormControl>
                                <FormMessage className="text-[#f24444]" />
                            </FormItem>
                        )}
                    />
                </div>
                {/* <div className='col-span-1 text-right flex justify-end items-center'>
                    <label htmlFor="phone">Điện thoại:</label>
                </div>
                <div className='col-span-3 w-3/4 ml-8'>
                    <Input
                        className="bg-[#eee] text-sm w-full mx-0 my-2 px-4 py-2.5 rounded-lg border-[none] "
                        type="text"
                        id="phone"
                    />
                </div>
                
                <div className='col-span-1 text-right flex justify-end items-center'>
                    <label htmlFor="gender">Giới tính:</label>
                </div> */}
                {/* <div className='col-span-3 w-3/4 ml-8'>
                    <Select>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Chọn giới tính" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                            <SelectLabel>Giới tính</SelectLabel>
                            <SelectItem value="male">Nam</SelectItem>
                            <SelectItem value="female">Nữ</SelectItem>
                            <SelectItem value="other">Khác</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div> */}
            </div>   
            <div className="flex justify-end mt-6">
                <Button type="submit">Lưu thay đổi</Button>
            </div> 
        </div>  
    </form>
    </Form>
    )
        
}

export default FormProfile;