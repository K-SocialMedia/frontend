export interface RegisterPayload {
    email: string;
    password: string;
    passwordConfirmation?: string;
    fullName: string;
    nickName: string;
}

export interface LoginPayload {
    email: string;
    password: string;
}
