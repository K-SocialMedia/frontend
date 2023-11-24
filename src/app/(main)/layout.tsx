"use client";
import NavigationSidebar from "@/components/navigation/navigation-sidebar";
import ReduxProvider from "@/components/providers/redux-provider";
import { useAppSelector } from "@/redux/hooks";
import { useRouter } from "next/navigation";
const MainLayout = ({ children }: { children: React.ReactNode }) => {
    const token = useAppSelector((state) => state.authSlice.accessToken);
    const router = useRouter();
    if (!token) {
        router.push("/auth");
    } else {
        return (
            <div className="h-full">
                <div className=" flex h-full w-[78px] z-30 flex-col fixed inset-y-0 ml-3 border-r-[0.5px] lg:w-[220px] ">
                    <NavigationSidebar />
                </div>

                <div className="pl-[90px] lg:pl-[232px] h-full w-full">
                    {children}
                </div>
            </div>
        );
    }
    return "";
};

export default MainLayout;
