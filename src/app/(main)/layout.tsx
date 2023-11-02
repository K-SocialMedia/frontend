import NavigationSidebar from "@/components/navigation/navigation-sidebar";
import { Separator } from "@/components/ui";
const MainLayout = async ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="h-full">
            <div className=" flex h-full w-[78px] z-30 flex-col fixed inset-y-0 ml-3 border-r-[0.5px] xl:w-[220px] ">
           
                <NavigationSidebar />
            </div>

            <main className="pl-[90px] xl:pl-[232px] h-full w-full  ">
                {children}
            </main>
        </div>
    );
};

export default MainLayout;
