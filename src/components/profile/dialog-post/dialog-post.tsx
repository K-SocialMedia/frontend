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
                <DialogContent className="p-0 w-8/12 md:max-w-6xl md:min-w-3xl lg:max-w-[90%] md:w-9/12 lg:w-max">
                    {formAction()}
                </DialogContent>    
            </Dialog> 
        </div>
              
    )
}

export default DialogForm;