import NavigationSidebar from "@/components/navigation/navigation-sidebar";
import { Separator } from "@/components/ui";
const MainLayout = async ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="h-full">
            <div className=" flex h-full w-[90px] z-30 flex-col fixed inset-y-0 ml-5 border-r-[1px] border-gray-500 xl:w-[240px] ">
                <NavigationSidebar />
            </div>

            <main className="pl-[110px] xl:pl-[260px] h-full">{children}</main>
        </div>
    );
};

export default MainLayout;
