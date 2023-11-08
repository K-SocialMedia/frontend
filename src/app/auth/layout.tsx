import React from "react";
const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <div className=" bg-gradient-to-r from-slate-100 to-cyan-100 bg-[#c9d6ff] flex items-center justify-center flex-col h-screen">
                <div className="bg-white shadow-[0_5px_15px_rgba(0,0,0,0.35)] relative overflow-hidden w-[768px] max-w-full min-h-[480px] rounded-3xl">
                    {children}
                </div>
            </div>
        </>
    );
};

export default AuthLayout;
