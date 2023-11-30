import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "../ui/form";
import Auth from "@/api/auth";
import { ToastAction, useToast, Input, Button } from "@/components/ui";
import { RegisterPayload } from "@/types/auth";
import { StorageKey } from "@/types/storage-key";
import { Check } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";

const FormSchemaRegister = z
    .object({
        email: z
            .string()
            .trim()
            .min(1, "Email bắt buộc")
            .email("Email không hợp lệ")
            .min(10, "Email phải có ít nhất 10 ký tự")
            .max(40, "Email tối đa 40 ký tự"),
        fullName: z.string().min(1, "Họ và tên bắt buộc").max(100),
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
        nickname: z.string().max(20, "Nickname tối đa 20 ký tự"),
    })
    .refine((data) => data.password === data.confirmPassword, {
        path: ["confirmPassword"],
        message: "Mật khẩu không khớp",
    });

const RegisterForm = ({ signUp }: { signUp: string }) => {
    const [loading, setLoading] = useState<boolean>(false);

    const { toast } = useToast();
    const form = useForm<z.infer<typeof FormSchemaRegister>>({
        resolver: zodResolver(FormSchemaRegister),
        defaultValues: {
            email: "",
            password: "",
            confirmPassword: "",
            fullName: "",
            nickname: "",
        },
    });

    const handleFinish = (values: z.infer<typeof FormSchemaRegister>) => {
        setLoading(true);
        const payload: RegisterPayload = {
            email: values.email,
            password: values.password,
            // passwordConfirmation: values.confirmPassword,
            fullName: values.fullName,
            nickName: values.nickname,
        };
        console.log(values.password);
        Auth.register(payload).then(
            (res: any) => {
                if (!res) {
                    setLoading(false);
                    return;
                }
                setLoading(false);

                toast({
                    className: "bg-green-400 text-white border-none",
                    title: "Đăng Ký thành công ",
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
                    title: `${err.response.data.message}`,
                    // description: "Friday, February 10, 2023 at 5:57 PM",
                });
            }
        );
    };
    return (
        <div className={signUp}>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(handleFinish)}
                    className="bg-white flex items-center justify-center flex-col h-full px-10 py-0"
                    action=""
                >
                    <h1 className="text-3xl mb-5 font-bold text-black">
                        Đăng ký
                    </h1>
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input
                                        className="bg-[#eee] w-full mx-0 my-2 px-4 py-2.5 rounded-lg text-black border-none text-sm "
                                        type="email"
                                        placeholder="Email"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage className="text-[#f24444]" />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input
                                        className="bg-[#eee] w-full mx-0 my-2 px-4 py-2.5 rounded-lg text-black border-none textsmg"
                                        type="password"
                                        placeholder="Mật khẩu"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage className="text-[#f24444]" />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="confirmPassword"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input
                                        className="bg-[#eee] w-full mx-0 my-2 px-4 py-2.5 rounded-lg text-black border-none textsmg"
                                        type="password"
                                        placeholder="Nhập lại mật khẩu"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage className="text-[#f24444]" />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="fullName"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input
                                        className="bg-[#eee] w-full mx-0 my-2 px-4 py-2.5 rounded-lg text-black border-none text-sm "
                                        type="text"
                                        placeholder="Họ Tên"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage className="text-[#f24444]" />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="nickname"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input
                                        className="bg-[#eee] w-full mx-0 my-2 px-4 py-2.5 rounded-lg text-black border-none text-sm "
                                        type="text"
                                        placeholder="Nickname"
                                        {...field}
                                    />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <Button
                        disabled={loading}
                        type="submit"
                        className="bg-sky-500  hover:bg-sky-700 text-white text-sm border font-semibold tracking-[0.5px] uppercase cursor-pointer mt-2.5 px-[45px] py-2.5 rounded-lg border-solid border-transparent"
                    >
                        Đăng ký
                    </Button>
                </form>
            </Form>
        </div>
    );
};

export default RegisterForm;
