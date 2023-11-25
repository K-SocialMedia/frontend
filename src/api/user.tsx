import { API_ENDPOINT } from "@/types/api.type";
import { HttpRequestParamsType } from "@/types/http-client/http-client-params.type";
import { HttpClient } from "@/types/http-client/http-client";
import { Profile } from "@/components/present-interface";
class User {
    public SearchUserByNickName(payload: string): Promise<any> {
        const params: HttpRequestParamsType = {
            requiresToken: true,
            url: `${API_ENDPOINT}/User/get-user-by-nick-name?nickName=${payload}`,
        };
        return HttpClient.get(params);
    }
    public GetUser(payload:string):Promise<Profile>{
        const params: HttpRequestParamsType = {
            requiresToken: true,
            url: `${API_ENDPOINT}/Friend/get-user-by-id?id=${payload}`,
        };
        return HttpClient.get(params);
    }

    public EditProfile(payload:Profile):Promise<Profile>{
        const params: HttpRequestParamsType = {
            requiresToken: true,
            url: `${API_ENDPOINT}/profile`,
            payload: payload,
        };
        return HttpClient.post(params);
    }

    public ChangePassword(payload:String):Promise<Profile>{
        const params: HttpRequestParamsType = {
            requiresToken: true,
            url: `${API_ENDPOINT}/profile`,
            payload: payload,
        };
        return HttpClient.post(params);
    }

}

export default new User();
