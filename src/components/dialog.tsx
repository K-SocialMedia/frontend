import FormProfile from "./profile/setting/dialog-form/form-profile"
export default function Dialog() {
    const itemInforProfile={fullName:'Hồ Văn Thành',email:'thanh160523@gmail.com',nickName:"thanh"}
    return(
        <div className="">
            <div className="fixed z-50 flex items-center w-full h-full bg-white opacity-80">      
            </div>
            <div className="fixed left-[50%] top-[50%] inset-0 z-50 p-5 rounded-md border-[0.5px] -translate-y-1/2 -translate-x-1/2 border-black-100 shadow-sm max-h-[90vh] h-fit max-w[150vh] w-[100vh] bg-white">
                    <FormProfile itemProfile={itemInforProfile}></FormProfile>
            </div>
        </div> 
           

    )
};

