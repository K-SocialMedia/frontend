import HomeRight from "@/components/home-page/home-right/home-right";
import HomeLeft from "@/components/home-page/home-left";
import { useAppSelector } from "@/redux/hooks";
import { useRouter } from "next/navigation";
const Home = () => {
    // const token = useAppSelector((state) => state.authSlice.accessToken);
    // const router = useRouter();
    // if (!token) {
    //     router.push("/auth");
    // }
    return (
        <div className="max-w-xl lg:max-w-[54rem] mx-auto lg:grid lg:grid-cols-3 sm:mt-8 border-b-[1px]">
            <div className="lg:col-span-2 h-full">
                <HomeRight></HomeRight>
            </div>
            <div className="hidden lg:block col-span-1 h-full">
                <HomeLeft></HomeLeft>
            </div>
        </div>
    );
};
export default Home;
