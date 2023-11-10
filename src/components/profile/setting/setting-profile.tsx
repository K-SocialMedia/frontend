import * as React from "react"
import DialogForm from "./dialog-form/dialog-form"
import FormChangePassword from "./dialog-form/form-change-password"
import AddPost from "./dialog-form/add-post"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import FormProfile from "./dialog-form/form-profile"
const dialogItems=[
    {btnTitle:'Chỉnh sửa thông tin', dialogTitle:'Chỉnh sửa thông tin',dialogDescription:'Thực hiện việc thay dổi các thông tin cá nhân',formAction: FormProfile},
    {btnTitle:'Đổi mật khẩu', dialogTitle:'Đổi mật khẩu',dialogDescription:'Thực hiện việc thay dổi mật khẩu',formAction: FormChangePassword},
    {btnTitle:'Thêm Bài viết', dialogTitle:'Tạo bài viết',dialogDescription:'',formAction: AddPost},
    
];
const DialogItemsContainer = () =><>
 {dialogItems.map((dialogItem,index) => <DialogForm dialogItem={dialogItem} key={index}/>)}
</>
const SettingProfile=()=> {
  return (
    <span className="flex flex-wrap md:justify-end">
        <DialogItemsContainer></DialogItemsContainer>
    </span>
  )
}
export default SettingProfile;
