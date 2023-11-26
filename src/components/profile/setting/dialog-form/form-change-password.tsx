import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui";
import { useState,useEffect } from "react";
import { Check } from "lucide-react";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import user from "@/api/user";
import { ChangePassword } from "@/types/profile";
const FormEditPassword = z
        .object({
                oldPassword: z
                    .string()
                    .trim()
                    .min(1, "Mật khẩu cũ bắt buộc nhập")
                    .min(8, "Mật khẩu phải có ít nhất 8 ký tự")
                    .max(25, "Mật khẩu tối đa 25 ký tự"),
                newPassword: z
                    .string()
                    .trim()
                    .min(1, "Mật khẩu bắt buộc")
                    .min(8, "Mật khẩu phải có ít nhất 8 ký tự")
                    .max(25, "Mật khẩu tối đa 25 ký tự"),
                confirmPassword: z
                    .string()
                    .trim()
                    .min(1, "Mật khẩu bắt buộc")
                    .min(8, "Mật khẩu phải có ít nhất 8 ký tự")
                    .max(25, "Mật khẩu tối đa 25 ký tự"),
        })
        .refine((data) => data.newPassword === data.confirmPassword, {
            path: ["confirmPassword"],
            message: "Mật khẩu không khớp",
        });
const FormChangePassword = () =>{
    const [loading, setLoading] = useState<boolean>(true);
    const { toast } = useToast();
    const form = useForm<z.infer<typeof FormEditPassword>>({
        resolver: zodResolver(FormEditPassword),
        defaultValues: {
            oldPassword: "",
            newPassword: "",
            confirmPassword: "",
        },
    });
    const handleFinish = (values: z.infer<typeof FormEditPassword>)=>{
        setLoading(true);
        const payload: ChangePassword = {
            oldPassword: values.oldPassword,
            newPassword: values.newPassword,
        };
        user.ChangePassword(payload).then(
            (res: any) => {
                if (!res) {
                    setLoading(false);
                    return;
                }
                setLoading(false);
                toast({
                    className: "bg-green-400 text-white border-none",
                    title: "Đổi mật khẩu thành công ",
                    // description: "Friday, February 10, 2023 at 5:57 PM",
                    action: <Check></Check>,
                });
                form.reset();
            },
            (err: any) => {
                setLoading(false);
                toast({
                    className: "dark:bg-[#ef4444] border-none",
                    variant: "destructive",
                    title: "Đổi mật khẩu không thành công ",
                    // description: "Friday, February 10, 2023 at 5:57 PM",
                }); 
            }
        );
    }
    return (
    <Form {...form}>
    <form onChange={()=>{setLoading(false)}} onSubmit={form.handleSubmit(handleFinish)}>
        <div className='max-w-4xl mx-auto mt-8'>
            <div className='grid grid-cols-4'>
                <div className='col-span-1 text-right flex justify-end items-center'>
                    <label htmlFor="oldPassword">Nhập mật khẩu cũ:</label>
                </div>
                <div className='col-span-3 w-3/4 ml-8'>
                <FormField
                        control={form.control}
                        name="oldPassword"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                <Input
                                    className=" text-sm w-full mx-0 my-2 px-4 py-2.5 rounded-lg border-[none] "
                                    type="password"
                                    placeholder="Mật khẩu cũ"
                                    id="oldPassword" 
                                    {...field}                 
                                />
                                </FormControl>
                                <FormMessage className="text-[#f24444]" />
                            </FormItem>
                        )}
                    />
                    
                </div>
                <div className='col-span-1 text-right flex justify-end items-center'>
                  <label htmlFor="newPassword">Nhập mật khẩu mới:</label>
                </div>  
                <div className='col-span-3 w-3/4 ml-8'>
                    <FormField
                            control={form.control}
                            name="newPassword"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                    <Input
                                        className="text-sm w-full mx-0 my-2 px-4 py-2.5 rounded-lg border-[none] "
                                        type="password"
                                        placeholder="mật khẩu mới"
                                        id="newPassword"
                                        {...field}
                                    />
                                    </FormControl>
                                    <FormMessage className="text-[#f24444]" />
                                </FormItem>
                            )}
                        />
                </div>
                <div className='col-span-1 text-right flex justify-end items-center'>
                    <label htmlFor="confirmPassword">Nhập lại mật khẩu:</label>
                </div>
                <div className='col-span-3 w-3/4 ml-8'>
                    <FormField
                        control={form.control}
                        name="confirmPassword"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                <Input
                                    className="text-sm w-full mx-0 my-2 px-4 py-2.5 rounded-lg border-[none] "
                                    type="password"
                                    placeholder="Nhập lại mật khẩu"
                                    id="confirmPassword"
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
                <Button disabled={loading} type="submit">Lưu thay đổi</Button>
            </div>  
        </div>  
    </form>
    </Form>
    )
        
}

export default FormChangePassword;