"use client";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "../ui/form";
import facebook from "@/assets/icons/facebook.svg";
import google from "@/assets/icons/google.svg";
import Image from "next/image";
import Auth from "@/api/auth";
import cookieCutter from "cookie-cutter";
import { useRouter } from "next/navigation";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { logIn } from "@/redux/features/authSlice";
import { useToast, Input, Button } from "@/components/ui";
import { Check } from "lucide-react";
import { useForm } from "react-hook-form";
import { LoginPayload } from "@/types/auth";
import { StorageKey } from "@/types/storage-key";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";

const FormSchemaLogin = z.object({
    email: z
        .string()
        .trim()
        .min(1, "Email bắt buộc")
        .email("Email không hợp lệ")
        .min(10, "Email phải có ít nhất 10 ký tự")
        .max(40, "Email tối đa 40 ký tự"),
    password: z
        .string()
        .trim()
        .min(1, "Mật khẩu bắt buộc")
        .min(8, "Mật khẩu phải có ít nhất 8 ký tự")
        .max(25, "Mật khẩu tối đa 25 ký tự"),
});

const LoginForm = ({ signIn }: { signIn: string }) => {
    const router = useRouter();
    const [loading, setLoading] = useState<boolean>(false);
    const { toast } = useToast();
    const dispatch = useAppDispatch();

    const form = useForm<z.infer<typeof FormSchemaLogin>>({
        resolver: zodResolver(FormSchemaLogin),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const handleFinish = (values: z.infer<typeof FormSchemaLogin>) => {
        setLoading(true);
        const payload: LoginPayload = {
            email: values.email,
            password: values.password,
        };
        Auth.login(payload).then(
            (res: any) => {
                if (!res) {
                    setLoading(false);
                    return;
                }
                cookieCutter.set(StorageKey.ACCESS_TOKEN, res.token, {
                    expires: new Date(Date.now() + 30 * 60 * 1000),
                });
                // setCookie(StorageKey.ACCESS_TOKEN, res.token);
                // cookieStore.set(StorageKey.ACCESS_TOKEN, res.token);
                localStorage.setItem(StorageKey.ACCESS_TOKEN, res.token);
                // localStorage.setItem(StorageKey.FULL_NAME, res.user.full_name);
                dispatch(logIn(res.token));
                router.push("/");
                toast({
                    className: "bg-green-400 text-white border-none",
                    title: "Đăng nhập thành công ",
                    // description: "Friday, February 10, 2023 at 5:57 PM",
                    action: <Check></Check>,
                });
            },
            (err: any) => {
                setLoading(false);
                toast({
                    className: "dark:bg-[#ef4444] border-none",
                    variant: "destructive",
                    title: "Đăng nhập không thành công ",
                    // description: "Friday, February 10, 2023 at 5:57 PM",
                });
            }
        );
    };

    return (
        <>
            <div className={signIn}>
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(handleFinish)}
                        className="bg-white flex items-center justify-center flex-col h-full px-10 py-0 w-full"
                    >
                        <h1 className="text-3xl mb-5 font-bold text-black">
                            Đăng nhập
                        </h1>
                        <div className="flex justify-around w-1/2 ">
                            <Image src={google} alt="#" />
                            <Image src={facebook} alt="#" />
                        </div>
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input
                                            className="bg-[#eee] mx-0 my-2 px-4 py-2.5 rounded-lg text-black border-none text-sm"
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
                                            className="bg-[#eee] w-full mx-0 my-2 px-4 py-2.5 rounded-lg text-black border-none text-sm"
                                            type="password"
                                            placeholder="Mật khẩu"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage className="text-[#f24444]" />
                                </FormItem>
                            )}
                        />

                        <a href="" className="text-sm text-black">
                            Quên mật khẩu?
                        </a>
                        <Button
                            disabled={loading}
                            type="submit"
                            className="bg-sky-500  hover:bg-sky-700 text-white text-sm border font-semibold tracking-[0.5px] uppercase cursor-pointer mt-2.5 px-[45px] py-2.5 rounded-lg border-solid border-transparent"
                        >
                            Đăng nhập
                        </Button>
                    </form>
                </Form>
            </div>
        </>
    );
};

export default LoginForm;
