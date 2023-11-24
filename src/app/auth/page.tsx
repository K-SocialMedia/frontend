"use client";
import { useState } from "react";
import LoginForm from "@/components/authentication/login-form";
import RegisterForm from "@/components/authentication/register-form";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import logo from "@/assets/images/ChatChit_dark.png";
// import { useAppSelector } from "@/redux/hooks";

const Authentication = () => {
    const [auth, setAuth] = useState<boolean>(true);
    // const token = useAppSelector((state) => state.authSlice.accessToken);
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
            <LoginForm signIn={signIn}></LoginForm>
            <RegisterForm signUp={signUp}></RegisterForm>

            <div className={toggleContainer}>
                <div className={toggle}>
                    <div className={toggleLeft}>
                        <div>
                            <Image src={logo} alt="#" />
                        </div>
                        <h1 className="text-lg">Welcome Back!</h1>
                        <p className="text-lg">Đăng nhập để bắt đầu ChatChit</p>
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
                        <h1 className="text-lg">Hello, Friend!</h1>
                        <p className="text-lg">
                            Nếu bạn chưa có tài khoản hãy đăng ký ChatChit
                        </p>
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
