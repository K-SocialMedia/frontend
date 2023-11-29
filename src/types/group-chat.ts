export interface GroupChat {
    id: string;
    groupName: string;
    users: UserOfGroupChat[];
}

export interface UserOfGroupChat {
    id: string;
    fullName: string;
    image: string;
    nickName: string;
    email: string;
}

export interface MessageGroup {
    id: string;
    senderId: string;
    senderName: string;
    senderImage: string;
    content: string;
    image: string;
    createAt: string;
    isRead: boolean;
}
