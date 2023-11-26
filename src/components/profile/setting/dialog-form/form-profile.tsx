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
import { useState } from "react";
import user from "@/api/user";
import { useToast } from "@/components/ui";
import { Check } from "lucide-react";

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
    const [loading, setLoading] = useState<boolean>(true);
    const [inputValue,setInputValue]=useState('');
    const {toast}= useToast();
    const {fullName,email,nickName,image}=itemProfile;
    const form = useForm<z.infer<typeof FormEditProfile>>({
        resolver: zodResolver(FormEditProfile),
        defaultValues: {
            email: `${email}`,
            fullName: `${fullName}`,
            nickname: `${nickName}`,
        },
    });
    const handleFinish = (values: z.infer<typeof FormEditProfile>)=>{
        setLoading(true);
        const payload: InforProfile = {
            email: values.email,
            image:image,
            fullName: values.fullName,
            nickName: values.nickname,
        };
        user.EditProfile(payload).then(
            (res: any) => {
                if (!res) {
                    setLoading(false);
                    return;
                }
                setLoading(false);
                toast({
                    className: "bg-green-400 text-white border-none",
                    title: "Đổi thông tin thành công ",
                    // description: "Friday, February 10, 2023 at 5:57 PM",
                    action: <Check></Check>,
                });
            },
            (err: any) => {
                setLoading(false);
                toast({
                    className: "bg-green-400 text-white border-none",
                    title: "Thay đổi thông tin không thành công ",
                    // description: "Friday, February 10, 2023 at 5:57 PM",
                    action: <Check></Check>,
                });
            }
        );
        window.location.reload();
    }
    return (
    <Form {...form}>
    <form 
    onChange={()=>{setLoading(false)}}
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
                                    className="text-sm w-full mx-0 my-2 px-4 py-2.5 rounded-lg border-[none] "
                                    type="text"
                                    id="fullName"
                                    {...field} 
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
                                    className="text-sm w-full mx-0 my-2 px-4 py-2.5 rounded-lg border-[none] "
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
                                    className="text-sm w-full mx-0 my-2 px-4 py-2.5 rounded-lg border-[none] "
                                    type="text"
                                    id="nickname"
                                    {...field}     
                                />
                                </FormControl>
                                <FormMessage className="text-[#f24444]" />
                            </FormItem>
                        )}
                    />
                </div>
            </div>   
            <div className={`flex justify-end mt-6 ${loading?'':'cursor-pointer'}`}>
                <Button disabled={loading} type="submit" >Lưu thay đổi</Button>
            </div> 
        </div>  
    </form>
    </Form>
    )
        
}

export default FormProfile;