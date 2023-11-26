export interface HandleFriend {
    friendId: string;
    status?: number;
}

export interface RequestFriend {
    id: string;
    image: string;
    nickName: string;
    fullName: string;
}

export interface FriendsOfUser {
    id: string;
    fullName: string;
    image: string | undefined;
    nickName: string;
    status: number;
}
