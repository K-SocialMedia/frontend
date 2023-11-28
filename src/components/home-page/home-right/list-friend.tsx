"use client";
import { ListFriendInterface } from "@/components/present-interface";
import React, { useRef, useEffect,useState } from 'react';   
import { ChevronRight } from 'lucide-react';
import { ChevronLeft } from 'lucide-react';
import { FriendsOfUser } from "@/types/friend";
import friend from "@/api/friend";
// const ListFriendsInterface=[
//     { avatar: "https://avatars.githubusercontent.com/u/109071521?s=400&v=4", name:"bang" },
//     { avatar: "https://avatars.githubusercontent.com/u/109071521?s=400&v=4", name: "khoi23111" },
//     { avatar: "https://avatars.githubusercontent.com/u/109071521?s=400&v=4", name: "thanh111111" },
//     { avatar: "https://avatars.githubusercontent.com/u/109071521?s=400&v=4", name: "thanhhovan" },
//     { avatar: "https://avatars.githubusercontent.com/u/109071521?s=400&v=4", name: "thanhhovan" },
//     { avatar: "https://avatars.githubusercontent.com/u/109071521?s=400&v=4", name: "thanhhovan" },
//     { avatar: "https://avatars.githubusercontent.com/u/109071521?s=400&v=4", name: "khoi" },
//     { avatar: "https://avatars.githubusercontent.com/u/109071521?s=400&v=4", name: "thanhhovan" },
// ]


const ListFriendContain = () => {
    const[nextButton,setNextButton]=useState(false);
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
    const maxMove=useRef(0);
    let totalWidth=0;
    let widthRef=0
    // let maxMove=0;  
    // if (elementRef.current) {
    //     totalWidth=elementRef.current.scrollWidth; 
    //     widthRef=elementRef.current.offsetWidth;
    //     maxMove=totalWidth-widthRef;              
    // }    
    // currentWidth > 0 ? setBtnPrev(true): setBtnPrev(false)
    // currentWidth > maxMove ?setBtnNext(false):setBtnNext(true)
    useEffect(() => {
      if (elementRef.current) { 
         totalWidth=elementRef.current.scrollWidth; 
         widthRef=elementRef.current.offsetWidth;
         maxMove.current=totalWidth-widthRef;
        //  if(+totalWidth>+widthRef){
        //     setNextButton(true);
        //  }
      }    
    });

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
                <ListFriendContain></ListFriendContain>         
            </div>
            <ChevronRight onClick={NextHandle} className={`${currentWidth > maxMove.current ? 'hidden': ''} w-6 h-6 rounded-full bg-slate-200 absolute right-0 top-1/2 -translate-y-1/2 cursor-pointer`}></ChevronRight>
            <ChevronLeft onClick={PrevHandle} className={`${currentWidth > 0 ? '': 'hidden'} w-6 h-6 rounded-full bg-slate-200 absolute left-0 top-1/2 -translate-y-1/2 cursor-pointer`}></ChevronLeft> 
            {/* <div> {maxMove.current } </div> */}
            {/* <ChevronRight /> */}
            {/* <div>{maxMove.current}</div> */}
        </div>    
    )
}

export default ListFriend;