"use client";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { useState } from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import google from "@/assets/icons/google.svg";
import facebook from "@/assets/icons/facebook.svg";
import logo from "@/assets/images/ChatChit_dark.png";
const Authentication = () => {
    const [auth, setAuth] = useState<boolean>(true);
    const changeAuth = (value: boolean) => {
        setAuth(value);
    };
    const signIn: string = auth
        ? "absolute h-full transition-all duration-500 ease-in-out top-0 w-6/12 z-[2] left-0 "
        : "absolute h-full transition-all duration-500 ease-in-out top-0 w-6/12 z-[2] left-0 translate-x-full";
    const signUp: string = auth
        ? "absolute h-full transition-all duration-500 ease-in-out top-0 w-6/12 opacity-0 z-[1] left-0"
        : "absolute h-full transition-all duration-500 ease-in-out top-0 w-6/12 left-0 translate-x-full opacity-100 z-[5] animate-[move_0,6s]";
    const toggleContainer: string = auth
        ? "absolute w-1/2 h-full overflow-hidden transition-all duration-500 ease-in-out z-[100] rounded-l-[150px] left-1/2 top-0"
        : "absolute w-1/2 h-full overflow-hidden transition-all duration-500 ease-in-out z-[100] rounded-r-[150px] left-1/2 top-0 -translate-x-full";
    const toggle: string = auth
        ? "bg-sky-400 h-full text-white relative w-[200%] translate-x-0 transition-all duration-500 ease-in-out -left-full"
        : "bg-sky-400 h-full text-white relative w-[200%] translate-x-0 transition-all duration-500 ease-in-out -left-full translate-x-1/2";
    const toggleLeft: string = auth
        ? "absolute w-1/2 h-full flex items-center justify-center flex-col text-center  transition-all duration-500 ease-in-out px-7 py-0 top-0 translate-x-[-200%]"
        : "absolute w-1/2 h-full flex items-center justify-center flex-col text-center  transition-all duration-500 ease-in-out px-7 py-0 top-0 translate-x-0";
    const toggleRight: string = auth
        ? "absolute w-1/2 h-full flex items-center justify-center flex-col text-center  transition-all duration-500 ease-in-out px-7 py-0 top-0 right-0"
        : "absolute w-1/2 h-full flex items-center justify-center flex-col text-center  transition-all duration-500 ease-in-out px-7 py-0 top-0 right-0 translate-x-[200%]";
    return (
        <>
            {/* <Image src={logo} alt="#" /> */}
            <div className={signIn}>
                <form
                    action=""
                    className="bg-white flex items-center justify-center flex-col h-full px-10 py-0"
                >
                    <h1 className="text-3xl mb-5 font-bold text-black">
                        Đăng nhập
                    </h1>
                    <div className="flex justify-around w-1/2 ">
                        <Image src={google} alt="#" />
                        <Image src={facebook} alt="#" />
                    </div>
                    <Input
                        className="bg-[#eee] w-full mx-0 my-2 px-4 py-2.5 rounded-lg text-black border-none text-lg"
                        type="username"
                        placeholder="Username"
                    />
                    <Input
                        className="bg-[#eee] w-full mx-0 my-2 px-4 py-2.5 rounded-lg text-black border-none text-lg"
                        type="password"
                        placeholder="Password"
                    />
                    <a href="" className="text-sm text-black">
                        Quên mật khẩu?
                    </a>
                    <Button
                        type="submit"
                        className="bg-sky-500  hover:bg-sky-700 text-white text-sm border font-semibold tracking-[0.5px] uppercase cursor-pointer mt-2.5 px-[45px] py-2.5 rounded-lg border-solid border-transparent"
                    >
                        Đăng nhập
                    </Button>
                </form>
            </div>
            <div className={signUp}>
                <form
                    className="bg-white flex items-center justify-center flex-col h-full px-10 py-0"
                    action=""
                >
                    <h1 className="text-3xl mb-5 font-bold text-black">
                        Đăng ký
                    </h1>
                    <Input
                        className="bg-[#eee] text-sm w-full mx-0 my-2 px-4 py-2.5 rounded-lg text-black border-none text-lg "
                        type="username"
                        placeholder="Username"
                    />
                    <Input
                        className="bg-[#eee] text-sm w-full mx-0 my-2 px-4 py-2.5 rounded-lg text-black border-none text-lg"
                        type="password"
                        placeholder="Password"
                    />
                    <Input
                        className="bg-[#eee] text-sm w-full mx-0 my-2 px-4 py-2.5 rounded-lg text-black border-none text-lg "
                        type="email"
                        placeholder="Email"
                    />
                    <Input
                        className="bg-[#eee] text-sm w-full mx-0 my-2 px-4 py-2.5 rounded-lg text-black border-none text-lg "
                        type="text"
                        placeholder="Full name"
                    />
                    <Input
                        className="bg-[#eee] text-sm w-full mx-0 my-2 px-4 py-2.5 rounded-lg text-black border-none text-lg "
                        type="text"
                        placeholder="Nickname"
                    />

                    <Button
                        type="submit"
                        className="bg-sky-500  hover:bg-sky-700 text-white text-sm border font-semibold tracking-[0.5px] uppercase cursor-pointer mt-2.5 px-[45px] py-2.5 rounded-lg border-solid border-transparent"
                    >
                        Đăng ký
                    </Button>
                </form>
            </div>
            <div className={toggleContainer}>
                <div className={toggle}>
                    <div className={toggleLeft}>
                        <div>
                            <Image src={logo} alt="#" />
                        </div>
                        <h1>Welcome Back!</h1>
                        <p>Đăng nhập để bắt đầu ChatChit</p>
                        <Button
                            onClick={() => changeAuth(true)}
                            className="mt-3 bg-transparent border-white border-[1px] rounded-xl hover:bg-sky-700 text-base text-white "
                            id="register"
                        >
                            Đăng nhập
                        </Button>
                    </div>
                    <div className={toggleRight}>
                        <div>
                            <Image src={logo} alt="#" />
                        </div>
                        <h1>Hello, Friend!</h1>
                        <p>Nếu bạn chưa có tài khoản hãy đăng ký ChatChit</p>
                        <Button
                            onClick={() => changeAuth(false)}
                            className="mt-3 bg-transparent border-white  border-[1px] rounded-xl hover:bg-sky-700 text-base text-white"
                            id="register"
                        >
                            Đăng ký
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Authentication;
