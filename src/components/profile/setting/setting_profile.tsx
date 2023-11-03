import * as React from "react"
import DialogForm from "./dialog_form/dialog_form"
import FormChangePassword from "./dialog_form/form_change_password"
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
import FormProfile from "./dialog_form/form_profile"
const dialogItems=[
    {btnTitle:'Chỉnh sửa thông tin', dialogTitle:'Chỉnh sửa thông tin',dialogDescription:'Thực hiện việc thay dổi các thông tin cá nhân',formAction: FormProfile},
    {btnTitle:'Đổi mật khẩu', dialogTitle:'Đổi mật khẩu',dialogDescription:'Thực hiện việc thay dổi mật khẩu',formAction: FormChangePassword},
];
const DialogItemsContainer = () =><>
 {dialogItems.map((dialogItem,index) => <DialogForm dialogItem={dialogItem} key={index}/>)}
</>
const SettingProfile=()=> {
  return (
    <span className="text-black flex">
        <DialogItemsContainer></DialogItemsContainer>
    </span>
  )
}
export default SettingProfile;
