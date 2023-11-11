import AvartarMain from "./avatar-main";
const AvaterGroup = () => {
    const users = [{ id: 1 }, { id: 2 }, { id: 3 }];
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
                        image="https://avatars.githubusercontent.com/u/108066718?v=4"
                        className=" h-[21px]
                        w-[21px]"
                    ></AvartarMain>
                </div>
            ))}
        </div>
    );
};

export default AvaterGroup;
