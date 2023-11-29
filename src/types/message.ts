export interface Message {
    id: string;
    senderId: string;
    receiverId: string;
    senderName: string;
    receiverName: string;
    image: string;
    content: string;
    createAt: string;
    isRead: boolean;
}
