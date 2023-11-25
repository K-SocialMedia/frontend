import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
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
const FormEditPassword = z
        .object({
                oldPassword:z
                    .string()
                    .trim()
                    .min(1, "Mật khẩu cũ bắt buộc nhập")
                    .max(25, "Mật khẩu tối đa 25 ký tự"),
                password: z
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
        .refine((data) => data.password === data.confirmPassword, {
            path: ["confirmPassword"],
            message: "Mật khẩu không khớp",
        });
const FormChangePassword = () =>{
    const form = useForm<z.infer<typeof FormEditPassword>>({
        resolver: zodResolver(FormEditPassword),
        defaultValues: {
            oldPassword: "",
            password: "",
            confirmPassword: "",
        },
    });
    const handleFinish = (values: z.infer<typeof FormEditPassword>)=>{
        // form.reset();
        // console.log("Abc");
        alert('abc');
    }
    return (
    <Form {...form}>
    <form onSubmit={form.handleSubmit(handleFinish)}>
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
                                    className="bg-[#eee] text-sm w-full mx-0 my-2 px-4 py-2.5 rounded-lg border-[none] "
                                    type="text"
                                    placeholder="Mật khẩu cũ"
                                    id="oldPassword"                  
                                />
                                </FormControl>
                                <FormMessage className="text-[#f24444]" />
                            </FormItem>
                        )}
                    />
                    
                </div>
                <div className='col-span-1 text-right flex justify-end items-center'>
                    <label htmlFor="password">Nhập mật khẩu mới:</label>
                </div>
                <div className='col-span-3 w-3/4 ml-8'>
                    <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                    <Input
                                        className="bg-[#eee] text-sm w-full mx-0 my-2 px-4 py-2.5 rounded-lg border-[none] "
                                        type="text"
                                        placeholder="mật khẩu"
                                        id="password"
                                        
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
                                    className="bg-[#eee] text-sm w-full mx-0 my-2 px-4 py-2.5 rounded-lg border-[none] "
                                    type="text"
                                    placeholder="Nhập lại mật khẩu"
                                    id="confirmPassword"
                                />
                                </FormControl>
                                <FormMessage className="text-[#f24444]" />
                            </FormItem>
                        )}
                    />
                </div>
            </div>   
            <div className="flex justify-end mt-6">
                <Button type="submit">Lưu thay đổi</Button>
            </div>  
        </div>  
    </form>
    </Form>
    )
        
}

export default FormChangePassword;