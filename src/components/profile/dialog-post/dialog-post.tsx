import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import PostProfile from "./post_profile";
export interface DialogForm{ 
    formAction: () => JSX.Element;
}

const DialogForm = ({dialogItem}:{dialogItem:DialogForm}) =>{
    const {formAction}=dialogItem;
    return (
        <div className="mr-2">
            <Dialog>
                <DialogTrigger asChild>
                    <span>
                    <PostProfile></PostProfile>
                    </span>           
                </DialogTrigger>
                <DialogContent className="md:max-w-[800px]">
                    {formAction()}
                </DialogContent>    
            </Dialog> 
        </div>
              
    )
}

export default DialogForm;