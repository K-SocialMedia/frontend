import { API_ENDPOINT } from "@/types/api.type";
import { HttpRequestParamsType } from "@/types/http-client/http-client-params.type";
import { HttpClient } from "@/types/http-client/http-client";

class User {
    public SearchUserByNickName(payload: string): Promise<any> {
        const params: HttpRequestParamsType = {
            requiresToken: true,
            url: `${API_ENDPOINT}/User/get-user-by-nick-name?nickName=${payload}`,
        };
        return HttpClient.get(params);
    }
}

export default new User();
