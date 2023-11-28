import * as React from "react"
import DialogForm from "./dialog-form/dialog-form"
import FormChangePassword from "./dialog-form/form-change-password"
import AddPost from "./dialog-form/add-post"
import { InforProfile } from "@/types/profile"
import { Button } from "@/components/ui/button"
import FormProfile from "./dialog-form/form-profile"
import user from "@/api/user"
import { useState,useEffect } from "react"
import Dialog from "@/components/dialog"
import { Flag } from "lucide-react"
const DialogItemsContainer = () => {
  const itemInforProfile = { fullName: 'ho van thanh' , email: 'thanh160523@gmail.com', nickName: 'thanh' };
  const [requests, setRequests] = useState<InforProfile>({} as InforProfile);
  const [status, setStatus] = useState<boolean>(false);
  
    useEffect(() => {
        user.GetUserCurrent().then(
            (res: any) => {
                setRequests(res);
            },
            (err: any) => {
                setStatus(true);
            }
        );
    }, []);
  const dialogItems = [
    {
      btnTitle: 'Chỉnh sửa thông tin',
      dialogTitle: 'Chỉnh sửa thông tin',
      dialogDescription: 'Thực hiện việc thay đổi các thông tin cá nhân',
      formAction: <FormProfile itemProfile={requests}></FormProfile>
    },
    {
      btnTitle: 'Đổi mật khẩu',
      dialogTitle: 'Đổi mật khẩu',
      dialogDescription: 'Thực hiện việc thay đổi mật khẩu',
      formAction: <FormChangePassword></FormChangePassword>
    },
    // {
    //   btnTitle: 'Thêm Bài viết',
    //   dialogTitle: 'Tạo bài viết',
    //   dialogDescription: '',
    //   formAction: <AddPost></AddPost>
    // },
  ];

  return (
    <>
      {dialogItems.map((dialogItem, index) => (
        <DialogForm dialogItem={dialogItem} key={index} />
      ))}
    </>
  );
};
const SettingProfile=()=> {
  const [dialog,setDialog] = useState(false);
  const updateParentState = () => {
    setDialog(!dialog);
  };

  return (
    <span className="flex flex-wrap md:justify-end">
        <DialogItemsContainer></DialogItemsContainer>
        <Button onClick={()=>{setDialog(true)}} variant="outline" className="text-sm h-8 mb-2">Thêm bài viết</Button>
        <Dialog onUpdateParentState={updateParentState} status={dialog}></Dialog>
    </span>
  )
}
export default SettingProfile;
