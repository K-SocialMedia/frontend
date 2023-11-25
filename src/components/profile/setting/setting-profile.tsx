import * as React from "react"
import DialogForm from "./dialog-form/dialog-form"
import FormChangePassword from "./dialog-form/form-change-password"
import AddPost from "./dialog-form/add-post"
import { InforProfile } from "@/types/profile"
import { Button } from "@/components/ui/button"
import FormProfile from "./dialog-form/form-profile"
import { Form } from "react-hook-form"
const DialogItemsContainer = () => {
  const itemInforProfile = { fullName: 'Hồ Văn Thành', email: 'thanh160523@gmail.com', nickName: 'thanh' };

  const dialogItems = [
    {
      btnTitle: 'Chỉnh sửa thông tin',
      dialogTitle: 'Chỉnh sửa thông tin',
      dialogDescription: 'Thực hiện việc thay đổi các thông tin cá nhân',
      formAction: <FormProfile itemProfile={itemInforProfile}></FormProfile>
    },
    {
      btnTitle: 'Đổi mật khẩu',
      dialogTitle: 'Đổi mật khẩu',
      dialogDescription: 'Thực hiện việc thay đổi mật khẩu',
      formAction: <FormChangePassword></FormChangePassword>
    },
    {
      btnTitle: 'Thêm Bài viết',
      dialogTitle: 'Tạo bài viết',
      dialogDescription: '',
      formAction: <AddPost></AddPost>
    },
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
  return (
    <span className="flex flex-wrap md:justify-end">
        <DialogItemsContainer></DialogItemsContainer>
    </span>
  )
}
export default SettingProfile;
