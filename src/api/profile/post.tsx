import {UserProfile, PostDetail } from "@/types/profile";
import { API_ENDPOINT } from "@/types/api.type";
import { HttpRequestParamsType } from "@/types/http-client/http-client-params.type";
import { HttpClient } from "@/types/http-client/http-client";

class Profile {
    public user_infor(payload: UserProfile): Promise<UserProfile> {
        const params: HttpRequestParamsType = {
            requiresToken: false,
            url: `${API_ENDPOINT}/User`,
            payload: payload,
        };
        return HttpClient.get(params);
    }

    public post_detail(payload: PostDetail): Promise<PostDetail> {
        const params: HttpRequestParamsType = {
            requiresToken: false,
            url: `${API_ENDPOINT}/user`,
            payload: payload,
        };
        return HttpClient.get(params);
    }

    public logout(): Promise<void> {
        const params: HttpRequestParamsType = {
            requiresToken: true,
            url: `${API_ENDPOINT}/auth/logout`,
        };
        return HttpClient.post(params);
    }
}

export default new Profile();
