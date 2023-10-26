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
export interface DialogForm{
    btnTitle:string;
    dialogTitle:string;
    dialogDescription:string;
    formAction: () => JSX.Element;
}

const DialogForm = ({dialogItem}:{dialogItem:DialogForm}) =>{
    const {btnTitle,dialogTitle,dialogDescription,formAction}=dialogItem;
    return (
        <div className="mr-2">
            <Dialog>
                <DialogTrigger asChild>
                    <Button variant="outline" className="text-sm h-8">{btnTitle}</Button>
                </DialogTrigger>
                <DialogContent className="md:max-w-[800px] text-black">
                    <DialogHeader>
                    <DialogTitle>{dialogTitle}</DialogTitle>
                    <DialogDescription>
                        {dialogDescription}
                    </DialogDescription>
                    </DialogHeader>
                    {formAction()}
                </DialogContent>    
            </Dialog> 
        </div>
              
    )
}

export default DialogForm;