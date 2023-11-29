import AvartarMain from "./avatar-main";
import { UserOfGroupChat } from "@/types/group-chat";
const AvatarGroup = ({
    UserOfGroupChat,
}: {
    UserOfGroupChat: UserOfGroupChat[];
}) => {
    const users = UserOfGroupChat.slice(0, 3);
    const positionMap = {
        0: "top-0 left-[12px]",
        1: "bottom-0",
        2: "bottom-0 right-0",
    };
    return (
        <div className="relative h-11 w-11">
            {users.map((user, index) => (
                <div
                    key={user.id}
                    className={`
          absolute
          inline-block 
          rounded-full 
          overflow-hidden 
          
          ${positionMap[index as keyof typeof positionMap]}
        `}
                >
                    <AvartarMain
                        image={user.image}
                        className=" h-[21px]
                        w-[21px]"
                    ></AvartarMain>
                </div>
            ))}
        </div>
    );
};

export default AvatarGroup;
