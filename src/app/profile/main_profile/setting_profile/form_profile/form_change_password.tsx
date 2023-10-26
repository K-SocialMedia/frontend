import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

const FormChangePassword = () =>{
    return (
    <form action="">
        <div className='max-w-4xl mx-auto mt-8'>
            <div className='grid grid-cols-4'>
                <div className='col-span-1 text-right flex justify-end items-center'>
                    <label htmlFor="userName">Nhập mật khẩu cũ:</label>
                </div>
                <div className='col-span-3 w-3/4 ml-8'>
                    <Input
                        className="bg-[#eee] text-sm w-full mx-0 my-2 px-4 py-2.5 rounded-lg border-[none] "
                        type="text"
                        placeholder="User name"
                        id="userName"
                        required
                    />
                </div>
                <div className='col-span-1 text-right flex justify-end items-center'>
                    <label htmlFor="phone">Nhập mật khẩu mới:</label>
                </div>
                <div className='col-span-3 w-3/4 ml-8'>
                    <Input
                        className="bg-[#eee] text-sm w-full mx-0 my-2 px-4 py-2.5 rounded-lg border-[none] "
                        type="text"
                        placeholder="phone..."
                        id="phone"
                        required
                    />
                </div>
                <div className='col-span-1 text-right flex justify-end items-center'>
                    <label htmlFor="email">Nhập lại mật khẩu:</label>
                </div>
                <div className='col-span-3 w-3/4 ml-8'>
                    <Input
                        className="bg-[#eee] text-sm w-full mx-0 my-2 px-4 py-2.5 rounded-lg border-[none] "
                        type="text"
                        placeholder="Email"
                        id="email"
                        required
                    />
                </div>
            </div>   
            <div className="flex justify-end mt-6">
                <Button type="submit">Save changes</Button>
            </div>  
        </div>  
    </form>
    )
        
}

export default FormChangePassword;