import { API_ENDPOINT } from "@/types/api.type";
import { HttpRequestParamsType } from "@/types/http-client/http-client-params.type";
import { HttpClient } from "@/types/http-client/http-client";
import { Profile } from "@/components/present-interface";
import { InforProfile } from "@/types/profile";
import { ChangePassword } from "@/types/profile";
class User {
    public SearchUserByNickName(payload: string): Promise<any> {
        const params: HttpRequestParamsType = {
            requiresToken: true,
            url: `${API_ENDPOINT}/User/get-user-by-nick-name?nickName=${payload}`,
        };
        return HttpClient.get(params);
    }
    public GetUserCurrent(): Promise<void> {
        const params: HttpRequestParamsType = {
            requiresToken: true,
            url: `${API_ENDPOINT}/User/get-user-information`,
        };
        return HttpClient.get(params);
    }

    public EditProfile(payload: InforProfile): Promise<InforProfile> {
        const params: HttpRequestParamsType = {
            requiresToken: true,
            url: `${API_ENDPOINT}/User`,
            payload: payload,
        };
        return HttpClient.put(params);
    }

    public ChangePassword(payload: ChangePassword): Promise<ChangePassword> {
        const params: HttpRequestParamsType = {
            requiresToken: true,
            url: `${API_ENDPOINT}/User/change-user-password`,
            payload: payload,
        };
        return HttpClient.put(params);
    }

    public SuggetFriend(): Promise<void> {
        const params: HttpRequestParamsType = {
            requiresToken: true,
            url: `${API_ENDPOINT}/User/get-related-friend`,
        };
        return HttpClient.get(params);
    }

    public GetUserById(payload: string): Promise<string> {
        const params: HttpRequestParamsType = {
            requiresToken: true,
            url: `${API_ENDPOINT}/User/get-user-by-id/${payload}`,
        };
        return HttpClient.get(params);
    }
}

export default new User();
