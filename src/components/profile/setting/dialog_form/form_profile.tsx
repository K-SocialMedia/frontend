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

const FormProfile = () =>{
    return (
    <form action="">
        <div className='max-w-4xl mx-auto mt-8'>
            <div className='grid grid-cols-4'>
                <div className='col-span-1 text-right flex justify-end items-center'>
                    <label htmlFor="userName">Tên người dùng:</label>
                </div>
                <div className='col-span-3 w-3/4 ml-8'>
                    <Input
                        className="bg-[#eee] text-sm w-full mx-0 my-2 px-4 py-2.5 rounded-lg border-[none] "
                        type="text"
                        id="userName"
                    />
                </div>
                <div className='col-span-1 text-right flex justify-end items-center'>
                    <label htmlFor="phone">Điện thoại:</label>
                </div>
                <div className='col-span-3 w-3/4 ml-8'>
                    <Input
                        className="bg-[#eee] text-sm w-full mx-0 my-2 px-4 py-2.5 rounded-lg border-[none] "
                        type="text"
                        id="phone"
                    />
                </div>
                <div className='col-span-1 text-right flex justify-end items-center'>
                    <label htmlFor="email">Email:</label>
                </div>
                <div className='col-span-3 w-3/4 ml-8'>
                    <Input
                        className="bg-[#eee] text-sm w-full mx-0 my-2 px-4 py-2.5 rounded-lg border-[none] "
                        type="text"
                        id="email"
                    />
                </div>
                <div className='col-span-1 text-right flex justify-end items-center'>
                    <label htmlFor="gender">Giới tính:</label>
                </div>
                <div className='col-span-3 w-3/4 ml-8'>
                    <Select>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Chọn giới tính" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                            <SelectLabel>Giới tính</SelectLabel>
                            <SelectItem value="male">Nam</SelectItem>
                            <SelectItem value="female">Nữ</SelectItem>
                            <SelectItem value="other">Khác</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
            </div>   
            <div className="flex justify-end mt-6">
                <Button type="submit">Save changes</Button>
            </div> 
        </div>  
    </form>
    )
        
}

export default FormProfile;