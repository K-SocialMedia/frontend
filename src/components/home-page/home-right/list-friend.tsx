"use client";
import { ListFriendInterface } from "@/components/present-interface";
import React, { useRef, useEffect,useState } from 'react';   
import { ChevronRight } from 'lucide-react';
import { ChevronLeft } from 'lucide-react';
import { FriendsOfUser } from "@/types/friend";
import friend from "@/api/friend";

const ListFriendContain = ({onConditionMet}:{onConditionMet:any}) => {
    const [friends, setFriends] = useState<FriendsOfUser[]>([]);
    useEffect(() => {
        friend.GetFriend().then(
            (res: any) => {
                setFriends(res);
            },
            (err: any) => {
                // setStatus(true);
            }
        );
    }, []);
    useEffect(() => {
        // Nếu điều kiện được đáp ứng, thì gọi hàm từ props của component cha
        if (friends.length < 8) {
          onConditionMet(false);
        }
        else{
            onConditionMet(true);
        }
      }, [[friends]]);
    return (
        <>
            {friends.map((friendItem, index) => (    
                <ListFriendInterface friendItem={friendItem} key={index}/>               
            ))}
        </>
    );
}

const ListFriend = () =>{
    const[currentWidth,setCurrentWidth]=useState(0);
    const elementRef = useRef<HTMLDivElement | null>(null);
    const [maxMove,setMaxMove]=useState(0);
    let totalWidth=0;
    let widthRef=0
    const [nextButton, setNextButton] = useState(true);
    useEffect(() => {
      if (elementRef.current) { 
         totalWidth=elementRef.current.scrollWidth; 
         widthRef=elementRef.current.offsetWidth;
         setMaxMove(totalWidth-widthRef);
      }    
    });
    const handleConditionMet = (displayNextButton:boolean) => {
        if(widthRef==0 || widthRef==576){
            setNextButton(displayNextButton);
        } 
      };
    
    const NextHandle = ()=>{
        if(elementRef.current){
            elementRef.current.scrollBy({ left: widthRef/2+8, top: 0, behavior: 'smooth' });  
            const newScrollLeft = elementRef.current.scrollLeft+widthRef/2+8;
            setCurrentWidth(newScrollLeft);     
        }
    }
    const PrevHandle = ()=>{
        if(elementRef.current){
            elementRef.current.scrollBy({ left: -(widthRef/2+8), top: 0, behavior: 'smooth' });   
            const newScrollLeft = elementRef.current.scrollLeft-(widthRef/2+8);
            setCurrentWidth(newScrollLeft);      
        }       
    }
    return(
        <div className="relative">
            <div ref={elementRef} className={`w-full overflow-x-auto scrollbar-none flex border-gray-400 border-b-[1px] py-2 sm:py-0 sm:border-none`}>
                <ListFriendContain onConditionMet={handleConditionMet}></ListFriendContain>         
            </div>
            <ChevronRight onClick={NextHandle} className={`${currentWidth > maxMove ? 'hidden': ''} ${nextButton?'':'hidden'} w-6 h-6 rounded-full bg-slate-200 absolute right-0 top-1/2 -translate-y-1/2 cursor-pointer`}></ChevronRight>
            <ChevronLeft onClick={PrevHandle} className={`${currentWidth > 0 ? '': 'hidden'} w-6 h-6 rounded-full bg-slate-200 absolute left-0 top-1/2 -translate-y-1/2 cursor-pointer`}></ChevronLeft> 
            {/* <div> {maxMove.current } </div> */}
            {/* <ChevronRight /> */}
            {/* <div>{maxMove.current}</div> */}
        </div>    
    )
}

export default ListFriend;